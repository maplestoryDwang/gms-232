var status = -1;
var selectionLog = [];

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.addPopupSay(1013203, 1000, "联盟的勇士原来是怪物?!", "", 0);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_AskAnswerTime(5000)
        } else {
            if (status === a++) {
                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
                cm.forceCompleteQuest(33147);
                cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
                cm.inGameDirectionEvent_AskAnswerTime(3000);
                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
            } else {
                if (status === a++) {
                    cm.addPopupSay(1540454, 1000, "撒由那拉!\r\n我们现在回去吧, 队长!", "", 0);
                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                    cm.effect_Voice("Voice3.img/BlackHeaven/3_guffy/9", 100)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(33132, "save=6;boss=noclear;board1=Noclear");
                        cm.dispose();
                        cm.warp(350024000, 0, true);
                        cm.setInGameDirectionMode(false, true, false);
                        cm.enableActions()
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    status++;
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