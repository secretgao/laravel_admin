<?php

namespace App\Api\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Label;
use Dcat\Admin\Http\JsonResponse;


class LabelController extends Controller
{

    /**
     * 返回已经标注的地图位置
     * @return JsonResponse
     * @author: gaoxinyu
     * @Date: 2023/6/15
     */
    public function index()
    {
        $data=Label::query()
            ->select(['id','name','img'])
            ->get()->toArray();

        if ($data){
            foreach ($data as $key=>$item){
               $data[$key]['display_img'] = env('APP_URL').DIRECTORY_SEPARATOR.'storage'.DIRECTORY_SEPARATOR.$item['img'];
               unset($data[$key]['img']);
            }
        }

        return JsonResponse::make()->data(['list'=>$data])->success('成功！');
    }
}
