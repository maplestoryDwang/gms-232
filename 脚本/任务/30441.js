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
            cm.sendNormalTalk_Bottom("欢迎光临！\r\n你们想要买什么呢？", 37, 2074116, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#最漂亮的衣服，让穿衣服的人显得超美的那种，\r\n要是穿着那身衣服表白，谁都会接受的那种，\r\n有没有那种漂亮的衣服啊？", 37, 2074100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("哈哈，看来是有人要表白吧？", 37, 2074116, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#我打算送给一位花样年纪的姑娘，让她表白的时候穿，嘿嘿。\r\n还有，大小呢……就像姐姐这样就行。", 37, 2074100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("哎哟，你是要送人啊，嗯……等一下。\r\n我去看看有没有合适的衣服。", 37, 2074116, true, true)
                        } else {
                            if (status === a++) {
                                cm.curNodeEventEnd(true);
                                cm.setInGameDirectionMode(true, false, true);
                                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                                cm.updateInfoQuest(30441, "gExpCheck=1");
                                cm.gainExp(198883);
                                cm.forceStartQuest(30441, "");
                                cm.forceCompleteQuest(30441);
                                cm.inGameDirectionEvent_AskAnswerTime(400);
                                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
                            } else {
                                if (status === a++) {
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
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