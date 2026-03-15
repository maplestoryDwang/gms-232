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
            cm.sendNormalTalk("#b(这种地方怎么有个工坊……而且还很破旧，和这里的环境一点儿不符。里面有人住吗)", 3, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(啊，那位好像是这里的主人。)你好，老人家。", 3, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("走开！", 5, 9400320, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b哈？", 3, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我什么都没有，你走！", 5, 9400320, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b老人家，我不是来抢劫的……", 3, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("走开！！！！！！！！！！！！", 5, 9400320, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b啊……好吧……(怎么回事……。他脾气真古怪……)", 3, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("……自言自语……", 5, 9400320, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#b(嗯？他在自言自语。我偷听一下……。)", 3, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(63106, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63106.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
    }
    if (!cm.haveItem(4036047)) {
        cm.sendNormalTalk("走开，没空搭理你！我还有好多石碑要制作…唉……石料好像不够了……", 5, 9400320, false, false);
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("#b老人家，这个请你收下。", 3, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("走开！！！……我说了多少遍了……。哎，这是什么", 5, 9400320, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b这是石头。我想着你做工艺时可能会用到，就收集来了。", 3, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("哼，我不需要你的帮助。带上你的石头滚开！", 5, 9400320, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b啊，你不需要啊。那我走了。", 3, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("等等！！", 5, 9400320, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b哈？", 3, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("唔……。我看你状态似乎不太好，我给你做块好#b墓碑#k吧。", 5, 9400320, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("不过，你要把那石头给我我才能考虑一下。", 5, 9400320, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#b呃……我并不需要墓碑……", 3, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("胡说！！！有什么能比墓碑更重要！！别废话，快给我！", 5, 9400320, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#b给，给你。(这老人怎么回事！！)", 3, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("咳咳，好。你过#r10分钟#k后再来吧。到那时候我就能把墓碑凿好", 5, 9400320, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.updateInfoQuest(63106, "lastTime=" + new Date().getTime());
                                                                cm.forceCompleteQuest(63106);
                                                                cm.gainItem(4036047, -1);
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
};