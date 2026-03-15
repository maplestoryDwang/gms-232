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
            cm.sendNormalTalk_Bottom("我要把卷毛牛送上方舟。\r\n但是那家伙太敏感了，我一靠近它就逃跑了。", 36, 2550004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("要我帮忙吗？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("卷毛牛喜欢食虫水灵的液体吧。\r\n多抓点食虫水灵然后炸开，用散发出的气味引诱……你那是什么眼神？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("为了这个就要杀死无辜的食虫水灵吗？\r\n你们人类真是……", 36, 2550004, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("活的食虫水灵主要靠被大型野兽摄取，来传播种子的。\r\n我直接让它们爆炸，不也是在帮助它们繁殖吗？", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("是、是吗？", 36, 2550004, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("你还是一切生命之母呢，连这个都不知道？", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askYesNo_Bottom("呃呃呃呃呃……这里吵死了，快去把食虫水灵抓回来！", 36, 2550004)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("大概抓#b200只#k就够了。很快就能搞定。", 56, 0, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("还挺厉害的嘛。", 36, 2550004, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(32687, "");
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
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.setStandAloneMode(true);
            cm.npc_ChangeController(2550004, "oid=1766188", 12, 400, 6, -38, 62, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=1766188", "summon", 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 124, 371);
            cm.inGameDirectionEvent_ForcedFlip(1);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("好，那就开始吧。", 37, 2550004, false, true)
                    } else {
                        if (status === a++) {
                            cm.npc_SetSpecialAction("oid=1766188", "magic", 0, 1);
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/lightup", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, 382, 420, 1, 0, 1, 1, 0]);
                                cm.npc_LeaveField("oid=1764882");
                                cm.npc_LeaveField("oid=1764882");
                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("很好，卷毛牛传送完毕！", 37, 2550004, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_ForcedFlip(-1);
                                            cm.sendNormalTalk_Bottom("不过队长你怎么会来这里？", 37, 2550004, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("我们不是约好了吗，我要帮你找动物。", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("给，拿着这个。\r\n我把栖息在附近的动物们的名称和习性都记录下来了，应该能帮上你的忙。", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("嗯……没想到还有你这样执着于遵守约定的人类啊。", 37, 2550004, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("你好像也没有很期待嘛。你救我难道不是为了这个？", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("当、当然有这方面的原因，不过……\r\n我只是觉得不能装作视而不见而已。", 37, 2550004, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("我可是一切生命的母亲。\r\n当然了实际进行创造的是地位更高的人……。#fc0xFFAAAAAA#（碎碎念~）", 37, 2550004, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("要是你能以这种心态，稍微照顾一下人类也好啊。", 57, 0, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("不行，我不会帮助全体人类。\r\n因为你们这些智能生物，最终只会伤害别的生命体。", 37, 2550004, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("无情的母亲啊。", 56, 0, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.fieldEffect_Hero9(0, 1000);
                                                                                            cm.sendNormalTalk_Bottom("继续走吧。\r\n只要我们还坚守在这里，应该不会有怪物闯进来，安全还是有保障的。", 57, 0, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("等一下，你真的打算对抗黑魔法师的军队吗？", 37, 2550004, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("不得不对抗啊。\r\n我们又没有救命的方舟，只能拼死一搏了。", 57, 0, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("那么，就算你们真的能躲过末日，\r\n也会再次陷入无穷无尽的战争中吧？", 37, 2550004, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("就算不是现在，人类也一直在互相杀戮与被杀，\r\n终有一天会自取灭亡。", 37, 2550004, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("作为一切生命之母，人类当然也是我可爱的孩子，但是……\r\n就算是母亲，也不会喜欢执意离家出走的孩子吧。", 37, 2550004, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("也许是呢……", 57, 0, false, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("不过……\r\n孩子本来就是性格别扭又茫然不知前路的存在，不是吗？", 57, 0, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("虽然要花一些时间，\r\n但我们人类总有一天会找到属于自己的安乐窝。", 57, 0, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.inGameDirectionEvent_Monologue("#fnBatang#―――――――#fn黑体#「所以，不要太怨恨我们。」", 0);
                                                                                                                                                cm.effect_Voice("Voice3.img/DLep4/j2/j_1.mp3", 100)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.inGameDirectionEvent_Monologue("", 1)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.inGameDirectionEvent_Monologue("阿丽莎闭上了嘴。", 0);
                                                                                                                                                        cm.effect_Voice("Voice3.img/DLep4/j2/j_2.mp3", 100)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.inGameDirectionEvent_Monologue("在短暂的沉默中，她到底想了什么，我不得而知。", 0);
                                                                                                                                                            cm.effect_Voice("Voice3.img/DLep4/j2/j_3.mp3", 100)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.inGameDirectionEvent_Monologue("只希望她能稍稍敞开心扉，", 0);
                                                                                                                                                                cm.effect_Voice("Voice3.img/DLep4/j2/j_4.mp3", 100)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.inGameDirectionEvent_Monologue("对人类抱有哪怕一丝一毫的同情心。", 0);
                                                                                                                                                                    cm.effect_Voice("Voice3.img/DLep4/j2/j_5.mp3", 100)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.inGameDirectionEvent_Monologue("", 1)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.inGameDirectionEvent_Monologue("失去家园，彷徨不知去处的孩子们，", 0);
                                                                                                                                                                            cm.effect_Voice("Voice3.img/DLep4/j2/j_6.mp3", 100)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.inGameDirectionEvent_Monologue("最终，还是需要母亲的拥抱……", 0);
                                                                                                                                                                                cm.effect_Voice("Voice3.img/DLep4/j2/j_7.mp3", 100)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_Monologue("", 1)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.forceCompleteQuest(32687);
                                                                                                                                                                                        cm.gainExp(186336);
                                                                                                                                                                                        cm.eventSKill(0);
                                                                                                                                                                                        cm.dispose();
                                                                                                                                                                                        cm.warp(306030300, 0, false);
                                                                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                        cm.setStandAloneMode(false);
                                                                                                                                                                                        cm.npc_LeaveField("oid=1766188");
                                                                                                                                                                                        cm.npc_LeaveField("oid=1766188")
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
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