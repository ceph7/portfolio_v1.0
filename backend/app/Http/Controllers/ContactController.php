<?php

namespace App\Http\Controllers;

use App\Mail\ContactFormMail;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'message' => ['required', 'string', 'max:1000'],
        ]);

        $contact = Contact::create($data);

        $recipient = env('CONTACT_FORM_TO', 'contact@votreportfolio.com');

        Mail::to($recipient)->send(new ContactFormMail(
            $data['name'],
            $data['email'],
            $data['message']
        ));

        return response()->json([
            'message' => 'Message enregistré avec succès !',
            'data' => $contact,
        ], 201);
    }
}


