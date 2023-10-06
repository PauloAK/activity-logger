<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ActivityUIController extends Controller
{
    public function index()
    {
        $paginatedActivities = Auth::user()->activities()->orderBy('id', 'DESC')->paginate(10);

        return Inertia::render('Dashboard', [
            'activities' => $paginatedActivities
        ]);
    }
}
