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
            cm.Hidden_background("obj", 1, 0, 0, 0);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.sendNormalTalk_Bottom("#face0#平民翼人的天神祭也顺利结束了……好,那现在……", 37, 3001351, false, true, 1)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.forceStartQuest(10732, "");
                cm.forceStartQuest(10734, "");
                cm.forceStartQuest(10736, "");
                cm.forceStartQuest(10738, "");
                cm.forceStartQuest(10740, "");
                cm.forceStartQuest(10742, "");
                cm.forceStartQuest(10744, "");
                cm.forceStartQuest(10746, "");
                cm.forceStartQuest(10748, "");
                cm.forceStartQuest(10750, "");
                cm.forceStartQuest(10752, "");
                cm.forceStartQuest(10754, "");
                cm.forceStartQuest(10762, "");
                cm.forceStartQuest(10764, "");
                cm.forceStartQuest(10766, "");
                cm.forceStartQuest(10768, "");
                cm.forceStartQuest(10770, "");
                cm.forceStartQuest(10772, "");
                cm.forceStartQuest(10774, "");
                cm.forceStartQuest(10776, "");
                cm.forceStartQuest(10778, "");
                cm.forceStartQuest(10780, "");
                cm.forceStartQuest(10782, "");
                cm.forceStartQuest(10784, "");
                cm.forceStartQuest(15528, "");
                cm.forceStartQuest(15530, "");
                cm.forceStartQuest(15532, "");
                cm.forceStartQuest(15534, "");
                cm.forceStartQuest(15536, "");
                cm.forceStartQuest(15538, "");
                cm.forceStartQuest(15540, "");
                cm.forceStartQuest(15542, "");
                cm.forceStartQuest(15544, "");
                cm.forceStartQuest(15546, "");
                cm.forceStartQuest(15548, "");
                cm.forceStartQuest(15550, "");
                cm.forceStartQuest(16450, "");
                cm.forceStartQuest(16452, "");
                cm.forceStartQuest(16453, "");
                cm.forceStartQuest(16454, "");
                cm.forceStartQuest(16455, "");
                cm.forceStartQuest(16486, "");
                cm.forceStartQuest(16487, "");
                cm.forceStartQuest(16488, "");
                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                cm.setInGameDirectionMode(false, true, false);
                cm.updateInfoQuest(34816, "d=1;fin=1;exp=1;d1=1");
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, false);
                cm.setStandAloneMode(true);
                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 394, -5);
                cm.inGameDirectionEvent_AskAnswerTime(100)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_ForcedFlip(-1);
                    cm.inGameDirectionEvent_AskAnswerTime(100)
                } else {
                    if (status === a++) {
                        cm.npc_ChangeController(3001300, "oid=916900", 150, 8, 5, 100, 200, 0, true, 0, false);
                        cm.npc_SetSpecialAction("oid=916900", "summon", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(100)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face6#利奥,难道你不想有个朋友吗？", 37, 3001351, false, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#人工智能不需要什么朋友。", 37, 3001300, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face7#可如果真的有朋友了,说不定你会很高兴！就像我制造了你之后,不知道有多开心！", 37, 3001351, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#谢谢你能这么说。", 37, 3001300, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face6#其实我想把造型物上多余的装饰去掉,改造成小机器人。", 37, 3001351, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#你看起来还不错,但能否成为我的朋友还未可知。", 37, 3001300, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face2#好,总之希望你们能好好相处！那开始改造吧？？", 37, 3001351, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.updateInfoQuest(34817, "m=1");
                                                                cm.forceStartQuest(34817, "");
                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face7#好,完成了！", 37, 3001351, false, true, 1)
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
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#哇！我叫玛奇那！你叫什么？", 37, 3001312, false, true, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face5#你好,玛奇那！我是伊利温。他是利奥。", 37, 3001351, true, true, 1)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#很高兴见到你们！伊利温、利奥！", 37, 3001312, true, true, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face3#啊……你好。这机器人还真吵……", 37, 3001300, true, true, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#利奥,你刚刚是惊慌了吗？以前从没见你这样过？", 37, 3001351, true, true, 1)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.userSetFieldFloating(402000529, 2, 2, 2);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.userSetFieldFloating(402000529, 3, 3, 3);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.userSetFieldFloating(402000529, 0, 0, 0);
                                                                                                                cm.sendNormalTalk_Bottom("#face7#嗯？这是什么声音？", 37, 3001351, false, true, 1)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.userSetFieldFloating(402000529, 2, 2, 2);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.userSetFieldFloating(402000529, 3, 3, 3);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.userSetFieldFloating(402000529, 0, 0, 0);
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#外面貌似很乱。", 37, 3001300, false, true, 1)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face9#那就去看看吧。", 37, 3001351, true, true, 1)
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
                                                                                                                                                cm.npc_LeaveField("oid=916900");
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                    cm.getTopMsgFont("用练习室左侧的传送口到外面去。", 3, 20, 4, 0, 0);
                                                                                                                                                    cm.playerMessage(5, "用练习室左侧的传送口到外面去。");
                                                                                                                                                    cm.OnStartNavigation(402000529, 0, "pt_l", 34817);
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#哇！我就在这等。你到走廊这来吧。", 37, 3001312, false, true, 1);
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