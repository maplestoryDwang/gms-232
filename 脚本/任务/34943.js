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
            cm.sendNormalTalk_Bottom("#face0#叽，叽勒……我……不，我们商队好像也得为你做点什么……", 37, 3001510, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#只是单纯地接受帮助……就不算是朋友，叽勒……", 37, 3001510, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#朋友……", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#哎呀，所以我做了点东西……你愿意收下吗？", 37, 3001510, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#叽勒, 叽勒楞……我不太习惯做这种事……好像需要深呼吸一下，嘿，嘿。", 37, 3001510, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(34943, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34943.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
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
                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -494, 668)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#啊，我用周围的零件，对你的电波装置进行了强化。叽勒……那么，就算在很远的地方……", 37, 3001510, 0, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1#哈，哈哈，电波果然很伟大，呵呵呵。", 37, 3001510, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face2#在旅行中想起我们的时候，就用这个电波装置和我们联系。我们会随时应答。", 37, 3001508, 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face3#哈哈，你一定想知道我最受欢迎的歌是哪首吧？你会被迷住的。你会永远无法忘记。", 37, 3001509, 1, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face2#我，喜欢你！", 37, 3001511, 1, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#水晶好像准备好了。现在该走了。", 37, 3001512, 1, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 10000, 0);
                                                        cm.sendNormalTalk_Bottom("#face0#我不认为这是我们最后一次见面。", 37, 3001500 + cm.getPlayer().getGender(), 0, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face9#希望有一天你们能找到自己的乐园。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#嗯，嗯……亚克，你也有事要做，对吧？希望你能实现梦想。", 37, 3001508, 0, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#那么……我们得走了……我们……一定还会再见面的。再见，祝你好运。", 37, 3001508, 1, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.teachSkill(150011074, 0, -1);
                                                                                    cm.teachSkill(150011074, 1, 1);
                                                                                    cm.updateInfoQuest(34995, "00=h1;01=h0;10=h0;02=h0;11=h0;20=h1;12=h0;04=h0;13=h0;05=h0;14=h0;23=h0;06=h0;15=h0;24=h0;07=h0;16=h0;17=h0;09=h0;18=h0;19=h1");
                                                                                    cm.updateInfoQuest(34995, "00=h1;01=h0;10=h0;02=h0;11=h0;20=h1;12=h0;04=h0;13=h0;05=h0;14=h0;23=h0;06=h0;15=h0;24=h0;07=h0;16=h0;17=h0;09=h0;18=h0;19=h0");
                                                                                    cm.updateInfoQuest(34995, "00=h1;01=h0;10=h0;02=h0;11=h0;20=h0;12=h0;04=h0;13=h0;05=h0;14=h0;23=h0;06=h0;15=h0;24=h0;07=h0;16=h0;17=h0;09=h0;18=h0;19=h0");
                                                                                    cm.updateInfoQuest(34996, "402=h0");
                                                                                    cm.forceCompleteQuest(34943);
                                                                                    cm.gainExp(7749);
                                                                                    cm.updateInfoQuest(34943, "exp=1");
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                                                    cm.effect_Text(["#fn黑体##fs18#不久前，高等翼人使者会议"], [100, 1200, 6, -50, -50, 1, 4, 0, 0, 0, 0])
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.fieldEffect_ProcessOnOffLayer("d0", "Effect/Direction17.img/effect/ark/illust/9/0", 0, 500, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                                                                                        cm.sendNormalTalk_Bottom("#face0#漫长的西部战线计划终于告一段落了吗？虽然这次好像也出现了妨碍者。", 37, 3001507, 0, 1)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#听说那里蕴藏的力量……并没有那么强。", 37, 3001507, 1, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#上次因为仪式受到了外部的妨碍，导致整个行星表面都被炸飞。再次尝试也只能取得这样的成果……你不觉得之前的损失太大了吗？", 37, 3001507, 1, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.fieldEffect_ProcessOnOffLayer("d0", "", 2, 2000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face1#他还活着……亚克少尉。", 37, 3001506, 0, 1)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#呵……呵呵呵呵呵……", 37, 3001506, 1, 1)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
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
                                                                                                                                    cm.warp(402000402, 0, false);
                                                                                                                                    cm.eventSKill(0);
                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                    cm.openUIWithOption(3, 150011074);
                                                                                                                                    cm.playerMessage(5, "获得了<联络商队>技能。");
                                                                                                                                    cm.playerMessage(-1, "获得了<联络商队>技能。");
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
};