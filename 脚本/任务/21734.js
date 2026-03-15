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
            cm.sendNormalTalk("很忙吗，英雄大人？前不久我使尽各种手段在金银岛上四处探查，终于找到了一个有意思的情报。是关于#o9300346#的……", 0, 1002104, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你知道吗？自从英雄你教训了#o9300346#之后，曾位于#m101030500#的入口就被封闭了！#o9300346#那个家伙#b好像是把居所安置在了别的地方#k。", 0, 1002104, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我得到信息说#b#o9300346#的藏身处就在#m100000000#的#b#m100040000##k#k，这个信息应该比较可靠。", 0, 1002104, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline("那么你准备好了吗？#b#e如果你接受的话，我就马上将你送往#m100040000##k#n，请你到那里把#r#o9300346##k消灭。", 0, 1002104)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(21734, "");
                            cm.dispose();
                            cm.warp(100040000, 0, false)
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
            cm.sendNormalTalk("看样子，你应该已经打败#o9300346#了……怎么不高兴的样子？发生什么事了？", 8, 1002104, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("没发现任何有关#t4032323#的情报。", 2, 1002104, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("啊哈！原来是为这事。呵呵呵……完全不用担心。", 8, 1002104, true, false)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(21734);
                        cm.gainExp(26410);
                        cm.dispose()
                    }
                }
            }
        }
    }
};