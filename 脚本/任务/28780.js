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
            cm.sendNormalTalk("外星人把城外的路挖得到处都是坑，讨厌死了！", 0, 9201050, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("请阻止它们，别让它们继续破坏我们的土地！", 0, 9201050)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(28793, "1");
                    cm.sendNormalTalk("我们得让外星人没有#b#i4033190# #t4033190:##k可用！为此，至少得弄到100个！这样它们绝对会头疼！", 0, 9201050, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(28780, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/28780.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            if (cm.haveItem(4033190, 100)) {
                cm.sendNormalTalk("噢！你已经集齐了100个 #b#i4033190# #t4033190:##k？！不可思议……你真的是太厉害了！这下他们有得头痛了！", 0, 9201050, false, false);
                cm.dispose()
            } else {
                cm.sendNormalTalk("你还没集齐100 #b#i4033190# #t4033190:##k物品。", 0, 9201050, false, false)
            }
        } else {
            if (status === a++) {
                cm.forceCompleteQuest();
                cm.gainItem(4033190, -100);
                cm.gainItem(4001832, cm.rand(1, 10));
                cm.gainExp(7000);
                cm.dispose()
            }
        }
    }
};