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
            cm.sendNormalTalk("#b(孩子们的心情忽晴忽阴得令人措手不及。我还没来得及提起冒险岛世界和钥匙呢？)", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(这次我要小心点试着跟他们对话。)", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b孩子们，喜欢新玩具吗？", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("嗯！超级喜欢！新玩具真棒！", 4, 9400225, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我也想要新玩具……", 4, 9400224, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b(啊！#p9400224#的心情好像又要晴转阴了。)\r\n#p9400224#，以后我也给你找新玩具！", 2, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("哇！太好了！说定了哦！", 4, 9400224, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b孩子们，你们有没有谁知道“冒险岛世界”~？", 2, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("冒险岛世界？我好像在书里读到过……", 4, 9400225, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askMenu("#b看来他们误会那是童话中的世界了……\r\n#L0#为了以防万一，还是仔细问问。#l\r\n#L1#问问他们是否知道钥匙的事。#l", 16, 0)
                                            } else {
                                                if (status === a++) {
                                                    if (selectionLog[10] == 0) {
                                                        cm.sendNormalTalk("#b哇，#p9400225#，你真聪明！还记得是哪本书吗？", 2, 0, false, true)
                                                    } else {
                                                        cm.sendNormalTalk("#b哇，#p9400225#，你真聪明！那你有看到过钥匙吗？", 2, 0, false, true)
                                                    }
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("唔……不知道。", 4, 9400225, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            if (selectionLog[10] == 0) {
                                                                cm.sendNormalTalk("#b那本书在哪里~？在后面的书架上吗~？", 2, 0, true, true)
                                                            } else {
                                                                cm.sendNormalTalk("#b就是能打开门的钥匙，你们都没有见过吗？", 2, 0, true, true)
                                                            }
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("不知道！我不记得了！我要玩娃娃！你别问我了！", 4, 9400225, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("#b(真不出所料，没有一点收获。)", 2, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceStartQuest(63251, "click");
                                                                        cm.forceStartQuest(63252, "click");
                                                                        cm.forceCompleteQuest(63054);
                                                                        cm.gainExp(158800);
                                                                        cm.updateInfoQuest(63054, "exp=1");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63054.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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