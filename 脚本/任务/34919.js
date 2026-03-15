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
            cm.askAcceptDecline_Bottom("#face4#在这个行星上，我们商队靠吃#r#m402000611##k的#o2400351#的肉为生↗\r\n去搜集#i4036345# #b#t4036345##k！先搜集#b20个#k↗", 36, 3001509)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3#哦，虽然难吃，但却是我们的主食。哦，音乐是我的食量，耶～", 36, 3001509, 0, 1)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(34919, "");
                    cm.OnStartNavigation(402000611, 0, "", 34919);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34919.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest(34919);
            cm.gainExp(678);
            cm.updateInfoQuest(34919, "exp=1");
            cm.sendNormalTalk_Bottom("#face2#哦，一，二，三，四……好多肉。有了这些，暂时就放心了↗", 36, 3001509, 0, 1);
            cm.gainItem(4036345, -20)
        } else {
            if (status === a++) {
                cm.dispose()
            }
        }
    }
};