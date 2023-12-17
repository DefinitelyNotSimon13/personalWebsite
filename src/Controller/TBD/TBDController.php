<?php

namespace App\Controller\TBD;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TBDController extends AbstractController
{
    public const TBDROUTE = 'pages/tbd_page.html.twig';

    #[Route('/tbd-1', name: 'tbd_1.read.action', methods: ['GET'])]
    public function tbdReadAction1(): Response
    {
        return $this->render(self::TBDROUTE, [
            'TBDText' => 'TBD-1',
        ]);
    }

    #[Route('/tbd-2', name: 'tbd_2.read.action', methods: ['GET'])]
    public function tbdReadAction2(): Response
    {
        return $this->render(self::TBDROUTE, [
            'TBDText' => 'TBD-2',
        ]);
    }

    #[Route('/tbd-3', name: 'tbd_3.read.action', methods: ['GET'])]
    public function tbdReadAction3(): Response
    {
        return $this->render(self::TBDROUTE, [
            'TBDText' => 'TBD-3',
        ]);
    }

    #[Route('/tbd-4', name: 'tbd_4.read.action', methods: ['GET'])]
    public function tbdReadAction4(): Response
    {
        return $this->render(self::TBDROUTE, [
            'TBDText' => 'TBD-4',
        ]);
    }

    #[Route('/tbd-5', name: 'tbd_5.read.action', methods: ['GET'])]
    public function tbdReadAction5(): Response
    {
        return $this->render(self::TBDROUTE, [
            'TBDText' => 'TBD-5',
        ]);
    }

    #[Route('/tbd-6', name: 'tbd_6.read.action', methods: ['GET'])]
    public function tbdReadAction6(): Response
    {
        return $this->render(self::TBDROUTE, [
            'TBDText' => 'TBD-6',
        ]);
    }

    #[Route('/tbd-7', name: 'tbd_7.read.action', methods: ['GET'])]
    public function tbdReadAction7(): Response
    {
        return $this->render(self::TBDROUTE, [
            'TBDText' => 'TBD-7',
        ]);
    }
}
