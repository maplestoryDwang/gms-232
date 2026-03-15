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
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41056.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.updateInfoQuest(41056, "NpcSpeech=24200011");
            cm.dispose()
        }
    }
}

function stage1(d, c, b) {
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
            cm.updateInfoQuest(41056, "NpcSpeech=24200011/24200172");
            cm.dispose()
        }
    }
}

function stage2(d, c, b) {
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
            cm.updateInfoQuest(41056, "NpcSpeech=24200011/24200172/24200183");
            cm.dispose()
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
            cm.sendNormalTalk("找到答案了吗？阿里特安最耀眼的东西，找到了就拿出来吧。", 0, 2420003, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(41056, "");
                cm.forceStartQuest(41056, "");
                cm.forceCompleteQuest(41056);
                cm.gainExp(720000);
                cm.sendNormalTalk("沙漠中最闪亮的东西，就是沙子。反射阳光的金沙，会发出耀眼的光芒。这次你又答对了。我的问题太容易了吗？", 0, 2420003, true, true);
                cm.gainItem(4033907, -1);
                cm.gainItem(4310085, 5);
                cm.gainItem(2001530, 25)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("出第三道题，把我最想要的东西带来吧……这次依然不会有提示。", 0, 2420003, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(41057, "");
                        cm.forceStartQuest(41057, "");
                        cm.sendNormalTalk("（……这个女人，难道是故意让我答不对？呼，看上去应该没那么愚蠢，先去向村民们获取线索吧。但是如果敢捉弄我，我一定会要她吃不了兜着走。）", 2, 2420003, true, false)
                    } else {
                        if (status === a++) {
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};