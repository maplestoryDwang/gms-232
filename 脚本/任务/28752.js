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
            cm.sendNormalTalk("你去哪了？！我还以为那帮外星人把你洗脑成采矿奴隶了呢！你能逃出来真是太好了！", 0, 9201050, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("噢，对了，你能再去他们的基地一趟吗？", 0, 9201050, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("别这么看着我啊！我是让你执行潜入破坏任务！", 0, 9201050)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("就是这样！我想让你跑到外星人面前，让他们见识下我们冒险岛人的待客之道！", 0, 9201050, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("跟你说下任务细节吧！你给我回到外星人的基地里，干掉#r#o9400802##k！那个能走能动的怪物好像是它们的主机。你得小心点，它的装备让它在近身战斗中也不落下风，虽然是台电脑来着。", 0, 9201050, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("这活我就交给你了。克拉齐亚的未来和整个世界的命运都掌握在你手中！你手中啊！\r\n#fUI/UIWindow2.img/QuestIcon/8/0#200000 exp", 0, 9201050, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(28752);
                                    cm.gainExp(200000);
                                    cm.dispose()
                                }
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/28752.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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