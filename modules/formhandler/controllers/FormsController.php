<?php

namespace modules\formhandler\controllers;

use Craft;
use craft\web\Controller;
use yii\web\Response;

use modules\formhandler\Module;

class FormsController extends Controller
{
    public bool|int $allowAnonymous = false;

    public function actionSendForm(): Response
    {
        $this->requirePostRequest();

        // Get the form data
        $formData = Craft::$app->getRequest()->getBodyParams();

        // Call the module's method to send the email
        $module = Craft::$app->getModule('myformmodule');
        if ($module && $module->sendFormEmail($formData)) {
            // Redirect or display a success message
            Craft::$app->getSession()->setFlash('success', 'Form submitted successfully!');
            return $this->redirect(UrlHelper::siteUrl('thank-you'));
        }

        // Handle failure
        Craft::$app->getSession()->setFlash('error', 'There was an issue with your submission.');
        return $this->redirect(UrlHelper::siteUrl('contact-us'));
    }
}