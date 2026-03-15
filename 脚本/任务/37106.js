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
            cm.sendNormalTalk_Bottom("#face0#喂，孩童们，落在附近的飞艇是被你们偷走了吧？", 36, 3004000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#我们不知道什么飞艇，不在我们这儿。", 36, 3004004, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#肯定是了。反正不知道是什么，先拿着再说，到时也不过就是被谁抢走而已。", 36, 3004000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#说实话，你们卖给谁了？", 36, 3004000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#别瞎说！", 36, 3004004, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#吭吭！等一下，哪里的味道？好香呀！\r\n这味道不就是……黑市卖的热狗味嘛！真奇怪，垃圾场孩童们怎么突然会有钱？", 36, 3004000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#……", 36, 3004004, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#好好听着，孩童们。\r\n东西的主人现在非常生气。正嚷嚷着要去抓偷东西的贼呢！", 36, 3004000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#哼！我一点都不怕。反正他进不来这里！这里可是垃圾场呀！", 36, 3004004, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#你说对方是家公司？", 36, 3004000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#呃！你，你撒谎！！", 36, 3004004, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("公司？", 56, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#都说现在没有公司了！！", 36, 3004005, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#你没见过吗？\r\n被偷走的东西上应该有他们的标记的？（这当然是谎话）", 36, 3004000, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#不知道这是真是假。", 36, 3004004, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#还，还有，我好像也看到过像是标记的东西……", 36, 3004004, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#要是你们能尽快将东西找回来，事情就这么算了。", 36, 3004000, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#呃呃呃……。所以说是谁呢……", 36, 3004004, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#等一下，你忘了吗？\r\n我不是说过，不管是什么东西，不要白给，也不要白拿吗？消息也一样。", 36, 3004000, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#啊……对了。那么你帮我吧！", 36, 3004004, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#教训我！垃圾！！", 36, 3004004, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#垃圾？你不是头一个这么叫我的。", 36, 3004000, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#不是！！你真的是垃圾！#b危险的液体废弃物！！#k教训我！！", 36, 3004004, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.askAcceptDecline_Bottom("#face0#若是#b危险的液体废弃物#k，周围情况应该十分严重。\r\n帮我解决一下吧！", 36, 3004000)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.forceStartQuest(37106, "");
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
            cm.sendNormalTalk_Bottom("#face0#（嘀嘀咕咕）", 36, 3004004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#是那个家伙吗……事情变得有点麻烦了！", 36, 3004000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#啊，还有一件事。", 36, 3004000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#嗯？", 36, 3004004, true, true)
                    } else {
                        if (status === a++) {
                            cm.curNodeEventEnd(true);
                            cm.setInGameDirectionMode(true, false, true);
                            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                            cm.setStandAloneMode(true);
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/slap1", 100);
                                cm.sendNormalTalk_Bottom("#face0#偷东西是不道德的。", 37, 3004000, false, true);
                                cm.spawnMobLimit(2400331, 1, -1005, 503, 1);
                                cm.spawnMobLimit(2400331, 1, -144, 763, 1);
                                cm.spawnMobLimit(2400331, 1, 698, 327, 1);
                                cm.spawnMobLimit(2400331, 1, 146, 763, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#呃啊～黑鸦，笨蛋笨蛋！！", 37, 3004004, true, true)
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
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.setStandAloneMode(false);
                                                cm.sendNormalTalk_Bottom("#face0#能够换来这次教训，什么都值得了。", 37, 3004000, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#笨黑鸦！！", 36, 3004004, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.updateInfoQuest(37100, "31=h0;50=h0;32=h0;33=h1;dir=off;35=h1;36=h0;37=h1");
                                                        cm.updateInfoQuest(37100, "31=h0;50=h1;32=h0;33=h1;dir=off;35=h1;36=h0;37=h1");
                                                        cm.gainExp(28462236);
                                                        cm.forceCompleteQuest(37106);
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
};