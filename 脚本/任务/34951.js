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
            cm.sendNormalTalk_Bottom("#face0#啊，谢谢，谢谢你……我欠了你一分人情。嗯，你有什么需要帮忙的吗？", 37, 3001550, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#啊，那是……我……我们影子商团的规定……一切必须以交易的形式进行！简单地说就是……世界上没有免费的午餐！", 37, 3001550, 1, 1)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(34951, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34951.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
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
                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 20, 329, 105)
                    } else {
                        if (status === a++) {
                            cm.onTeleport(0, 3, cm.getPlayer().getId(), 90, 40);
                            cm.inGameDirectionEvent_ForcedFlip(1);
                            cm.sendNormalTalk_Bottom("#face0#（说如果知道现在高等翼人正在干什么，就全部告诉我。）", 37, 3001500 + cm.getPlayer().getGender(), 0, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#啊，这个问题很难啊。我只知道……他们几乎占领了整个格兰蒂斯，造成了巨大的影响……抱歉，抱歉。", 37, 3001550, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#（吞吞吐吐的，好像相当为难的样子。于是换个问题，问战争的局势怎样。）", 37, 3001508, 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#嗯？战争？刚才我就有种感觉……你是不是来自很偏僻的地方……呃，呃啊，抱歉，失礼了。", 37, 3001550, 1, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face1#哈，格兰蒂斯落入高等翼人之手后，就再没发生过可以称得上战争的大事件。如果你想知道几百年前的事情……", 37, 3001550, 1, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#（从科尼那里得知，高等翼人在和平民翼人的战争中最终获胜，吉伦·达尔莫尔在此过程中觉醒成了生命超越者。）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face1#之后平民翼人就销声匿迹了。高等翼人也遭受了很大的打击，但是……他们在格兰蒂斯的控制力并没有变，现在也一样。", 37, 3001550, 1, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face2#这段时间……发生了这么多事……", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#嗯？", 37, 3001550, 1, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#不，没什么。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face5#（同族之间的战争就这样落下帷幕了吗？吉伦·达尔莫尔竟然觉醒成了生命超越者……）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face5#（还好没发生什么大的战争。但他们肯定正在什么地方做着某种残忍的事情，在维持和平的名义之下。）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#啊，我想起了一件事……万，万神殿的诺巴种族。只有他们还没投降，还在笼城死守。", 37, 3001550, 1, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#据说为了夺回首都，他们正在向其他次元的勇士们求助……啊，你该不会连其他次元开启的事情也不知道吧……", 37, 3001550, 1, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#其他次元？", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.npc_ChangeController(3001543, "oid=147907900", 219, 30, 68, 169, 269, 1, false, 0, false);
                                                                                        cm.npc_SetSpecialAction("oid=147907900", "summon", 0, 0);
                                                                                        cm.sendNormalTalk_Bottom("#face4#是谁竟敢动我的部下！？", 37, 3001554, 1, 1)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face2#那是误会……", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#卡，卡德娜！你，没没，没事啊！啊，那位是……是他把我从地痞们手上救了出来……", 37, 3001550, 1, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#我，我只是……在还他人情。他，他有点问题想问我……总之……他是个好人！", 37, 3001550, 1, 1)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face3#是吗？", 37, 3001554, 1, 1)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face5#奇怪……切，为什么能感觉到让人不快的气息呢……", 37, 3001554, 1, 1)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face4#喂，你！别在我眼前晃悠！", 37, 3001554, 1, 1)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#呃啊，总之谢谢你。我得回基地去了，再见……希，希望你能获得想要的情报，嘿嘿……走吧，卡德娜。", 37, 3001550, 1, 1)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face5#他真的没欺负你吗？", 37, 3001554, 1, 1)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face1#真，真的没有！", 37, 3001550, 1, 1)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#其他……次元……", 37, 3001500 + cm.getPlayer().getGender(), 0, 1)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.forceCompleteQuest(34951);
                                                                                                                                        cm.gainExp(8889);
                                                                                                                                        cm.updateInfoQuest(34951, "exp=1");
                                                                                                                                        cm.updateInfoQuest(34995, "00=h1;01=h0;10=h0;02=h0;11=h0;20=h0;12=h0;04=h0;13=h0;50=h0;05=h0;14=h0;23=h0;06=h0;15=h0;24=h0;07=h0;16=h0;17=h0;09=h0;18=h0;19=h0");
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
};