/**
 * Created by hakuh on 2017/7/29.
 */
var str_light='<p class="diagnosis">你的强迫症指数<span>%data%</span>分<br>是特新型手机病毒强迫症的早期患者<br>好棒棒，像你这样的人才已经不多了~</p>';
var str_medium='<p class="diagnosis">你的强迫症指数<span>%data%</span>分<br>是特新型手机病毒强迫症的中期患者<br>少低头，否则皇冠会掉、吃枣药丸</p>';
var str_heavy='<p class="diagnosis">你的强迫症指数<span>%data%</span>分<br>是特新型手机病毒强迫症的晚期患者<br>治愈的可能性很小，请尽量保持心情愉快</p>';
var str_survive='<p class="diagnosis">你的强迫症指数<span>%data%</span>分<br>特新型手机病毒强迫症的免疫者<br>天啊，你还是人吗？</p>';


var fontUrl='http://assemble-10061151.cossh.myqcloud.com/ocd/simpfy.ttf';
var grunt1Url='http://assemble-10061151.cossh.myqcloud.com/ocd/grunt1.png';


var listObj=[];
var grunt1={
    canvasId:"messageCanvas",
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
