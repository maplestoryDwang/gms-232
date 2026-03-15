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
            cm.sendNormalTalk("年幼的精灵赫丽娜……这个嘛。据我所知，没有其他精灵和我同名。我确实是为了躲避黑魔法师的攻击，从神秘岛来到了金银岛。", 0, 1012100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("怎么会这样？赫丽娜明明是个年纪很小的精灵。才过了这么短的时间，怎么可能长这么大了……", 2, 1012100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("如果你是说精灵们受到的诅咒，我很幸运，没有受到诅咒。对于精灵来说，#r几百年时间#k也足够长大了。", 0, 1012100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("精灵们受到的诅咒？几百年？不知道你在说些什么。在我和双弩精灵他们一起去阻止黑魔法师的那一天，我听说你坐着避难船，到金银岛去了。", 2, 1012100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你难道……你也受到了黑魔法师的诅咒吗？如果你刚刚醒来……那请仔细听好。从封印黑魔法师的那一天开始，已经过去了几百年的岁月。现在的这个世界，是#r#e距离你记忆中的那一天已经过了好几百年了#k#n。明白我的意思了吗？", 0, 1012100, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(38034, "");
                                cm.forceStartQuest(38034, "");
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38034.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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