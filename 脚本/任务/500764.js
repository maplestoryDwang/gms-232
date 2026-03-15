var status = -1;
var selectionLog = [];
var npcs = [9400920, 9400921, 9401160];

function start(f, e, d) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return
    }(f == 1) ? status++ : status--;
    selectionLog[status] = d;
    var c = -1;
    var b = cm.getNumberFromQuestInfo(500773, "manager");
    var a = npcs[b];
    if (status <= c++) {
        cm.dispose()
    } else {
        if (status == c++) {
            cm.sendNormalTalk_Bottom("#face3##h0#，#h0#，#h0#！你听到那个声音了吗？", 37, a, false, true)
        } else {
            if (status === c++) {
                cm.sendNormalTalk_Bottom("#b什么声音？", 57, 0, true, true)
            } else {
                if (status === c++) {
                    cm.sendNormalTalk_Bottom("#face3#每天晚上都能听到很可怕的声音，村民们都在议论纷纷呢！", 37, a, true, true)
                } else {
                    if (status === c++) {
                        cm.sendNormalTalk_Bottom("#b我没听到任何声音啊。", 57, 0, true, true)
                    } else {
                        if (status === c++) {
                            cm.sendNormalTalk_Bottom("#face3#像是动物的叫声，又像是鬼怪的叫声。总之，最近村民们因为那个声音，晚上都睡不着觉呢。嗯，但我只要把头放在枕头上就会入睡，倒是没听见。", 37, a, true, true)
                        } else {
                            if (status === c++) {
                                cm.askAcceptDecline_Bottom("#face3#听说会在凯尼斯家里开会商议，你要不要去看看？\r\n#r※你要开始[EP1。邻居家的狼人]吗？\r\n该任务为可以获得我的小屋建筑图纸的剧情任务，世界内的每个账号只能进行1次。在进行时不能变更角色，请慎重决定！", 37, a)
                            } else {
                                if (status === c++) {
                                    cm.sendNormalTalk_Bottom("#face1#哇，真的吗？那他们肯定会夸我把#h0#带过去了。在我们村里，#h0#是最强的！", 37, a, false, true)
                                } else {
                                    if (status === c++) {
                                        cm.forceStartQuest(500764, "");
                                        cm.updateInfoQuest(64620, "dir=0");
                                        cm.npc_LeaveField("oid=19157007");
                                        cm.dispose();
                                        cm.warp(871000015, 0)
                                    }
                                }
                            }
                        }
                    }
                }
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