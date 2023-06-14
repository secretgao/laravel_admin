<?php

namespace App\Api\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Advert;
use Dcat\Admin\Admin\Models;
use Dcat\Admin\Http\JsonResponse;

class AdController extends Controller
{
    public function index()
    {
        $list= [];
        $data = Advert::query()
            ->select(['name','url','sort','img_url'])
            ->where(['state'=>1])->orderby('sort','desc')->get();

        if ($data){
            $list= $data->toArray();
            foreach ($list as $key=>$item){
                $list[$key]['display_img'] = env('APP_URL').DIRECTORY_SEPARATOR.'storage'.DIRECTORY_SEPARATOR.$item['img_url'];
                unset($list[$key]['img_url']);
            }
        }

        return JsonResponse::make()->data(['list'=>$list])->success('成功！');
    }


    public function test(){

        $pwd = 'admin';

        $hs = bcrypt($pwd);

        var_dump($hs);
        exit();
    }
}
