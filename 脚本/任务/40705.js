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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯？我以为来找我的会是你们中的其中一个…… 你们一起来的吗？真让我意外啊，#p2400005#。", 33, 2480012, false, true);
                cm.effect_Voice("Voice.img/Will/43", 100)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我所认识的你们是绝对理性，完全不相信别人的人…… 是什么让你们发生了改变？", 33, 2480012, true, true);
                    cm.effect_Voice("Voice.img/Will/44", 100)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我们没有改变过。因为我仍然很理性，不相信别人。", 41, 2400005, true, true);
                        cm.effect_Voice("Voice.img/Alpha/117", 100)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("但是#b#p2400006#并不是别人。因为#p2400006#是另一个我#k。", 41, 2400005, true, true);
                            cm.effect_Voice("Voice.img/Alpha/118", 100)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("嗯…… 那是你们的决定吗。与我无关。反正不具备全部女神之泪的你们还不是我的对手。不对，我都不需要亲自对付你们。", 33, 2480012, true, true);
                                cm.effect_Voice("Voice.img/Will/45", 100)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("不能成为超越者的不洁者，想要成为超越者的话，会发生什么事情…… 现在开始，请你们亲眼见证吧。", 33, 2480012, true, true);
                                    cm.effect_Voice("Voice.img/Will/46", 100)
                                } else {
                                    if (status === a++) {
                                        cm.npc_LeaveField("oid=3611045");
                                        cm.npc_ChangeController(2480014, "oid=3611238", 360, 85, 7, 310, 410, 1, false, 0, false);
                                        cm.npc_SetSpecialAction("oid=3611238", "summon", 0, 0);
                                        cm.npc_SetSpecialAction("oid=3611238", "down", 0, 1);
                                        cm.fieldEffect_PlayFieldSound("Kite/DarkAura", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(5100)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#face7#……女……神？这是怎么回事？", 41, 2400006, false, true);
                                            cm.effect_Voice("Voice.img/Beta/10", 100)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#face7#封印的女神…… 还可以行动吗？", 41, 2400005, true, true);
                                                cm.effect_Voice("Voice.img/Alpha/119", 100)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("在不洁者想要成为超越者的状况下，女神不可能熟视无睹吧。#r为了阻止不洁者而行动，这是超越者的本能#k。", 33, 2480012, true, true);
                                                    cm.effect_Voice("Voice.img/Will/47", 100)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("当然女神没有意识。女神出于本能，在被封印的状态下行动，最终耗尽自己的生命…… 在我看来，这样的情况也不糟。", 33, 2480012, true, true);
                                                        cm.effect_Voice("Voice.img/Will/48", 100)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("好了，那你们准备好了吗？我是说准备好接受女神的惩罚了没有。", 33, 2480012, true, true);
                                                            cm.effect_Voice("Voice.img/Will/49", 100)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("#face1#到最后…… 你还是那么卑鄙！军团长！", 41, 2400006, true, true);
                                                                cm.effect_Voice("Voice.img/Beta/11", 100)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("#face2#呼呼，因为我不喜欢弄脏我的手。", 33, 2480012, true, true);
                                                                    cm.effect_Voice("Voice.img/Will/50", 100)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("#face1#……要和女神战斗吗……！该死，该怎么做呢？", 41, 2400005, true, true);
                                                                        cm.effect_Voice("Voice.img/Alpha/120", 100)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.npc_SetSpecialAction("oid=3611238", "skill", 0, 1);
                                                                            cm.fieldEffect_PlayFieldSound("demonSlayer/arkAttack1", 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.fieldEffect_PlayBGM("Bgm33.img/ShadowTemple", 0, 0);
                                                                                cm.fieldEffect_PlayFieldSound("advStory/disappear", 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 1, 1, 0, 0);
                                                                                cm.effect_REPEAT("Effect/Direction13.img/effect/zero/luneattack/0", 1, 1, 1, 0, 0)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    cm.effect_REPEAT("Effect/Direction13.img/effect/zero/luneattack/0", 1, 0, 0, 0, 0)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.updateInfoQuest(40705, "");
                                                                                        cm.forceStartQuest(40705, "");
                                                                                        cm.forceStartQuest(40716, "1");
                                                                                        cm.npc_ChangeController(2480015, "oid=3611412", 476, 81, 11, 426, 526, 1, false, 0, false);
                                                                                        cm.npc_SetSpecialAction("oid=3611412", "summon", 0, 0);
                                                                                        cm.npc_LeaveField("oid=3611238");
                                                                                        cm.npc_ChangeController(2480013, "oid=3611413", 360, 85, 7, 310, 410, 1, false, 0, false);
                                                                                        cm.npc_SetSpecialAction("oid=3611413", "summon", 0, 0);
                                                                                        cm.sendNormalTalk("#face1#……什么…… 伦娜……？你不是按照本能来行动的吗……？", 33, 2480012, false, true);
                                                                                        cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 0, 0, 0, 0);
                                                                                        cm.effect_Voice("Voice.img/Will/51", 100)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("……如你所说，被封印的我能够行动是出于阻止不洁者的本能。", 33, 2470018, true, true);
                                                                                            cm.effect_Voice("Voice.img/Lune/0", 100)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk("但是…… 不亲手伤害我的孩子，也是我另一个本能。", 33, 2470018, true, true);
                                                                                                cm.effect_Voice("Voice.img/Lune/1", 100)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk("这个超过了超越者的本能…… 是伦娜我自己的本能。", 33, 2470018, true, true);
                                                                                                    cm.effect_Voice("Voice.img/Lune/2", 100)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk("#face1#该死……！几乎要成功的事情就这么泡汤了……！", 33, 2480012, true, true);
                                                                                                        cm.effect_Voice("Voice.img/Will/52", 100)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk("到最后一刻，你都想借他人的手战斗，让亲近的人反目。这就是你的失败。", 33, 2470018, true, true);
                                                                                                            cm.effect_Voice("Voice.img/Lune/3", 100)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk("救我，军团长。", 33, 2470018, true, true);
                                                                                                                cm.effect_Voice("Voice.img/Lune/4", 100)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk("#face1#事情还没有结束……！因为伦娜你还被封印在镜世界！", 33, 2480012, true, true);
                                                                                                                    cm.effect_Voice("Voice.img/Will/53", 100)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.npc_LeaveField("oid=3611412");
                                                                                                                        cm.inGameDirectionEvent_MoveAction(0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                        cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial")
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
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

function stage0(d, c, b) {
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
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk("我们终于这样见面了。但是我的身体还被封印着。镜世界这监狱偶然创造出的这短暂瞬间真让我开心。", 33, 2470018, false, true);
            cm.effect_Voice("Voice.img/Lune/5", 100)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("真的是……女神吗？", 41, 2400006, true, true);
                cm.effect_Voice("Voice.img/Beta/12", 100)
            } else {
                if (status === a++) {
                    cm.npc_SetSpecialAction("oid=3611413", "healing", 0, 1);
                    cm.fieldEffect_PlayFieldSound("advStory/Buff0", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("由于受到女神的祝福，不洁者已经消失，两位重新变成了完整的神之子。", 33, 2470018, false, true);
                        cm.effect_Voice("Voice.img/Lune/6", 100)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("但是…… 只要继续留在这镜世界，两位就不能觉醒成真正的超越者。", 33, 2470018, true, true);
                            cm.effect_Voice("Voice.img/Lune/7", 100)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那是什么意思？难道不是要觉醒成超越者之后，才能离开这镜世界吗？", 41, 2400005, true, true);
                                cm.effect_Voice("Voice.img/Alpha/121", 100)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("顺序错了。这镜世界是黑魔法师利用我的力量创作出的监狱。只要这监狱还存在，我就会一直活着。", 33, 2470018, true, true);
                                    cm.effect_Voice("Voice.img/Lune/8", 100)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#face10#一个世界不能同时存在两名超越者……", 41, 2400005, true, true);
                                        cm.effect_Voice("Voice.img/Alpha/122", 100)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("看来你们也很清楚这点……", 33, 2470018, true, true);
                                            cm.effect_Voice("Voice.img/Lune/9", 100)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#face10#最终…… 你必须得消亡吗？！", 41, 2400005, true, true);
                                                cm.effect_Voice("Voice.img/Alpha/123", 100)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#face1#我讨厌那样！", 41, 2400006, true, true);
                                                    cm.effect_Voice("Voice.img/Beta/13", 100)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("……消亡是已经决定好的事情。我并不悲伤。因此，希望你们也不要悲伤。", 33, 2470018, true, true);
                                                        cm.effect_Voice("Voice.img/Lune/10", 100)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("即将…… 军团长威尔即将准备发起总攻击。到时我会通知你们。请击退威尔，离开这镜世界。我们很快就会再次见面的。", 33, 2470018, true, true);
                                                            cm.effect_Voice("Voice.img/Lune/11", 100)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.updateInfoQuest(40705, "NpcSpeech=24800131");
                                                                cm.dispose();
                                                                cm.warp(320000000, 6, false);
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
            cm.sendNormalTalk("……女神净化了我们…… 现在…… 我们应该能战胜军团长了吧？是那样的吧？", 44, 2400006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("现在我们能使用全部的力量了。但是……", 44, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#face10#但是我们觉醒成真正的超越者的话…… 女神……", 44, 2400006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#face10#…………", 44, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face10#她说我们很快就会再次相见…… 再见的瞬间不就是最后的瞬间了嘛。但是…… 女神怎么会笑得那么淡然呢？", 44, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#face10#…………", 44, 2400006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.gainExp(209005000);
                                    cm.forceCompleteQuest(40705);
                                    cm.teachSkill(100000280, 5, 5);
                                    cm.forceCompleteQuest(40974);
                                    cm.forceStartQuest(41912, "0");
                                    cm.teachSkill(100000279, 4, 0);
                                    cm.teachSkill(100000279, 5, 0);
                                    cm.playerMessage(5, "[决意时刻]，[伦娜的祝福]技能等级已提升。");
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};