<?php

namespace App\Admin\Controllers;

use App\Admin\Forms\Setting;
use App\Admin\Metrics\Examples;
use App\Http\Controllers\Controller;
use Dcat\Admin\Http\Controllers\Dashboard;
use Dcat\Admin\Layout\Column;
use Dcat\Admin\Layout\Content;
use Dcat\Admin\Layout\Row;
use Dcat\Admin\Widgets\Card;
class SettingController extends Controller
{
    public function index(Content $content)
    {

        $d = date('Y-m-d H:i:s');
        return $content
            ->header('网站设置')
            ->description('')
            ->body(new Card(new Setting()) );

    }
}
