var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#准备好之后，到外面来。别太久……明白了吗？", 37, 2560003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("呜呜……（点头点头）", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h0;17=h1;18=h0;19=h0");
                    cm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h2;21=h0;12=h0;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h0;17=h1;18=h0;19=h0");
                    cm.OnStartNavigation(307000220, 0, "pt00", 0);
                    cm.forceStartQuest(32975, "");
                    cm.npc_LeaveField("oid=22315");
                    cm.npc_LeaveField("oid=22316");
                    cm.npc_LeaveField("oid=22319");
                    cm.npc_LeaveField("oid=22318");
                    cm.dispose()
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
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face13#呼……", 37, 2560003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("（睡着了吗？要趁机……逃走吗？）", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face15#你太慢了。", 37, 2560003, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("哎呀！我……准备了一下……", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h1;21=h0;12=h0;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h0;17=h1;18=h0;19=h0");
                            cm.sendNormalTalk_Bottom("嗯……你为什么要跟我一起走呢？", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#因为一个人很无聊。又没有其他可以相信的人。", 37, 2560003, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("你相信我？", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#那当然。毕竟我们是#r共享秘密#k的关系。", 37, 2560003, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("啊……秘密……", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.curNodeEventEnd(true);
                                                cm.eventSKill(0);
                                                cm.setInGameDirectionMode(true, false, true);
                                                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1600)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect3.img/DLep5/5", 0, 300, 0, 0, 0, 4, 1);
                                                    cm.sendNormalTalk_Bottom("#face0#这是给你的礼物，嘻嘻。", 37, 2560003, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 100, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face14#说出去……你就死定了……", 37, 2560003, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("哎呀！", 57, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.eventSKill(0);
                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                        cm.forceCompleteQuest(32975);
                                                                        cm.updateInfoQuest(32975, "exp=1");
                                                                        cm.gainExp(550003);
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
    }
};