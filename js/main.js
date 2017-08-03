/**
 * Created by hakuh on 2017/7/10.
 */


var points=[];

/*var w = document.documentElement.clientWidth,
    h = document.documentElement.clientHeight;*/


/**************************************preload Logic***********************************/
window.onload=function(){

    manifest = [
        {src: 'img/simpfy.ttf', id: 'font'},
        {src: 'img/bgm.mp3', id: 'bgm'},
        // {src: 'http://assemble-10061151.cossh.myqcloud.com/ocd/grunt1.png', id: 'grunt1'},
        {src: gif1, id: 'grunt1'},
        {src: gif2, id: 'grunt2'},
        // {src: grunt3Url, id: 'grunt3-1'},
        {src: gif3, id: 'grunt3'},
        {src: gif4, id: 'grunt4'},
        {src: gif5, id: 'grunt5'},
        {src: gif6, id: 'grunt6'},
        {src: gif8, id: 'grunt9'},
        {src: gif7, id: 'grunt7'},
        {src: gifc, id: 'grunt8'}


    ];//预加载
    loader = new createjs.LoadQueue(false);
    loader.setMaxConnections(100);
    loader.maintainScriptOrder=true;
    loader.installPlugin(createjs.Sound);
    loader.addEventListener('complete', handleComplete);//加载完成 调用handleComplete函数
    loader.addEventListener('progress', handleFileProgress);//加载完成 调用handleFileProgress函数
    loader.loadManifest(manifest);

};

function handleFileProgress(){//加载中函数
    var percent=loader.progress*100|0+'%';
    document.getElementById('percent').innerHTML=percent+"%";
}


function handleComplete(){
    //show pageStart Animation

    /**
     * add the pageStart Animate
     */

    $('.preload').hide();
    $('.pageEnter').show();
    page1Animation();
}



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

    $('#text2').click(function () {
        $('.pageEnter').hide();
        $('.pageStart').show();
    });

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

    //提交监听事件

    $('.submit1').click(function(){
        TDAPP.onEvent("result00");
        resultPage();
    });

    $('.submit2').click(function(){
        TDAPP.onEvent("result30");
        resultPage();
    });

    $('.submit3').click(function(){
        TDAPP.onEvent("result70");
        resultPage();
    });

    $('.submit4').click(function(){
        TDAPP.onEvent("result100");
        resultPage();
    });

});

var page1Animation=function(){
    // $('.pageEnter').append(text_anim1);
   $('.text1').show();
    $('#enter').click(function(){
        $('.pageEnter').hide();
        $('.pageStart').show();

        var audio = $("#bgm")[0];
        audio.play();

    });

    setTimeout(function () {
        $('.textAnim').show();
        //
        setTimeout(function () {


            setTimeout(function(){
                $('#sendButton').attr('src','img/pageStart/sendBtn.gif');
                $('#sendButton').click(function () {

                    $('.textAnim').hide();
                    $('#text3').show();

                    $(this).remove();
                    $('.sendBtn').append('<img id="sendButton" src="img/pageStart/sendBtn.png">');

                    setTimeout(function () {
                        $('#text4').show();
                    },500);

                    setTimeout(function(){
                        $('#text5').show();
                        setTimeout(function () {
                            $('#text2').show();
                            // $('#gifAnimation').attr('src','img/pageStart/enter.gif');

                        },1000);

                    },1000);
                })
            },6000);
        },500);


    },2500);


};



var resultPage  = function(){
    var grades=getGrades();

    $('.page8').hide();
    $('.page9').show();

    giveGrades(grades);
}




/**
 * main page jump off logic
 * @param index int current page index
 */

var pageClick=function (index){

    //taking data monitor API
    $('#yes'+index).click(function () {
        var point=$(this).attr('data-choice');
        points.push(point);
        // console.log('yes'+index);
        TDAPP.onEvent("shi"+index);

    });
    $('#no'+index).click(function () {
        // console.log('no'+index);
        TDAPP.onEvent("fou"+index);

        var point=$(this).attr('data-choice');
        points.push(point);
    });

    //show & hide logic

        $('.select').show();
        // $('.select').addClass('mainIn');

    if(index==8){
        //show Animation()

        // Animation(grunt8);

        $('.button'+index).click(function () {
            $('.button8').hide();
            $('.quiz').hide();
            $('.hintBox').hide();
            setTimeout(showSubmit(),1000);
        });

    } else{
        $('.button'+index).click(function () {
            PageChange(index);
        });
    }


    function PageChange(index){
        console.log('page'+index);
        $('.page'+index).hide();
        $('.page'+(index+1)).show();
    }

    //hint tag change function
    changeHintTag(index);

};

var showSubmit=function(){
    var grade=getGrades();

    if (grade===0){
        $('.submit1').show();
        console.log("#submit1");
    }else if(grade>0 && grade<=30){
        $('.submit2').show();
        console.log("#submit2");
    }else if(grade>30 && grade <=70){
        $('.submit3').show();
        console.log("#submit3");
    }else {
        $('.submit4').show();
        console.log("#submit4");
    }
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

};

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

    //give a random number to random

        var $chars = '0123456789';
        var maxPos = $chars.length;
        var pwd = '';
        for (var i = 0; i < 3; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        $('#random').text(pwd);

    //generate the date
        var date = new Date();
        var year,day,month;
        year=date.getFullYear();
        month=parseInt(date.getMonth())+1;
        day=date.getDate();
        $('#date').text(year+"年"+month+"月"+day+"日");
        // console.log("年"+year+"月"+month+"日"+day);
};

function replace (variety,num) {
    $('#resultDesc').append(variety.replace("%data%",num));
}

var getGrades= function () {
    // var grades=0;

    var grade=0;
    console.log(points);

    for(var i=0;i<=7;i++){

        var point=parseInt(points[i]);

        grade=grade+point;

        console.log(point +" "+grade);
    }

    console.log("成绩:"+grade);

    return grade;
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
     };


/**
 * Des: This is function for Animation
 * auth: Haku Hal
 * data: 2017-7-29
 */


/*function Animation(obj){
    var stage,container,canvas;

    console.log("canvas 创建成功："+w+" "+h);

    var obj=obj;

    // obj.s=obj.s;

    var W,H,scaleW,scaleH;
    W=800;
    H=h*W/w;
    scaleW=obj.ox/800;
    scaleH=obj.oy/H;

    console.log(w+" "+h+" "+" "+W+" "+H);

    stage = new createjs.Stage(obj.canvasId);
    stage.canvas.width=w;
    stage.canvas.height=h;



    var spriteSheet = new createjs.SpriteSheet({
        framerate: obj.rates,
        // "images": ['./img/grunt1.png'],
        "images": [obj.src],
        "frames": {
            width:obj.fx,
            height:obj.fy,
            count:obj.count
        },
        "animations": {
            "run": [0, obj.count-1 , "run"]
        }
    });
    container = new createjs.Sprite(spriteSheet, "run");
    container.set({x:obj.posrx*w,y:obj.posry*h,scaleX: w*scaleW*obj.ratio/obj.fx,scaleY:h*scaleH*obj.ratio/obj.fy});

    stage.addChild( container);

    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.on('tick',stage);

    console.log("帧率："+createjs.Ticker.getMeasuredFPS());
}*/






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