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
            cm.sendNormalTalk("这是什么？里面应该是实验室，但好像被什么东西挡住了。", 16, 2159399, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("是碰了之后会触电的防御膜。看样子是为了阻止我们进入实验室。看来必须清除掉这个东西，才能继续往前走……", 0, 2159399, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("打开这个东西的方法……#p2154009#应该不会把钥匙之类的东西留在附近吧？", 16, 2159399, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("如果他真那么蠢，那就好了……但是就像你说的那样，格里梅尔绝不会留下打开它的方法。看来只能#b把它打碎#k了。\r\n#h0#！你去把那个#b屏蔽膜#k打碎！", 0, 2159399)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(23692, "");
                            cm.sendNormalTalk("碰到屏蔽膜的话，#r你就会受到伤害#k。在稍微远一点的地方攻击，把#b#o9300646##k打碎吧。", 0, 2159399, false, true)
                        } else {
                            if (status === a++) {
                                cm.spawnMobLimit(9300646, 1, 12, 196, 100);
                                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23692.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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