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
            cm.askAcceptDecline_Bottom("#face0##fc0xFFbfbfbf#（《仙游山类道术》1卷，我看到了师父亲自撰写的道术集，\r\n看看其中内容，学习道术吧？）", 36, 3001674 + cm.getPlayer().getGender())
        } else {
            if (status === a++) {
                cm.forceStartQuest(39551, "1");
                cm.forceCompleteQuest(39551);
                cm.setPartner(1, 3001651, 80002800, 0);
                cm.gainExp(106);
                cm.gainExp(372);
                cm.gainExp(560);
                cm.gainExp(840);
                cm.gainExp(1242);
                cm.changeJob(16400);
                cm.teachSkill(160000001, 0, -1);
                cm.openUIWithOption(3, 3010001);
                cm.sendNormalTalk_Bottom("#face7#师父的道术已经进入了我的脑海，按下基础快捷键(K)，分配SP吧。\r\n记得将常用的技能放入快捷栏……", 36, 3001674 + cm.getPlayer().getGender(), false, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(39505);
                    cm.openUI(2);
                    cm.sendNormalTalk_Bottom("#face0#然后……按下基础快捷键(S)/选择型(C)，分配AP，\r\n因为在这段时间提升等级，会获得AP。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#啊，对了，再拿个扇坠吧，顺便再收拾点道士的必备之物。\r\n……这样就算准备就绪了吗？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face5#师父，这些东西就暂且借给您的爱徒一用，\r\n我一定会成为风光无限的道士，好好回报你的，嘻嘻……", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                        } else {
                            if (status === a++) {
                                cm.teachSkill(164001000, 4, 0);
                                cm.dispose()
                            }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39551.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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