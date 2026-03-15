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
            cm.sendNormalTalk("#b(事到如今已无路可回了……)", 45, 2410008, false, true);
            cm.effect_Voice("Voice.img/Alpha/90", 100)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(如果是因为陷阱想要避开……那么也不可能会为了揭开真相而努力至今。)", 45, 2410008, true, true);
                cm.effect_Voice("Voice.img/Alpha/91", 100)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#face3# #b(毫无意义地活着，还不如痛快地死去。)", 45, 2410008, true, true);
                    cm.effect_Voice("Voice.img/Alpha/92", 100)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#face3# #b(无论如何我都要唤醒那个女子！还有，我要向欺骗我的人报仇雪恨！这就是我要做的事情！)", 45, 2410008, true, true);
                        cm.effect_Voice("Voice.img/Alpha/93", 100)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(40004, "");
                            cm.forceStartQuest(40004, "");
                            cm.warp(321001100, 0, false);
                            cm.dispose()
                        }
                    }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40004.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("哈啊……哈啊……全部打倒吗……真的已经到了不可挽回的地步了……", 45, 2410008, false, true);
            cm.effect_Voice("Voice.img/Alpha/98", 100)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#face11#不管用什么方法，都要唤醒那个女子！", 45, 2410008, true, true);
                cm.effect_Voice("Voice.img/Alpha/99", 100)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(40004);
                    cm.forceCompleteQuest(40900);
                    cm.gainExp(810800);
                    cm.playerMessage(5, "现在可以使用仓库、交易、社交等功能了。");
                    cm.dispose()
                }
            }
        }
    }
};