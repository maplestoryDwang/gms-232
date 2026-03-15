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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41113.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("真的是尤塔要把这个交给我的吗？尤塔应该不是这种孩子，怎么回事？", 0, 2430005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("(……啊哈，原来卡米拉不知道尤塔喜欢她啊？好吧，尤塔这小子害的我这么辛苦，我要报复他一下。)", 2, 2430005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这可是秘密哦……其实尤塔很喜欢#r希娜#k，所以想在希娜的朋友面前好好表现。", 2, 2430005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("啊，原来是这样！我就说嘛，尤塔最近对我说了很多话。这下我明白了，我得要努力让他们俩在一起。", 0, 2430005, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(41113);
                            cm.gainExp(1300000);
                            cm.gainItem(4310085, 8);
                            cm.gainItem(4033786, -1);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};