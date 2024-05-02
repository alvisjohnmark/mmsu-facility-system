<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin;

class AdminFacility extends Controller
{
    
    public function getAdminName()
    {
        $adminId = Auth::id(); // Assuming you're using authentication and can get the admin's ID

        if ($adminId) {
            $admin = Admin::find($adminId);
            
            if ($admin) {
                return response()->json(['adminName' => $admin->name]);
            } else {
                return response()->json(['error' => 'Admin not found'], 404);
            }
        } else {
            return response()->json(['error' => 'User not authenticated'], 401);
        }
    }
}
