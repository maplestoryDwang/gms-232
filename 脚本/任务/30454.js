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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("小可爱啊，你没事吧？你倒是说句话啊。", 37, 2074105, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3#额，头……我的头好痛。\r\n记忆，我想起……来了……宝玉，火……啊，啊啊，我的头……", 37, 2074100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("我说，鬼怪动起来了！", 37, 2074136, true, true)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_PlayBGM("Bgm43/Kinesis Theme II", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.fieldEffect_ProcessOnOffLayer("back", "Map/Effect2.img/downtown2015/illust/25", 0, 1500, 0, 0, 9, 4, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#你们！在遭受天谴之前还不能死！！！", 37, 2074154, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face3#啊啊啊啊啊啊啊！", 37, 2074100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_ProcessOnOffLayer("back", "", 2, 500, 0, 0, 0, 0, 0);
                                        cm.dispose();
                                        cm.warp(224000068, 1);
                                        cm.setInGameDirectionMode(false, true, false)
                                    }
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