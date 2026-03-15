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
            cm.askYesNo("噢！你已经购买飞行通行证了吗？怎么样？现在你已经可以在各个大陆上使用智能骑宠了！", 1, 9072000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#b#i2431757# #t2431757# 1个#k \r\n\r\n领取回馈顾客特别服务道具吧。", 0, 9072000, false, true);
                cm.gainItem(2431757, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("购买飞行通行证的话，你将立刻获得通行资格，不必特意进入背包查看或者做别的事情。你没有因为背包中没有通行证而吓了一跳吧？", 0, 9072000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("一想到可以随心所欲地骑乘这个奥斌的智能骑宠，是不是很兴奋呢？再过不久！经过我的潜心专研，总有一天我会让智能骑宠也自由飞翔在万神殿大陆上方的！", 0, 9072000, true, false);
                        cm.forceCompleteQuest(26424);
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b %SCRIPT_PATH%#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("噢！你已经购买飞行通行证了吗？怎么样？现在你已经可以在各个大陆上使用智能骑宠了！", 1, 9072000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#b#i2431757# #t2431757# 1个#k \r\n\r\n领取回馈顾客特别服务道具吧。", 0, 9072000, false, true);
                cm.gainItem(2431757, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("购买飞行通行证的话，你将立刻获得通行资格，不必特意进入背包查看或者做别的事情。你没有因为背包中没有通行证而吓了一跳吧？", 0, 9072000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("一想到可以随心所欲地骑乘这个奥斌的智能骑宠，是不是很兴奋呢？再过不久！经过我的潜心专研，总有一天我会让智能骑宠也自由飞翔在万神殿大陆上方的！", 0, 9072000, true, false);
                        cm.forceCompleteQuest(26424);
                        cm.dispose()
                    }
                }
            }
        }
    }
};