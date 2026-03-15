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
            cm.askAcceptDecline_Bottom("#face0#修理防具和避难处需要使用#r#m402000612##k的#o2400352#的#i4036346# #b#t4036346##k。你先去搜集#b20个#k，叽勒。", 36, 3001510)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##t4036346#的问题是太软了，但是也没别的办法。可以用的就只有那个……嗯……那就拜托你了，叽，叽勒。", 36, 3001510, 0, 1)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(34921, "");
                    cm.OnStartNavigation(402000612, 0, "", 34921);
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34921.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest(34921);
            cm.gainExp(875);
            cm.updateInfoQuest(34921, "exp=1");
            cm.sendNormalTalk_Bottom("#face4#啊，谢谢。你拿回来的材料，在避难处可以派上大用场，叽勒，叽楞……", 36, 3001510, 0, 1);
            cm.gainItem(4036346, -20)
        } else {
            if (status === a++) {
                cm.dispose()
            }
        }
    }
};