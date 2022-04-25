<?php

namespace App\Repositories;

use App\Models\Organisation;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Hash;

class OrganisationRepository extends BaseRepository
{
    const PAGE_SIZE = 100;
    
    /**
     * OrganisationRepository constructor.
     *
     * @param Organisation $model
     */
    public function __construct(Organisation $model)
    {
        parent::__construct($model);
    }

    /**
     * @return Array
     */
    public function all()
    {
        return $this->model
            ->select('id', 'name', 'created_at')      
            ->take(self::PAGE_SIZE)
            ->orderBy('id', 'DESC')
            ->get();
    }

    /**
     * @return Array
     */
    public function add($data)
    {
        Organisation::create([
            'name' => $data['name'],
        ]);
        
        return $this->model
          ->select('id', 'name', 'created_at')      
          ->take(self::PAGE_SIZE)
          ->orderBy('id', 'DESC')
          ->get();
    }
}