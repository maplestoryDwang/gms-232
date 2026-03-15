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
            cm.sendNormalTalk_Bottom("#face0#怪物总是趁寺院安静之际出现，伺机偷走发光的东西，然后就消失不见，\r\n同时消失的还有当天站岗的那些修行者。", 36, 3001661, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#有没有什么可以确定怪物身份的具体线索呢？\r\n比方说……对方的长相，又或者是声音，就是能够确定对方特征的元素。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#那个……没人见过怪物，\r\n估计亲眼见过的就只有那些被抓走的修行者了……", 36, 3001661, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face3#就只有这点线索……", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#难道不可能吗？", 36, 3001661, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face12#哎，这怎么可能！我的意思是事件有难度，才更叫人干劲十足嘛。\r\n你就别担心了，我自有主意。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                            } else {
                                if (status === a++) {
                                    cm.askMenu_Bottom("#face0##fc0xFFbfbfbf#（为了找到绑走修行者的怪物，还需要更多线索，\r\n现在该做点什么呢？）#k\r\n\r\n#b#L0#追查修行者#l　#L1#调查修行者失踪的地方#l", 37, 3001674 + cm.getPlayer().getGender())
                                } else {
                                    if (status === a++) {
                                        if (selectionLog[7] == 0) {
                                            cm.sendNormalTalk_Bottom("#face0#真的，我真的除了这些其他都不知道，就算你苦苦逼问……\r\n我已经把所有知道的事都告诉你了。", 37, 3001661, false, true)
                                        } else {
                                            cm.sendNormalTalk_Bottom("#face11#只不过是，还没找出来罢了，肯定还有其他线索，\r\n我倒是有一处怀疑的地方……可以去那里转转看吗？", 36, 3001674 + cm.getPlayer().getGender(), false, true)
                                        }
                                    } else {
                                        if (status === a++) {
                                            if (selectionLog[7] == 0) {
                                                cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#（这样估计是找不到线索了，\r\n换个法子吧，关键就在于“犯人势必会留下痕迹”。）", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                status -= 3
                                            } else {
                                                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（表示将去调查之前站岗的修行者们消失的地点，\r\n修行者一脸忧心忡忡，最后还是接受了这一请求。）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                            }
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#绑架骚乱之后，不知为何，祠堂内的老鼠猖獗了起来，\r\n搞不好那些家伙已经拿走了线索……", 36, 3001661, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.askAcceptDecline_Bottom("#face0#修行者消失的地方是#r#m410000240##k，\r\n去那里调查大概……#b30只#k猖獗的#r#o2400556##k吧。", 36, 3001661)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#我会祈祷你能找到#b足以成为线索的战利品#k的，\r\n祝你一路顺风……", 36, 3001661, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceStartQuest(39521, "");
                                                            cm.OnStartNavigation(410000240, 0, "", 39521);
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39521.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -469, 23);
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -304, 40)
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
                            cm.sendNormalTalk_Bottom("#face0#很快就回来了嘛，解决师，这段时间你找到足以作为证据的东西了吗？\r\n到底是什么怪物呢？", 36, 3001661, false, true)
                        } else {
                            if (status === a++) {
                                cm.askMenu_Bottom("#face0##fc0xFFbfbfbf#（给修行者看看能够识别出怪物特征的证据，\r\n挑选一样能够猜出怪物外形的物品吧。)#k\r\n\r\n#b#L0#漆黑的羽毛#l　#L1#带门环儿的木板#l　#L2#皱皱巴巴的纸条#l", 37, 3001674 + cm.getPlayer().getGender())
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#不是，这……是什么？", 36, 3001661, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face11#那是祠堂里的沟鼠手里的东西，\r\n羽毛这么大，想来那家伙的身形也一定很庞大吧？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#……足以轻轻松松地叼走一个修行者。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face2#可以肯定的是，犯人就是超级巨型鸟怪，\r\n问题就在于，那个怪物将那些修行者都带去了哪里……", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.askMenu_Bottom("#face0##fc0xFFbfbfbf#（我手上有一样能够猜测出怪物位置所在的证据，\r\n想来修行者应该能知道点什么。)#k\r\n\r\n#b#L0#漆黑的羽毛#l　#L1#带门环儿的木板#l　#L2#皱皱巴巴的纸条#l", 37, 3001674 + cm.getPlayer().getGender())
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#（这应该算不上是合适的证据，关键在于必须是能够推测出怪物\r\n所在之地的证据。还是拿出其他东西出来作为证据吧。）", 37, 3001674 + cm.getPlayer().getGender(), false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.askMenu_Bottom("#face0##fc0xFFbfbfbf#（我手上有一样能够猜测出怪物位置所在的证据，\r\n想来修行者应该能知道点什么。)#k\r\n\r\n#b#L0#漆黑的羽毛#l　#L1#带门环儿的木板#l　#L2#皱皱巴巴的纸条#l", 37, 3001674 + cm.getPlayer().getGender())
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#来，瞧瞧这块破裂的木头。", 36, 3001674 + cm.getPlayer().getGender(), false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#啊，通往寺院后面的门就是这种花纹和颜色，\r\n该不会后门那里发生了什么事吧？", 36, 3001661, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#这里深陷进去的巨大脚印……像不像是个新怪物的？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#后门的路通往我们青云谷最高的山，\r\n那修行者被抓去的地方是……", 36, 3001661, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.askMenu_Bottom("#face2#差不多前后能对上了，那最后再看看这个，\r\n这好像是被绑架的修行者之一留下的。\r\n\r\n#b#L0#写有文字的纸条#l", 37, 3001674 + cm.getPlayer().getGender())
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#“真实面目是野兽……快逃……”\r\n修行者在被抓走之前给所有人留下了警告。", 36, 3001674 + cm.getPlayer().getGender(), false, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#呵，我倒是想起有那么一个家伙。", 36, 3001651, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#(什么？快说说看……不是这样，先等等。)", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face7#那个……修行者，我刚刚好像想起来什么了，\r\n先容我和内心对个话再过来。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#！？", 36, 3001661, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#好吧，你想起来的家伙到底是谁？", 36, 3001674 + cm.getPlayer().getGender(), false, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#是之前在我肚子里的家伙。", 36, 3001651, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face7#哇，天上掉馅饼！？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#是只巨大的喜鹊怪，喜欢发光的东西……", 36, 3001651, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#还有那家伙害怕钟声，\r\n好像从前有用脑袋撞过钟这种糟糕的回忆。", 36, 3001651, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#钟声……", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/bell2", 100);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/bell2", 100);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#之所以会瞅准安静的时候出现……就是因为这个，\r\n好吧，那就利用这个声音便是。", 36, 3001674 + cm.getPlayer().getGender(), false, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#你的意思是要摘掉吗！？", 36, 3001651, true, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face12#你以为我会用那种掉价的法子吗！？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（告诉修行者找到了解决方案，\r\n并请求对方告知祠堂中有大钟的地方。）", 36, 3001674 + cm.getPlayer().getGender(), false, true)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#大钟啊……随我来。", 36, 3001661, true, true)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/bell2", 100);
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/bell2", 100);
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face5##fc0xFFbfbfbf#（哈哈！这样一来，就不用将那个笨重又庞大的钟整个拿走了，\r\n果然还是我脑袋瓜聪明啊！）", 36, 3001674 + cm.getPlayer().getGender(), false, true)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
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
                                                                                                                                                                                                                cm.forceCompleteQuest(39521);
                                                                                                                                                                                                                cm.gainExp(1064);
                                                                                                                                                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                                                                                                cm.gainItem(4036584, -1);
                                                                                                                                                                                                                cm.gainItem(4036588, -1);
                                                                                                                                                                                                                cm.gainItem(4036589, -1)
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
                                                                                                                                                                                                                                cm.eventSKill(0);
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
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
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