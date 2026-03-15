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
            cm.sendNormalTalk_Bottom("即使最后离开那里，特鲁埃博还是没消失。", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face13#这可糟了……", 36, 3003406, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face13#我这个样子无法为你打开继续前往#r黑魔法师#k的通路。", 36, 3003406, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("什么？！", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face10#这也是没办法啊。没人猜到会是这个结果。", 36, 3003406, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("……", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face10#我先回沼泽想想其他办法。\r\n既然是在那里获得的身体，那就该从那边寻找办法。", 36, 3003406, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face10#准备好了会叫你的，别走太远啊。", 36, 3003406, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("那好吧。", 56, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("啊，书又发光了。这好像是最后一个了。", 56, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#对了，如果把书弄丢了，就来找我。\r\n如果是在沼泽里，想做多少就做多少。", 36, 3003406, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.updateInfoQuest(34272, "book=1");
                                                            cm.gainItem(4161101, -1);
                                                            cm.gainItem(4161102, 1);
                                                            cm.forceCompleteQuest(34272);
                                                            cm.finishAchievement(1187);
                                                            cm.updateInfoQuest(34271, "02=h0;20=h1;30=h0;21=h0;31=h0;32=h1;23=h0;33=h0;34=h0;52=h0;53=h0;35=h0;54=h0;18=h0;36=h0;28=h0;29=h0");
                                                            cm.getTopMsgFont("可以缩短之前神秘河地区的每日任务。", 3, 20, 10, 0);
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};