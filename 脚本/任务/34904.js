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
            cm.askAcceptDecline_Bottom("#face6#(哈,这个气息……是那个家伙。呃……好难受……不,必须振作精神。这次……必须把一切搞明白！)\r\n\r\n#b(接受时切换地图。)", 37, 3001501, 1)
        } else {
            if (status === a++) {
                cm.setNumberForQuestInfo(34904, "map", cm.getMapId());
                cm.dispose();
                cm.warp(940205800, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34904.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face6#(呼……呼……原来如此……有关幽灵之力的谜团差不多已经解开了。对于我的灵魂……那家伙好像也不知道。)", 37, 3001501, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face8#(但还是很奇怪……那家伙的内心……想在我的体内与我共存的理由……就只有那个吗？)", 37, 3001501, true, true, 1)
            } else {
                if (status === a++) {
                    cm.teachSkill(155120014, 0, 10);
                    cm.teachSkill(155120013, 0, 10);
                    cm.teachSkill(155120012, 0, 10);
                    cm.teachSkill(155120011, 0, 10);
                    cm.teachSkill(155120010, 0, 10);
                    cm.teachSkill(155121009, 0, 5);
                    cm.teachSkill(155121008, 0, 10);
                    cm.teachSkill(155121306, 0, 10);
                    cm.teachSkill(155121102, 0, 10);
                    cm.teachSkill(155120000, 0, 10);
                    cm.updateInfoQuest(1073, "15500=10;15510=30;15511=80;15512=206");
                    cm.forceCompleteQuest(34904);
                    cm.gainItem(1143101, 1);
                    cm.playerMessage(5, "获得了<深渊中的光亮>勋章。");
                    cm.playerMessage(-1, "获得了<深渊中的光亮>勋章。");
                    cm.forceCompleteQuest(34909);
                    cm.changeJob(15512);
                    cm.openUI(2);
                    cm.openUIWithOption(3, 155110000);
                    cm.teachSkill(155120010, 10, 10);
                    cm.teachSkill(155120012, 10, 10);
                    cm.teachSkill(155120013, 10, 10);
                    cm.teachSkill(155120011, 10, 10);
                    cm.teachSkill(155120000, 10, 10);
                    cm.teachSkill(155120014, 10, 10);
                    cm.dispose()
                }
            }
        }
    }
};