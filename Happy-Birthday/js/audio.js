//设置音乐循环次数
//times - 循环次数
function playAudio(elem, times) {
    var start = 0;//定义循环的变量
    elem.addEventListener("ended",function() {
        elem.play();//启动音频，也就是播放
        start++;//循环
        start == times && elem.pause();//也就是当循环的变量等于次数的时候，就会终止循环并且关掉音频
    });
    elem.play();//启动音频，用于第一次启动
}