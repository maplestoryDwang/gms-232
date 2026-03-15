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
            cm.sendNormalTalk_Bottom("队长！队长！桥那边就快被突破了！", 36, 2550007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("爆破呢？！！", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("信号已经发出去了，但是……看来爆破组那边出什么问题了。", 36, 2550007, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("怎么会这样……", 36, 2550001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("(到此为止了吗……)", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我要去见迈勒。", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo_Bottom("迈勒大人应该在宝塔内部。", 36, 2550007)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(32694, "");
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
            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
            cm.sendNormalTalk_Bottom("咳咳！咳咳！", 37, 2550002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("迈勒？！你还好吧？\r\n你竟然把身体透支成了这样……早知道……", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("别过来。会妨碍吟唱的。", 37, 2550002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("不，停下吧迈勒。\r\n作战失败了。关卡已经被突破，爆破也不行了。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("我打算撤兵，退到山那边去了。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("不，还没有结束。", 37, 2550002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_PlayBGM("Bgm48/Nowhere", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("那个小姑娘走之前，来过一次。", 37, 2550002, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("阿丽莎？", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("她让我告诉你一句话。", 37, 2550002, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("我，一切生命之母，超越者阿丽莎，如此说。", 37, 2550004, false, true);
                                                        cm.effect_Voice("Voice3.img/DLep4/p/p_1.mp3", 100)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#fs18#我以神之名宽恕你。", 37, 2550004, true, true);
                                                            cm.effect_Voice("Voice3.img/DLep4/p/p_2.mp3", 100)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("不要再自责了，队长。", 37, 2550004, true, true);
                                                                cm.effect_Voice("Voice3.img/DLep4/p/p_3.mp3", 100)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("…………", 57, 0, false, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("她把剩余的力量全都给了我。", 37, 2550002, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("！！", 57, 0, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("只要再坚持一个小时……吟唱就结束了。", 37, 2550002, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("一个小时！！可是……", 57, 0, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.npc_ChangeController(2550001, "oid=22408679", -156, 120, 1, -206, -106, 0, true, false);
                                                                                            cm.npc_SetSpecialAction("oid=22408679", "summon", 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("她没有，神没有抛弃我们。", 37, 2550001, false, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("海姿？", 57, 0, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("爆破组虽然遇袭，但是火药还有剩余。\r\n我亲自去引爆，请一定要撑到那时候。", 37, 2550001, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("那无异于自杀！你怎么能穿过大军……", 57, 0, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("我们不是早就有这个觉悟了吗。", 37, 2550001, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("现在该是回归故乡的时候了。", 37, 2550001, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.Npc_Fadeout("oid=22408679", 0, 500);
                                                                                                                        cm.sendNormalTalk_Bottom("海姿？海姿！！", 57, 0, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("这……咳咳，可能是我最后一次唠叨你了。", 37, 2550002, false, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("战斗吧，队长。不要让自己再留遗憾了。", 37, 2550002, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("…………", 57, 0, false, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("拜托了，迈勒。", 57, 0, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("只剩一个小时，\r\n我无论如何也会拦住敌人。", 57, 0, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.forceCompleteQuest(32694);
                                                                                                                                                        cm.eventSKill(0);
                                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                        cm.dispose();
                                                                                                                                                        cm.gainExp(186336)
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
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