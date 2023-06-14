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

    $router->get('/', 'HomeController@index');
    //网站设置
    $router->get('/setting', 'SettingController@index');

    //广告
    $router->get('/ad/add', 'AdController@add');
    $router->get('/ad/index', 'AdController@index');


    //生成的
    $router->resource('/advert',AdvertController::class);
});