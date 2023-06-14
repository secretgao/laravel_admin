<?php

namespace App\Admin\Forms;

use Dcat\Admin\Widgets\Form;

class Setting extends Form
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
        // dump($input);

        admin_setting($input);
        // return $this->response()->error('Your error message.');

        return $this
				->response()
				->success('设置成功')
				->refresh();
    }

    /**
     * Build a form here.
     */
    public function form()
    {
        $this->text('notice')->default(admin_setting('notice'))->required();

    }

    /**
     * The data of the form.
     *
     * @return array
     */
    public function default()
    {
        return [
            'notice'  => admin_setting('notice'),

        ];
    }
}
