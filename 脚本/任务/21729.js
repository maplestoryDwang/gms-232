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
            cm.askAcceptDecline("看样子除了我还有人见过那个小家伙。不，不是人，而是一只#b猫#k。既然是经常待在#b#m101030000##k的猫#b#p1040002##k，应该也可能知道#r暗号#k吧？", 0, 1032101)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("暂且…………把#o2230100#消灭后先告一段落吧。虽然还有些骚乱…………不过多亏了你，已经改善很多了。也请代我向#p1002104#转达谢意吧。", 9, 1032101, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b(#p1040002#好像知道进入人偶师洞穴的暗号。我们一得到暗号就马上攻击人偶师怎么样？不，我们还是不要轻举妄动，而是找到暗号后把这件事报告给#p1002104#吧。)#k", 2, 1032101, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我会立刻送你去猫咪#b#p1040002##k那里的。", 9, 1032101, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(21729, "");
                            cm.dispose();
                            cm.warp(101030000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21729.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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