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
            cm.setInGameDirectionMode(true, false, true);
            cm.onSetMapObjectCreateLayerMore("ab", 2, "up_stair_ani", 0);
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/ABStair", 100);
            cm.onSetMapObjectCreateLayerMore("ab", 3, "up_stair_stnad", 1);
            cm.inGameDirectionEvent_AskAnswerTime(4000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3#这个装置到底是……？", 37, 1540804, false, true)
            } else {
                if (status === a++) {
                    cm.sendNewEffects(17, [5000, 1000, 900, 2300, -1400])
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(5000)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face3#看结构似乎得启动什么东西，不过该怎么做？", 37, 1540801, false, true)
                        } else {
                            if (status === a++) {
                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(500)
                            } else {
                                if (status === a++) {
                                    cm.setNumberForQuestCustomData(33900, 6);
                                    cm.showMapleHero();
                                    cm.mapleHeroSetList([6]);
                                    cm.setPartner(0, 1540780, 0, 0);
                                    cm.setPartner(0, 1540781, 0, 0);
                                    cm.setPartner(0, 1540782, 0, 0);
                                    cm.setPartner(0, 1540783, 0, 0);
                                    cm.setPartner(0, 1540784, 0, 0);
                                    cm.setPartner(0, 1540785, 0, 0);
                                    cm.setPartner(0, 1540786, 0, 0);
                                    cm.getPlayer().removeDragon();
                                    cm.npc_ChangeController(1540804, "oid=288620791", 1400, -890, 10, 1350, 1450, 0, true, 0, false);
                                    cm.npc_SetSpecialAction("oid=288620791", "summon", 0, 0);
                                    cm.npc_ChangeController(1540801, "oid=288620792", 1680, -890, 9, 1630, 1730, 0, true, 0, false);
                                    cm.npc_SetSpecialAction("oid=288620792", "summon", 0, 0);
                                    cm.npc_ChangeController(1540803, "oid=288620793", 1600, -890, 9, 1550, 1650, 0, true, 0, false);
                                    cm.npc_SetSpecialAction("oid=288620793", "summon", 0, 0);
                                    cm.npc_ChangeController(1540807, "oid=288620794", 1500, -890, 10, 1450, 1550, 0, true, 0, false);
                                    cm.npc_SetSpecialAction("oid=288620794", "summon", 0, 0);
                                    cm.npc_ChangeController(1540805, "oid=288620795", 1760, -890, 9, 1710, 1810, 0, true, 0, false);
                                    cm.npc_SetSpecialAction("oid=288620795", "summon", 0, 0);
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 1800, -850)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_SetHideEffect(1);
                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("龙神，该你上场了。", 37, 1540803, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.npc_SetForceMove("oid=288620795", 1, 140, 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(3500)
                                            } else {
                                                if (status === a++) {
                                                    cm.npc_setForceFlip("oid=288620795", -1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face4#遗迹没有反应……我也不知道到底该怎么做。", 37, 1540805, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face4#等下，都到这个地步了？！", 37, 1540801, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#已经没有时间耽搁了。", 37, 1540803, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("主人，加油！", 37, 1540807, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face4#额……如果我不做点什么……！", 37, 1540805, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("肩膀太用力了。", 37, 1540804, false, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face4#！", 37, 1540805, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 1500, -850)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.npc_SetForceMove("oid=288620791", 1, 340, 100);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, 1800, -850)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(4000)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("你是个不完整的魔法师，没有一个真正的师父，也没有受过正规的训练。", 37, 1540804, false, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("但是这并不代表你什么都做不了。", 37, 1540804, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("现在你的心里之所以会乱糟糟的，都是出于对自己的怀疑。\r\n既然是魔法师，就要对自己有十足的信心。", 37, 1540804, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.npc_setForceFlip("oid=288620795", 1);
                                                                                                                            cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/dragonMark/PSD", "animation", "", "mark"], [1, 1, 1, 90000, 0, 0, 0, 1]);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face3#对自己有十足的信心……", 37, 1540805, false, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("记起来吧，弗里德究竟是如何将你引到这里来的。", 37, 1540804, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.fieldEffect_取消复合图片动画("mark", 1, 1000);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 1870, -950)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.userSetFieldFloating(350123600, 5, 5, 5);
                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.onSetMapObjectCreateLayerMore("ab", 2, "air_piece_rising", 0);
                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/AB", 100);
                                                                                                                                                                    cm.onSetMapObjectCreateLayerMore("ab", 3, "air_piece stand", 1);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(4000)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.setAmbience("SoundEff.img/HofM/act2/ABLOOP", 70, 60);
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#遗迹……！", 37, 1540801, false, true)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect2.img/HofM/ACT2_awakening/0", 0, 1000, 0, 0, 20, 4, 0);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#弗里德，我一直都在怀疑，从一开始发现米乐一直到现在。", 37, 1540805, false, true)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#为什么生于平凡农家的我会被赋予这样的命运，我实在是没法理解。", 37, 1540805, true, true)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face3#你想要留给我的到底是什么……\r\n我现在想要在这里找到答案！", 37, 1540805, true, true)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer("1", "Map/Effect2.img/HofM/ACT2_awakening/1", 0, 1000, 0, 0, 22, 4, 0);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 500, 0, 0, 0, 0, 0);
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("1", "", 2, 500, 0, 0, 0, 0, 0);
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                cm.playSoundEffDirectly("SoundEff.img/HofM/act2/ABLOOP");
                                                                                                                                                                                                                cm.onSetMapObjectCreateLayerMore("ab", 2, "air_piece final", 0);
                                                                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/AB4", 100);
                                                                                                                                                                                                                cm.onSetMapObjectCreateLayerMore("ab", 3, "air_piece_loop", 1);
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1300)
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                    cm.userSetFieldFloating(350123600, 5, 5, 5);
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                        cm.userSetFieldFloating(350123600, 0, 0, 0);
                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(4700)
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                            cm.userSetFieldFloating(350123600, 5, 5, 5);
                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                cm.userSetFieldFloating(350123600, 0, 0, 0);
                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("WhiteOut", "Map/Effect2.img/WhiteOut", 0, 2000, 0, 0, 30, 4, 0);
                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                                                                                        cm.playVideoByScript("Heroes2.avi")
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                            cm.dispose();
                                                                                                                                                                                                                                            cm.warp(350123900, 0, true);
                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=288620791");
                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=288620791");
                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=288620792");
                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=288620792");
                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=288620793");
                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=288620793");
                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=288620794");
                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=288620794");
                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=288620795");
                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=288620795")
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