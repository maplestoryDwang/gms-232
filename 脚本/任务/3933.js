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
            cm.sendNormalTalk("没想到你会这么的强…以你的水平也许可以成为沙子图团的团员也说不定。对沙子图团员来说，最重要的就是力量的强大，而你…看来已经具备了足够的实力！但我还是要再进行一次测试…如何？可以接受吗？", 0, 2101003, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("若想要实际测试你的力量，应该需要亲自去体验吧？我想和你进行一场对战！别担心，我也不想伤害你…就用我的分身来对付你好了！可以马上进行对战吗？", 0, 2101003)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("好！充满自信是吗？", 0, 2101003, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(3933, "");
                        cm.dispose();
                        cm.warp(926000000, 0, false);
                        cm.spawnMobLimit(9100013, 1, 80, 275, 100)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/3933.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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