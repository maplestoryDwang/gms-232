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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.sendNewEffects(17, [0, 1000, 2000, -80, 120])
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_MoveAction(1);
                cm.inGameDirectionEvent_AskAnswerTime(1)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), 0, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/knock1", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#你没听到什么声音吗？", 37, 9400921, false, true)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/knock1", 128);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#…？", 37, 9400920, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/knock2", 128);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face1#看来有谁找来了吧！", 37, 9400921, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#b应该没什么人要来啊……？", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.npc_ChangeController(9400935, "oid=11111503", -250, 100, 0);
                                                        cm.npc_SetSpecialAction("oid=11111503", "summon", 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#勇者大人！", 37, 9400926, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.npc_SetForceMove("oid=11111503", 1, 150, 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#[50个#i2010058:##t2010058#]\r\n这是给你的礼物……！", 37, 9400926, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#欢迎你来到我们村子！", 37, 9400926, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.updateInfoQuest(64696, "give=1");
                                                                            cm.sendNormalTalk_Bottom("#face1#你~~妈妈允许你这么做了吗？", 37, 9400920, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.gainItem(2010058, 50);
                                                                                cm.sendNormalTalk_Bottom("#face0#当然了！", 37, 9400926, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#哇，#h0#真是太幸运了~ 特鲁迪家的奶油面包真的很好吃。充满了柔软奶油的蓬松面包，吃下一口后，在嘴里融化开来……可以说是让人感觉到幸福就在身边的味道吧！", 37, 9400921, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#b……啊……那我分你一点吧？", 57, 0, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face1#啊，不用了！这是给#h0#的乔迁礼物嘛。", 37, 9400921, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#b谢谢你，特鲁迪！我会好好吃的！", 57, 0, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.npc_setForceFlip("oid=11111503", -1);
                                                                                                    cm.npc_SetForceMove("oid=11111503", -1, 100, 100);
                                                                                                    cm.sendNormalTalk_Bottom("#face1#啊啊啊~~", 37, 9400926, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.npc_LeaveField("oid=11111503");
                                                                                                        cm.sendNewEffects(14, [0, 2000, 1000, 0, 0])
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNewEffects(19, [0])
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                cm.sendNormalTalk_Bottom("#face1#特鲁迪看来很喜欢#h0#呢！", 37, 9400921, false, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#b我没什么能够回礼的呢……", 57, 0, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#嗯~要不要办搬家聚会呢？", 37, 9400921, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#搬家聚会？", 37, 9400920, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#b搬家聚会？", 57, 0, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#邀请村民们来，用好吃的招待他们！再叫上#h0#的好友！", 37, 9400921, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#b好主意！", 57, 0, true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#哇，肯定很有趣！", 37, 9400920, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face1#好的！那就开始准备搬家聚会吧？", 37, 9400921, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.forceCompleteQuest(64596);
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