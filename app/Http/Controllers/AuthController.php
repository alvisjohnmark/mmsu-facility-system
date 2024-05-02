<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('username', 'password');

        if(User::where('username', $credentials['username'])->exists()){
            $user = User::where('username', $credentials['username'])->first();
            if(Hash::check($credentials['password'], $user->password) && $user->username===$credentials['username']){
                Auth::login($user);
                return 1;
            }else{
                return 0;
            }
        }else{
            return 0;
        }

    }

    public function checkUser(){
        return Auth::check();
    }
    public function logout(){

        Auth::logout();
        return 1;
    }

    public function getAdminId()
    {
        $adminId = Auth::id(); // Retrieve the authenticated admin's ID
        return response()->json(['admin_id' => $adminId]);
    }
}
