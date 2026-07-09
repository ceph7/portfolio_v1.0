<?php

// namespace App\Http\Controllers;

// use App\Mail\AutoReplyMail;
// use App\Mail\ContactFormMail;
// use App\Models\Contact;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Mail;

// class ContactController extends Controller
// {
//     public function store(Request $request)
//     {
//         $data = $request->validate([
//             'name' => ['required', 'string', 'max:255'],
//             'email' => ['required', 'email', 'max:255'],
//             'message' => ['required', 'string', 'max:1000'],
//         ]);

//         $contact = Contact::create($data);

//         $recipient = env('CONTACT_FORM_TO', 'contact@votreportfolio.com');

//         Mail::to($recipient)->send(new ContactFormMail(
//             $data['name'],
//             $data['email'],
//             $data['message']
//         ));

//         Mail::to($data['email'])->send(new AutoReplyMail($data['name']));

//         return response()->json([
//             'message' => 'Message enregistré avec succès !',
//             'data' => $contact,
//         ], 201);
//     }
// }



use Illuminate\Support\Facades\Http;

Route::get('/debug-send-test-mail', function () {
    $response = Http::withToken(env('RESEND_API_KEY'))
        ->post('https://api.resend.com/emails', [
            'from' => env('MAIL_FROM_NAME') . ' <' . env('MAIL_FROM_ADDRESS') . '>',
            'to' => [env('CONTACT_FORM_TO')],
            'subject' => 'Test Resend depuis Render',
            'html' => '<p>Ceci est un test d\'envoi via Resend.</p>',
        ]);

    if ($response->successful()) {
        return response()->json(['status' => 'OK', 'data' => $response->json()]);
    }

    return response()->json(['status' => 'ERREUR', 'data' => $response->json()], $response->status());
});