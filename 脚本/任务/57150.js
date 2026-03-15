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
            cm.sendNormalTalk_Bottom("远道而来，辛苦你了。我已经收到你送来的报告书了。他们那些聪明人也被这超出预想的事实弄得有些晕头转向了。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("但是，再仔细思考一下。不管光秀是不是信长的手下，为了保护这个世界，他们两人都是必须要打倒的对手。这一点和之前相比没有丝毫变化。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("既然如此，就算清楚了光秀的阴谋，你也无须动摇。只要按照原本的计划完成任务，并逐渐恢复自己原本的力量，不就足够了吗？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("枫叶山丘的问题就交给我和春秋来负责吧。你只要按照原来的节奏，继续为了这个世界完成任务就可以了。　樱乃姬 ", 57, 0)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(57150, "");
                            cm.npc_LeaveField("oid=16439");
                            cm.npc_LeaveField("oid=16441");
                            cm.npc_LeaveField("oid=16450");
                            cm.npc_LeaveField("oid=16474");
                            cm.npc_LeaveField("oid=16481");
                            cm.gainExp(1536020);
                            cm.forceCompleteQuest(57150);
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57150.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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