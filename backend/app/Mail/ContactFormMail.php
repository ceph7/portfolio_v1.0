<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactFormMail extends Mailable implements ShouldQueue
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
        return $this->subject('MESSAGE DE VOTRE PORTFOLIO')
            ->view('emails.contact')
            ->with([
                'name' => $this->name,
                'email' => $this->email,
                'body' => $this->message,
            ]);
    }
}
