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
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(万神殿的狼牙给我来信了。\r\n诺巴的神官找我有什么事呢？)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#在对你进行调查的过程中，我翻到了很久以前得到的一件物品，\r\n似乎与先代神王的骑士有关。", 36, 3000001, true, true, 1)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#诺巴的爆莉萌天使会代我转交物品。\r\n请你去见见她，查收物品好吗？\r\n\r\n #r ※ 自动转至任务地图。#k", 36, 3000001, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#爆莉萌天使在赫里希安攻击队基地。\r\n祝你能早日找回自己的过去。", 36, 3000001, false, true, 1)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(39664, "rMap=" + cm.getMapId());
                            cm.dispose();
                            cm.warp(993162062, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39664.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askAcceptDecline_Bottom("#face0#我要找个安全的地方回溯记忆。\r\n在此处查看物品不合适吧？\r\n\r\n #r ※ 自动转至任务地图。#k", 36, 3001951 - cm.getPlayer().getGender(), 1)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, false);
                cm.setStandAloneMode(true);
                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                cm.inGameDirectionEvent_AskAnswerTime(1600)
            } else {
                if (status === a++) {
                    cm.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction18.img/effect/adele/illust/past/2/0", 0, 1000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(箱子里装着神王的骑士们戴的头盔。\r\n看着熟悉的造型，脑海中开始浮现过去的记忆。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
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
                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/5/skeleton", "new", "", "5"], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
                                            cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/6/skeleton", "new", "", "6"], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
                                            cm.fieldEffect_ProcessOnOffLayer("01", "Effect/Direction18.img/effect/adele/illust/past/2/1", 0, 1000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_ProcessOnOffLayer("99", "Effect/Direction18.img/effect/adele/illust/past/6/1", 0, 1000, 0, 0, 2, 4, 1, -1, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_Monologue("“侍奉主君的最强之剑。”", 0)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_Monologue("“神王殿英灵之门的守护者。”", 0)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_Monologue("“只有少数骑士才能拥有的光荣名号。”", 0)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_Monologue("“这说的都是我们艾因近卫骑士团。”", 0)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_Monologue("\r\n身材健壮的骑士以充满自豪的语气，", 0)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_Monologue("骄傲地介绍道。", 0)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_Monologue("众骑士们满眼期待地望着他。", 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_Monologue("“但是，我们的职业生涯中并不只有荣耀相伴。”", 0)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_Monologue("他脸上的笑意消失了。", 0)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_Monologue("\r\n“受封骑士的喜悦仅到今日为止。”", 0)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_Monologue("“我们是为守护主君而战的剑。”", 0)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_Monologue("“要时刻抱着忍受任何伤痛的觉悟。”", 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_Monologue("\r\n骑士带着坚决的表情，凝视着所有人。", 0)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_Monologue("\r\n“……为了守护英灵之门。”", 0)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_Monologue("\r\n就这样，大家举手相叠，下定了决心。", 0)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_Monologue("誓要成为坚不可摧的利剑。", 0)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.inGameDirectionEvent_Monologue("将盟誓之火铭刻心间。", 1)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.fieldEffect_ProcessOnOffLayer("99", "", 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/memory_in", 100);
                                                                                                                            cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/7/skeleton", "new", "", "00"], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                                                                                            cm.fieldEffect_ProcessOnOffLayer("01", "", 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
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
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
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
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(守卫神王殿之门的艾因近卫骑士团……我所属的组织。\r\n那么牢靠的骑士团为什么最终陷入了分裂呢？)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
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
                                                                                                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                            cm.forceCompleteQuest(39664);
                                                                                                                                                                            cm.updateInfoQuest(39601, "50=h0;51=h0;52=h0;53=h0;j=2;54=h0;55=h0;56=h0;57=h0;58=h0;59=h0;q=4");
                                                                                                                                                                            cm.teachSkill(150020006, 4, 10);
                                                                                                                                                                            cm.getTopMsgFont("<回忆>技能的等级提高了。", 3, 20, 20, 0, 0);
                                                                                                                                                                            cm.dispose();
                                                                                                                                                                            cm.warp(cm.getMapId(), 0)
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
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