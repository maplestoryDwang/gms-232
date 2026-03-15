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
            cm.sendNormalTalk_Bottom("#face0#沿着左边最下面的路走，可以前往射手村。路上小心。", 37, 1540704, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#啊，多谢。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#看来你不是有事专程到这里来的。以后如果想到人间乐园金海滩去旅行，可以随时过来。", 37, 1540704, 1, 1)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0#（误打误撞知道了前往射手村的路。还知道了一个叫长老的人。太好了，快去看看吧。）", 37, 3001500 + cm.getPlayer().getGender())
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#（除了狂龙战士之外，好像还有很多人在次元传送口进进出出。要是运气好，也许能碰到格兰蒂斯的其他种族……）", 37, 3001500 + cm.getPlayer().getGender(), 0, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#（这段时间遇到了几个信任我的人，但是没法保证以后会一直这样。不过那种事情总是难免的。）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#（好了，去射手村见见那个叫长老斯坦的人吧。他说是左边最下面的路，对吧。）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(34954, "");
                                        cm.OnStartNavigation(100000000, 1, "1012003", 34954);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34954.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("喂，那个尖耳朵是！？你和赫丽娜一样，都是精灵吗？嗯……手臂怎么长成那个样子呢……", 37, 1012003, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#我来自名叫格兰蒂斯的其他次元。这里对我来说还很陌生，我需要了解基本的知识。你能帮帮我吗？", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("原来你不是精灵啊。远道而来，一路辛苦了。基本的知识……那就先来介绍一下冒险岛世界长成什么样吧……", 37, 1012003, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#（冒险岛世界好像有海洋、矿山、沙漠、森林、万年雪原等各种环境，以及各种怪物。）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face4#比我想象的还要大。都不知道该先去什么地方了。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("嗯，那你最好先去见见赫丽娜。她负责培训冒险岛世界的冒险家，也许可以告诉你应该去什么地方。", 37, 1012003, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("赫丽娜就在射手村的弓箭手培训中心。你去见见她吧。", 37, 1012003, 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(34954);
                                        cm.OnStartNavigation(100000201, 0, "", 0);
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
};