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
            cm.sendNormalTalk("我已经把当前能做的事情都做了，现在对我们来说，需要一些信息。我需要知道和黑魔法师一起被封印的这段漫长的时间里，这个世界发生了什么，和我一起战斗的伙伴怎么样了，还有欧罗拉……我生活的源泉及第2故乡，那里现在怎么样了。", 17, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("先去最近的村庄看看吧。现在得去听取点信息。路好像在那边。", 17, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("被封印的这几百年间，世界发生了很多变化。不知道路或者迷路的时候按#b#e[W]或[N]（选择型设置）#n#k键打开世界地图查看吧。", 17, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.warp(101000000, 0);
                        cm.forceCompleteQuest(25533);
                        cm.addPopupSay(0, 4000, "问问看这里的妖精们(艾温)吧。");
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25533.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};