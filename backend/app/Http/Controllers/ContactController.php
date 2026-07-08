<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller{

public function store(Request $request){

    $data = $request->validate([
        'name' => ['required', 'string', 'max:255'],
        'email' => ['required', 'email', 'max:255'],
        'message' => ['required', 'string', 'max:1000'],
    ]);

    return response()->json([
        
    'message' => 'Message reçu avec succès !',
    'data' => $data
    
    ],201);

    }
}


