
php artisan storage:link
报错
找到 php.ini 文件，在 disable_functions 配置中删掉 symlink 函数，保存之后重启 php 即可。

ssh -i "thaixmap_keypair.pem" ubuntu@ec2-54-255-69-227.ap-southeast-1.compute.amazonaws.com
