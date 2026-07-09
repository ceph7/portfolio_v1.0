<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/debug-send-test-mail', function () {
    try {
        Mail::raw('Test depuis Render - ' . now(), function ($message) {
            $message->to('seraphcephas@gmail.com')->subject('Test SMTP Render');
        });
        return response()->json(['status' => 'OK', 'message' => 'Mail envoyé sans erreur']);
    } catch (\Exception $e) {
        return response()->json(['status' => 'ERREUR', 'message' => $e->getMessage()]);
    }
});