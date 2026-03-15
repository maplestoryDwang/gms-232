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
            cm.sendNormalTalk("那些家伙们看上去是这地方的守卫。", 0, 9390263, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk(" ……如果说是守卫的话这人数也太多了吧？", 2, 9390263, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("……不管怎样不干掉他们的话就无法通过这里了。先把能看到的都干掉。", 0, 9390263)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(17663, "");
                        cm.sendNormalTalk("我们比比看谁干掉的更多吧？走吧！", 0, 9390263, false, true)
                    } else {
                        if (status === a++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17663.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("呼，好像消灭得差不多了。", 0, 9390263, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("走，赶紧去里面找找看吧。", 0, 9390263, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(17663);
                    cm.dispose()
                }
            }
        }
    }
};