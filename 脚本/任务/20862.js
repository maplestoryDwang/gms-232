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
            cm.forceStartQuest(20862, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20862.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("你已经做好选择了吗？选择之后是不能反悔的。请一定要慎重考虑……你真的要选择炎术士之路吗？", 0, 1101004)
        } else {
            if (status === a++) {
                cm.changeJob(1200);
                cm.sendNormalTalk("从现在开始，你就是一名炎术士了。啊，真让人高兴！我又有了新同伴……对了，我得先分配一些能力给你。", 0, 1101004, false, true)
            } else {
                if (status === a++) {
                    cm.teachSkill(10000256, 0, -1);
                    cm.updateInfoQuest(1073, "1200=10");
                    cm.teachSkill(10001245, 1, 1);
                    cm.teachSkill(10000248, 1, 1);
                    cm.sendNormalTalk("现在你已经是炎术士了。如果你想变得更强，可以在属性窗(S键)中提升相应的属性。如果觉得太难，可以使用#b自动分配#k。这对还不熟悉魔法师职业的人而言非常有用。", 0, 1101004, true, true)
                } else {
                    if (status === a++) {
                        cm.gainItem(1372043, 1);
                        cm.gainItem(1142066, 1);
                        cm.forceCompleteQuest(20862);
                        cm.forceCompleteQuest(29906);
                        cm.sendNormalTalk("我帮你增加了装备和其他道具的保管箱数量！希望能够派上用场。", 0, 1101004, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("对了, 还有……我给了你一些#bSP#k, 请你打开#b技能菜单#k, 学习技能.只要不断努力, 应该很快就能学会所有技能.啊, 一开始并不是所有的技能都可以学习.有些技能必须在学会其他技能后, 才能学习.", 0, 1101004, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("和初心者时期不同，你已经成为了炎术士，死亡时会损失之前积累的部分经验值。请务必小心……", 0, 1101004, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("好了……作为冒险骑士团的骑士，让我们一同努力吧！", 0, 1101004, true, true);
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