<?php
use App\Http\Controllers\ContactController;

Route::post('/contact', [ContactController::class, 'store']);

Route::get('/debug-send-test-mail', function () {
    try {
        Mail::raw('Test depuis Render', function ($message) {
            $message->to('seraphcephas@gmail.com')->subject('Test SMTP');
        });
        return 'Mail envoyé avec succès (ou mis en queue)';
    } catch (\Exception $e) {
        return 'ERREUR: ' . $e->getMessage();
    }
});