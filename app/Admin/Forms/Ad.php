<?php

namespace App\Admin\Forms;

use Dcat\Admin\Widgets\Form;

class Ad extends Form
{
    /**
     * Handle the form request.
     *
     * @param array $input
     *
     * @return mixed
     */
    public function handle(array $input)
    {
         dump($input);exit();

        // return $this->response()->error('Your error message.');

        return $this
				->response()
				->success('Processed successfully.')
				->refresh();
    }

    /**
     * Build a form here.
     */
    public function form()
    {
        $this->text('name')->required();
        $this->text('sort')->default(1)->help('数值越大，排序越靠前');
        $this->image('ad')->accept('jpg,png,jpeg')
            ->required()
            ->autoUpload()
            ->maxSize(12*1024)
            ->help('大小不要超过12M');
    }

    /**
     * The data of the form.
     *
     * @return array
     */
    public function default()
    {
        return [
            'name'  => '',
            'ad' => '',
        ];
    }
}
