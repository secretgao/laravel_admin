<?php
// resources/lang/zh-CN/validation.php

return [
    'required' => ' :attribute 为必填项。',
    'max' => [
        'numeric' => ' :attribute 不能大于 :max。',
        'file' => ' :attribute 不能大于 :max kb。',
        'string' => ' :attribute 不能超过 :max 个字符。',
        'array' => ' :attribute 不能超过 :max 个项。',
    ],
    'email' => ' :attribute 必须为合法的邮箱地址。',
    'unique' => ' :attribute 已存在，请使用其他 :attribute。',
    'confirmed' => '两次输入的 :attribute 不一致。',

];