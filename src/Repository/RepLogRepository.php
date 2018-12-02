<?php

namespace App\Repository;

use App\Entity\RepLog;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\ManagerRegistry;

class RepLogRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, $entityClass)
    {
        parent::__construct($registry, RepLog::class);
    }

    public function getLeaderboardDetails()
    {
        return $this->createQueryBuilder('rl')
            ->select('IDENTITY(rl.user) as user_id, SUM(rl.totalWeightLifted) as weightSum')
            ->groupBy('rl.user')
            ->orderBy('weightSum', 'DESC')
            ->getQuery()
            ->execute()
        ;
    }
}
