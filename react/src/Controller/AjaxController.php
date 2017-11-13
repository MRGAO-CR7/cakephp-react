<?php

namespace App\Controller;

class AjaxController extends AppController
{
    private $validModels = [
        'trade'
    ];

    public function initialize()
    {
        parent::initialize();
        // $this->loadComponent('Redis');
        // $this->loadComponent('RequestHandler');
    }



    public function react()
    {
    }


}
