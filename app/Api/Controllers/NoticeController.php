<?php

namespace App\Api\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Notice;
use Dcat\Admin\Admin;
use Dcat\Admin\Http\JsonResponse;

class NoticeController extends Controller
{

    public function index()
    {
        $msg = '暂无公告';
        if (admin_setting('notice')){
            $msg = admin_setting('notice');
        }
        return JsonResponse::make()->data(['notice'=>$msg])->success('成功！');
    }
}
