<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AutoReplyMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public function __construct(
        public string $name,
    ) {
    }

    public function build()
    {
        return $this->subject('Merci pour votre message')
            ->view('emails.auto_reply')
            ->with([
                'name' => $this->name,
            ]);
    }
}
