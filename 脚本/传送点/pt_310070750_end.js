function enter() {
    if (cm.getMap().getNumMonsters() <= 0) {
        cm.openScriptNpc()
    } else {
        cm.playerMessage(5, "还有敌人没有消灭干净。");
        cm.playerMessage(-1, "还有敌人没有消灭干净。")
    }
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
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1500)
        } else {
            if (status === a++) {
                cm.npc_ChangeController(2155104, "oid=42492577", 1200, 30, 5, 1150, 1250, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=42492577", "summon", 0, 0);
                cm.npc_ChangeController(2155105, "oid=42492578", 748, -126, 19, 698, 798, 1, false, 0, false);
                cm.npc_SetSpecialAction("oid=42492578", "summon", 0, 0);
                cm.npc_ChangeController(2155113, "oid=42492579", -250, 30, 6, -300, -200, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=42492579", "summon", 0, 0);
                cm.npc_setForceFlip("oid=42492579", 1);
                cm.npc_setForceFlip("oid=42492577", 1);
                cm.npc_SetSpecialAction("oid=42492579", "dying", -1, 1);
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1500)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#该死，缝隙太小了，没法进去。\r\n不知道是不是出了故障，好像已经动不了了？", 37, 2155121, false, true)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=42492577"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#可以从那缝隙里看到里面！", 37, 2155121, false, true)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_SetHideEffect(1);
                                    cm.fieldEffect_ProcessOnOffLayer("back", "Map/Effect2.img/FieldgraveStory/illust9", 0, 500, 0, 0, 12, 4, 1, -1, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#是她！那个超级人造人在这里。\r\n呃…怎么办，难道没有什么办法吗？", 37, 2155121, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_ProcessOnOffLayer("back", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=42492577"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.npc_setForceFlip("oid=42492577", -1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_PushScaleInfo(300, 0, 2000, 300, -250, 50)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("主机…房出现……入侵者…\r\n迅速请求…后续支…援。", 37, 2155113, false, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("………预计3分钟后到达", 37, 2155113, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.npc_SetSpecialAction("oid=42492579", "die2", -1, 1);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_PushScaleInfo(300, 0, 1500, 300, 770, 50)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#该死！已经到了这里了！\r\n怎么办…快想起来，该怎么…", 37, 2155121, false, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=42492577"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#…没错！这里有条路！", 37, 2155121, false, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.npc_SetForceMove("oid=42492577", -1, 400, 200);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.npc_SetSpecialAction("oid=42492578", "open", -1, 1);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.npc_SetSpecialAction("oid=42492578", "opened", -1, 1);
                                                                                                                            cm.npc_setForceFlip("oid=42492577", 1);
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#从这里走，快点！", 37, 2155121, false, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.eventSKill(0);
                                                                                                                                cm.warp(310070491, 0, false);
                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                cm.npc_LeaveField("oid=42492577");
                                                                                                                                cm.npc_LeaveField("oid=42492577");
                                                                                                                                cm.npc_LeaveField("oid=42492578");
                                                                                                                                cm.npc_LeaveField("oid=42492578");
                                                                                                                                cm.npc_LeaveField("oid=42492579");
                                                                                                                                cm.npc_LeaveField("oid=42492579");
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