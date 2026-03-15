var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.dispose()
        } else {
            cm.dispose()
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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -78, 250);
            cm.Hidden_background("DL5_m", 1, 1, 0, 0);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 0, 313)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.sendNormalTalk_Bottom("（幕后黑手……威尔队长怎么会……）", 57, 0, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("（虽然确实有很多疑点……\r\n不，不可能。他是多么慈祥的人啊……）", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("（况且欺骗我们对他又有什么好处呢？）", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1200)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1400)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("……就是这样。", 57, 0, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#是吗，一定很有意思，呵呵呵。艾特的性格真是让人意外。", 37, 2560000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#还有呢？即便是琐碎的事情也好，我都想听听。", 37, 2560000, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("那个……他发现了#b真实之药#k的配方。", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#真实之药？啊，是那个啊。我也曾经研究过。", 37, 2560000, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0##b一撮月光#k让我伤透了脑筋。\r\n我花了很长时间找到了替代的东西……但是没有尝试。", 37, 2560000, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("嗯？为什么……？（替代的东西，是说#b迎月花#k吗？）", 57, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#因为我发现那是#r毫无意义#k的东西。", 37, 2560000, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("毫无意义……？", 57, 0, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#通过炼金术来发现真相……", 37, 2560000, false, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0##fs18#不是很奇怪吗？", 37, 2560000, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                                                        cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face16#所以，如果有人跟你说#r“奇怪”#k，一定要小心。", 37, 2560003, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face16#因为我认为那个人就是幕后黑手。", 37, 2560003, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                                                                    cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("是，是，是的，没错。", 57, 0, false, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("那我……该说的好像都说完了。我能出去了吗？", 57, 0, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#好的，辛苦了，影牙。", 37, 2560000, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#对了，有件事你必须记住。抱歉总是跟你唠叨同样的事……", 37, 2560000, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                        cm.sendNormalTalk_Bottom("#face1#绝对不能#fs18##r怀疑使命#k。\r\n你应该还没忘记吧？", 37, 2560000, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("当……当然。", 57, 0, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face1#艾特一定是想到神殿去……\r\n他会以真相为诱饵，来利用你。", 37, 2560000, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#所以千万别相信他。", 37, 2560000, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("我会……记住的。", 57, 0, true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("（快点出去吧。）", 57, 0, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.inGameDirectionEvent_ForcedFlip(0);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip10(1, 300);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 2000, 3000, 189, 313)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.npc_ChangeController(2560005, "oid=3583618", 220, 263, 10, 170, 270, 1, false, 1000, false);
                                                                                                                                                                cm.npc_SetSpecialAction("oid=3583618", "summon", 0, 0);
                                                                                                                                                                cm.npc_ChangeController(2560001, "oid=3583619", 300, 263, 10, 250, 350, 1, false, 1000, false);
                                                                                                                                                                cm.npc_SetSpecialAction("oid=3583619", "summon", 0, 0);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#你没事吧？", 37, 2560005, false, true)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#他执着地想要知道自己的真面目。影牙一定会……", 37, 2560005, true, true)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#是的。但是迎月花代替不了月亮，只不过是幻象而已。", 37, 2560000, false, true);
                                                                                                                                                                                    cm.effect_Voice("Voice3.img/DLep5/will/F_1-1.mp3", 100)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0##fn？？？？#月亮落下去之后，很快就会凋谢了。", 37, 2560000, false, true);
                                                                                                                                                                                            cm.effect_Voice("Voice3.img/DLep5/will/F_2-1.mp3", 100)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
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
                                                                                                                                                                                                                    cm.updateInfoQuest(32980, "exp=1");
                                                                                                                                                                                                                    cm.gainExp(550003);
                                                                                                                                                                                                                    cm.forceCompleteQuest(32980);
                                                                                                                                                                                                                    cm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h01;03=h1;13=h0;04=h0;14=h1;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h1;18=h0;19=h0");
                                                                                                                                                                                                                    cm.updateInfoQuest(32999, "10=h0;01=h0;02=h0;20=h0;11=h0;21=h0;12=h01;03=h1;13=h0;04=h0;14=h1;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h1;18=h0;19=h0");
                                                                                                                                                                                                                    cm.updateInfoQuest(32999, "10=h0;01=h0;02=h0;20=h0;11=h0;21=h0;12=h01;03=h1;13=h0;04=h0;14=h1;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h0;18=h0;19=h0");
                                                                                                                                                                                                                    cm.eventSKill(0);
                                                                                                                                                                                                                    cm.dispose();
                                                                                                                                                                                                                    cm.warp(307000100, 4, false);
                                                                                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=3583618");
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=3583618");
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=3583619");
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=3583619")
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }
                                                                                                                                                                                                        }
                                                                                                                                                                                                    }
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
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