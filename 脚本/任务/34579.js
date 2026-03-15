var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face3#好像在下面。休麦，听得到吗？", 36, 3003500, false, true)
        } else {
            if (status === a++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                cm.sendNormalTalk_Bottom("#face3#仔细听着，沃莉。我把装备传送给你。\r\n只要用滑车拉上来就行，但是得有人下去把塔纳捞上来。", 36, 3003502, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#蜘蛛在阻挡我们。但在海中无法阻挡。", 36, 3003504, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我……", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face3#你用过这种装备吗？", 36, 3003500, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("啊……", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline_Bottom("#face0#还是我去一趟吧。你来操作滑车。", 36, 3003500)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#不用担心，#h0#。沃莉没问题的。", 36, 3003502, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#我在上面安装了声波探测器，要是探测到有什么东西靠近，就快点拉上来。", 36, 3003502, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.npc_LeaveField("oid=2005316");
                                                cm.npc_LeaveField("oid=2005317");
                                                cm.npc_LeaveField("oid=2005318");
                                                cm.dispose();
                                                cm.warp(450007410, 0)
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
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};