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
            cm.sendNormalTalk("给#p1013102#喂过饭了吗？小不点你去吃早饭吧。今天的早饭是#t2022620#。我拿出来了，嘻嘻。事实上，如果你不去给#p1013102#喂食，我就不打算给你早饭吃。", 0, 1013101, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("来，给你#b三明治#k，#b吃完之后到妈妈那里去一趟#k。她好像有话要跟你说。", 0, 1013101)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(22002, "");
                    cm.sendNormalTalk("#b(有话要跟我说？先把#t2022620#吃了，然后到屋里去看看吧。)#k", 3, 1013101, false, true)
                } else {
                    if (status === a++) {
                        cm.gainItem(2022620, 1);
                        cm.onScriptMessage_显示教程引导图片(["UI/tutorial/evan/3/0"]);
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22002.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("早饭吃了吗，小不点？你能帮妈妈做件事吗？\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0# \r\n#i1003028# #t1003028#1个 \r\n#i2022621# #t2022621#5个\r\n#i2022622# #t2022622# 5个\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 60 exp", 0, 1013100, false, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(22002, "");
                cm.forceCompleteQuest(22002);
                cm.gainExp(60);
                cm.onScriptMessage_显示教程引导图片(["UI/tutorial/evan/4/0"])
            } else {
                if (status === a++) {
                    cm.gainItem(1003028, 1);
                    cm.gainItem(2022621, 5);
                    cm.gainItem(2022622, 5);
                    cm.dispose()
                }
            }
        }
    }
};