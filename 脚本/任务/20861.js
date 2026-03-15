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
            cm.forceStartQuest(20861, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20861.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("你已经做好选择了吗？选择之后是不能反悔的，所以务必慎重。你真的要选择魂骑士之路吗？", 0, 1101003)
        } else {
            if (status === a++) {
                cm.changeJob(1100);
                cm.updateInfoQuest(1073, "1100=10");
                cm.teachSkill(10000255, 0, -1);
                cm.teachSkill(10001245, 1, 1);
                cm.teachSkill(10000246, 1, 1);
                cm.sendNormalTalk("我会将你的身体改造成适合魂骑士的身体。之后如果你想变得更强，可以在属性窗(S键)中提升相应的属性。如果觉得太难，可以使用#b自动分配#k。", 0, 1101003, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(1302077, 1);
                    cm.gainItem(1142066, 1);
                    cm.forceCompleteQuest(20861);
                    cm.forceCompleteQuest(29906);
                    cm.sendNormalTalk("我帮你增加了装备和其他道具的保管箱数量。多装点骑士的必需品吧。", 0, 1101003, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("另外，我给你分配了一些#bSP#k，你可以打开#bSkill菜单#k学习技能。当然，一开始并不是所有技能都可以学习。有些技能必须先学习其他技能后才可以学习。", 0, 1101003, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你要记住，和初心者的时候不同，成为魂骑士之后如果死亡，会损失之前积累的部分经验值。", 0, 1101003, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("好了……作为冒险骑士团的骑士，请为自己的荣誉而努力吧。", 0, 1101003, true, true);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};