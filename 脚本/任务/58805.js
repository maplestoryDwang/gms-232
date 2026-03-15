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
            cm.sendNormalTalk_Bottom("#face0#叔叔，你是不是很闲呀？", 37, 9111009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("呃……嗯？才不是。我是来邀请你成为我的同伴的。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#哼，你之前那样质疑天狗，现在还来巴结我，真不要脸。", 37, 9111009, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#我只服从天狗的指示，你去请求天狗的许可后再来吧。", 37, 9111009, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(58805, "");
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58805.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#万事屋跟你这么说的吗？呵呵，这个淘气鬼……我会帮你跟她好好沟通的。", 37, 9111008, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("谢谢。唉，很抱歉之前我怀疑过你。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#呵呵……没关系。", 37, 9111008, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(58805);
                        cm.dispose()
                    }
                }
            }
        }
    }
};