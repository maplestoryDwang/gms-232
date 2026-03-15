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
            cm.gainItem(4033324, 1);
            cm.sendNormalTalk("但愿里面的内容不会让我失望。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("加入欧罗拉的方法简单明了。只要理解我们的主旨，并用行动证明，欧罗拉的大门自然会为你敞开……", 4, 1032204, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("…………因此，立志于研究极光的隐藏的贤者们有必要仔细斟酌下这句话。<冰冷的火焰，灼热的冰块，破灭后的完成，看透黑暗的眼睛>#k", 4, 1032204, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("欧罗拉的理想，在矛盾中追求真正的真理。体验过黑暗力量具有的明快后，终于明白这句话有多么浅显了。但是没办法，只有理解这句话才能去希利尼提。", 17, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(25578);
                            cm.gainExp(2100);
                            cm.gainItem(4033324, -1);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25578.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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