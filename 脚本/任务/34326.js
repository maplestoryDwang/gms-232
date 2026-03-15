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
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -215, -50);
            cm.npc_ChangeController(3003252, "oid=1756429", -463, -110, 1, -513, -413, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=1756429", "summon", 0, 0);
            cm.npc_ChangeController(3003254, "oid=1756430", -67, -174, 2, -117, -17, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=1756430", "summon", 0, 0);
            cm.npc_ChangeController(3003256, "oid=1756431", 22, -27, 1, -28, 72, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=1756431", "summon", 0, 0);
            cm.npc_ChangeController(3003255, "oid=1756432", 57, -169, 2, 7, 107, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=1756432", "summon", 0, 0);
            cm.npc_ChangeController(3003251, "oid=1756433", -374, -24, 1, -424, -324, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=1756433", "summon", 0, 0);
            cm.forceStartQuest(34326, "");
            cm.npc_SetSpecialAction("oid=1756433", "sit", -1, 1);
            cm.OverlapScreenDetail19(0, 1500, 1500, 1);
            cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -219, -25)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(300)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("防毒面具，你还好吧？", 37, 3003252, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#随着梦境的减弱，我也在逐渐变弱。这意味着什么…！！", 37, 3003251, true, true)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_PlayBGM("SoundEff.img/ArcaneRiver/thrill", 0, 0);
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1756433"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.sendNormalTalk_Bottom("#face0#你感受到了吗？", 37, 3003251, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#拉克兰正在扩张！以极快的速度！", 37, 3003251, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("难道她的目的是…！！", 37, 3003252, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#除了神秘河畔，还打算把全世界都吸入梦境中！", 37, 3003251, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/Lacheln/pung3"], [0, -461, -50, 1, 0, 1, 1, 0]);
                                                cm.npc_SetSpecialAction("oid=1756429", "special", -1, 1);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                            } else {
                                                if (status === a++) {
                                                    cm.effect_Voice("Skill.img/1201005/Use", 100);
                                                    cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/Lacheln/pung3"], [0, 24, -50, 1, 0, 1, 1, 0]);
                                                    cm.npc_SetSpecialAction("oid=1756430", "special", -1, 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.effect_Voice("Skill.img/1201005/Use", 100);
                                                        cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/Lacheln/pung3"], [0, -64, -187, 1, 0, 1, 1, 0]);
                                                        cm.npc_SetSpecialAction("oid=1756431", "special", -1, 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.effect_Voice("Skill.img/1201005/Use", 100);
                                                            cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/Lacheln/pung3"], [0, 57, -187, 1, 0, 1, 1, 0]);
                                                            cm.npc_SetSpecialAction("oid=1756432", "special", -1, 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.effect_Voice("Skill.img/1201005/Use", 100);
                                                                cm.sendNormalTalk_Bottom("啊！！", 57, 0, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("变成了清道夫？！！", 57, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.npc_SetForceMove("oid=1756429", 1, 120, 100);
                                                                            cm.sendNormalTalk_Bottom("希望与绝望…………好朋友…… ", 37, 3003257, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.npc_SetForceMove("oid=1756430", -1, 30, 100);
                                                                                cm.sendNormalTalk_Bottom("如果一个朋友变强…………其他朋友也会随之变强。", 37, 3003257, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.npc_SetForceMove("oid=1756431", -1, 80, 100);
                                                                                    cm.sendNormalTalk_Bottom("就算再怎么挣扎…………你们也无法摆脱这里。", 37, 3003257, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.npc_SetForceMove("oid=1756432", -1, 50, 100);
                                                                                        cm.sendNormalTalk_Bottom("这里是…………梦境与幻象的城市。", 37, 3003257, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#请躲开，#ho#！", 37, 3003251, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 300, 0);
                                                                                                cm.sendNormalTalk_Bottom("你们要去的地方…已经定好了。", 37, 3003257, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("再这样要掉下去了！", 57, 0, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect3.img/Lacheln/4", 0, 2000, 0, -80, 1, 4, 1);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 1500, 0, 0, 0, 0, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("没有浮上来。", 37, 3003257, false, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("神秘河消灭了他们。", 37, 3003257, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("他们会变成艾尔达…… 成为伟大的他的能量……", 37, 3003257, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("毫无意义的结局…… ", 37, 3003257, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face5#呵呵，再见~", 37, 3003250, false, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#等等。", 37, 3003250, false, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face2#刚刚那个人是… ", 37, 3003250, true, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face2#难道…", 37, 3003250, true, true)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.dispose();
                                                                                                                                                                    cm.warp(450003760, 0, true)
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
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