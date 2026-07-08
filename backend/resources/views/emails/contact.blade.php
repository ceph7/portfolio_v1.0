<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Nouveau message de contact</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937;">
    <div style="max-width: 640px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px;">
        <h2 style="color: #111827;">Nouveau message depuis votre portfolio</h2>
        <p><strong>Nom :</strong> {{ $name }}</p>
        <p><strong>Email :</strong> {{ $email }}</p>
        <p><strong>Message :</strong></p>
        <p style="background: #f8fafc; padding: 12px; border-radius: 8px;">{{ $body }}</p>
        <p style="margin-top: 16px;">Vous pouvez répondre directement à cet e-mail.</p>
    </div>
</body>
</html>
