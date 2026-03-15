var status = -1;
var selectionLog = [];

function start(d, c, b) {
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
            cm.Hidden_background("crystal", 1, 0, 0, 0);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(600)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 394, -5);
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#呼,这样算是基本成型了。", 37, 3001351, false, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#制作耗时对比平均速度已大幅缩短。", 37, 3001300, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#这次制作的物品对于发挥集中力极有帮助。", 37, 3001300, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#是吗？其实……我想制作出更好的造型物。", 37, 3001351, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#每年天神祭时,充斥整个广场的水晶光芒……你也记得吧,利奥？", 37, 3001351, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.updateInfoQuest(34813, "529=1;d=1;m=0;item2=1;exp=1;d2=1");
                                            cm.setStandAloneMode(false);
                                            cm.dispose();
                                            cm.warp(940202031, 0, true)
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
            cm.Hidden_background("crystal", 1, 0, 0, 0);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(300)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 300, -70)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(300)
                        } else {
                            if (status === a++) {
                                cm.onTeleport(0, 3, cm.getPlayer().getId(), 394, -5);
                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                cm.sendNormalTalk_Bottom("#face0#材料都集齐了,不如开始吧？", 37, 3001351, false, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_ForcedFlip10(1, 50);
                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_OneTimeAction(6, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(800)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_OneTimeAction(6, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(800)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_OneTimeAction(6, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(800)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_OneTimeAction(6, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(100)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceCompleteQuest(34814);
                                                        cm.inGameDirectionEvent_AskAnswerTime(100)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.updateInfoQuest(34814, "exp=1");
                                                            cm.gainExp(14986);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.gainItem(4036169, -10);
                                                                cm.sendNormalTalk_Bottom("#face0#呼,看起来好像还不错。", 37, 3001351, false, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#这么晚了,你干什么呢？", 37, 3001309, true, true, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.npc_ChangeController(3001309, "oid=916560", -40, 25, 8, -90, 10, 0, true, 0, false);
                                                                        cm.npc_SetSpecialAction("oid=916560", "summon", 0, 0);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/Skill.img/152001004/Use", 100);
                                                                        cm.npc_SetSpecialAction("oid=916560", "appear", 0, 1);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#那个……", 37, 3001351, false, true, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#用于……庆典的……造型物……", 37, 3001351, true, true, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#祭典？你是说古代神的天神祭？", 37, 3001309, true, true, 1)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 300, 50)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.npc_SetForceMove("oid=916560", 1, 150, 100);
                                                                                                    cm.sendNormalTalk_Bottom("#face0#难道你要用这块破铜烂铁举行神圣的天神祭？这简直是有辱圣洁的水晶魔法……", 37, 3001309, false, true, 1)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#你说让工程师参加天神祭,这简直是对古代平民翼人之神最大的侮辱！", 37, 3001309, true, true, 1)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#可是……", 37, 3001351, true, true, 1)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#少废话,赶快把那不祥之物扔掉。", 37, 3001309, true, true, 1)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#如果你不想让水晶学院名誉扫地,就趁早离开这。", 37, 3001309, true, true, 1)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#……", 37, 3001351, true, true, 1)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.npc_setForceFlip("oid=916560", -1);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(30)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#真叫人无语……", 37, 3001309, false, true, 1)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.npc_SetSpecialAction("oid=916560", "disappear", 0, 1);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.npc_LeaveField("oid=916560");
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#……", 37, 3001351, false, true, 1)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#据古书记载,古代平民翼人之神为折翼的平民翼人发明了机械翅膀。", 37, 3001300, true, true, 1)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#因此机械和水晶的融合反倒正合古代神的心意。", 37, 3001300, true, true, 1)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#好……谢谢你,利奥………", 37, 3001351, true, true, 1)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#呼……快集中精力制作造型物吧。", 37, 3001351, true, true, 1)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.setStandAloneMode(false);
                                                                                                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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