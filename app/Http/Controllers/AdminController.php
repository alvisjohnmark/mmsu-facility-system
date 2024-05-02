<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

use App\Models\Admin;

class AdminController extends Controller
{
    
    public function showLoginForm()
    {
        return view('admin.login');
    }

    public function login(Request $request)
    {
        // Validate the request data
        $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);

        $credentials = $request->only('username', 'password');
        if (Auth::guard('admin')->attempt($credentials)) {
            // Authentication passed
            return redirect()->intended('/admin/admindashboard');
            
        }

        // Authentication failed
        return redirect()->back()->withInput($request->only('username'));
    }

    public function logout()
    {
        Auth::guard('admin')->logout();
        return redirect('/admin/login');
    }

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
