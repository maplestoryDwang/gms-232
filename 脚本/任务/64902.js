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
            cm.sendNormalTalk_Bottom("#face0#哥哥姐姐们去哪里了？一起玩才更开心啊……\r\n和特鲁迪一起玩爆竹游戏吧~？", 37, 9400926, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b特鲁迪，你开心吗？庆典开始后，就可以尽情放爆竹了呢！", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#没错~！我们特鲁迪也一起来玩吧，迎接新年~！", 37, 9400921, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face4#话说回来，你不好奇刚刚那个孩子是谁吗？我们偷偷跟着他吧？", 37, 9400920, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#嗯……我也有点好奇。我们看起来年纪相仿，但我在克伦西亚却从未见过他。\r\n他是从哪儿来的呢？", 37, 9400921, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#问问就知道了吧！我刚才看它好像往森林方向跑了！\r\n#h0#，埃尔宾哥哥！我们快跟上去看看！", 37, 9400920, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(64902, "");
                                    cm.fieldEffect_PlayFieldSound("Sound/UI.img/Invite", 100);
                                    cm.OnStartNavigation(871000000, 0, "goForest", 0);
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64902.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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