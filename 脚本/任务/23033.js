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
            cm.forceStartQuest(23033, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23033.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你把#o9001032#破坏掉啦！干得好！这样的话，我们村的能量不足现象就能缓解一些了！心里感觉终于畅快了！了不起！你为我们村立了大功！", 0, 2151001, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("看到你有了这么强的能力，就没有必要再犹豫了。本来我觉得太危险，想过一段时间再传授给你……我要把更强的唤灵斗师技能传授给你！我想你一定可以掌握！", 0, 2151001)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(1073, "3200=10;3210=201;3211=201");
                    cm.changeJob(3211);
                    cm.sendNormalTalk("我让你转职了。现在你已经不是以前的你了。近似疯狂的、更危险的技能世界将会展现在你面前。控制也会变得更难，但是……呵呵，你能完成那么危险的任务，相信你一定可以掌握。", 0, 2151001, false, true)
                } else {
                    if (status === a++) {
                        cm.gainItem(1142244, 1);
                        cm.forceCompleteQuest(23033);
                        cm.forceCompleteQuest(29943);
                        cm.sendNormalTalk("让我们下次课程再见吧。\n\n在那之前，希望你能以反抗者的身份，继续努力。", 0, 2151001, true, false);
                        cm.dispose()
                    }
                }
            }
        }
    }
};