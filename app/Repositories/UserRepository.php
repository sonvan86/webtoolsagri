<?php

namespace App\Repositories;

use App\Models\User;
use App\Models\Organisation;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Hash;

class UserRepository extends BaseRepository
{

    const PAGE_SIZE = 20;
    /**
     * UserRepository constructor.
     *
     * @param User $model
     */
    public function __construct(User $model)
    {
        parent::__construct($model);
    }

    /**
     * @return Array
     */
    public function all($page, $keyword): Array
    {
        $pageInfo = $this->calculatePageInformation($page, $keyword);
        $skip = max(($pageInfo['page'] - 1) * self::PAGE_SIZE, 0);
        $data = $this->model
            ->where('users.name', 'like', "%$keyword%")
            ->join('organisations', 'organisations.id', '=', 'users.organisation')
            ->select('users.id', 'users.name', 'users.email', 'users.type', 
               'users.contract_started_at' ,'organisations.name as organisation')
            ->skip($skip)
            ->take(self::PAGE_SIZE)
            ->get();
    
        return [
            'totalPage' => $pageInfo['totalPage'],
            'page' => $pageInfo['page'],
            'data' => $data
        ];
    }

    /**
     * @return Array
     */
    public function add($data): Array
    {
        $organisation = Organisation::where('name', $data['organisation'])->first();
        User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'type' => $data['type'],
            'contract_started_at' => $data['contract_start'],
            'organisation' => $organisation['id'],
            'password' => Hash::make('password'),
        ]);
        
        $keyword = $data['keyword'];
        $pageInfo = $this->calculatePageInformation($data['page'],  $keyword);
        $skip = max(($pageInfo['page'] - 1) * self::PAGE_SIZE, 0);
        $result = $this->model
            ->where('users.name', 'like', "%$keyword%")
            ->join('organisations', 'organisations.id', '=', 'users.organisation')
            ->select('users.id', 'users.name', 'users.email', 'users.type', 
                'users.contract_started_at' ,'organisations.name as organisation')
            ->skip($skip)
            ->take(self::PAGE_SIZE)
            ->get();
        
        return [
            'totalPage' => $pageInfo['totalPage'],
            'page' => $pageInfo['page'],
            'data' => $result
        ];
    }
    

    private function calculatePageInformation($page, $keyword)
    {
        $total = $this->model
            ->where('name', 'like', "%$keyword%")
            ->get()
            ->count();
        $totalPage = ceil($total / self::PAGE_SIZE);
        $page = min($page, $totalPage);

        return [
            'page' => $page,
            'totalPage' => $totalPage
        ];
    }
}