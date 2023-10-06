<?php

namespace PauloAK\StandaloneLoggerClient;

require_once __DIR__ . '/../vendor/autoload.php';

use Dotenv\Dotenv;
use Exception;
use GuzzleHttp\Client;

class Logger {
    const API_SERVER = "http://127.0.0.1";

    public function __construct(
        private string $apiToken,
        private string $deviceId,
        private int $secondsInterval = 60
    ) {
        if ($this->secondsInterval <= 0) {
            throw new Exception("Your interval needs to be greater than zero.");
        }
    }

    public function run()
    {
        $client = new Client([
            'http_errors' => false
        ]);

        $response = $client->post(self::API_SERVER . "/api/v1/activities", [
            'body' => json_encode([
                'device_id' => $this->deviceId,
            ]),
            'headers' => [
                'Accept' => 'application/json',
                'Content-Type' => 'application/json',
                'Authorization' => "Bearer " . $this->apiToken
            ]
        ]);

        if ($response->getStatusCode() != 201) {
            if ($response->getStatusCode() == 401)  {
                throw new Exception("Invalid API Token, request unauthorized!");
            } else {
                throw new Exception("Error while trying to connect to the api server! Status code: " . $response->getStatusCode());
            }
        }

        sleep($this->secondsInterval);

        return $this->run();
    }
}

$dotenv = Dotenv::createImmutable(__DIR__ . "/..");
$dotenv->load();

foreach (['API_TOKEN', 'DEVICE_ID', 'LOG_INTERVAL'] as $var) {
    if (!$_ENV[$var]) {
        throw new Exception("You need to specify the {$var} in your .env file");
    }
}

try {
    $logger = new Logger(
        $_ENV['API_TOKEN'],
        $_ENV['DEVICE_ID'],
        $_ENV['LOG_INTERVAL']
    );

    $logger->run();
} catch (Exception $e) {
    print("An error occured: " . $e->getMessage());
}
