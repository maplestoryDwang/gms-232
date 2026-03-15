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
            cm.updateInfoQuest(1652, "alert=-1");
            cm.forceStartQuest();
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b %SCRIPT_PATH%#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("呼，差点就出大事了。别用那种表情看我，跟二百五似的。", 0, 9073022, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("呃，我这一不小心就成了救命恩人了！", 0, 9073022, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(1628);
                    cm.finishAchievement(1183);
                    cm.gainExp(77790);
                    cm.sendNormalTalk("嗯，看来时空门里有什么不可告人的东西。我还有事要做，你别妨碍我，去忙你的吧。去多做点训练，看你刚才的表现，不太尽人意啊。至少要达到#e#r105级以上#k才能执行下一个任务#n。", 1, 9073022, true, true);
                    cm.gainItem(1112677, 1);
                    cm.gainItem(2000025, 50);
                    cm.gainItem(2000028, 50)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_ScreenMsg("crossHunter/chapter/end1");
                        cm.dispose()
                    }
                }
            }
        }
    }
};