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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, true, true);
            cm.setStandAloneMode(true);
            cm.sendNormalTalk_Illus_II("……真是太蠢了，虽然我已经想到你们会跟来的。", 9130116, 5, false, true, 9130116)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Illus_II("你难道认为至今你看到的都是真的？怎么可能。", 9130116, 5, true, true, 9130116)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Illus_II("这里是我创造的空间，从你进来的那一刻开始，这一切都是假的。", 9130116, 5, true, true, 9130116)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Illus_II("这只不过是为了魔王降临，需要祭品，把盟军骗进来而已，哈哈。", 9130116, 5, true, true, 9130116)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("是你叫我了吗…… ", 5, 9130122, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("…………但是……作为召唤者来说，你太弱了……", 5, 9130122, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我是不会进入你的身体的……不过，我不会让你白白召唤我出来的……呵呵。", 5, 9130122, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("我会在你的身体里种下强大的妖怪。", 5, 9130122, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2900);
                                            cm.effect_Direction("Effect/DirectionJP3.img/sengoku/Scene0", 0, 0, 0)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(58939);
                                                cm.forceStartQuest(58949, "4th");
                                                cm.npc_LeaveField("oid=539108890");
                                                cm.npc_LeaveField("oid=539108890");
                                                cm.npc_LeaveField("oid=539108891");
                                                cm.npc_LeaveField("oid=539108891");
                                                cm.npc_LeaveField("oid=539108893");
                                                cm.npc_LeaveField("oid=539108893");
                                                cm.npc_LeaveField("oid=539108894");
                                                cm.npc_LeaveField("oid=539108894");
                                                cm.npc_LeaveField("oid=539108895");
                                                cm.npc_LeaveField("oid=539108895");
                                                cm.eventSKill(0);
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.setStandAloneMode(false);
                                                cm.updateInfoQuest(58973 + cm.getNumberFromQuestCustomData(58900), "m035=clear;dr1=clear;dr2=clear;m037=clear;m038=clear;m039=clear");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58939.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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