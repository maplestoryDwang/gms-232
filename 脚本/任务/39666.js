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
            cm.sendNormalTalk_Bottom("#face0#阿黛尔，我们得到了关于先代神王骑士团的信息！\r\n是骑士团曾经用过的旗帜……", 36, 3001963, false, true, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0##fc0xFFbfbfbf#(听说黑市上出现了骑士团的旗帜。\r\n马上到荒蛮终点站去吧？)\r\n\r\n #r ※ 自动转至任务地图。#k", 36, 3001951 - cm.getPlayer().getGender(), 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#到达之后，会有影子商团的人和你接头。\r\n钱已经付过了，你收货就行。", 36, 3001963, false, true, 1)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(39666, "rMap=" + cm.getMapId());
                        cm.dispose();
                        cm.warp(993162064, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39666.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(我取出了放在桶里的骑士团旗帜。\r\n旗帜被撕成了两段……尘封的记忆开始复苏。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
                } else {
                    if (status === a++) {
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
                                        cm.fieldEffect_ProcessOnOffLayer("01", "Effect/Direction18.img/effect/adele/illust/past/4/0", 0, 1000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_ProcessOnOffLayer("99", "Effect/Direction18.img/effect/adele/illust/past/6/1", 0, 1000, 0, 0, 2, 4, 1, -1, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_Monologue("“这……真的是场光荣的战争吗？”", 0)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_Monologue("“遵从主君的旨意，是我们的职责。”", 0)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_Monologue("\r\n当神王的癫狂症越发加重，", 0)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_Monologue("即将把矛头对准格兰蒂斯全境的时候，", 0)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_Monologue("骑士团内部也开始出现了裂痕。", 0)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_Monologue("一方主张应该拒不参加名分不足的战争，", 0)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_Monologue("一方坚持不加质疑地遵从主君的命令。", 0)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_Monologue("日子一天天过去，双方对彼此的疑心渐渐加深，", 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_Monologue("最终骑士团分成了两派，", 0)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_Monologue("只剩下我和几个人守着军营。", 0)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_Monologue("\r\n“骑士的使命是追随主君。”", 0)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_Monologue("“即使是施行不义之举，也要继续追随吗？”", 0)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_Monologue("\r\n就在我为是否坚守骑士的道义苦恼的期间，", 0)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_Monologue("出战的日子已然逼近，", 0)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_Monologue("我终于不得不做出决定。", 1)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.fieldEffect_ProcessOnOffLayer("99", "", 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                            } else {
                                                                                                                if (status === a++) {
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
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(我为了阻止不光彩的战争，所以背叛了主君吗？\r\n除了背弃盟誓，就别无他法了吗……)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
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
                                                                                                                                                                    cm.forceCompleteQuest(39666);
                                                                                                                                                                    cm.updateInfoQuest(39601, "50=h0;51=h0;52=h0;53=h0;j=4;54=h0;55=h0;56=h0;57=h0;58=h0;59=h0;q=6");
                                                                                                                                                                    cm.teachSkill(150020006, 6, 10);
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
};