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
            cm.sendNormalTalk_Bottom("#face2##h0#！能麻烦你扶我一下吗？", 36, 3002110, false, true)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, true);
                cm.setStandAloneMode(true);
                cm.sendNormalTalk_Bottom("但是这样的身体，恐怕……", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face11#也许狐狸树顶上什么都没有……", 37, 3002110, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face14#但我不能在这里放弃！", 37, 3002110, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("……既然这样，我会尽我所能帮助你。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(34770, "20=h2;21=h0;22=h0;23=h0;24=h0;25=h0;19=B;29=h0");
                                cm.inGameDirectionEvent_ChangeEquipment([1103064]);
                                cm.sendNormalTalk_Bottom("#face5#好像只要再爬一点就到了！加油！	", 37, 3002110, true, true)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
                                    cm.warp(940204240, 0);
                                    cm.setStandAloneMode(false);
                                    cm.setInGameDirectionMode(false, true, false)
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