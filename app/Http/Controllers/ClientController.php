<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;
use Illuminate\Support\Facades\Session;

class ClientController extends Controller
{
   
     public function saveClient(Request $request)
     {

         $client = new Client();
         $client->fname = $request->fname;
         $client->mname = $request->mname;
         $client->lname = $request->lname;
         $client->address = $request->address;
         $client->email = $request->email;
         $client->phone = $request->phone;
         $client->mmsu_affiliated = $request->mmsu_affiliated;
         $client->university_id = $request->university_id; 
         $client->college = $request->college;
         $client->department = $request->department;
         $client->officeAgency = $request->officeAgency;
 
         $client->save();

         Session::put('client_id', $client['id']);
 
         return response()->json(['message' => 'Client created successfully', 'client' => $client], 201);
     }
}
