var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0#见到你真高兴，夏伊。慢走。有机会再来玩。", 36, 3003412, false, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(34257, "");
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0#你来晚了。我还担心你出了什么意外呢。", 36, 3003408, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##b所长#k已经到了。\r\n说要去瞭望台……到底为什么要到那上面去呢？", 36, 3003408, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b(所长？)", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("总之快去吧。", 36, 3003408)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#夏伊大人跟所长也是初次见面吧？", 36, 3003408, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("啊，嗯……", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.setInGameDirectionMode(true, false, true);
                                    cm.setStandAloneMode(true);
                                    cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_PushScaleInfo(1800, 1000, 1800, -960, -1660)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(300)
                                        } else {
                                            if (status === a++) {
                                                cm.onTeleport(0, 3, cm.getPlayer().getId(), -895, -708);
                                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                                cm.npc_ChangeController(3003408, "oid=2005498", -980, -700, 2, -1030, -930, 1, true, false);
                                                cm.npc_SetSpecialAction("oid=2005498", "summon", 0, 0);
                                                cm.npc_ChangeController(3003403, "oid=2005499", -1080, -700, 2, -1130, -1030, 0, false, false);
                                                cm.npc_SetSpecialAction("oid=2005499", "summon", 0, 0);
                                                cm.npc_ChangeController(3003404, "oid=2005500", -1080, -700, 2, -1130, -1030, 0, true, false);
                                                cm.npc_SetSpecialAction("oid=2005500", "summon", 0, 0);
                                                cm.Npc_Fadeout("oid=2005500", 0, 300);
                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#你到了。远道而来辛苦你了。", 37, 3003408, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#不错嘛。", 37, 3003403, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#所长？天上有什么东西吗？", 37, 3003408, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.OverlapScreenDetail19(0, 2000, 2000, 1);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -960, -660)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#第一次看见飞得这么高的鸟。", 37, 3003403, false, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#啊啊，你在看鸟啊。克里蒂亚斯的鸟儿飞得高可是出了名的。", 37, 3003408, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#甚至坊间传说，有人梦想变成鸟儿，一整天都盯着天空\r\n结果变成了瞎子。", 37, 3003408, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.fieldEffect_PlayBGM("Bgm25.img/AltarOfAkayrum", 0, 0);
                                                                                                    cm.sendNormalTalk_Bottom("#face0#眼睛瞎掉已经算不错了。", 37, 3003403, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#嗯？", 37, 3003408, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(1800, 3000, 1800, -1080, -630)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.Npc_Fadeout("oid=2005499", 0, 1000);
                                                                                                                cm.Npc_Fadeout("oid=2005500", 255, 1800);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#即使燃烧我的身体也无法阻止的竟然是人类。", 37, 3003404, false, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#fs20##r阿卡伊勒？！！！#k", 57, 0, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.inGameDirectionEvent_Monologue("大神官阿卡伊勒。", 0)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.inGameDirectionEvent_Monologue("年纪轻轻就因诚恳忠实而受到认可，#r站在了离女神最近的位置。#k", 0)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.inGameDirectionEvent_Monologue("能在那样的人身边工作，我感到无比荣幸。", 0)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.inGameDirectionEvent_Monologue("", 0)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.inGameDirectionEvent_Monologue("但是我实在无法习惯他那悲观厌世的语气和神秘莫测的表情。", 0)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.inGameDirectionEvent_Monologue("", 0)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.inGameDirectionEvent_Monologue("#fs20##r「回过头看看……他这个人就像蛇一样冷血。」", 0)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.inGameDirectionEvent_Monologue("", 1)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.fieldEffect_复合图片动画(["Map/Effect3.img/morass/spine/bubble/skeleton", "animation", "", "bubble"], [0, 1, 1, 90000, 0, 0, 0, 1]);
                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/bubble", 100);
                                                                                                                                                                cm.userSetFieldFloating(450006130, 3, 3, 1);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.userSetFieldFloating(450006130, 5, 5, 1);
                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 3000, 0);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3300)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.fieldEffect_取消复合图片动画("bubble", 1, 1000);
                                                                                                                                                                            cm.npc_LeaveField("oid=2005498");
                                                                                                                                                                            cm.npc_LeaveField("oid=2005500");
                                                                                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.forceCompleteQuest(34257);
                                                                                                                                                                                cm.updateInfoQuest(34271, "20=h1;30=h0;21=h0;31=h0;32=h0;23=h0;33=h0;34=h0;52=h0;53=h1;35=h0;54=h1;18=h0;36=h0;28=h1;29=h1");
                                                                                                                                                                                cm.npc_LeaveField("oid=2005499");
                                                                                                                                                                                cm.dispose();
                                                                                                                                                                                cm.warp(450006200, 0, true);
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
                    }
                }
            }
        }
    }
};