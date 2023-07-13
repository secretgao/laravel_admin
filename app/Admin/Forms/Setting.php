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
        $this->text('notice1')->default(admin_setting('notice1'));
        $this->text('notice2')->default(admin_setting('notice2'));
        $this->text('notice3')->default(admin_setting('notice3'));
        $this->text('ak')->default(admin_setting('ak'))->required();

    }

    /**
     * The data of the form.
     *
     * @return array
     */
    public function default()
    {
        return [
            'notice1'  => admin_setting('notice1'),
            'notice2'  => admin_setting('notice2'),
            'notice3'  => admin_setting('notice3'),
            'ak'  => admin_setting('ak'),
        ];
    }
}
