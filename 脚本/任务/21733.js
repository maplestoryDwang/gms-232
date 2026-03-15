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
            cm.sendNormalTalk("啊……没想到还会碰上这种事情。怎么都没想到人偶师还会潜伏到这里来。平时大概是疏于修炼了，完全被对方给算计了。", 8, 1002104, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("对不起，都是因为我……", 2, 1002104, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("啊？英雄大人不必内疚。你也不知道那家伙会来啊。不必道歉。不过，这也暴露出了他们的弱点。", 8, 1002104, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("弱点？", 2, 1002104, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("人偶师讨厌的那个文件。如果那个文件是假的，人偶师是不会这么兴师动众，带着一群人跑来折腾的。那个文件充分证明了黑色之翼的目标其实是金银岛封印石。", 8, 1002104, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("话虽这么说，但我的位置也暴露了。", 2, 1002104, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("别担心。这次我为了拿利琳寄过来的文件才出去的，没想到中了敌人的招。平时我不会这么不小心的。好歹也是个情报商人，总会为自己准备一条退路的。现在关键的是#b精准矛#k这个技能你知道吗？", 0, 1002104)
                                } else {
                                    if (status === a++) {
                                        cm.gainExp(12939);
                                        cm.forceStartQuest(21733, "");
                                        cm.forceCompleteQuest(21733);
                                        cm.sendNormalTalk("黑色之翼再怎么兴风作浪也没法阻止你日益强大起来。继续努力，直到击败黑魔法师为止。我也会尽最大努力为你收集信息的。", 0, 1002104, false, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21734.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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