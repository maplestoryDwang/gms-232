var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("#face0#内罗？你是怎么来这里的？你有没有见过那些灰尘怪物啊？！", 37, a, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("#face4#我这不就是感应到了奇怪的气息才来这里的嘛！", 37, 1531003, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("#face4#尽管现在超能力者已经变得很强大了，但肯定有用得着我的地方。\r\n一起去吧！！！赶紧的！！", 37, 1531003, true, true)
                } else {
                    if (status === b++) {
                        cm.setPartner(1, 1531003, 80001789, 0);
                        cm.updateInfoQuest(22700, "V01=1;V02=1;q21end=0;coNight=1;kinePro=0;kinetuto=1;kinetuto2=1;E1=1;E2=1;blackCat=0;E3=1");
                        cm.forceStartQuest(22833, "");
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22833.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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