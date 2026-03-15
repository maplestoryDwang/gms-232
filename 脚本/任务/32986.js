var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 288, -30);
            cm.inGameDirectionEvent_ForcedFlip(1);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不是怪物……是个少女？难道一切都是谎言？", 57, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#影牙，你来这里干什么？", 37, 2560000, true, true)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_PushScaleInfo(300, 0, 2000, 300, 340, 17)
                        } else {
                            if (status === a++) {
                                cm.npc_ChangeController(2560115, "oid=3590510", 480, -30, 89, 430, 530, 1, false, 0, false);
                                cm.npc_SetSpecialAction("oid=3590510", "summon", 0, 0);
                                cm.updateInfoQuest(32999, "00=h0;10=h0;01=h0;02=h0;20=h0;11=h0;21=h1;12=h01;03=h0;13=h0;04=h0;14=h1;05=h0;15=h1;06=h0;16=h0;07=h0;08=h1;17=h0;18=h0;19=h0");
                                cm.sendNormalTalk_Bottom("队长？！你怎么在这里……", 57, 0, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("请告诉我。真相是什么？为什么要欺骗我们？", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face1#没办法。那就给你看看吧。你一直渴望见到的真相。", 37, 2560000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, 374, -30, 1, 0, 1, 1, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                            } else {
                                                if (status === a++) {
                                                    cm.npc_ChangeController(2560010, "oid=3590520", 374, -30, 87, 324, 424, 1, false, 0, false);
                                                    cm.npc_SetSpecialAction("oid=3590520", "summon", 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face1#来，好好看吧。", 37, 2560000, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect3.img/DLep5/1", 0, 4000, 0, 0, 0, 4, 1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(4000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("这……就是我？", 57, 0, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#没错。在镜世界中创造出来的存在。你不过是个#b影子怪物#k。", 37, 2560000, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face1#外面的世界对你来说是毫无意义的。\r\n因为从一开始你就不可能出去。", 37, 2560000, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("这……怎么可能……", 57, 0, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1#我曾经警告过你。", 37, 2560000, false, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#所谓的真相，其实一文不值。", 37, 2560000, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 100, 0, 0, 0, 0, 0);
                                                                                                    cm.npc_LeaveField("oid=3590510");
                                                                                                    cm.npc_LeaveField("oid=3590510");
                                                                                                    cm.npc_LeaveField("oid=3590520");
                                                                                                    cm.npc_LeaveField("oid=3590520");
                                                                                                    cm.setStandAloneMode(false);
                                                                                                    cm.eventSKill(0);
                                                                                                    cm.dispose();
                                                                                                    cm.warp(307090030, 0, false);
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
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("狩猎结束了。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#你的表情怎么这么奇怪？", 37, 2560003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯？那，那个……剩下的影子中和剂……变成了清水。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face16#嗯……果然是因为这个啊。我说你为什么和其他人不一样。", 37, 2560003, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("嗯？", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face16#迎月果。那东西让中和剂的成分失效了。", 37, 2560003, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("那是什么意思？", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#跟我来。我想带你去一个地方。", 37, 2560003, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.updateInfoQuest(32982, "exp=1");
                                            cm.forceCompleteQuest(32982);
                                            cm.updateInfoQuest(32999, "10=h0;01=h0;02=h0;20=h0;11=h0;21=h0;12=h01;03=h0;13=h0;04=h0;14=h1;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h0;18=h0;19=h0");
                                            cm.updateInfoQuest(32999, "10=h0;01=h0;02=h0;20=h1;11=h0;21=h0;12=h01;03=h0;13=h0;04=h0;14=h1;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h0;18=h0;19=h0");
                                            cm.dispose();
                                            cm.warp(307000210)
                                        } else {
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
};