<?php

namespace App\Controller\StartPage;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StartPageController extends AbstractController
{
    #[Route('/', name: 'start_page.read.action', methods: ['GET'])]
    public function startPageReadAction(): Response
    {

        return $this->render('pages/start_page.html.twig', [
            'test_variable' => 'Hello World!',
        ]);
    }
}

// Path: src/Controller/StartPage/StartPageController.php
