<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ActivityRequest;
use Exception;

class ActivityController extends Controller
{
    public function store(ActivityRequest $request)
    {
        try {
            $request->user()->activities()->create([
                'device_id' => $request->input('device_id')
            ]);

            return response()->json([
                'message' => 'Created successfully!'
            ], 201);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'An internal error occured while trying to create your activity!'
            ], 500);
        }
    }
}
