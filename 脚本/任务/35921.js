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
            cm.sendNormalTalk_Bottom("#face0#喂,回来啦。找齐所有罗盘碎片还是太难了吧……\r\n什么？全部找到啦！真厉害……", 36, 1013351, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#好了,快去启动罗盘吧。", 36, 1013358, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#呼呼……知道了。别催我。\r\n反正这个罗盘必须在阳光的充分照射下才能启动。", 36, 1013351, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#现在离正午还早得很呢……\r\n在这之前修好不就行了,呼噜。", 36, 1013351, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("#face0#我来把罗盘碎片拼好,你们先休息一下。\r\n到时候我叫你们。", 36, 1013351, 1)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(35921, "");
                                cm.sendNormalTalk_Bottom("#face0#哦～把四分五裂的罗盘拼好 ?\r\n哦哦～在阳光洒满山坡之前 ?", 36, 1013351, false, true, 1);
                                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35921.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
            cm.inGameDirectionEvent_PushScaleInfo(0, 1, 384000, 0, 385024, -19712)
        } else {
            if (status === a++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 1509, -102);
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
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
                            cm.sendNormalTalk_Bottom("#face0##b(距离正午好像还有不少时间。终于可以好好休息一下了。\r\n受到诅咒之后,还从来没有安心地休息过呢。)#k", 37, 1013358, false, true, 1)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                cm.inGameDirectionEvent_AskAnswerTime(1600)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face6##b(在这一刻,依然能感觉到诅咒之印在燃烧着生命力……\r\n而且速度越来越快了。)#k", 37, 1013358, false, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0##b(赫丽娜会怎么想呢？\r\n因为过度的好奇心而招致了灾祸,也许她都不会认我这个没出息的弟子吧。)#k", 37, 1013358, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0##b(说什么要去寻找其他人未曾经历过的冒险,却完全迷失了方向。\r\n这个样子……实在是没脸去见师父。)#k", 37, 1013358, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face2#勇士,你在干嘛？", 37, 1013350, false, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.npc_ChangeController(1013350, "oid=858617", 1216, -119, 40, 1166, 1266, 1, true, 500, false);
                                                        cm.npc_SetSpecialAction("oid=858617", "summon", 0, 0);
                                                        cm.npc_SetForceMove("oid=858617", 1, 150, 150);
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#!?", 37, 1013358, false, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#我刚才一个人在玩,但是看到你的表情非常悲伤。\r\n觉得不能袖手旁观,所以……", 37, 1013350, false, true, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#要是打扰了你休息,我在这里向你道歉。但是……", 37, 1013350, true, true, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#不久前我度过了一段郁郁寡欢的时光。\r\n心情非常郁闷、沉重的时候,我的表情跟刚才的你一模一样。", 37, 1013350, false, true, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1#啊,我不是说你跟我一样！\r\n我是个笨蛋、胆小鬼,但你很强……", 37, 1013350, true, true, 1)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#所,所以……我的意思是……\r\n这种时候如果能看到美丽的花,也许能让心情好一点,嘿嘿。", 37, 1013350, true, true, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face2#那会让人在不知不觉间心情变得好起来。\r\n嘻嘻……我觉得你好像非常需要,所以给你采了一朵。来,给你。", 37, 1013350, true, true, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Fever", 100);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("01", "Effect/Direction22.img/effect/PF_flower/0", 0, 0, -20, 65, -1200000, 4, 0, -1, 0, 0, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#……", 37, 1013358, false, true, 1)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.fieldEffect_ProcessOnOffLayer("01", "", 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#哇,哇哇,完成了！", 37, 1013351, false, true, 1)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#古代罗盘完成了！", 37, 1013351, true, true, 1)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face2#啊,高尔根好像启动了罗盘！\r\n快去看看吧。快点！快点！去启动罗盘吧～！", 37, 1013350, false, true, 1)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.npc_LeaveField("oid=858617");
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 1, 256000, -256, -129, -129)
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
                                                                                                                                                        cm.forceCompleteQuest(35921);
                                                                                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                        cm.gainExp(2727);
                                                                                                                                                        cm.updateInfoQuest(35948, "00=h0;10=h0;11=h1;02=h1;21=h0;12=h0;22=h1;13=h0;23=h1;14=h0;24=h0;15=h0;06=h0;25=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h1;19=h0");
                                                                                                                                                        cm.npc_LeaveField("oid=895");
                                                                                                                                                        cm.npc_LeaveField("oid=897");
                                                                                                                                                        cm.npc_LeaveField("oid=898");
                                                                                                                                                        cm.askAcceptDecline_Bottom("#face0#再过一会儿,就是一天中阳光最强的时间。\r\n做好心理准备吧,嗯哼。", 36, 1013351, 1)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.dispose();
                                                                                                                                                            cm.warp(910090310, 0, false);
                                                                                                                                                            cm.setStandAloneMode(false);
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
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
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