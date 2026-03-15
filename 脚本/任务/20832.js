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
            cm.sendNormalTalk("基本攻击你好像确实已经学会了。这次让我来教你更深奥的攻击方法吧。", 5, 1102102, false, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(20832, "quit");
                cm.sendNormalTalk("#h0#，训练还行吧？继续努力。奇姆、奇赞。你去和他们谈谈……", 5, 1102100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#h0#，你先休息一下吧。", 5, 1102102, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("(嘀咕嘀咕嘀咕)", 5, 1102100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("!!!", 5, 1102102, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("...", 5, 1102101, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#h0#，你在这里稍等一下。我很快就会回来。不要一个人到处乱逛！", 5, 1102102, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(20832);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20832.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("基本攻击你好像确实已经学会了。这次让我来教你更深奥的攻击方法吧。", 5, 1102102, false, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(20832, "quit");
                cm.sendNormalTalk("#h0#，训练还行吧？继续努力。奇姆、奇赞。你去和他们谈谈……", 5, 1102100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#h0#，你先休息一下吧。", 5, 1102102, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("(嘀咕嘀咕嘀咕)", 5, 1102100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("!!!", 5, 1102102, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("...", 5, 1102101, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#h0#，你在这里稍等一下。我很快就会回来。不要一个人到处乱逛！", 5, 1102102, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(20832);
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
};