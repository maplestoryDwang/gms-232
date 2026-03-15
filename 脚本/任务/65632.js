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
            cm.sendNormalTalk_Bottom("我们冒险岛探险队最近集中火力调查的地方便是一个叫#b海市蜃楼岛#k的地方！", 36, 9401219, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("海市蜃楼岛？", 56, 0, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("没错！名字很独特吧？这座岛之前一直掩藏在浓雾之中，才不容易被发现。\r\n我们冒险岛探险队也是最近才查到了有关这座岛的消息。", 36, 9401219, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("具体的情况#b小风#k会给你介绍的！正好她也有东西要给你看，你去找小风聊一聊吧！", 36, 9401219, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(65632, "");
                            cm.fieldEffect_PlayFieldSound("Sound/UI.img/Invite", 100);
                            cm.OnStartNavigation(867151000, 1, "9401218", 0);
                            cm.npc_LeaveField("oid=256203");
                            cm.npc_LeaveField("oid=256205");
                            cm.npc_LeaveField("oid=256206");
                            cm.npc_LeaveField("oid=256208");
                            cm.updateInfoQuest(65632, "NpcSpeech=94012181");
                            cm.dispose();
                            cm.warp(867151002, 0, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/65632.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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