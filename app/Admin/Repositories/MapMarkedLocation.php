<?php

namespace App\Admin\Repositories;

use App\Models\MapMarkedLocation as Model;
use Dcat\Admin\Repositories\EloquentRepository;

class MapMarkedLocation extends EloquentRepository
{
    /**
     * Model.
     *
     * @var string
     */
    protected $eloquentClass = Model::class;
}
