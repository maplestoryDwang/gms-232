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
            cm.sendNormalTalk("但是你到底是怎么来的呢？自从受到希纳斯的攻击之后，和其他地区的联系就中断了。", 1, 2142001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("(不能说是从过去来的……)啊，我突然失去了知觉，醒来之后就到了这里，我也不记得怎么过来的了。你能给我说明一下现在的情况吗？", 3, 2142001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("由于战争的冲击，暂时失去记忆了吗……希纳斯在黑魔法师的影响下变得堕落了。冒险骑士团变成了我们的敌人。他们攻击了我们，你也看到了，我们村……在那次袭击中，我父亲去世了……我不想再提起这悲伤的往事了。详细的情况，你去问赫丽娜吧。", 1, 2142001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("啊，好的，知道了。", 3, 2142001, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(31105, "");
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31104.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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