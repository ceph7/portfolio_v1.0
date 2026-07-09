<?php

namespace App\Http\Controllers;

use App\Mail\AutoReplyMail;
use App\Mail\ContactFormMail;
use App\Models\Contact;
use App\Services\BrevoMailer;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request, BrevoMailer $mailer)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'message' => ['required', 'string', 'max:1000'],
        ]);

        $contact = Contact::create($data);

        $recipient = env('CONTACT_FORM_TO', 'contact@votreportfolio.com');

        // Rendu HTML des Mailables existants, envoyé via l'API Brevo
        $contactMail = new ContactFormMail($data['name'], $data['email'], $data['message']);
        $mailer->send($recipient, 'Portfolio', 'MESSAGE DE VOTRE PORTFOLIO', $contactMail->render());

        $autoReply = new AutoReplyMail($data['name']);
        $mailer->send($data['email'], $data['name'], 'Merci pour votre message', $autoReply->render());

        return response()->json([
            'message' => 'Message enregistré avec succès !',
            'data' => $contact,
        ], 201);
    }
}