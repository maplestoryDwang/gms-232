var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

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
            cm.sendNormalTalk_Bottom("南哈特？刚刚希纳斯女皇把他喊过去了。", 37, 1540457, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("他可能去了会议室吧？因为那家伙主要负责用脑子。", 37, 1540457, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(33167, "");
                    cm.sendNormalTalk_Bottom("会议室进去后向左走就到了。", 37, 1540457, true, false)
                } else {
                    if (status === a++) {
                        cm.npc_LeaveField("oid=34263");
                        cm.dispose()
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
            cm.sendNormalTalk_Bottom("欢迎你，#h0#。发生了什么事情吗？", 37, 1540450, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("没有啊，我没有喊过南哈特啊？你确定听说是我喊了南哈特？", 37, 1540450, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("……那个，你们知不知道？黑色之翼中有人擅长使用变身术。", 37, 1540450, true, true)
                } else {
                    if (status === a++) {
                        cm.curNodeEventEnd(true);
                        cm.eventSKill(0);
                        cm.setInGameDirectionMode(true, false, true);
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#敌人肯定会采用相同的手段。他们会变身为我军成员，混入我们内部。", 37, 1540451, false, true)
                        } else {
                            if (status === a++) {
                                cm.getWeatherEffectNotice("已经掌握到了军团长们的进攻征兆！我们需要冒险岛勇士们的帮助！", 128, 5000, 1);
                                cm.sendNormalTalk_Bottom("#face1#一旦发生战斗，变身术士将会是敌人中最令人头痛的。我们有必要先抓住他们。", 37, 1540451, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face1#你打算怎么做呢？", 37, 1540450, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face1#如果敌人采取这种手段，我们先装作不知道。\r\n然后装作中了他们的陷阱，再把他们活捉。", 37, 1540451, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1200)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1400)
                                            } else {
                                                if (status === a++) {
                                                    cm.eventSKill(0);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.sendNormalTalk_Bottom("……南哈特是这么说的，但我总有种不好的预感。你愿意去找找南哈特吗？", 37, 1540450, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceCompleteQuest(33167);
                                                        cm.forceStartQuest(33168, "");
                                                        cm.sendNormalTalk_Bottom("抱歉总是麻烦你。", 37, 1540450, true, false);
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
};