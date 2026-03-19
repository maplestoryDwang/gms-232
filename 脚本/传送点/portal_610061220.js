function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_AskAnswerTime(2200)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("好了，我跟你们说下这机器的大致原理。", 37, 9201537, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("它能够阅读站在我身边的人的大脑信号，\r\n将其转化为可以进入的形式。", 37, 9201537, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("谁去进入？", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("真是个烂问题，当然是你啦！", 37, 9201537, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#记忆这种事物怎么能让别人进入？\r\n你疯了！", 37, 9201536, true, true);
                                cm.effect_NormalSpeechBalloon("哈？", 1, 0, 0, 4500, 1, 0, -20, 0, 4, 0, null, cm.getPlayer().getId())
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("并没有，我的朋友。\r\n这就是科学的力量！", 37, 9201537, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("那我进入到卢坎的记忆后该怎么做？", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("你得进入到他记忆的最深层\r\n，弄清楚到底发生了什么。", 37, 9201537, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("失去的记忆往往会被埋藏在潜意识的边缘，\r\n我告诉你，想找到它们可难得很。", 37, 9201537, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("是时候开始了！\r\n你能帮我按下你身边的按钮吗？", 37, 9201537, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.updateInfoQuest(61340, "c=2");
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.eventSKill(0);
                                                            cm.warp(610061230, 0, true);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.npc_LeaveField("oid=2826976");
                                                            cm.npc_LeaveField("oid=2826976");
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
                }
            }
        }
    }
};