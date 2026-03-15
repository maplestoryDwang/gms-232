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
            cm.updateInfoQuest(100433, "50=0;43=1;47=0;65=1;49=0");
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.setStandAloneMode(true);
            cm.updateInfoQuest(100433, "50=0;43=0;47=0;65=1;49=0");
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -150, 56)
        } else {
            if (status === a++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -108, 5);
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.npc_ChangeController(9062255, "oid=32723553", -288, 5, 1, -338, -238, 0, true, 0, false);
                cm.npc_SetSpecialAction("oid=32723553", "summon", 0, 0);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1600)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("#fs24#客人，管家，女仆，还有假面绅士。", 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("#fs24#他们全部消失了。", 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("#fs24#鬼屋最终摆脱了假面绅士的诅咒", 0)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_Monologue("#fs24#只有苏菲莉亚，独自留在了宅子里。", 0)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_Monologue("#fs24#不知是何原因，苏菲莉亚并没有立刻消失", 0)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_Monologue("#fs24#花了很长时间环视鬼屋各处。", 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#哈哈，我还是第一次见这么#b冷清的#k宅子。", 37, 9062255, false, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("苏菲莉亚……你为什么现在还没有消失？ ", 57, 0, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#那是因为，我还#b没有完全摘掉假面#k。", 37, 9062255, true, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("什么意思？你不是已经摘掉假面了吗？", 57, 0, true, true, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#将我牢牢抓住的那份恐惧……\r\n正是#b要离开这个宅子的恐惧#k。", 37, 9062255, false, true, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#这里有我的一切。\r\n我的回忆，朋友，还有家人……", 37, 9062255, true, true, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#我真正的假面，就是#b这个宅子#k……\r\n脱去假面后，只有离开这座宅子，我的诅咒才会彻底消失。", 37, 9062255, true, true, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#天就要亮了……\r\n#b10月31日，今天#k，听说通向死者世界的道路只开启至太阳升起之前。", 37, 9062255, false, true, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#现在真的要……#b分别#k了，#b#h0##k。\r\n刚认识没多久，没想到这么快就要说再见了。", 37, 9062255, true, true, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("……", 57, 0, true, true, 1)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#如果不是你，我就会被#b恐惧#k牢牢困着，永远游荡在这个宅子里。", 37, 9062255, true, true, 1)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#谢谢你，我终于可以离开这个#b宅子#k……还有这个#b世界#k。", 37, 9062255, true, true, 1)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#到底有没有所谓的#b死人的世界#k……没有人能证明的了。\r\n就像我一开始说的，#b父亲#k告诉我的，就是我知道的全部了……", 37, 9062255, false, true, 1)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#但是，我决定相信……\r\n不管怎么说，这是亲爱的爸爸告诉我的。", 37, 9062255, true, true, 1)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#爸爸……应该在那里等着我吧？", 37, 9062255, false, true, 1)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.npc_SetForceMove("oid=32723553", -1, 200, 70);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, -325, 16)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(5000)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/door_open", 100);
                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction24.img/illust/0", 0, 1500, 0, -60, 12, 4, 0, -1, 0, 0, 0);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#时间太久了，我都忘记了。\r\n外面的风景原来是这么美。", 37, 9062255, false, true, 1)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0##b#h0##k。", 37, 9062255, true, true, 1)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer("01", "Effect/Direction24.img/illust/1", 0, 1500, 0, -60, 12, 4, 0, -1, 0, 0, 0);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#谢谢你帮我克服恐惧，真的……很感谢你。", 37, 9062275, false, true, 1)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#那么，我要去找我的爸爸了。", 37, 9062275, false, true, 1)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("再见，苏菲莉亚……", 57, 0, false, true, 1)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("01", "", 2, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 3000, 0);
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                                                                                                                                                                            cm.updateInfoQuest(100433, "50=0;43=2;47=0;65=1;49=0");
                                                                                                                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                                                                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                            cm.setStandAloneMode(false);
                                                                                                                                                                                            cm.npc_LeaveField("oid=32723553");
                                                                                                                                                                                            cm.dispose();
                                                                                                                                                                                            cm.warp(993175482, 0, false)
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

function stage0(d, c, b) {
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100460.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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