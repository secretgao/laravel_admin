<?php

namespace App\Models;

use Dcat\Admin\Traits\HasDateTimeFormatter;

use Illuminate\Database\Eloquent\Model;

class MapMarkedLocation extends Model
{
	use HasDateTimeFormatter;
    protected $table = 'map_marked_location';

    protected $fillable = ['name','contact_information', 'pic_url', 'comment', 'lat', 'lng'];
    
}
