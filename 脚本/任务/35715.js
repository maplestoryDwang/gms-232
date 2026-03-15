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
            cm.sendNormalTalk_Bottom("#face0#对了其他人都去哪儿了？", 37, 3003770, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("啊……大家在迷宫里迷路后走散了。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("仿佛被某种东西蛊惑一般……一个一个地……", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("然后我就找到了你。还听见了惨叫声。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#惨叫……声？", 37, 3003770, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#我没有发出过惨叫。", 37, 3003770, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("什么……？", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face2##h0#不也看见了吗？我刚刚失去意识了。", 37, 3003770, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("啊……", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face2#你听到的会不会是其他人的惨叫啊？", 37, 3003770, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("但是……", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（惨叫声……明明是从阿扎琳所在的方向传过来的……）", 57, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(我发现她之后惨叫声就停了……)", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#接下来你要做什么？", 37, 3003770, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("找到其他人啊。像找到阿扎琳一样。", 57, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#啊！那我也来帮忙吧。我对搜索可是很有信心的。", 37, 3003770, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#我来找其他人的痕迹为你引路。", 37, 3003770, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("那……你还记得自己来的时候坐的战舰在哪里吗？", 57, 0, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("感觉去战舰所在的地方，还能找到一些有用的东西，也相对安全。", 57, 0, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face2#战舰？", 37, 3003770, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face2#不……不记得了……我也不清楚……", 37, 3003770, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face2#我醒过来的时候没见到其他人，只看到了#h0#……", 37, 3003770, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#其实我根本不记得之前到底发生过什么事了。对不起。", 37, 3003770, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("啊，那还是先回到我的战舰坠落地吧。那里还有一些补给品……", 57, 0, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#好！那我就跟着#h0#了。", 37, 3003770, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("嗯，我们出发吧。", 57, 0, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;03=h1;04=h0;14=h0;05=h5;06=h0;15=h1;17=h0;09=h0;79=h1");
                                                                                                                    cm.setPartner(1, 3003770, 80002582, 0);
                                                                                                                    cm.forceStartQuest(35715, "");
                                                                                                                    cm.OnStartNavigation(450011510, 0, "west00", 0);
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35715.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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