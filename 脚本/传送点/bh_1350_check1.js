function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
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
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom("踏板有三个？", 37, 1540455, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("三个的话，我们也是啊？没错吧？我们是三个啊？\r\n…………对吗？", 37, 1540454, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("哥哥们……\r\n我们不要再耽误时间了，每人到一个踏板上吧。", 37, 1540456, true, true)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.setPartner(0, 1540733, 0, 0);
                            cm.setPartner(0, 1540734, 0, 0);
                            cm.setPartner(0, 1540735, 0, 0);
                            cm.npc_ChangeController(1540454, "oid=26076998", 176, -85, 8, 126, 226, 0, true, 0, false);
                            cm.npc_SetSpecialAction("oid=26076998", "summon", 0, 0);
                            cm.npc_ChangeController(1540455, "oid=26076999", 220, -85, 8, 170, 270, 0, true, 0, false);
                            cm.npc_SetSpecialAction("oid=26076999", "summon", 0, 0);
                            cm.npc_ChangeController(1540456, "oid=26077000", 265, -85, 8, 215, 315, 0, true, 0, false);
                            cm.npc_SetSpecialAction("oid=26077000", "summon", 0, 0);
                            cm.inGameDirectionEvent_PushMoveInfo(0, 0, 400, -130)
                        } else {
                            if (status === a++) {
                                cm.onTeleport(0, 3, cm.getPlayer().getId(), 807, 16);
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1200)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                    } else {
                                        if (status === a++) {
                                            cm.npc_SetSpecialAction("oid=26076998", "spin", 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            cm.effect_Voice("Weapon.img/spear/Attack", 100)
                                        } else {
                                            if (status === a++) {
                                                cm.npc_LeaveField("oid=26076998");
                                                cm.npc_LeaveField("oid=26076998");
                                                cm.npc_ChangeController(1540454, "oid=26077307", 357, -100, 16, 307, 407, 0, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=26077307", "summon", 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                            } else {
                                                if (status === a++) {
                                                    cm.onSetBackEffect("bh_1350Red1", 1, 0, 0, 0);
                                                    cm.地图特效_开关落脚点([13], [1]);
                                                    cm.onSetBackEffect("bh_1350Gr1", 1, 1, 0, 0);
                                                    cm.地图特效_开关落脚点([13], [0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(150)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/btOpen", 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(150)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.npc_SetSpecialAction("oid=37202", "oneLight", -1, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.npc_SetForceMove("oid=26076999", 1, 100, 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.npc_SetSpecialAction("oid=26076999", "spin", 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    cm.effect_Voice("Weapon.img/spear/Attack", 100)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.npc_LeaveField("oid=26076999");
                                                                        cm.npc_LeaveField("oid=26076999");
                                                                        cm.npc_ChangeController(1540455, "oid=26077519", 515, -115, 17, 465, 565, 0, true, 0, false);
                                                                        cm.npc_SetSpecialAction("oid=26077519", "summon", 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.onSetBackEffect("bh_1350Red2", 1, 0, 0, 0);
                                                                            cm.地图特效_开关落脚点([15], [1]);
                                                                            cm.onSetBackEffect("bh_1350Gr2", 1, 1, 0, 0);
                                                                            cm.地图特效_开关落脚点([15], [0]);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(150)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/btOpen", 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(150)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.setNpcSpecialActionReset("oid=37202");
                                                                                    cm.npc_SetSpecialAction("oid=37202", "twoLight", -1, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.npc_SetForceMove("oid=26077000", 1, 200, 100);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2700)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.npc_SetSpecialAction("oid=26077000", "spin", 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            cm.effect_Voice("Weapon.img/spear/Attack", 100)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.npc_LeaveField("oid=26077000");
                                                                                                cm.npc_LeaveField("oid=26077000");
                                                                                                cm.npc_ChangeController(1540456, "oid=26077723", 675, -115, 18, 625, 725, 0, true, 0, false);
                                                                                                cm.npc_SetSpecialAction("oid=26077723", "summon", 0, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.onSetBackEffect("bh_1350Red3", 1, 0, 0, 0);
                                                                                                    cm.地图特效_开关落脚点([14], [1]);
                                                                                                    cm.onSetBackEffect("bh_1350Gr3", 1, 1, 0, 0);
                                                                                                    cm.地图特效_开关落脚点([14], [0]);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(150)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/btOpen", 100);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(150)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.setNpcSpecialActionReset("oid=37202");
                                                                                                            cm.npc_SetSpecialAction("oid=37202", "open", -1, 0);
                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/Ambience.img/elevator_open", 100);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("噢！门自动打开了。不过，如果我们下来，门肯定会重新锁上的……嗯……", 57, 0, false, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("你们先走吧，请不要担心我们。我们会去寻找其他路线的。", 37, 1540456, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("没错，队长！你先走！", 37, 1540454, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("我们咻~地一下，很快就能追上你的！", 37, 1540455, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.inGameDirectionEvent_ForcedFlip10(2, 100);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.dispose();
                                                                                                                                            cm.warp(350051400, 1, true);
                                                                                                                                            cm.npc_LeaveField("oid=26077307");
                                                                                                                                            cm.npc_LeaveField("oid=26077307");
                                                                                                                                            cm.npc_LeaveField("oid=26077519");
                                                                                                                                            cm.npc_LeaveField("oid=26077519");
                                                                                                                                            cm.npc_LeaveField("oid=26077723");
                                                                                                                                            cm.npc_LeaveField("oid=26077723")
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
            }
        }
    }
};