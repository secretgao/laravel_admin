<?php

namespace App\Api\Controllers;


use App\Http\Controllers\Controller;
use Dcat\Admin\Http\JsonResponse;

class CommonController extends Controller
{
    /**
     * 上传图片
     * @author: gaoxinyu
     * @Date: 2023/6/14
     */
     public function upload(){

        if (empty($_FILES)){
            return JsonResponse::make()->error('请选择上传图片');
        }
        //获取项目路径
        $basic_path = storage_path();
        //拼接上传路径
        $upload_path = $basic_path.DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR.'public'.DIRECTORY_SEPARATOR;
        //目录不存在创建
        if (!is_dir($upload_path)){
            mkdir($upload_path,'0777',true);
        }

        if ($_FILES["file"]["error"] > 0) {
             return JsonResponse::make()->error($_FILES["file"]["error"]);
        }
        //1024*5
        if ($_FILES['file']['size'] > 5120){
            return JsonResponse::make()->error('图片大小不能超过5M');
        }

        if (!in_array($_FILES['file']['type'],['image/jpg', 'image/jpeg', 'image/png'])){
            return JsonResponse::make()->error('图片类型只支持jpg,jpeg,png');
        }

        if (!getimagesize($_FILES['file']['tmp_name'])){
            return JsonResponse::make()->error('图片类型不合法');
        }

        $info = pathinfo($_FILES['file']['name']);

        $ext = $info['extension'];
        $filename = 'api_'.date('YmdHis').'.'.$ext;

        $filepath = 'images'.DIRECTORY_SEPARATOR.$filename;
        $destination =  $upload_path.DIRECTORY_SEPARATOR.$filepath;
        if (move_uploaded_file($_FILES['file']['tmp_name'],$destination)){
            $display_path= env('APP_URL').DIRECTORY_SEPARATOR.'storage'.DIRECTORY_SEPARATOR.$filepath;
            return JsonResponse::make()->data(['path'=>$filepath,'display_path'=>$display_path])->success('上传图片成功');
        } else {
            return JsonResponse::make()->error('上传图片失败');
        }
         //return JsonResponse::make()->error('请选择上传图片');

     }

     public function getAK(){
         $ak = '';
         if (admin_setting('ak')){
             $ak = admin_setting('ak');
         }
         return JsonResponse::make()->data(['ak'=>$ak])->success('成功！');
     }
}
