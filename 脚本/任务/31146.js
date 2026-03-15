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
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31147.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31147.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            if (cm.getMap().getNumMonsters() > 0) {
                cm.sendNormalTalk("请先把周围监视我的怪物消灭掉。在这之前，我什么都不会跟你说……", 0, 2143001, false, false);
                cm.dispose();
                return
            }
            cm.forceCompleteQuest(31146);
            cm.gainExp(11659200);
            cm.sendNormalTalk("谢谢你来救我。但是我想继续留在这里。如果他们发现我不见了，可能会招来更严重的灾难。留在这里，说不定还能做点什么。", 0, 2143001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("请你帮我转告阿勒斯。\r\n", 0, 2143001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("还有……请你阻止她。我们无法让希纳斯恢复原状。这也是没有办法的办法。", 0, 2143001, true, false)
                } else {
                    if (status === a++) {
                        cm.dispose()
                    }
                }
            }
        }
    }
};