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

    //生成的
    $router->resource('/advert',AdvertController::class);
    $router->resource('/map',MapMarkedLocationController::class);
    $router->resource('/label',LabelController::class);
});
