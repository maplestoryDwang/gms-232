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
            cm.askAcceptDecline_Bottom("#face0##fc0xFFbfbfbf#(就像他说的,里面或许会有能唤起我记忆的物品。\r\n进入宅邸去欣赏下艺术品吧？)", 36, 3001951 - cm.getPlayer().getGender(), 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(对了,他临走前给了我面具。\r\n要想混入人潮中,最好把面具戴上。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(39623, "");
                    cm.OnStartNavigation(410000341, 1, "3001917", 39623);
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39623.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
    }
    status++;
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
            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
            cm.inGameDirectionEvent_AskAnswerTime(1600)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(数百年前，给守护翼人前代神王的骑士授予的凭证。\r\n据说吊坠的造型是仿照神王殿的大门设计的。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#数百年前……前代，神王殿的大门……", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/memory_in", 100);
                            cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/7/skeleton", "new", "", "00"], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                            cm.fieldEffect_Hero9(0, 1000);
                            cm.inGameDirectionEvent_AskAnswerTime(1300)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                cm.fieldEffect_Hero9(100, 500);
                                cm.inGameDirectionEvent_AskAnswerTime(500)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_PlayBGM("Bgm53/ForEinherjar", 0, 0);
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/5/skeleton", "new", "", "5"], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
                                            cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/6/skeleton", "new", "", "6"], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
                                            cm.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction18.img/effect/adele/illust/past_job/2/1", 0, 1000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("99", "Effect/Direction18.img/effect/adele/illust/past/6/1", 0, 1000, 0, 0, 2, 4, 1, -1, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_Monologue("数十名骑士单膝下跪。", 0)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_Monologue("他们低着头，脸上写满了紧张。", 0)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_Monologue("\r\n“由此，你们被任命为神王的骑士。”", 0)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_Monologue("\r\n主君给受封的骑士们赐予了凭证。", 0)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_Monologue("他一一鼓励了众位骑士，", 0)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_Monologue("看上去既果断，又显得很慈祥。", 0)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_Monologue("\r\n“英灵之门，就拜托你们了。”", 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_Monologue("\r\n“是，殿下。”", 0)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_Monologue("“我等必誓死守护。”", 0)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_Monologue("\r\n新受封的骑士们立下了坚定的誓言。", 0)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_Monologue("发誓会不惜性命地守护主君。", 0)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_Monologue("谁曾想，他们在这一天同心铭刻下的誓言，", 0)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_Monologue("有朝一日竟被战场上的刀光剑影击得粉碎，", 0)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_Monologue("……这是当时谁也没料到的。", 1)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.fieldEffect_ProcessOnOffLayer("99", "", 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/memory_in", 100);
                                                                                                            cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/7/skeleton", "new", "", "00"], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                                                                            cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                            cm.fieldEffect_取消复合图片动画("5", 0, 0);
                                                                                                            cm.fieldEffect_取消复合图片动画("6", 0, 0);
                                                                                                            cm.fieldEffect_Hero9(0, 1000);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1300)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                cm.fieldEffect_Hero9(100, 500);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.fieldEffect_PlayBGM("Bgm53/MaskedHeart", 0, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3500)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(数百年前……距今已经过去了漫长的岁月。\r\n这里说前代神王……意思是他已经不在人世了吗？)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.forceCompleteQuest(39623);
                                                                                                                            cm.gainExp(8500);
                                                                                                                            cm.gainExp(434);
                                                                                                                            cm.forceCompleteQuest(39663);
                                                                                                                            cm.updateInfoQuest(39601, "50=h0;51=h0;52=h0;53=h0;j=1;54=h0;55=h0;56=h0;57=h0;58=h0;59=h0;q=3");
                                                                                                                            cm.teachSkill(150020006, 3, 10);
                                                                                                                            cm.getTopMsgFont("<回忆>技能的等级提高了。", 3, 20, 20, 0, 0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1400)
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
};