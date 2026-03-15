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
            cm.sendNormalTalk("夜光法师，我知道这样做很突兀，但请你集中精力相信我。我要唤醒夜光法师身上的光之力量，引导出你体内的黑暗力量。如果成功的话，夜光法师就不用再被黑暗力量束缚了。", 1, 1032209, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("(感觉飞鱼丸的声音好像缓缓的包裹住了我体内的黑暗力量。)", 3, 1032209, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("黑暗力量不再侵蚀我的灵魂了呢。这都是你的功劳。", 3, 1032209, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("过奖了。这一切都要归功于夜光法师你想要战胜黑暗力量的坚强意志。我只是在旁边帮了点小忙而已。这个你应该知道，是能够自由出入希利尼提的极光三棱镜。收下吧。", 1, 1032209, true, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(1073, "2700=10;2710=201");
                            cm.teachSkill(27101100, 1, 20);
                            cm.teachSkill(27101202, 1, 20);
                            cm.forceCompleteQuest(25510);
                            cm.changeJob(2710);
                            cm.gainItem(2430874, 1);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25510.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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