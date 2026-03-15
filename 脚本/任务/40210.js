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
            cm.updateInfoQuest(40210, "NpcSpeech=24300011");
            cm.dispose()
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
            cm.sendNormalTalk("啊，来了。斯坦长老……啊？斯坦长老……也很高兴我成为了这里的居民？嘿嘿嘿……我很开心。这下我可以放心回到两位的身边了。", 32, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("感谢两位能来找我。一开始因为和两位分开了，我很难过，但是又回到了两位的身边，实在是太好了。以后请多关照。", 32, 0, true, true)
            } else {
                if (status === a++) {
                    cm.fieldEffect_PlayFieldSound("Party1/Clear", 100);
                    cm.forceCompleteQuest(40210);
                    cm.teachSkill(100000280, 2, 5);
                    cm.forceCompleteQuest(40924);
                    cm.inGameDirectionEvent_AskAnswerTime(2100)
                } else {
                    if (status === a++) {
                        cm.teachSkill(100000279, 2, 0);
                        cm.playerMessage(5, "[决意时刻]、[伦娜的祝福]技能提高等级了。");
                        cm.updateInfoQuest(41832, "desert=off;three=off;afrien=off;cave=off;west=enter");
                        cm.updateInfoQuest(41832, "desert=off;three=off;afrien=off;cave=off;west=off");
                        cm.setInGameDirectionMode(false, true, false);
                        cm.gainExp(5380000);
                        cm.dispose();
                        cm.warp(323090230, 0, false)
                    }
                }
            }
        }
    }
};