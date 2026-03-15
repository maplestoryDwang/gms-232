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
            cm.sendNormalTalk_Bottom("#face2#做得很好，#ho#，表现相当出色。", 37, 2052006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#其实万能牌项目这个计划并不是打算挑选暂时的替补，\r\n而是打算正式招募你成为第七位队员。", 37, 2052006, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("#face2#怎么样，你想不想成为第七位队员，当上正义的守护者？", 36, 2052006)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(3497);
                        cm.gainExp(3668312);
                        cm.forceCompleteQuest(3496);
                        cm.sendNormalTalk_Bottom("#face2#真是厉害，哈哈哈！", 37, 2052006, false, false);
                        cm.gainItem(1143030, 1);
                        cm.dispose()
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
            cm.sendNormalTalk_Bottom("#face2#做得很好，#ho#，表现相当出色。", 37, 2052006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#其实万能牌项目这个计划并不是打算挑选暂时的替补，\r\n而是打算正式招募你成为第七位队员。", 37, 2052006, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("#face2#怎么样，你想不想成为第七位队员，当上正义的守护者？", 36, 2052006)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(3497);
                        cm.gainExp(3668312);
                        cm.forceCompleteQuest(3496);
                        cm.sendNormalTalk_Bottom("#face2#真是厉害，哈哈哈！", 37, 2052006, false, false);
                        cm.gainItem(1143030, 1);
                        cm.dispose()
                    }
                }
            }
        }
    }
};