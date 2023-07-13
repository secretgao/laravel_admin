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
        $notice1 = $notice2 = $notice3 = '';
        if (admin_setting('notice1')){
            $notice1 = admin_setting('notice1');
        }
        if (admin_setting('notice2')){
            $notice2 = admin_setting('notice2');
        }
        if (admin_setting('notice3')){
            $notice3 = admin_setting('notice3');
        }
        $result['notice1'] = $notice1;
        $result['notice2'] = $notice2;
        $result['notice3'] = $notice3;
        return JsonResponse::make()->data($result)->success('成功！');
    }
}
