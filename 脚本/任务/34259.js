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
            cm.sendNormalTalk_Bottom("#face0#糟糕……日志被我们实习研究员弄丢了。", 36, 3003408, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#呼……看来是被#r#fs18#火把魅影#fs16##k吓到了。\r\n大家都不敢去走廊，所以找不到人帮忙。", 36, 3003408, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("可以麻烦你帮我把资料找回来吗？", 36, 3003408)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("是啊。", 56, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0##b9月18日#k的文件应该能帮上忙。\r\n在#b影舞之地2或3#k就能找到。", 36, 3003408, true, true)
                        } else {
                            if (status === a++) {
                                cm.OnStartNavigation(450006210, 0, "", 0);
                                cm.forceStartQuest(34259, "");
                                cm.dispose()
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
            cm.sendNormalTalk_Bottom("#face0#找到文件了吗？", 36, 3003408, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("这文件是谁制作的？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#那是上任所长。自从爆炸事件后就引咎辞职了。\r\n他最后留下了这么一句话。", 36, 3003408, true, true)
                } else {
                    if (status === a++) {
                        cm.setInGameDirectionMode(true, false, true);
                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1600)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("这既非魔法的领域，也不是科学的范畴。", 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("那是人类之上的存在，即#r「神之领域」#k。", 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("", 0)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_Monologue("我们正在将手伸向不该碰触的东西。", 0)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_Monologue("", 1)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1600)
                                            } else {
                                                if (status === a++) {
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.sendNormalTalk_Bottom("神之领域？", 56, 0, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#所以才需要#b夏伊#k大人。为了侍奉大神官大人。", 36, 3003408, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("原来如此。所以阿卡伊勒……", 56, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#正好所长也来了。", 36, 3003408, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.dispose();
                                                                    cm.warp(940204004, 0, true)
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
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