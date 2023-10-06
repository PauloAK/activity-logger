<?php

use App\Http\Controllers\Api\ActivityController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->prefix('v1')->group( function() {

    Route::prefix('activities')->group(function () {
        Route::post('/', [ActivityController::class, 'store']);
    });

});
