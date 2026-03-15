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
            cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#在妖精学院艾利涅碰到过的那个土拨鼠怪很古怪，\r\n总觉得有几分眼熟……", 36, 3001651, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#原来是那个土拨鼠怪啊。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0##fc0xFF25f1ca#上一次我分明在那家伙身上看到了魂魄……\r\n你要不要再放倒一次那个家伙，小老虎？", 36, 3001651, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#好吧，这种程度的话，那就再去打一次地鼠王吧，\r\n赶紧去妖精学院艾利涅吧，饕餮！", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(39557, "");
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39557.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#已经完成了回收。", 36, 3001651, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face7#谁能想到会附在其他怪物身上……", 36, 3001674 + cm.getPlayer().getGender(), true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#那家伙是蚂蚁怪，总是在地底下乱挖，惹是生非，\r\n这种怪物居然黏上了土拨鼠怪，可真是妙啊。", 36, 3001651, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face11#全都是一群惹祸精嘛？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#倒也不是全都这样，\r\n也有温顺的和可爱的，那什么，去见过自然就知道了。", 36, 3001651, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face10#有趣啊，我倒是挺期待会有什么怪物呢！", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                            } else {
                                if (status === a++) {
                                    cm.teachSkill(160000076, 0, -1);
                                    cm.teachSkill(160000076, 1, 10);
                                    cm.forceCompleteQuest(39557);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};