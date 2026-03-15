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
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.setStandAloneMode(true);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -100, -40);
            cm.inGameDirectionEvent_ForcedFlip(1);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#现在更紧急的问题是斗战俱乐部发生骚乱的消息很快就会传到图鲁的耳朵里……", 37, 3004000, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#性格多疑的图鲁肯定会认为是我们把东西给转移走的。", 37, 3004000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("（这意味着塞妮娅处境会变得很危险！）", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#现在还不是时候，快回……", 37, 3004000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.npc_ChangeController(3001259, "oid=7136921", 300, -50, 16, 250, 350, 1, false, 400, false);
                                    cm.npc_SetSpecialAction("oid=7136921", "summon", 0, 0);
                                    cm.inGameDirectionEvent_PushScaleInfo(200, 1000, 200, 275, -105)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(600)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#黑鸦，斗战俱乐部真的变成荒地了吗？\r\n你打算怎么收拾这局面……", 37, 3001259, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#考尔保？不是，不是我，是佩隆……", 37, 3004000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#！！", 37, 3004000, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#所以……信号……", 37, 3004000, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("（你发现什么了吗？）", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#考尔保，我有一事相求。\r\n你去豪华观光办公室，找到一个叫做塞妮娅的人，并保护她的安全。", 37, 3004000, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#什么？为什么是我？", 37, 3001259, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#再这样下去，塞妮娅肯定会被卖给奴隶商人的。", 37, 3004000, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#那和我有什么关系？", 37, 3001259, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#我们被当成奴隶带到这里的时候，也是在别人的帮助下才得以逃脱的。", 37, 3004000, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#你还记得那个人说的话吗？", 37, 3004000, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#……", 37, 3001259, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#切，知道呀！", 37, 3001259, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.askAcceptDecline_Bottom("#face0#走吧，华生！净化装置在#b下水道#k！", 37, 3004000)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("下水道？", 57, 0, false, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                            cm.setStandAloneMode(false);
                                                                                                            cm.npc_LeaveField("oid=7136921");
                                                                                                            cm.npc_LeaveField("oid=7136921");
                                                                                                            cm.updateInfoQuest(37117, "dir=on");
                                                                                                            cm.OnStartNavigation(402000450, 0, "", 0);
                                                                                                            cm.updateInfoQuest(37100, "40=h1;31=h0;41=h1;50=h1;32=h0;42=h1;51=h1;33=h1;43=h1;52=h1;dir=off;44=h1;53=h1;35=h1;36=h1;37=h1;47=h1;38=h1;39=h1");
                                                                                                            cm.forceStartQuest(37117, "");
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.setStandAloneMode(true);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 889, -223);
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("到底是怎么回事？你怎么会知道净化装置在这里？", 57, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#让飞艇坠落的#b拉宝拉托利安#k的信号最后是从斗战俱乐部发出的，后来就中断了。", 37, 3004000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#不是在斗战俱乐部停止运行的。\r\n应该是进入了斗战俱乐部的下面，电波无法到达的下水道。", 37, 3004000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("！！", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#佩隆的交易账本上也有记录。\r\n#b配送地点位于下水道#k的交易。", 37, 3004000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("导致飞艇坠落的拉宝拉托利安是佩隆出售的。", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#说话。你是谁？为什么要转移这个东西？", 37, 3004000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#嘟嘟囔囔", 37, 3004008, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#什么？不是你把它传送到这里来的？", 37, 3004000, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#机器从最开始……就被设计成……要传送到这里。", 37, 3004008, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("那是什么？", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#把布……揭开看看……", 37, 3004008, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_QTE(3)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/savageT/cloth", 250);
                                                                            cm.updateInfoQuest(37117, "tag=1;dir=off");
                                                                            cm.Hidden_background("402000450_tag1", 1, 0, 0, 0);
                                                                            cm.Hidden_background("402000450_tag2", 1, 1, 0, 0);
                                                                            cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/gas", 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/gas", 100);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("怎么可能……！", 57, 0, false, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#这，这个……不可能是净化装置嘛！这到底……", 37, 3004000, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#塞妮娅一直在等着……其被组合起来……然后打开电源……", 37, 3004008, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#只要这样……就会在自己制定的地方…… 自动运行……", 37, 3004008, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#塞妮娅……？", 37, 3004000, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("等一下，这个标记……", 57, 0, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.fieldEffect_PlayBGM("Bgm47/HuntingGround", 0, 0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction21.img/SavageT/illust/5", 0, 500, 0, -80, 12, 4, 0);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#这个标记是……", 37, 3004000, false, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0##r#fs18#安哥拉……公司……", 37, 3004000, true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#塞妮娅所属的#b海上明灯#k难道……？", 37, 3004000, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#！！", 37, 3004000, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#考尔保很危险！", 37, 3004000, false, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 500, 0, 0, 0, 0, 0);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.dispose();
                                                                                                                                                                    cm.warp(940203209, 0)
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
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