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
            cm.sendNormalTalk("盟军士兵？我最后看见的是阴阳师让他们吃了什么药，然后念了咒术，他们就变得很奇怪。", 4, 9130107, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("请你找到那些士兵吧。他们对于失去了父亲的我，十分照顾……", 4, 9130107, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("我看见了附近有织田军的阴阳师。从他们那里应该能得到什么情报吧。", 4, 9130107)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(58929, "");
                        cm.sendNormalTalk("谢谢你能帮我！消灭100个织田军的阴阳师，应该就能找到线索了吧？", 4, 9130107, false, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58929.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest(58929);
            cm.sendNormalTalk("啊……？你说士兵的精神都被操控了？", 4, 9130107, false, true);
            cm.gainItem(4034154, -1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这可怎么办？。难道没有办法可以让他们恢复吗？", 4, 9130107, true, false)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};