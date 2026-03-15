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
            cm.forceStartQuest(23025, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23025.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("这就是那个#t4032737#啊。果然……只要有了这个文件，就可以对反抗者今后的方向作出调整了。干得好。", 0, 2151004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这个任务原来不是你的任务，是我特意交给你的。那个黑色之翼成员……你一定很想亲手把他解决掉吧？我是希望你为了复仇，可以把任务完成得更好。", 0, 2151004, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("但是我没想到你能完成得这么干净利索。真是了不起。你的成长速度总是超出我的预测。让我感觉自己的付出很有意义。", 0, 2151004, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("我本以为是很久以后的事情……但看到你成长得这么快，我就没有必要犹豫了。我马上让你进入下一阶段。让你变成和以前完全不同的、可以自由地操纵更多机械的强大的机械师。", 0, 2151004)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(1073, "3500=10;3510=201");
                            cm.changeJob(3510);
                            cm.sendNormalTalk("我已经让你转职了，与此同时，我也把我的知识和技能都传授给你了。此外，我还把你之前使用的麦林弹提升了。所以现在的你已经不是过去的你了。是个更加进化的机械师,这就是你，请你好好享受新获得的力量吧。", 0, 2151004, false, true)
                        } else {
                            if (status === a++) {
                                cm.gainItem(4032739, -1);
                                cm.gainItem(1142243, 1);
                                cm.forceCompleteQuest(23025);
                                cm.forceCompleteQuest(29942);
                                cm.sendNormalTalk("那下次上课再见了。\n\n希望你能在此期间好好展现反抗者的实力。", 0, 2151004, true, false);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};