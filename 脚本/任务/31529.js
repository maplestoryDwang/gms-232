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
            cm.sendNormalTalk("欢迎你。有关圣物的研究已经全部结束了。现在只要搜集到#r贝德罗斯#k的最后一个圣物，应该就能制作出到#r麦格纳斯#k那里去的钥匙了。", 0, 3001100, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("下个任务很明确。请你消灭#r贝德罗斯#k，并带回他的圣物。收复赫里希安的日子近在眼前了。\r\n\r\n#r#e（接受时，将自动移至该区域。）", 0, 3001100)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("请出发前往城堡。和#r特雷格罗#k或#r维克特#k不一样，现在没有办法准确推测他的实力。你只能自己多小心。", 0, 3001100, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(31529, "");
                        cm.forceStartQuest(31546, "1");
                        cm.dispose();
                        cm.warp(401053002, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31529.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("打败了贝德罗斯……返回#b#p3001100##k那里报告吧。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("说起来#r贝德罗斯#k虽然消失了，却不知是生是死。他怎么样了？报告时顺便问问吧。", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("贝德罗斯身上带着龙头形状的印章。终于集齐3个圣物了吗。跟#b#p3001100##k说说这东西的事吧。", 16, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(31529);
                        cm.gainExp(2250000);
                        cm.gainItem(4033403, 1);
                        cm.dispose();
                        cm.warp(401040000, 0, false)
                    }
                }
            }
        }
    }
};