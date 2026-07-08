<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactFormMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public string $name,
        public string $email,
        public string $message,
    ) {
    }

    public function build()
    {
        return $this->subject('Nouveau message de contact')
            ->view('emails.contact')
            ->with([
                'name' => $this->name,
                'email' => $this->email,
                'message' => $this->message,
            ]);
    }
}
