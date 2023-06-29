<?php

use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;
use Dcat\Admin\Admin;

Admin::routes();

Route::group([
    'prefix'     => config('admin.route.prefix'),
    'namespace'  => config('admin.route.namespace'),
    'middleware' => config('admin.route.middleware'),
], function (Router $router) {

    $router->post('/common/upload','CommonController@upload');
    $router->get('/', 'HomeController@index');
    //公告
    $router->get('/notice', 'NoticeController@index');
    //获取ak
    $router->get('/common/getak', 'CommonController@getAk');
    //广告
    $router->get('/ad/list','AdController@index');
    $router->get('/ad/test','AdController@test');

    //地图
    $router->get('/map/list','MapController@index');
    $router->post('/map/add','MapController@add');
    $router->post('/map/edit','MapController@edit');

    //标注图标
    $router->get('/label','LabelController@index');
});
