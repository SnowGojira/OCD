/**
 * Created by hakuh on 2017/7/29.
 */
var text_gif='<div class="textAnim"><img src="img/pageStart/text.gif"></div>';


var str_light='<p class="diagnosis">你的强迫症指数<span>%data%</span>分<br>是特新型手机病毒强迫症的早期患者<br>好棒棒，像你这样的人才已经不多了~</p>';
var str_medium='<p class="diagnosis">你的强迫症指数<span>%data%</span>分<br>是特新型手机病毒强迫症的中期患者<br>少低头，否则皇冠会掉、吃枣药丸</p>';
var str_heavy='<p class="diagnosis">你的强迫症指数<span>%data%</span>分<br>是特新型手机病毒强迫症的晚期患者<br>治愈的可能性很小，请尽量保持心情愉快</p>';
var str_survive='<p class="diagnosis">你的强迫症指数<span>%data%</span>分<br>特新型手机病毒强迫症的免疫者<br>天啊，你还是人吗？</p>';

var startBGUrl='http://assemble-10061151.cossh.myqcloud.com/ocd/grunt1.png';
var gifc='http://assemble-10061151.cossh.myqcloud.com/ocd/gifc-1.gif';
var gif1='http://assemble-10061151.cossh.myqcloud.com/ocd/GIF1.gif';
var gif2='http://assemble-10061151.cossh.myqcloud.com/ocd/GIF2.gif';
var gif3='http://assemble-10061151.cossh.myqcloud.com/ocd/GIF3-2.gif';
var gif4='http://assemble-10061151.cossh.myqcloud.com/ocd/GIF4.gif';
var gif5='http://assemble-10061151.cossh.myqcloud.com/ocd/GIF5.gif';
var gif6='http://assemble-10061151.cossh.myqcloud.com/ocd/GIF6.gif';
var gif7='http://assemble-10061151.cossh.myqcloud.com/ocd/GIF7.gif';
var gif8='';

var fontUrl='http://assemble-10061151.cossh.myqcloud.com/ocd/simpfy.ttf';
var grunt1Url='http://assemble-10061151.cossh.myqcloud.com/ocd/grunt1.png';
var grunt2Url='http://assemble-10061151.cossh.myqcloud.com/ocd/grunt2-2.png';
// var grunt2Url='../img/grunt2.png';
var grunt3Url='http://assemble-10061151.cossh.myqcloud.com/ocd/grunt3.png';
var grunt4Url='http://assemble-10061151.cossh.myqcloud.com/ocd/grunt3.png';
var grunt5Url='http://assemble-10061151.cossh.myqcloud.com/ocd/grunt5.png';
var grunt6Url='http://assemble-10061151.cossh.myqcloud.com/ocd/grunt3.png';
var grunt7Url='http://assemble-10061151.cossh.myqcloud.com/ocd/grunt6.png';
var grunt8Url='http://assemble-10061151.cossh.myqcloud.com/ocd/8-4.png';

var listObj=[];
// var stage1,container1;
var grunt1={
    // canvasId:"messageCanvas",
    canvasId:"animCanvas",
    ox:549,
    oy:754,
    fx:400,
    fy:550,
    posrx:0.175,
    posry:0.025,
    count:118,
    src:grunt1Url,
    rates:15
};

listObj.push(grunt1);

// var stage2,container2;
var grunt2={
    canvasId:"animCanvas",
    // canvasId:"foodCanvas",
    ox:549,
    oy:761,
    fx:400,
    fy:558,
    posrx:0.14,
    posry:0.025,
    count:179,
    src:grunt2Url,
    rates:20
};

listObj.push(grunt2);

var grunt3={
    canvasId:"taoCanvas",
    // canvasId:"taoCanvas",
    ox:493,
    oy:759,
    fx:400,
    fy:620,
    posrx:0.185,
    posry:0.05,
    count:195,
    ratio:1.01,
    src:grunt3Url,
    rates:20
};

listObj.push(grunt3);

var grunt4={
    canvasId:"animCanvas",
    // canvasId:"selfCanvas",
    ox:488,
    oy:764,
    fx:400,
    fy:632,
    posrx:0.175,
    posry:0.025,
    count:187,
    src:grunt4Url,
    rates:15
};

listObj.push(grunt4);

var grunt5={
    canvasId:"animCanvas",
    // canvasId:"douCanvas",
    ox:492,
    oy:755,
    fx:400,
    fy:620,
    posrx:0.175,
    posry:0.025,
    count:294,
    src:grunt5Url,
    rates:30
};

listObj.push(grunt5);

var grunt6={
    canvasId:"animCanvas",
    // canvasId:"danCanvas",
    ox:494,
    oy:762,
    fx:400,
    fy:620,
    posrx:0.175,
    posry:0.025,
    count:225,
    src:grunt6Url,
    rates:15
};

listObj.push(grunt6);

var grunt7={
    canvasId:"animCanvas",
    // canvasId:"weiboCanvas",
    ox:490,
    oy:755,
    fx:400,
    fy:620,
    posrx:0.175,
    posry:0.025,
    count:225,
    src:grunt7Url,
    rates:15
};

listObj.push(grunt7);

var grunt8={
    canvasId:"mobileCanvas",
    ox:742,
    oy:1200,
    fx:360,
    fy:588,
    posrx:0,
    posry:0,
    ratio:1.1,
    count:255,
    src:grunt8Url,
    rates:20
};

listObj.push(grunt8);

var gruntEnd={
    canvasId:"messageCanvas",
    ox:742,
    oy:1200,
    fx:600,
    fy:487,

    posrx:0.175,
    posry:0.025,
    count:255,
    src:"null",
    rates:15
};

listObj.push(gruntEnd);