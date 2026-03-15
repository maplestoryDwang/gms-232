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
            cm.sendNormalTalk("你好啊，#e#b#h0##k#n。我是艾琳。\r\n你这么快就达到50级啦？首先，祝贺你！", 1, 9000185, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("从现在开始，你能使用#b#e[BOSS内容等候队列]#k#n了。啊，你问什么是BOSS内容等候队列？", 1, 9000185, true, true)
            } else {
                if (status === a++) {
                    cm.fieldEffect_ScreenMsg("Map/Effect2.img/bossparty/screen");
                    cm.sendNormalTalk_Bottom("所谓的BOSS内容等候队列，就如它的名称那样，就是为了进行BOSS内容而#e#b登记到等候队列#k#n。", 37, 9000185, true, true)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_ScreenMsg("Map/Effect2.img/bossparty/searching");
                        cm.sendNormalTalk_Bottom("如果你选择了BOSS和难度，并登记到等候队列，你就会#e#b和其他人自动组成组队#k#n，随后我会将你们送到入口处！", 37, 9000185, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("登记到等候队列后，#e#b也能自由自在地做其他事情哦#k#n，非常方便。此外，通过等候队列组成的组队还能获得特殊增益呢！", 1, 9000185, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("BOSS内容等候队列可以通过基本快捷键#i3800733# “T”打开。请坚持每天和其他人一起与BOSS战斗，累积经验吧。这是件非常令人愉快的事！", 1, 9000185, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("这次我会为你开启BOSS内容等候队列，你就和其他人一起挑战BOSS吧。那，祝你今天玩得愉快，#e#b#h0##k#n！", 1, 9000185, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(25990);
                                        cm.openUIWithOption(7, 2);
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