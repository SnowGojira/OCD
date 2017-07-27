<?php
require_once "jssdk1.php";
$jssdk = new JSSDK("wxc6d64ef0eca24344", "675d488f128d9d6ab6255910dd60ca95",'http://weixin.assemblemedia.cn/show-case/ocd/index.html');
$signPackage = $jssdk->GetSignPackage();
echo json_encode($signPackage);
?>