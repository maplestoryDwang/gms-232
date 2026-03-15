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
            cm.sendNormalTalk("这样看来，操纵黑暗力量也不比操纵光之力量难太多嘛。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("不过我对黑暗力量的了解实在太少了。现在只是简单的释放黑暗力量而已……而且破坏欲望一直在我体内叫嚣，弄得我现在脾气都变得暴躁起来了。看来得花些时间研究研究才行。", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("先离开森林，去人们那里找些信息吧。", 17, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("还有被封印的这几百年间，世界发生了很多变化。不知道路或者迷路的时候按#b#e[W]或[N]（选择型设置）#n#k键打开世界地图查看吧。", 17, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(25559, "");
                            cm.forceCompleteQuest(25562);
                            cm.warp(101000000, 18, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25562.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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