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
            cm.sendNormalTalk_Bottom("#face0##b#h0##k，靠着你找来的火之五行，我聆听了大太法师的第二个启示。", 37, 9110002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#据启示所说，居住在妖怪森林深处的妖鬼们身上带有金之五行。你去帮我弄来好吗。", 37, 9110002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("妖鬼是什么？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#妖鬼……是凶恶又野蛮的妖怪。启示中提到，暴走的妖鬼们正危害到巫纳之精气。", 37, 9110002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#对了，麻烦你找到被妖鬼们破坏的佛像，并将其修复。有了那些佛像，就能使巫纳之精气恢复原样。", 37, 9110002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我知道了。我去找找看。", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#……嗯……还有…… ", 37, 9110002, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("还有什么事要委托我吗？", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face1#…………谢谢你。", 37, 9110002, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askMenu_Bottom("(你用这样平常的语气说话时……还有点可爱嘛。)\r\n\r\n#L0#别客气，这都是为了你妹妹早点好起来。我去去就回。#l\r\n#L1#这语气……挺可爱啊。别担心。#l", 56, 0)
                                            } else {
                                                if (status === a++) {
                                                    selectionLog[66] = b;
                                                    if (selectionLog[66] == 0) {
                                                        cm.sendNormalTalk_Bottom("别客气，这都是为了你妹妹早点好起来。我去去就回。", 57, 0, false, true)
                                                    } else {
                                                        cm.sendNormalTalk_Bottom("这语气……挺可爱啊。别担心。", 57, 0, false, true)
                                                    }
                                                } else {
                                                    if (status === a++) {
                                                        if (selectionLog[66] == 0) {
                                                            cm.sendNormalTalk_Bottom("#face0#谢谢你……祝你一路顺风。", 37, 9110002, true, true)
                                                        } else {
                                                            cm.sendNormalTalk_Bottom("#face0#……刚才是口误。祝你一路顺风。", 37, 9110002, true, true)
                                                        }
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceStartQuest(58730, "");
                                                            cm.OnStartNavigation(800010000, 0, "", 0);
                                                            cm.updateInfoQuest(58730, "state=0");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58730.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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