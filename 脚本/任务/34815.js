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
            cm.sendNormalTalk_Bottom("#face0#这次去找一种更稀有的金属#i4036170# #b#t4036170##k吧。这次差不多也需要#b10个#k左右。", 36, 3001351, false, true, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#决定立即前往#r#o2400405##k所在地吗？\r\n#b(接受时将自动移动。)", 36, 3001300, 1)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(34815, "");
                    cm.dispose();
                    cm.warp(402000509, 0, false)
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
                                cm.sendNormalTalk_Bottom("#face0#不如重新制作吧？", 37, 3001351, false, true, 1)
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
                                                        cm.forceCompleteQuest(34815);
                                                        cm.inGameDirectionEvent_AskAnswerTime(100)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.updateInfoQuest(34815, "exp=1");
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.gainItem(4036170, -10);
                                                                cm.sendNormalTalk_Bottom("#face0#呼,这样算是初具雏形了吧？", 37, 3001351, false, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.Hidden_background("crystal", 1, 1, 0, 0);
                                                                    cm.onSetMapTagedObjectVisible(1, "crystal", 512);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.onSetMapTagedObjectVisible(1, "crystal", 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_ForcedFlip(1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl"], [0, 10, 0, 1, 0, 0, 0, 0, 0]);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#嗯？好像有东西在闪？", 37, 3001351, false, true, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_PushScaleInfo(900, 0, 1000, 900, 600, -70)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face8#难道看错了？", 37, 3001351, false, true, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.onSetMapTagedObjectVisible(1, "crystal", 0);
                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_ForcedFlip10(2, 350);
                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, 800, 0)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face6#哦！利奥！你看这个！", 37, 3001351, false, true, 1)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("1", "Effect/Direction14.img/illium/tuto/4", 0, 1500, 0, -80, 12, 4, 1, -1, 0, 0, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face6#哇……这光是什么？", 37, 3001351, false, true, 1)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#目前测定值约4,000坎德拉,光源强度极高。", 37, 3001300, true, true, 1)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face6#神秘的光芒……怎么感觉心里……平静了很多？", 37, 3001351, true, true, 1)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                                        cm.onTeleport(0, 3, cm.getPlayer().getId(), 866, -163);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face2#要不要……摸一下？", 37, 3001351, false, true, 1)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 2000, 1500, 900, -80)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("1", "", 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#小心点。擅自触碰未知物是很危险的。", 37, 3001300, false, true, 1)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.inGameDirectionEvent_ForcedFlip10(2, 10);
                                                                                                                                                            cm.onSetMapTagedObjectVisible(1, "crystal", 0);
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#啊……感觉……好奇怪……", 37, 3001351, true, true, 1)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/illium/magic"], [0, 10, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/casting", 100);
                                                                                                                                                                cm.userSetFieldFloating(402000529, 3, 3, 3);
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face7#呃啊！呃啊啊！！！！", 37, 3001351, true, true, 1)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#危险！", 37, 3001301, false, true, 1)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.userSetFieldFloating(402000529, 0, 0, 0);
                                                                                                                                                                            cm.Hidden_background("crystal", 1, 0, 0, 0);
                                                                                                                                                                            cm.Hidden_background("obj", 1, 0, 0, 0);
                                                                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 2000, 1500, 880, 80)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.inGameDirectionEvent_MoveAction(8);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_MoveAction(0);
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_MoveAction(8);
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                                                                                            cm.inGameDirectionEvent_MoveAction(4);
                                                                                                                                                                                            cm.npc_ChangeController(3001301, "oid=916793", 700, 30, 6, 650, 750, 0, true, 0, false);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=916793", "summon", 0, 0);
                                                                                                                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face3#差点就出大事了。", 37, 3001301, false, true, 1)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.inGameDirectionEvent_MoveAction(0);
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face4#阿加特大人……！", 37, 3001351, true, true, 1)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#怎么回事？", 37, 3001301, true, true, 1)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#那个……", 37, 3001351, true, true, 1)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face3#别解释了。\r\n希望你今后不要再擅自使用水晶学院的物品。", 37, 3001301, true, true, 1)
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                    cm.npc_SetSpecialAction("oid=916793", "disappear", 0, 1);
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(750)
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                        cm.npc_LeaveField("oid=916793");
                                                                                                                                                                                                                        cm.npc_ChangeController(3001309, "oid=916801", -750, 30, 9, -800, -700, 0, true, 0, false);
                                                                                                                                                                                                                        cm.npc_SetSpecialAction("oid=916801", "summon", 0, 0);
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#阿加特大人……", 37, 3001351, false, true, 1)
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#不过幸好伤得不重。", 37, 3001300, true, true, 1)
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face3#……", 37, 3001351, true, true, 1)
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#不知道为什么……阿加特大人好像很生气……", 37, 3001351, true, true, 1)
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#呼……怎么办……", 37, 3001351, true, true, 1)
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 2000, -300, -70)
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(4000)
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                    cm.npc_setForceFlip("oid=916801", -1);
                                                                                                                                                                                                                                                    cm.Npc_Fadeout("oid=916801", 0, 1000);
                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                        cm.npc_LeaveField("oid=916801");
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
                                                                                                                                                                                                                                                                    cm.updateInfoQuest(34815, "d=1;exp=1");
                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                        cm.setStandAloneMode(false);
                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                                                        cm.getPlayer().levelUp();
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