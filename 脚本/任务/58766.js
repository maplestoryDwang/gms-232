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
            cm.sendNormalTalk_Bottom("喂，人类，你来这里想干什么！", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##h0#你真是的！吓着孩子了！", 37, 9111007, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("…………", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#孩子，你叫什么名字呀？", 37, 9111007, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#呜呜……我叫樱花。", 37, 9112048, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1#哇，名字跟人一样美丽呢~", 37, 9111007, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#呜……谢谢。", 37, 9112048, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("…………", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face1#跟我说说，你为什么到这里来啊？是不是迷路了？", 37, 9111007, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#呜哇，我把爸爸给我的礼物弄丢了！！", 37, 9112048, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face1#爸爸的礼物？", 37, 9111007, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#嗯，呜呜。我在这前面的树林里玩耍时，把爸爸在外地工作给我买回来的礼物弄丢了！", 37, 9112048, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#我怎么找都找不到，往林子里越走越深，就迷路了！呜哇啊啊", 37, 9112048, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#哎呀……姐姐帮你找！", 37, 9111007, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#呜……呜。真的吗？姐姐会帮我找吗？", 37, 9112048, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#嗯！那位是狐仙，他一定会帮你的。", 37, 9111007, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("……啥？我吗？", 57, 0, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#(要是能获得人类的尊敬，暗该有多高兴！)", 37, 9111007, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("……对对，本狐仙帮你找。", 57, 0, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#哇！真的吗？谢谢你！", 37, 9112048, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face1#(这前面好像是妖鬼栖息的森林，麻烦你过去找找吧。)", 37, 9111007, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("唉……", 57, 0, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.curNodeEventEnd(true);
                                                                                                    cm.eventSKill(0);
                                                                                                    cm.setInGameDirectionMode(true, false, true);
                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 0, 930, 0)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.eventSKill(0);
                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                    cm.forceStartQuest(58766, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58766.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#呜哇~！！谢谢狐仙大人~！", 37, 9112048, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("乖啦乖啦，这地方很危险，你要小心", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#呜~好的……可是下次我要怎么做才能再见到你呀……？", 37, 9112048, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("等到樱花你回到村里，将来长大成人，我们就可以重逢。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#呜~我爸爸每次也都这么说，可是过了无数个夜晚也没见到他回来~狐仙大人也是哄我的吧？", 37, 9112048, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("……（怎么办）", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("我没哄你。你闭起眼睛好好回想一下我们相处的点点滴滴。\r\n不管是樱花的爸爸，还是本狐仙，只要樱花你没忘记我们，就随时可以在脑海中再次相逢哦。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#呜……呜呜……我知道了……", 37, 9112048, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#狐仙大人，这个宝物就请你拿着吧！", 37, 9112048, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("嗯……？", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#呜呜……狐仙大人一定不要忘记我哦！", 37, 9112048, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("……嗯，好的。本狐仙不会忘记我们可爱的樱花的！", 57, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#呜呜……那我们说好咯……谢谢你……", 37, 9112048, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.gainItem(4034872, -1);
                                                                cm.forceCompleteQuest(58766);
                                                                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
                                                                cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
                                                                cm.sendNormalTalk_Bottom("泉奈，现在暗的威信已经大大提高了，我们再次去找他吧？", 57, 0, true, true);
                                                                cm.gainItem(3700361, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#嗯！你做得真的很棒！希望暗知道这些事情后会开心起来！", 37, 9111007, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.dispose();
                                                                        cm.warp(800023016, 0, false)
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
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