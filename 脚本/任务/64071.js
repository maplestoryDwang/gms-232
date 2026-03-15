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
            cm.sendNormalTalk_Bottom("勇，勇士！你真的要去吗？！", 37, 9400598, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b是的，我正打算去呢。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("哎呀！真的……现在森林里真的很危险啊……", 37, 9400598, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("如果村长知道了，可能会杀了我，但是……哎呀！请你拿着这个。", 37, 9400598, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(64071);
                            cm.sendNormalTalk_Bottom("代代相传的", 37, 9400598, true, true);
                            cm.gainItem(1182283, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b你要把这个给我……？", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("比起我们，勇士应该更需要这个吧！我一直在等着这一天，我也想帮助勇士！", 37, 9400598, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b谢谢你，托尔逊。我更希望我用不上这个呢。等我回来后再还给你。", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("好的，那就请你早去早回吧！希望沉睡森林的呼吸与你同在！", 37, 9400598, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.curNodeEventEnd(true);
                                                cm.setInGameDirectionMode(true, false, true);
                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                                    cm.inGameDirectionEvent_ForcedFlip10(1, 327);
                                                    cm.inGameDirectionEvent_AskAnswerTime(501)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.npc_LeaveField("oid=5389137");
                                                            cm.npc_LeaveField("oid=5389137");
                                                            cm.dispose();
                                                            cm.openNpc(0, "副本_莫奈德_Act2_探索森林");
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