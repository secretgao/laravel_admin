<?php

namespace App\Models;

use Dcat\Admin\Traits\HasDateTimeFormatter;

use Illuminate\Database\Eloquent\Model;

class Label extends Model
{
	use HasDateTimeFormatter;
    protected $table = 'label';
    public $timestamps = false;

}
