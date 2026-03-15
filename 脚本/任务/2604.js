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
            cm.sendNormalTalk("咔咔咔…这次来了个好玩的菜鸟嘛？西瓦这么欺负你，你居然连眼睛也不眨一下，难道你不会觉得伤心吗？其实啊，西瓦只是想考验你一下而已，你有足够的天赋踏上双刀之路。", 0, 1057001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("不仅是双刀方面的才能，我发现你还有其他方面的天赋……可不能让你接受平凡的修炼！#b拥有特殊才能的人，就给他安排特殊的任务#k!这就是暗影双刀的作风。", 0, 1057001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你想知道这是什么任务?这个嘛…现在还不能告诉你。我要正式把你介绍给#b雪姬#k大人，如果雪姬喜欢你，就能接受到特殊任务，如果不是……那就只能接受平凡的修炼了。所以你努力让雪姬大人喜欢你就对了。", 0, 1057001, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline("你接受了我就直接把你送到雪姬那里去。", 0, 1057001)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(2604, "");
                            cm.npc_LeaveField("oid=1096059");
                            cm.dispose();
                            cm.warp(103050101, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/2604.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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