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
            cm.sendNormalTalk("您好？我是负责为客人们带路的#b女仆#k。\r\n客人您的#b客房#k在3楼。我带您过去吧？", 4, 9062244, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("让我来看看……钥匙放哪儿了呢……？\r\n……真是的，钥匙……", 4, 9062244, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("难道……？", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("我好像忘记带钥匙了。\r\n非常抱歉，可以帮忙找一下#i4036614# #b#t4036614##k吗？", 4, 9062244)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("谢谢你了。看来我是把钥匙落在#b阁楼#k了。", 4, 9062244, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我可是客人啊……", 2, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("欢迎回来。", 4, 9062244, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(100435, "");
                                        cm.OnStartNavigation(993175400, 0, "pt_go993175500", 0);
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
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100434.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.setAccountQuestInfo(238, "count=9830;T=20201026175051");
            cm.sendNormalTalk("啊，你找到钥匙了啊？", 4, 9062244, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(100435);
                cm.updateInfoQuest(100433, "65=1");
                cm.gainItem(4036614, -1);
                cm.dispose();
                cm.warp(993175401, 0, false)
            }
        }
    }
};