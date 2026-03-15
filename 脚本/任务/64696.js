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

function end(d, c, b) {
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
            cm.setInGameDirectionMode(true, false, true);
            cm.npc_ChangeController(9400932, "oid=1704671", 800, 300, 93, 750, 850, 1, true, false);
            cm.npc_SetSpecialAction("oid=1704671", "summon", 0, 0);
            cm.sendNewEffects(17, [1000, 1000, 2000, 600, 320])
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.npc_SetForceMove("oid=1704671", -1, 30, 100);
                    cm.sendNormalTalk_Bottom("#face1#哎，#h0#~~我们今天总是见面呢。不过你要是来买面包的，那就来晚一步了。特鲁迪家最后一个奶油面包，已经被我吃进肚子里啦！哈哈。", 37, 9400923, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b我是担心特鲁迪才来的。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#担心特鲁迪？为什么？", 37, 9400923, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b特鲁迪被我之前讲的幽灵故事吓到了。一整天都没有到广场来了……", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#特鲁迪？特鲁迪一大早就去森林了。", 37, 9400923, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b森林？", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face1#嗯，我看见他和凯蒂一起去的。", 37, 9400923, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#b(去森林看看吧！)", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.updateInfoQuest(64696, "NpcSpeech=94009551;enter=1;give=1");
                                                    cm.npc_LeaveField("oid=1704671");
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(900)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNewEffects(14, [0, 2000, 1000, 0, 0])
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNewEffects(19, [0])
                                                        } else {
                                                            if (status === a++) {
                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 600, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(600)
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
                            }
                        }
                    }
                }
            }
        }
    }
};