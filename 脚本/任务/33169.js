var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return
    }(mode == 1) ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status == i++) {
            cm.updateInfoQuest(33168, "faker=0");
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === i++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -104, 57);
                cm.npc_ChangeController(1540469, "oid=22665677", 70, 120, 3, 20, 120, 1, false, 0, false);
                cm.npc_SetSpecialAction("oid=22665677", "summon", 0, 0);
                cm.npc_SetSpecialAction("oid=22665677", "down", -1, 1);
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200)
            } else {
                if (status === i++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                } else {
                    if (status === i++) {
                        cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 5);
                        cm.forceCompleteQuest(33144);
                        cm.gainExp(Math.pow(cm.getLevel(), 3) / 5);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
                    } else {
                        if (status === i++) {
                            cm.sendNormalTalk_Bottom("嗬嗬……等等！等等！\r\n我还有最后一句话要说。", 37, 1540469, false, true)
                        } else {
                            if (status === i++) {
                                cm.sendNormalTalk_Bottom("我最后要说的话是………… #fs30#变身！", 37, 1540469, true, true)
                            } else {
                                if (status === i++) {
                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                } else {
                                    if (status === i++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/BlackHeaven/faker/2", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                    } else {
                                        if (status === i++) {
                                            cm.fieldEffect_PlayBGM("Bgm40.img/TheDollMaster", 0, 0);
                                            cm.npc_LeaveField("oid=22665677");
                                            cm.npc_LeaveField("oid=22665677");
                                            cm.fieldEffect_PlayFieldSound("Sound/Skill.img/3110001/Use", 100);
                                            cm.npc_ChangeController(1540460, "oid=22665981", 70, 120, 3, 20, 120, 0, true, 0, false);
                                            cm.npc_SetSpecialAction("oid=22665981", "summon", 0, 0);
                                            cm.npc_SetSpecialAction("oid=22665981", "boom", 1500, 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                        } else {
                                            if (status === i++) {
                                                cm.npc_LeaveField("oid=22665981");
                                                cm.npc_LeaveField("oid=22665981");
                                                cm.npc_ChangeController(1540450, "oid=22666001", 70, 120, 3, 20, 120, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=22666001", "summon", 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                            } else {
                                                if (status === i++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/BlackHeaven/cyg/1", 100);
                                                    cm.npc_SetSpecialAction("oid=22666001", "smile", -1, 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === i++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam")
                                                    } else {
                                                        if (status === i++) {
                                                            cm.askMenu_Bottom("……你要打我吗？\r\n\r\n#L0# #b打#l#L1# #b实在下不了手#l", 37, 1540450);
                                                            cm.effect_Voice("Voice3.img/BlackHeaven/cyg/16", 100)
                                                        } else {
                                                            var reactor = "action分支" + selectionLog[13];
                                                            eval(reactor)(mode, type, selection, i)
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

function action分支0(mode, type, selection, i) {
    if (status <= i++) {
        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500)
    } else {
        if (status === i++) {
            cm.fieldEffect_ProcessOnOffLayer("00", "Map/Effect2.img/blackHeaven/cygnus", 0, 1500, 0, 0, 12, 4, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2000)
        } else {
            if (status === i++) {
                cm.askMenu_Bottom("真的吗？你真的要打我吗？\r\n\r\n#L0# #b打！#l#L1# #b还是下不了手#l", 37, 1540450);
                cm.effect_Voice("Voice3.img/BlackHeaven/cyg/17", 100)
            } else {
                if (status === i++) {
                    if (selection == 1) {
                        var reactor = "action分支1";
                        eval(reactor)(mode, type, selection, i);
                        return
                    }
                    cm.askMenu_Bottom("呜……真的吗？真的吗？\r\n\r\n#L0# #b打！！！！#l#L1# #b无论如何都下不了手#l", 37, 1540450);
                    cm.effect_Voice("Voice3.img/BlackHeaven/cyg/18", 100)
                } else {
                    if (status === i++) {
                        if (selection == 1) {
                            var reactor = "action分支1";
                            eval(reactor)(mode, type, selection, i);
                            return
                        }
                        cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 1500, 0, 0, 0, 0, 0);
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1600)
                    } else {
                        if (status === i++) {
                            cm.sendNormalTalk_Bottom("呼呼……在你犹豫的瞬间已经来不及了。", 37, 1540450, false, true)
                        } else {
                            if (status === i++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === i++) {
                                    cm.npc_ChangeController(1540474, "oid=23645418", -185, 120, 2, -235, -135, 0, false, false);
                                    cm.npc_SetSpecialAction("oid=23645418", "summon", 0, 0);
                                    cm.npc_SetSpecialAction("oid=23645418", "appear", 1320, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(1320)
                                } else {
                                    if (status === i++) {
                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                        cm.npc_SetSpecialAction("oid=23645418", "swing", 0, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(840)
                                    } else {
                                        if (status === i++) {
                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            cm.effect_Voice("Skill.img/0000100/Hit", 100)
                                        } else {
                                            if (status === i++) {
                                                cm.forceCompleteQuest(33169);
                                                cm.dispose();
                                                cm.warp(350022000, 0, true);
                                                cm.inGameDirectionEvent_ForcedFlip(0);
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

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom("呼呼……果然心软的家伙更好对付呢！", 37, 1540450, false, true)
    } else {
        if (status === a++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000)
        } else {
            if (status === a++) {
                cm.npc_ChangeController(1540474, "oid=22666361", -185, 120, 2, -235, -135, 0, false, 0, false);
                cm.npc_SetSpecialAction("oid=22666361", "summon", 0, 0);
                cm.npc_SetSpecialAction("oid=22666361", "appear", 1320, 1);
                cm.inGameDirectionEvent_AskAnswerTime(1320)
            } else {
                if (status === a++) {
                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                    cm.npc_SetSpecialAction("oid=22666361", "swing", 0, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(840)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                        cm.effect_Voice("Skill.img/0000100/Hit", 100)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(33169);
                            cm.dispose();
                            cm.warp(350022000, 0, true);
                            cm.inGameDirectionEvent_ForcedFlip(0);
                            cm.setInGameDirectionMode(false, true, false)
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