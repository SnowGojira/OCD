/**
 * Created by hakuh on 2017/7/10.
 */


var points=[];

var w = document.documentElement.clientWidth,
    h = document.documentElement.clientHeight;

/**************************************preload Logic***********************************/
/*window.onload=function(){

    manifest = [
        {src: 'img/simpfy.ttf', id: 'font'},
        {src: 'img/simpfy.ttf', id: 'font'}


    ];//预加载
    loader = new createjs.LoadQueue(false);
    loader.setMaxConnections(100);
    loader.maintainScriptOrder=true;

    loader.addEventListener('complete', handleComplete);//加载完成 调用handleComplete函数
    loader.addEventListener('progress', handleFileProgress);//加载完成 调用handleFileProgress函数
    loader.loadManifest(manifest);

};

function handleFileProgress(){//加载中函数
    // var percent=loader.progress*100|0+'%';
    // document.getElementById('loadPercent').innerHTML=percent+"%";
}


function handleComplete(){
    //show pageStart Animation

    /!**
     * add the pageStart Animate
     *!/

    toastTextAnimation();
}*/



/**************************************Main Logic***********************************/


$(function () {
    /**
     * weChat share func executed
     */
    shareAjax();
    shareWechat();


    /**
     * index refer to page number
     * @type {number}
     */

    var index=1;

    $('.buttonStart').click(function(){
        $('.pageStart').hide();
        $('.page1').show();
        $('.hintBox').show();
        $('.hintBox').attr('display','inline-block');

        pageClick(index);

        index++;
    });



    $('.button').click(function(){
            pageClick(index);
            index++;
    });

    $('.submit').click(function () {

            var grades=0;
            console.log(points);
            for(var i=0;i<=7;i++){
                var point=parseInt(points[i]);
                grades=grades+point;
                console.log(point +" "+grades);
            };

            $('.page8').hide();
            $('.page9').show();

        giveGrades(grades);

    });





});

var toastTextAnimation=function(){
    //show first toast
    //show first gif animation
    //show second toast
    //show second gif animation
    //show the hint cover,give the href link



};


var pageClick=function (index){
    if(index==8){
        $('.button'+index).click(function () {
            $('.submit').show();
            console.log('page'+index);
        });

    }else{
        $('.button'+index).click(function () {
            console.log('page'+index);
            $('.page'+index).hide();
            $('.page'+(index+1)).show();

        });
    }


    $('#yes'+index).click(function () {
        var point=$(this).attr('data-choice');
        points.push(point);
        console.log('yes'+index);
        TDAPP.onEvent("shi"+index);

    });
    $('#no'+index).click(function () {
        console.log('no'+index);
        TDAPP.onEvent("fou"+index);

        var point=$(this).attr('data-choice');
        points.push(point);
    });

   changeHintTag(index);

};


/**
 * des:change the hint tag style
 * params:
 * auth:Haku Hal
 * date:2017-7-28
 */

var changeHintTag=function (str){
    var index= parseInt(str);

    $('.dotImg').attr('src','img/dotn.png');

    $('.dot'+index).attr('src','img/dot.png');

    log.a('changeHintTag',index);

}

    /**
     * des: judge the result then add the appropriate class the dom.
     * params: 'num' the result of the value
     * auth: Haku Hal
     * date: 2017-7-17
     */

var giveGrades=function (num) {
    if (num===0){
        log.a("giveGrades 0",num);
        replace(str_survive,num);
    }else if(num>0 && num<=30){
        log.a("giveGrades light",num);
        replace(str_light,num);
    }else if(num>30 && num <=70){
        log.a("giveGrades mid",num);
        replace(str_medium,num);
    }else {
        log.a("giveGrades heavy",num);
        replace(str_heavy,num);
    }

};

function replace (variety,num) {
    $('#resultDesc').append(variety.replace("%data%",num));
}


    /**
     * Utils
     * Des: This is Log class for console to log the functions data.
     * auth: Haku Hal
     * data: 2017-7-17
     */
var log={
    f:function (str) {
        return console.log(str+" is executed.");
    },
        v:function(str){
        return console.log("The target value is "+str);
        },
        a:function (func,val) {
            return console.log(func+" is executed & target value is "+val);
        }
    }



/**
 * Des: This is function for Animation
 * auth: Haku Hal
 * data: 2017-7-29
 */


function Animation(){
    var stage_m,container_m;
    console.log("canvas 创建成功："+w+" "+h);

    stage_m = new createjs.Stage("messageCanvas");
    stage_m.canvas.width=w;
    stage_m.canvas.height=h;

    console.log(w+" "+h);

    var spriteSheet = new createjs.SpriteSheet({
        framerate: listObj[0].rates,
        // "images": ['./img/grunt1.png'],
        "images": [listObj[0].src],
        "frames": {
            width:listObj[0].fx,
            height:listObj[0].fy,
            count:listObj[0].count
        },
        "animations": {
            "run": [0, listObj[0].count-1 , "run"]
        }
    });
    container_m = new createjs.Sprite(spriteSheet, "run");
    container_m.set({x:0.18*w,y:0.08*h,scaleX: w*0.686/400,scaleY:h*0.598/550 });

    stage_m.addChild( container_m);
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.on('tick',stage_m);
}






/**
 * desc: weixin share function
 * auth: Haku Hal
 * date: 2017-7-17
 */

function shareAjax() {
    $.ajax(
        {type:'get',
            url:'ajax_getconfig.php',
            success:function(data){
                console.log("ajax success:"+data);
                console.log("ajax success:"+JSON.parse(data).appId);
                console.log("ajax success:"+JSON.parse(data).timestamp);
                console.log("ajax success:"+JSON.parse(data).nonceStr);
                console.log("ajax success:"+JSON.parse(data).signature);

                wx.config({
                    debug: false,
                    appId:JSON.parse(data).appId,
                    timestamp: JSON.parse(data).timestamp,
                    nonceStr: JSON.parse(data).nonceStr,
                    signature: JSON.parse(data).signature,
                    jsApiList: [
                        // 所有要调用的 API 都要加到这个列表中
                        'checkJsApi',
                        'onMenuShareTimeline',//
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareWeibo'

                    ]
                });

            }
        });

}

function shareWechat(){
    /**
     * url需要更改为正式服务器的地址
     */
    var url="http://weixin.assemblemedia.cn/show-case/ocd/";
    var imageUrl=url+"img/shareIcon.png";
    var shareTitle="你有病你知道吗？";
    var shareDesc="特新型手机病毒强迫症一键测试";
    var shareLink=url+'index.html';

    wx.ready(function(){
        wx.onMenuShareTimeline({
            title:shareDesc, // 分享标题
            link: shareLink, // 分享链接
            imgUrl: imageUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareAppMessage({
            title: shareTitle, // 分享标题
            desc: shareDesc, // 分享描述
            link: shareLink, // 分享链接
            imgUrl: imageUrl, // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareQQ({
            title: shareTitle, // 分享标题
            desc: shareDesc, // 分享描述
            link: shareLink, // 分享链接
            imgUrl: imageUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareWeibo({
            title: shareTitle, // 分享标题
            desc: shareDesc, // 分享描述
            link: shareLink, // 分享链接
            imgUrl: imageUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
    });

}