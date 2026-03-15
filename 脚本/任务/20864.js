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
            cm.forceStartQuest(20864, "");
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20864.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("你真的决定了吗？……世上是没有后悔药的。希望你慎重考虑。你要选择夜行者之路吗？", 0, 1101006)
        } else {
            if (status === a++) {
                cm.changeJob(1400);
                cm.sendNormalTalk("从现在开始，你就是夜行者了。为了纪念你成为我们的同伴，我会给你分配一些能力。", 0, 1101006, false, true)
            } else {
                if (status === a++) {
                    cm.teachSkill(10000258, 0, -1);
                    cm.updateInfoQuest(1073, "1400=10");
                    cm.teachSkill(10001245, 1, 1);
                    cm.teachSkill(10000249, 1, 1);
                    cm.sendNormalTalk("现在你已经是夜行者了。如果你想变得更强，可以在属性窗(S键)中提升相应的属性。如果觉得太难，可以使用#b自动分配#k……如果你不相信自动分配，可以自己亲自动手。", 0, 1101006, true, true)
                } else {
                    if (status === a++) {
                        cm.gainItem(1472061, 1);
                        cm.gainItem(2070015, 1);
                        cm.gainItem(2070015, 1);
                        cm.gainItem(2070015, 1);
                        cm.gainItem(1142066, 1);
                        cm.forceCompleteQuest(20864);
                        cm.forceCompleteQuest(29906);
                        cm.sendNormalTalk("我看你好像需要增加装备和其他道具的保管箱数量，就帮了你一下。希望能派上用场。", 0, 1101006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("还有, 我给了你一些#bSP#k, 你可以打开#b技能菜单#k, 学习技能.这样打猎起来才会容易.啊, 当然, 有些技能必须在学会其他技能后, 才能学习.一开始先别去碰它.", 0, 1101006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("和初心者时期不同，成为夜行者之后如果死亡，会损失之前积累的部分经验值。所以要懂得如何照顾自己。", 0, 1101006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("好了……作为冒险骑士团的骑士，去探索谁都无法到达的黑暗吧。", 0, 1101006, true, true);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};