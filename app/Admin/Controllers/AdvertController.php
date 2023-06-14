<?php

namespace App\Admin\Controllers;

use App\Admin\Repositories\Advert;
use Dcat\Admin\Form;
use Dcat\Admin\Grid;
use Dcat\Admin\Show;
use Dcat\Admin\Http\Controllers\AdminController;

class AdvertController extends AdminController
{
    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        return Grid::make(new Advert(), function (Grid $grid) {
            $grid->column('id')->sortable();
            $grid->column('name');
            $grid->column('img_url')->image('','80','80');
            $grid->column('url');
            $grid->column('sort');

            $grid->column('state')->if(function ($column){
                $state = $column->getValue();
                return $state == 1 ?   $column->display('上架'): $column->display('下架');
            });
            $grid->column('created_at');
            $grid->column('updated_at')->sortable();

            $grid->filter(function (Grid\Filter $filter) {
                $filter->equal('id');

            });
        });
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     *
     * @return Show
     */
    protected function detail($id)
    {
        return Show::make($id, new Advert(), function (Show $show) {
            $show->field('id');
            $show->field('name');
            $show->field('img_url')->image('','80','80');
            $show->field('url');
            $show->field('sort');
            $show->field('state')->as(function ($show){
                return $show == 1 ?   '上架': '下架';
            });
            $show->field('created_at');
            $show->field('updated_at');
        });
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        return Form::make(new Advert(), function (Form $form) {
            $form->display('id');
            $form->text('name');
            $form->image('img_url')
                //->dimensions(['min_width' => 100, 'max_width' => 300]) //// 上传宽度为100-300像素之间的图片
                ->accept('jpg,png,jpeg')
                ->required()->uniqueName()
                ->autoUpload()
                ->maxSize(12*1024)
                ->help('大小不要超过12M,上传宽度为100-300像素之间的图片')
                ->saving(function ($value) use ($form){
                    if ($form->isEditing() && ! $value) {
                        // 编辑页面，删除图片逻辑
                        Image::destroy($form->model()->img_url);

                        return;
                    }
                });
            $form->text('url')->required()->help('广告跳转链接');
            $form->text('sort')->help('数值越大，排序越靠前');
            $form->select('state','状态')
                ->options([0=>'下架',1=>'上架']);
            $form->display('created_at');
            $form->display('updated_at');
        });
    }
}
