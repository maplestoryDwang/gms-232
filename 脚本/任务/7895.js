var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.updateInfoQuest(7895, "f=0;0=0;1=0;2=0;3=0;4=0;5=0;6=0;7=0;8=0;9=0");
            cm.sendNormalTalk("在我费尽心思铲除绿水灵王的期间，那些黑心商人居然在向冒险家们兜售我非常珍爱的私人手册。", 0, 9076110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("手册？要不要我帮忙？", 16, 9076110, true, true)
            } else {
                if (status === a++) {
                    cm.askMenu("真的吗？你若肯帮忙的话，那真是太感谢了。\r\n\r\n#b#L0# 这事是为了女神，理应帮忙。#l\r\n#L1# 唔……不，我改变主意了。#l", 0, 9076110)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(7895, "");
                        cm.sendNormalTalk("可是……可是要那样的话，说到底只能跟黑心商人#r泊布#k购买……", 0, 9076110, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("不管怎样，只要你愿意，我就帮你。", 16, 9076110, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("太谢谢你了。若你收集来散落的手册内页，我愿意把我的手册送给#b#h0##k你。那就拜托了。", 0, 9076110, true, false)
                            } else {
                                if (status === a++) {
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};