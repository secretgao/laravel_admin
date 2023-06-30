<?php

namespace App\Api\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Label;
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
            ->select(['id','name','contact_information','pic_url','comment','lat','lng','address','label_id'])
            ->get()->toArray();

        if ($data){
            $label_id_arr = array_unique(array_column($data,'label_id'));

            $label=Label::query()
                ->select(['id','img'])
                ->whereIn('id',$label_id_arr)
                ->get()->toArray();
            $label_arr = [];
            if ($label){
                foreach ($label as $ite){
                    $label_arr[$ite['id']] =  env('APP_URL').DIRECTORY_SEPARATOR.'storage'.DIRECTORY_SEPARATOR.$ite['img'];
                }
            }

            foreach ($data as $key=>$item){
                if ($item['pic_url']){
                    $pic_url_arr = explode(',',$item['pic_url']);

                    foreach ($pic_url_arr as $pk=>$pitem){
                        $data[$key]['display_pic_url'][$pk] = env('APP_URL').DIRECTORY_SEPARATOR.'storage'.DIRECTORY_SEPARATOR.$pitem;
                    }
                    unset($data[$key]['pic_url']);
                }
                $label_pic = '';
                if ($label_arr){
                    $label_pic= isset($label_arr[$item['label_id']]) ? $label_arr[$item['label_id']] : '';
                }
                $data[$key]['display_label_pic_url'] = $label_pic;
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
         *  label_id
         */
        $data = $request->input();

        $validate = \Illuminate\Support\Facades\Validator::make($request->all(), [
            'name' => 'required|string',
            'lat' => 'required|string',
            'lng' => 'required|string',
            'label_id' => 'required|string',
            'address' => 'required|string',
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
        $insert['label_id'] = intval($data['label_id']);
        $insert['address'] = $data['address'];
        $insert['created_at'] = date('Y-m-d H:i:s',time());
        $insert['updated_at'] = date('Y-m-d H:i:s',time());

        if (MapMarkedLocation::query()->insert($insert)){
            return JsonResponse::make()->success('地图标注成功！');
        } else {
            return JsonResponse::make()->error('地图标注失败！');
        }
    }

    /**
     * 更新操作
     * @param \Illuminate\Http\Request $request
     * @return JsonResponse
     * @author: gaoxinyu
     * @Date: 2023/6/27
     */
    public function edit(\Illuminate\Http\Request $request){

        $data = $request->input();
        $id = $data['id'];
        unset($data['id']);

        if (!MapMarkedLocation::query()->where('id',$id)->exists()){
            return JsonResponse::make()->error('数据不存在！');
        }
        $data['updated_at'] = date('Y-m-d H:i:s',time());
        if (MapMarkedLocation::query()->where('id',$id)->update($data)){
            return JsonResponse::make()->success('地图标注更新成功！');
        } else {
            return JsonResponse::make()->error('地图标注更新失败！');
        }
    }
}
