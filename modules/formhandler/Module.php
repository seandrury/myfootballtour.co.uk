<?php
namespace modules\formhandler;

use Craft;
use craft\mail\Message;
use craft\helpers\UrlHelper;
use craft\elements\Entry;

class Module extends \yii\base\Module
{
    public function init()
    {
        parent::init();
        Craft::info('MyFormModule module loaded', __METHOD__);
    }

    public function sendFormEmail($formData)
    {
        // Form data passed into the module, you can manipulate or validate it here
        $toEmail = "sean_drury@hotmail.co.uk";  // Your email here
        $subject = "New Form Submission";

        // Build the email content
        $body = "New form submission:\n\n";
        foreach ($formData as $key => $value) {
            $body .= ucfirst($key) . ": " . $value . "\n";
        }

        // Send the email using Craft's mailer
        $message = new Message();
        $message->setTo($toEmail)
                ->setSubject($subject)
                ->setTextBody($body);

        // Check if the message was sent successfully
        if (Craft::$app->getMailer()->send($message)) {
            return true;
        }

        return false;
    }
}