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
            cm.sendNormalTalk_Illus("实际上…… 贸易途中会不时出现怪物。虽然我很信任你，但是在吃力时，你也可以寻求其他舰船的帮助。", 9390220, 5, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Illus("本次航海是我们陪你进行的最后一次航海。请再次将贸易地设为[多尔切]，运载2个 #t3100000##i3100000#吧。", 9390220, 5, true, true, 1)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(17009, "step=3");
                    cm.openUI(554);
                    cm.sendNormalTalk_Illus("在出航之前，可以浏览贸易相关的情报。可以在这查看舰船情况。", 9390220, 5, false, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Illus("我们只以1金币为单位进行贸易，因此有时最小利益会出现0金币，这时，请要回去购买装船物品，用其他组合方式进行装载。请按出航按钮。", 9390220, 5, true, false, 1)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.warp(865000100, 0)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17007.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest(17007);
            cm.sendNormalTalk("你刚刚通过贸易获得了1个凯梅尔兹金币。", 1, 9390220, false, true);
            cm.gainItem(4310100, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("为进行贸易所做的准备已经全部完成。怎么样？感觉马上就能成为有钱人了吧？继续这样进行贸易的话，你的等级会提高，也会变得富有的。", 1, 9390220, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我会期待着你成为凯梅尔兹的大富豪的那一天。", 1, 9390220, true, false)
                } else {
                    if (status === a++) {
                        cm.dispose()
                    }
                }
            }
        }
    }
};