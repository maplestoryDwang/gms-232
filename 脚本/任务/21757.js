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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21757.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("你有什么事吗？除了想成为骑士的人之外，这里禁止闲杂人等靠近。嗯……那是什么？你想把它交给女皇吗？说不定会是危险物质。来，请把它给我。我要先看一下。", 0, 1101002)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……嗯……上面的内容非常有趣。竟然知道神兽的眼泪……啊，没什么。我们会慎重研究的。", 8, 1101002, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4032330, -1);
                    cm.sendNormalTalk("黑色之翼也许正在打这里的主意。", 2, 1101002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("即使是那样，也是#m130000000#的事情。和你这样的外人没有任何关系。你又怎么保证自己不是黑色之翼呢？……谢谢你的情报，再见。", 8, 1101002, true, false);
                        cm.forceStartQuest(21757, "");
                        cm.forceCompleteQuest(21757);
                        cm.gainExp(24121);
                        cm.dispose()
                    }
                }
            }
        }
    }
};