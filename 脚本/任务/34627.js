var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("#face0#别再靠近这里了。竞技场参加者不需要再进去了啊？还不快滚开！", 37, 3001268, false, true, 1)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("#face0#你不觉得那些穿长袍的家伙很奇怪吗？德洛特大人说过，看到那种打扮的家伙，必须好好教训一下。", 37, 3001269, true, true, 1)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("#face0#没错，应该是这样。那个，你们两个家伙先去确认一下。快点过来，快！", 37, 3001269, true, true, 1)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("#face0#怎、怎么办……没想到那些家伙这么机敏？呃呃，趁他们还没发现，干脆冲出去干掉他们吧。", 37, 3001251, true, true, 1)
                    } else {
                        if (status === b++) {
                            cm.askAcceptDecline_Bottom("#face1#科尼这家伙，偶尔还会说句中听的话嘛！好吧，我这就把那些家伙全部干掉！\r\n\r\n#r※ 接受时，将自动前往狩猎任务区域。", 37, 3001270, 1)
                        } else {
                            if (status === b++) {
                                cm.playerMessage(5, "消灭敌人后，才能前往其他地区。");
                                var a = cm.getEventManager("魔链影士_战斗4_击杀数");
                                a.startInstance(cm.getPlayer(), cm.getMap());
                                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34627.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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