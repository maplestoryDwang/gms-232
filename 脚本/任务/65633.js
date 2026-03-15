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
            cm.sendNormalTalk_Bottom("总之呢！虽说这岛上肯定沉睡着传奇宝物，不过可惜的是，海市蜃楼岛可不是随便什么人都能接近的……", 36, 9401219, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("所以，我们才需要像#h0#你这样实力超群的队员！#b小云#k一定也翘首以盼着实力超群的队员的加盟！", 36, 9401219, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("对了，瞧瞧我这脑袋！我还得正式介绍你认识一下#b小云#k！\r\n我们赶紧去见#b小云#k吧！", 36, 9401219, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(65633, "");
                        cm.fieldEffect_PlayFieldSound("Sound/UI.img/Invite", 100);
                        cm.OnStartNavigation(867151000, 1, "9401217", 0);
                        cm.npc_LeaveField("oid=256204");
                        cm.npc_LeaveField("oid=256209");
                        cm.npc_LeaveField("oid=256210");
                        cm.updateInfoQuest(65633, "NpcSpeech=94012171");
                        cm.dispose();
                        cm.warp(867151003, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/65633.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("你还没完成训练吗？连模拟训练场的合格标准都通过不了，这种愣头青压根就没资格参与勘探。", 36, 9401220, false, true, 1)
        } else {
            if (status === a++) {
                cm.askYesNo("废话不多说,现在就去训练场吧?", 0, 9401217)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("好吧，就让我们来看看到底有多厉害。", 0, 9401217, false, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(65585, "ini=0");
                        cm.updateInfoQuest(65585, "ini=0;tuto=1");
                        cm.updateInfoQuest(65742, "SN=1108");
                        cm.dispose();
                        cm.warp(867152015, 0, false)
                    }
                }
            }
        }
    }
};