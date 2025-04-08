return [
    'transportType' => craft\mail\transportadapters\Smtp::class,
    'transportSettings' => [
        'host' => getenv('SMTP_HOST'),
        'port' => getenv('SMTP_PORT'),
        'useAuthentication' => true,
        'username' => getenv('SMTP_USERNAME'),
        'password' => getenv('SMTP_PASSWORD'),
        'encryptionMethod' => 'tls',
    ],
];