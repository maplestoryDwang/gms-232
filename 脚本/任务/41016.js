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
            cm.forceStartQuest(41016, "");
            cm.updateInfoQuest(41016, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41016.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("(愤怒)", 0, 2411014, false, true);
            cm.gainSkillBuff(100001263)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("再努力点！你肯定能行的！", 2, 2411014, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("(愤怒，再愤怒)", 0, 2411014, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(41016, "");
                        cm.forceCompleteQuest(41016);
                        cm.gainExp(180000);
                        cm.sendNormalTalk("啊，终于诞生了。不过这……怎么是白虎？！这个情况，怎么感觉挺熟悉的呢？", 2, 2411014, true, true);
                        cm.gainItem(4310085, 3)
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