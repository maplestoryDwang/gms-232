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
            cm.getTopMsgFont("请通过W, A, S, D移动画面, 点击对面的控制杆. ", 3, 20, 20, 0);
            cm.openCamera(1, 0, [1540720], [0], 7, 46, 45, 0);
            cm.fieldEffect_ProcessOnOffLayer("WASD", "Map/Effect2.img/blackHeaven/fpsUI_WASD", 0, 0, 10, -10, 20, 6, 1);
            cm.fieldEffect_ProcessOnOffLayer("ESC", "Map/Effect2.img/blackHeaven/fpsUI_ESC", 0, 0, 0, 0, 20, 8, 1)
        } else {
            if (status == a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, true);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/whip", 100);
                        cm.cameraSwitch_PushSwitchMoveInfo("pt_switch", 2000);
                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/lever", 100);
                            cm.npc_SetSpecialAction("oid=285827498", "hit", 0, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/metaldown", 100);
                                cm.npcMove(1540747, 0, 353, 3000);
                                cm.npc_SetSpecialAction("oid=285827498", "left", -1, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.onSetBackEffect("down", 1, 1, 0, 0);
                                    cm.地图特效_开关落脚点([46], [0]);
                                    cm.addPopupSay(1540451, 2000, "真是了不起. ", "", 0);
                                    cm.addPopupSay(1540452, 2000, "这不算什么. ", "", 0);
                                    cm.addPopupSay(1540451, 2000, "不, 真的很了不起. \r\n没想到你还擅长使用鞭子. ", "", 0);
                                    cm.addPopupSay(1540452, 2000, "……你确实是在称赞我吗?", "", 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                                } else {
                                    if (status === a++) {
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.forceCompleteQuest(33248);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/33233.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("哼……你找到管道了吗？\r\n你在磨蹭什么，快走。", 37, 1540490, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(33234, "start=0;done=1");
                cm.forceCompleteQuest(33234);
                cm.gainItem(4034271, -3);
                cm.dispose();
                cm.warp(350053250, 0, true);
                cm.npc_LeaveField("oid=284798173");
                cm.npc_LeaveField("oid=284798173");
                cm.setInGameDirectionMode(false, true, false);
                cm.dispose()
            }
        }
    }
};