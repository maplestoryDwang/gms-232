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
            cm.sendNormalTalk("想要使用双刀，就必须满足2种条件。第一，你要达到20级以上，第二，你要找到那个传说中只有有资格的主人才能得到的#b慧眼#k。", 0, 1056000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("慧眼是可以让人拥有洞察力的宝物，他会自己挑选主人。我把你送到#b飞花院深处, 珠房#k吧，你去珠房#b击打珠子#k并打下来，珠子就会变得浑浊。", 0, 1056000, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("#b双击打碎浑浊的珠子就能获得慧眼#k，当然，这得是你有资格当慧眼的主人才行。那不是轻易就能得到的的东西，你要多加努力才行。知道了吗？你接受了我就把你送到珠房。", 0, 1056000)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(2623, "");
                        cm.dispose();
                        cm.warp(910350000, 2, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/2623.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("太好了，慧眼选择了你。现在就来学双刀真正的技能吗？允许的话，我就让你觉醒为见习刀客。", 0, 1056000)
        } else {
            if (status === a++) {
                cm.teachSkill(263, 0, -1);
                cm.updateInfoQuest(1073, "400=10;430=201");
                cm.gainExp(2000);
                cm.forceCompleteQuest(2623);
                cm.sendNormalTalk("从现在开始，你就是#b#e见习刀客#n#k了。你应该为此感到自豪。", 1, 1056000, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4032616, -1);
                    cm.gainItem(1342000, 1);
                    cm.openUIWithOption(0, 1);
                    cm.sendNormalTalk("可以让你的力量更上一层楼的新装备已经发放给你了。希望你能好好使用。", 1, 1056000, true, true);
                    cm.changeJob(430);
                    cm.dispose()
                }
            }
        }
    }
};