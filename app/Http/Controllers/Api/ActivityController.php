<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    public function store(Request $request)
    {
        try {
            // Just store the activity for the user,
            // We just need the timestamps for now,
            // No data aditional data is stored yet
            $request->user()->activities()->create([]);

            return $this->json([
                'message' => 'Created successfully!'
            ], 201);
        } catch (Exception $e) {
            return $this->json([
                'message' => 'An internal error occured while trying to create your activity!'
            ], 500);
        }
    }
}
