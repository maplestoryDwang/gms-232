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
            cm.sendNormalTalk("#b你好，老人家。你在这里做什么？你今天不凿石碑吗。", 3, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("哼，你以为我每天光干凿石碑的活儿吗", 5, 9400320, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b那你今天打算做什么？", 3, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("别挡我路，走开", 5, 9400320, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b你要去哪里？难不成这许多墓碑是你搬来的？", 3, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("不然这些墓碑难道是天上掉下来的。", 5, 9400320, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b墓碑很沉吧……我来帮你。", 3, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("哼，随便你。不过要是你打算以后拿这事来提要求，现在就别插手", 5, 9400320, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#b提要求？", 3, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("没错，你要是想得到报酬之类的，就别做梦了。我没东西给你。", 5, 9400320, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#b好好，我知道了。你别担心。", 3, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("来，抓紧我。", 5, 9400320, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("#b诶？抓紧你？为什么？", 3, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("啊！叫你抓就抓，屁话那么多！！", 5, 9400320, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("#b噢，好……。", 3, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("那我们出发了。", 5, 9400320, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.forceStartQuest(63108, "0B+d0KbJ1QE$");
                                                                            cm.forceStartQuest(63108, "0B+d0KbJ1QE$");
                                                                            cm.dispose();
                                                                            cm.warp(867113900, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63108.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("#b老人家！要下降的话能不能提前说一声！吓死我了。", 3, 0, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk("你这年轻人怎么啰里啰嗦的。喏，这个你拿去。", 5, 9400321, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("#b这是什么？", 3, 0, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk("虽然你没帮上什么忙，可我这人不喜欢占人便宜，拿着吧。", 5, 9400321, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk("#b谢谢。嗯？这个……这不是钥匙吗？！你在哪里找到的？", 3, 0, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk("吵死了！！快走开！！", 5, 9400321, true, true)
                            } else {
                                if (status === b++) {
                                    var a = cm.addNumberForQuestInfo(63099, "keyCount", 1);
                                    cm.getPlayer().getTopMsgByItem(4036001, "获得了可以开启巨门的钥匙。(" + a + "/12)");
                                    cm.forceCompleteQuest(63108);
                                    cm.gainItem(4036009, 1);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};