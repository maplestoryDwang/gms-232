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
            cm.sendNormalTalk_Bottom("哟，我的名字扎拉~\r\n禁止榨取劳动~\r\n你还是走吧走吧~", 37, 1531028, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#你们集体这是怎么了。\r\n小心我直接把你们全都给报废了啊。", 37, 1531003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("……麻烦了，就50只……\r\n\r\n#b#i1060015# #t1060015#", 37, 1531028, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("#face0#哼，知道了，看你这么辛苦就帮帮你吧。\r\n就只帮你打猎#b50只冰独眼兽#k啊。", 36, 1531003)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("呜呜，谢谢了，我实在是辛苦了。", 37, 1531028, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(22762, "");
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22762.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("谢谢，我真的很累，谢谢了……\r\n\r\n#b#i1060015# #t1060015#", 37, 1531028, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(22762);
                cm.gainExp(10500);
                cm.gainItem(1060015, 1);
                cm.dispose()
            }
        }
    }
};