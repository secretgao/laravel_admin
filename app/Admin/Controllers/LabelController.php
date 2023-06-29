<?php

namespace App\Admin\Controllers;

use App\Admin\Repositories\Label;
use Dcat\Admin\Form;
use Dcat\Admin\Grid;
use Dcat\Admin\Show;
use Dcat\Admin\Http\Controllers\AdminController;

class LabelController extends AdminController
{
    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        return Grid::make(new Label(), function (Grid $grid) {
            $grid->column('id')->sortable();
            $grid->column('name');
            $grid->column('img')->image('','32','32');
            $grid->column('created_at');
        
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
        return Show::make($id, new Label(), function (Show $show) {
            $show->field('id');
            $show->field('name');
            $show->field('img')->image('','32','32');
            $show->field('created_at');
        });
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        return Form::make(new Label(), function (Form $form) {
            $form->display('id');
            $form->text('name')->required();
            $form->image('img')
               // ->dimensions(['min_width' => 32, 'max_width' => 32])
                ->accept('jpg,png,jpeg')
                ->required()
                ->uniqueName()
                ->autoUpload()
                ->maxSize(12*1024)
                ->help('大小不要超过2M,上传宽度为32*32像素之间的图片');
          //  $form->text('created_at');
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
