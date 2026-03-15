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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/62143.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("你好，你能不能帮我制作#t4034643:#呢？材料我也带来了……", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("啊，没问题！请稍等片刻……", 37, 9310536, true, true);
                cm.gainItem(4034641, -10);
                cm.gainItem(4034642, -10);
                cm.gainItem(4034643, 10)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("好了！这就是热腾腾的#t4034643:#！", 37, 9310536, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("不过，最近怎么有这么多人拜托我制作#t4034643:#呢？\r\n以前我只是为了满足#p9310532#的测试要求才制作这个的，可最近像你一样拿来材料拜托我制作的人越来越多……是不是我做的#t4034643:#非常好吃啊？", 37, 9310536, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(62143);
                            cm.updateInfoQuest(62143, "chk=1");
                            cm.addNumberForQuestInfo(62109, "yuyuanPoint", 3);
                            cm.sendNormalTalk_Bottom("哈哈哈，好了，那我告辞了……", 57, 0, true, false);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};