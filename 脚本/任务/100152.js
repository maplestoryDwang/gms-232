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
            cm.sendNormalTalk("\r\n#b#h0##k！\r\n圣诞节过得愉快吗？", 4, 1012108, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n这是面包房刚烤好的饼干。请尝一个吧！", 4, 1012108, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n哇！真好吃！", 2, 1012108, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("\r\n这种饼干可不光是味道好！\r\n\r\n还有隐藏的强大功能呢！", 4, 1012108, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("\r\n那就是可以装饰#b#e属于自己的伤害皮肤#k#n！", 4, 1012108, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo("怎么样？\r\n你想搜集圣诞节饼干，制作属于自己的伤害皮肤吗？", 4, 1012108)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("\r\n为了用饼干装饰出属于自己的伤害皮肤，\r\n首先得拥有#b#e饼干#k#n！", 4, 1012108, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("\r\n#h0#，我们面包房为像你这样的勇士\r\n烤了很多饼干。", 4, 1012108, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("\r\n饼干会在#b#e<甜蜜松脆饼干时间>#n#k\r\n和大家一起分享！", 4, 1012108, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("\r\n饼干时间会在#b#e上午10点到午夜#n#k之间 #b#e每小时15分#n#k进行。", 4, 1012108, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("\r\n#e#b射手村 / 神木村 / 无名村\r\n\r\n在#k#n#b#e15分#k#n的时候，3个村子里就会下起饼干雨！", 4, 1012108, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("\r\n饼干每天最多只能获得#b#e5个#n#k。搜集掉落的饼干，制作伤害皮肤吧！", 4, 1012108, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.updateInfoQuest(100164, "check=00000000000000000000");
                                                            cm.updateInfoQuest(100165, "check=00000000000000000000");
                                                            cm.updateInfoQuest(100166, "check=00000000000000000000");
                                                            cm.updateInfoQuest(100163, "n=00000000000000000000");
                                                            cm.updateInfoQuest(100152, "reward=0;start=1;rewardCheck=0000000000");
                                                            cm.forceCompleteQuest(100152);
                                                            cm.sendNormalTalk("\r\n\r\n#e#fc0xFFAAAAAA#- 饼干时间进行时间：15分（上午10点～午夜）\r\n- 获得限制：每天5个#k#n", 5, 1012108, true, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100152.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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