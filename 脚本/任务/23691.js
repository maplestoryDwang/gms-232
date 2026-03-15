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
            cm.sendNormalTalk("呼，好久没到这里来了。到处都是灰尘，听说我们逃出去之后这里就被废弃了，看来是真的。", 4, 2159405, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("除了灰尘之外，好像有之前没见过的东西。", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("是的，到处都是头一次见到的警卫机器人。\r\n#h0#，#p2154009#好像猜到你会回来，所以准备了这些。", 4, 2159405, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("这种欢迎方式果然很符合#p2154009#的风格。没想到会受到这种待遇，让人受宠若惊。", 16, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("这段时间你变强了，它们应该不是你的对手……但还是会对我们的调查造成妨碍。", 4, 2159405, true, true)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline("好的，那就先消灭掉研究所中的#b100个#k#b#o9300645##k吧。", 16, 0);
                                cm.forceStartQuest(23691, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23691.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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