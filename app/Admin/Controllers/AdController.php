<?php

namespace App\Admin\Controllers;


use Dcat\Admin\Grid;
use Dcat\Admin\Show;
use App\Admin\Forms\Notice;
use Dcat\Admin\Widgets\Card;
use Dcat\Admin\Http\Controllers\AdminController;
use Dcat\Admin\Layout\Content;

class AdController extends AdminController
{
    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        return Grid::make(new Notice(), function (Grid $grid) {
            $grid->column('id')->sortable();
            $grid->column('notice');
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
        return Show::make($id, new Notice(), function (Show $show) {
            $show->field('id');
            $show->field('notice');
            $show->field('created_at');
            $show->field('updated_at');
        });
    }




  /**
   * 添加广告
   * @author: gaoxinyu
   * @Date: 2023/6/14
   */
    public function add(Content $content){

         return $content
             ->title('广告')
             ->description('添加广告')
             ->body(new Card(new Notice()));
    }

    /**
     * 广告列表
     * @author: gaoxinyu
     * @Date: 2023/6/14
     */
    public function index(Content $content){

        return $content
            ->title('广告')
            ->description('广告列表');
    }
}
