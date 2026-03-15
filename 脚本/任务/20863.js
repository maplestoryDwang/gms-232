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
            cm.forceStartQuest(20863, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20863.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("你已经选好了吗……？……一旦决定，就无法后悔。慎重的决定可以使人变得贤明。", 0, 1101005)
        } else {
            if (status === a++) {
                cm.changeJob(1300);
                cm.sendNormalTalk("从现在开始，你就是风灵使者了。现在，我会分配给你一些能力……", 0, 1101005, false, true)
            } else {
                if (status === a++) {
                    cm.teachSkill(10000257, 0, -1);
                    cm.updateInfoQuest(1073, "1300=10");
                    cm.teachSkill(10001245, 1, 1);
                    cm.teachSkill(10000247, 1, 1);
                    cm.sendNormalTalk("现在你已经是风灵使者了。如果你想变得更强，可以在属性窗(S键)中提升相应的属性。使用#b自动分配#k功能，可以使属性的分配变得更简单。", 0, 1101005, true, true)
                } else {
                    if (status === a++) {
                        cm.gainItem(1452051, 1);
                        cm.gainItem(2060000, 9999);
                        cm.gainItem(2060000, 9999);
                        cm.gainItem(2060000, 9999);
                        cm.gainItem(1142066, 1);
                        cm.forceCompleteQuest(20863);
                        cm.forceCompleteQuest(29906);
                        cm.sendNormalTalk("作为风灵使者，需要的物品可不少呢。所以我帮你增加了你的装备和其他道具的保管箱数量。", 0, 1101005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我给你分配了一些#bSP#k。你可以在#bSkill菜单#k中学习技能。有些技能需要先学习其他技能后才能学习，所以在学习技能的时候需要慎重考虑。", 0, 1101005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("和初心者时期不同，成为风灵使者之后，死亡时会损失之前积累的部分经验值。请你务必留意……", 0, 1101005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("好了……作为冒险骑士团的一员，希望你能尽忠职守……", 0, 1101005, true, true);
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