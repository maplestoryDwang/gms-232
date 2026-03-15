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
            cm.sendNormalTalk("现在轮到#b#p2400006##k了？这应该是#p2400006#你第一次独自作战……不要太勉强哦。也不是什么很难打倒的敌人啦！#p2400006#你那么强大，我想你独自也能做得很好的。", 32, 2460000, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("好了，你接受的话，就会移动到我创造的空间里了……那出发吧？", 32, 2460000)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(40502, "");
                    cm.forceStartQuest(40502, "");
                    cm.dispose();
                    cm.getPlayer().setGender(1);
                    cm.onZeroInfo(199);
                    cm.warp(326090030, 0, false)
                }
            }
        }
    }
}

function stage0(d, c, b) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40502.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.gainExp(10980000);
            cm.forceCompleteQuest(40502);
            cm.forceCompleteQuest(40950);
            cm.dispose()
        }
    }
};