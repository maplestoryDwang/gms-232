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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40310.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk("现在才回来啊？那是给#p2440004#的药吧？把药和这封信放在这里……", 33, 2440000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("什么？不亲自道别？唉，那样会害羞的。用这种方式告别，对太守也好。", 33, 2440000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("那么，我们可以回去了？以后请多关照啦。", 33, 2440000, true, true)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_PlayFieldSound("Party1/Clear", 100);
                        cm.forceCompleteQuest(40310);
                        cm.teachSkill(100000280, 3, 5);
                        cm.forceCompleteQuest(40934);
                        cm.teachSkill(100000279, 3, 0);
                        cm.playerMessage(5, "[决意时刻]、[伦娜的祝福]技能提高等级了。");
                        cm.inGameDirectionEvent_AskAnswerTime(2100)
                    } else {
                        if (status === a++) {
                            cm.setInGameDirectionMode(false, true, false);
                            cm.gainExp(18477800);
                            cm.gainItem(4033835, -1);
                            cm.dispose();
                            cm.warp(324090410, 0, false)
                        }
                    }
                }
            }
        }
    }
};