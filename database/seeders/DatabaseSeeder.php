<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Creates default user
        $user = User::create([
            'name' => 'Admin User',
            'email' => 'admin@admin.com',
            'api_token' => Str::random(60),
            'password' => Hash::make('admin123'),
        ]);
    }
}
