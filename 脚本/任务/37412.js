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
            cm.sendNormalTalk_Bottom("#face0#你好像有事要谈，需要我们先回避一下吗？", 36, 3004431, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#不必。我原本也要请二位来旁听的。", 36, 3004430, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#什么？", 36, 3004431, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#王子陛下说，二位可以帮忙一起寻找圣剑的主人。", 36, 3004430, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#话虽如此……可我们这些外人也能插手吗？", 36, 3004431, true, true);
                            cm.npc_LeaveField("oid=553897");
                            cm.npc_ChangeController(3004414, "oid=368321", 5, 85, 2, -45, 55, 1, false, 0, false);
                            cm.npc_ChangeController(3004415, "oid=368322", -125, 85, 2, -175, -75, 0, false, 0, false)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#重新寻回#b圣剑阿索尔#k的光芒，是我们教团一直以来的夙愿，\r\n但是至今为止，只依靠我们的力量，并没有取得什么进展。", 36, 3004430, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#说不定……有时候我们也需要换个角度来思考。", 36, 3004430, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#嗯……", 36, 3004431, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askYesNo_Bottom("#face0#我可以请求二位帮忙吗？", 36, 3004430)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#那就恭敬不如从命了。", 36, 3004431, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#有什么线索吗？", 36, 3004431, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#我也是最近才知道这件事，圣剑虽然在古代战争中失去了光芒，但那之后，它好像一直在近天峰找寻主人。", 36, 3004430, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#我想看看有没有相关的记录。", 36, 3004430, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceStartQuest(37412, "");
                                                                cm.OnStartNavigation(993140050, 0, "east00", 37412);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37412.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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