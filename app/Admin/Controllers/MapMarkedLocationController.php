<?php

namespace App\Admin\Controllers;

use App\Admin\Repositories\MapMarkedLocation;
use Dcat\Admin\Form;
use Dcat\Admin\Grid;
use Dcat\Admin\Show;
use Dcat\Admin\Http\Controllers\AdminController;

class MapMarkedLocationController extends AdminController
{
    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        return Grid::make(new MapMarkedLocation(), function (Grid $grid) {
            $grid->column('id')->sortable();
            $grid->column('name');
            $grid->column('address');
            $grid->column('contact_information');
            $grid->column('pic_url');
            $grid->column('comment');
            $grid->column('lat');
            $grid->column('lng');
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
        return Show::make($id, new MapMarkedLocation(), function (Show $show) {
            $show->field('id');
            $show->field('name');
            $show->field('contact_information');
            $show->field('pic_url');
            $show->field('comment');
            $show->field('lat');
            $show->field('lng');
            $show->field('address');
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
        return Form::make(new MapMarkedLocation(), function (Form $form) {
            $form->display('id');
            $form->text('name');
            $form->text('contact_information');
            $form->text('pic_url');
            $form->text('comment');
            $form->text('lat');
            $form->text('lng');
            $form->text('address');
            $form->display('created_at');
            $form->display('updated_at');
            $form->footer(function ($footer) {
                // 去掉`查看`checkbox
                $footer->disableViewCheck();
                // 去掉`继续编辑`checkbox
                $footer->disableEditingCheck();
                // 去掉`继续创建`checkbox
                $footer->disableCreatingCheck();
            });
        });
    }
}
