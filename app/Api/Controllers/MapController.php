<?php

namespace App\Api\Controllers;

use App\Http\Controllers\Controller;
use App\Models\MapMarkedLocation;
use App\Models\Notice;
use Dcat\Admin\Http\JsonResponse;


class MapController extends Controller
{

    /**
     * 返回已经标注的地图位置
     * @return JsonResponse
     * @author: gaoxinyu
     * @Date: 2023/6/15
     */
    public function index()
    {
        $data=MapMarkedLocation::query()
            ->select(['name','contact_information','pic_url','comment','lat','lng'])
            ->get()->toArray();
        if ($data){
            foreach ($data as $key=>$item){
                if ($item['pic_url']){
                    $data[$key]['display_pic_url'] = env('APP_URL').DIRECTORY_SEPARATOR.'storage'.DIRECTORY_SEPARATOR.$item['pic_url'];
                    unset($data[$key]['pic_url']);
                }
            }
        }

        return JsonResponse::make()->data(['list'=>$data])->success('成功！');
    }

    /**
     * 添加地图标注位置
     * @author: gaoxinyu
     * @Date: 2023/6/15
     */
    public function add(\Illuminate\Http\Request $request){

        /**
         * name
         * contact_information
         * 	pic_url
         * 	comment
         * 	lat
         * 	lng
         */
        $data = $request->input();

        /*
        if (empty($data['name']) || empty($data['lat']) || empty($data['lng'])){
            return JsonResponse::make()->error('请求参数错误');
        }
        */

        $validate = \Illuminate\Support\Facades\Validator::make($request->all(), [
            'name' => 'required|string',
            'lat' => 'required|string',
            'lng' => 'required|string',
        ]);
        if($validate->fails())
        {
            return JsonResponse::make()->error($validate->errors()->first());
        }

        $insert['name'] = $data['name'];
        $insert['contact_information'] = $data['contact_information'] ?? "";
        $insert['pic_url'] = $data['pic_url'] ?? "";
        $insert['comment'] = $data['comment'] ?? "";
        $insert['lat'] = $data['lat'];
        $insert['lng'] = $data['lng'];

        if (MapMarkedLocation::query()->create($insert)){
            return JsonResponse::make()->success('地图标注成功！');
        } else {
            return JsonResponse::make()->error('地图标注失败！');
        }

    }
}
