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
            cm.forceStartQuest(23164, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23164.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你消灭了#o9001032#啊！做得真棒！这样一来，我们村庄能量不足的现象应该能够得到一定的解决了！现在才总算能够喘口气呢！哈哈哈！真厉害，你算是为了村庄建了大功啊！", 0, 2151000, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("有这样的能力应该足够了，我原以为还为时尚早，可你总是能出乎我的预期啊，那我就将更强大的爆破手技能传授于你！相信你能够安全地操控这股力量！", 0, 2151000)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(1073, "3700=10;3710=201;3711=201");
                    cm.changeJob(3711);
                    cm.sendNormalTalk("我帮你转职了，现在你再也不是从前的你了，你可以施展更加强大又繁复的力量，当然我相信你能够轻松操控这股力量吧？", 0, 2151000, false, true)
                } else {
                    if (status === a++) {
                        cm.gainItem(1142244, 1);
                        cm.gainItem(1353402, 1);
                        cm.forceCompleteQuest(23164);
                        cm.forceCompleteQuest(29943);
                        cm.sendNormalTalk("那么我们下堂课再见，\n\n在此之前，我很期待你能作为反抗者大展拳脚。", 0, 2151000, true, false);
                        cm.dispose()
                    }
                }
            }
        }
    }
};