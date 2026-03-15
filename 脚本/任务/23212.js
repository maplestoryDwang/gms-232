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
            cm.forceStartQuest(23212, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23212.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("好了，现在开始契约仪式。请尽可能地将精神集中在我身上。", 0, 2151009)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(好像有一股奇怪的力量渗透到了体内。)#k", 16, 2151009, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(1142554, 1);
                    cm.forceCompleteQuest(32001);
                    if (cm.getJob() == 3101) {
                        cm.changeJob(3120)
                    } else {
                        if (cm.getJob() == 3100) {
                            cm.changeJob(3110)
                        } else {
                            cm.playerMessage(1, "你的职业不对无法转职，想正常体验剧情不要乱改职业。")
                        }
                    }
                    cm.sendNormalTalk("契约完成了。以后就拜托你了。以后你可以不用出声，在心里和我说话。", 0, 2151009, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(1073, "3101=10;3120=35");
                        cm.forceCompleteQuest(23212);
                        cm.dispose()
                    }
                }
            }
        }
    }
};