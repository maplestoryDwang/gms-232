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
            cm.sendNormalTalk_Bottom("#face0#先在周围收集些信息吧。", 37, 3003770, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#抓住刚刚出现的家伙并收集#b他们的痕迹#k。\r\n根据痕迹就能找到路了。", 37, 3003770, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("阿扎琳留在这里吧？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#……", 37, 3003770, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("……", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#……", 37, 3003770, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("我快去快回。你等我一会。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(35717, "");
                                        cm.OnStartNavigation(450011220, 0, "west00", 0);
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35717.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#要不再搜查一遍？", 37, 3003770, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("……", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#……", 37, 3003770, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("打听出什么了吗？", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#没什么有价值的消息。", 37, 3003770, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(35717);
                                cm.gainExp(341342713);
                                cm.removeAll(4036454);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};