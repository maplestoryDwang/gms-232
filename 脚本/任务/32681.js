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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_AskAnswerTime(1000)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/horn", 100);
                cm.fieldEffect_PlayBGM("Bgm23/CrimsonTower", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(2000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("快点！加快速度！怪物们从后面追来了。\r\n不想死就快跑！", 37, 2550007, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("狮子王真的不想放过任何人啊。", 37, 2550001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("这样下去，难民们都要牺牲了。", 37, 2550002, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo_Bottom("(为帮助难民逃跑，看来要拖延一下时间了。)", 57, 0)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("海姿，迈勒。\r\n我来拖延时间，你们去召集能战斗的人。", 57, 0, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_ForcedFlip10(2, 500);
                                        cm.sendNormalTalk_Bottom("队、队长！你的身体还没好呢……", 37, 2550001, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_Monologue("等我彻底打起精神的时候", 0);
                                                cm.effect_Voice("Voice3.img/DLep4/h2/h_8.mp3", 100)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_Monologue("我发现，自己正提着以为再也不会使用的剑，", 0);
                                                    cm.effect_Voice("Voice3.img/DLep4/h2/h_9.mp3", 100)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_Monologue("奔向了再也不愿回去的战场。", 1);
                                                        cm.effect_Voice("Voice3.img/DLep4/h2/h_10.mp3", 100)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.playerMessage(5, "消灭区域内的所有怪物后再离开吧。");
                                                            cm.npc_LeaveField("oid=1762240");
                                                            cm.npc_LeaveField("oid=1762240");
                                                            cm.dispose();
                                                            cm.openNpc("次元图书馆_Ep4_雪原吟游诗人_断后")
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
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
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_ForcedFlip10(2, 5);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.npc_ChangeController(2550001, "oid=1762866", 1700, -60, 4, 1650, 1750, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=1762866", "summon", 0, 0);
            cm.npc_ChangeController(2550002, "oid=1762867", 1630, -60, 4, 1580, 1680, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=1762867", "summon", 0, 0);
            cm.npc_ChangeController(2550004, "oid=1762868", 1560, -60, 15, 1510, 1610, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=1762868", "summon", 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 1815, -25);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 1756, 50)
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
                        cm.sendNormalTalk_Bottom("救不了所有人啊……", 57, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("队长！你没事吧？难道你消灭了所有怪物？", 37, 2550001, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("得告诉大家。", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("不只是冰峰雪域，他们想要毁灭全世界。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("这样下去，所有人连反抗都不能，就直接被屠杀了。", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("但是……该告诉谁呢？\r\n就算消息传了出去，真的有人能拯救所有人吗？", 37, 2550004, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                                cm.sendNormalTalk_Bottom("可恶。我也不知道。总有人能阻止这一切吧。", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("海姿，迈勒。\r\n发射信号弹，召集所有能战斗的人。", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("你要去哪儿？", 37, 2550001, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("要去的地方只有一个。", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.fieldEffect_PlayBGM("Bgm45/Through The Blizzard", 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_PushScaleInfo(2500, 0, 2000, 2500, 1750, -300)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2700)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#fs18##r龙神之塔#k#fs16#。", 57, 0, false, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_Monologue("龙神，", 0);
                                                                                            cm.effect_Voice("Voice3.img/DLep4/i2/i_1.mp3", 100)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_Monologue("据说是在危险来临的时候，为了向所有人示警而建造的#r烽火台#k。", 0);
                                                                                                cm.effect_Voice("Voice3.img/DLep4/i2/i_2.mp3", 100)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_Monologue("他早就预料到了吗？", 0);
                                                                                                    cm.effect_Voice("Voice3.img/DLep4/i2/i_3.mp3", 100)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_Monologue("那是以我的身份无法得知的事情。", 1);
                                                                                                        cm.effect_Voice("Voice3.img/DLep4/i2/i_4.mp3", 100)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_Monologue("阿丽莎说，", 0);
                                                                                                            cm.effect_Voice("Voice3.img/DLep4/i2/i_5.mp3", 100)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_Monologue("黑魔法师是#r「光明超越者」#k，自己是#r「生命超越者」#k。", 0);
                                                                                                                cm.effect_Voice("Voice3.img/DLep4/i2/i_6.mp3", 100)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.inGameDirectionEvent_Monologue("", 0)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.inGameDirectionEvent_Monologue("超越者也好，龙神也好……", 0);
                                                                                                                        cm.effect_Voice("Voice3.img/DLep4/i2/i_7.mp3", 100)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.inGameDirectionEvent_Monologue("那些连名字都叫不上来的东西到底是什么，我也不知道。", 0);
                                                                                                                            cm.effect_Voice("Voice3.img/DLep4/i2/i_8.mp3", 100)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.inGameDirectionEvent_Monologue("作为普通人类，我只能看到自己眼前的东西。", 0);
                                                                                                                                cm.effect_Voice("Voice3.img/DLep4/i2/i_9.mp3", 100)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.inGameDirectionEvent_Monologue("", 0)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.inGameDirectionEvent_Monologue("所以，我一心扑在了眼前的事情上。", 0);
                                                                                                                                        cm.effect_Voice("Voice3.img/DLep4/i2/i_10.mp3", 100)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.inGameDirectionEvent_Monologue("", 1)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.inGameDirectionEvent_Monologue("#fnBatang#―――――――#fn黑体#「我们到龙神之塔去。」", 0);
                                                                                                                                                    cm.effect_Voice("Voice3.img/DLep4/i2/i_11_sub.mp3", 100)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.inGameDirectionEvent_Monologue("", 1)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.eventSKill(0);
                                                                                                                                                                    cm.dispose();
                                                                                                                                                                    cm.warp(306030300, 0, true);
                                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                    cm.npc_LeaveField("oid=1762866");
                                                                                                                                                                    cm.npc_LeaveField("oid=1762866");
                                                                                                                                                                    cm.npc_LeaveField("oid=1762867");
                                                                                                                                                                    cm.npc_LeaveField("oid=1762867");
                                                                                                                                                                    cm.npc_LeaveField("oid=1762868");
                                                                                                                                                                    cm.npc_LeaveField("oid=1762868")
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
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