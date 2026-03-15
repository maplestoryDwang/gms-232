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
            cm.sendNormalTalk_Bottom("#face0#……喂~谢谢你！本妖鬼名叫棘鬼。", 37, 9111011, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你是妖鬼？看起来一点不像啊，反而比较像人类？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我看起来当然和其他妖鬼不一样。我是和人类一起生活的。我可是有上班的妖怪哦，哈哈。", 37, 9111011, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("妖鬼居然和人类一起生活。真了不得。原来人类和妖怪之间不一定都互相交恶。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#嗯，这个嘛……都是多亏了跟我最亲的牛鬼哥的帮助，我才能跟人类和睦相处的。", 37, 9111011, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#话说回来，我好久没回老家……一回来就发现这些家伙都发疯了。没办法只好把他们都灭了。", 37, 9111011, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askMenu_Bottom("\r\n#L0#赞同棘鬼的话。#l\r\n#L1#帮妖鬼们说话。#l", 56, 0)
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(58710, "1=3;2=3");
                                        cm.teachSkill(80011294, -1, 0);
                                        cm.getTopMsgFont("棘鬼记住了你的话。", 3, 20, 8, 0, 0);
                                        cm.sendNormalTalk_Bottom("说得没错，我听说暴走妖鬼们正在搅浑自然之精气。我正是为了解决此事才到这里来的。", 57, 0, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#好！那我来帮你的忙吧！现在有了同伴，我不会无聊啦。", 37, 9111011, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(58731, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58731.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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