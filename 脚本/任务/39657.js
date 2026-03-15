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
            cm.forceCompleteQuest(39601);
            cm.forceStartQuest(39657, "");
            cm.forceCompleteQuest(39657);
            cm.updateInfoQuest(39601, "50=h0;51=h0;52=h0;53=h0;54=h0;j=5;55=h0;56=h0;57=h0;58=h0;59=h0;q=9");
            cm.teachSkill(150021005, 0, -1);
            cm.teachSkill(150021005, 1, 1);
            cm.getTopMsgFont("获得了<专注>技能。", 3, 20, 20, 0, 0);
            cm.teachSkill(150020006, 10, 10);
            cm.getTopMsgFont("<回忆>技能的等级提高了。", 3, 20, 20, 0, 0);
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(神秘光芒揭露了刻印在我灵魂深处的力量。\r\n集中精神接收那份力量吧。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.forceStartQuest(39694, "");
                cm.forceCompleteQuest(39694);
                cm.sendNormalTalk_Bottom("#face0#下回再见面时，我也会变得更强的。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#即使一切都改变，我希望至少你能坚守那份纯粹的心意。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#再见，杰罗姆……我年少的主君。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                    } else {
                        if (status === a++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39657.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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