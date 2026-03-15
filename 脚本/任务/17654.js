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
            cm.askYesNo("现在也不是马上谈论女皇大人的和平条约的时候……应该没有要做的事情。该借此机会逛逛桑凯梅尔兹。", 16, 0)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("呃啊啊啊！！", 37, 9390207, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯？那是什么？？怎么会有惨叫声……好像是东边发出来的声音……", 35, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("到村子东边#b#m865020000##k去看看。", 35, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(17654, "");
                            cm.dispose();
                            cm.warp(865020071, 0)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17654.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("这家伙是受过训练的暗杀者！", 57, 9390216, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("这里发生了什么事啊！！", 37, 9390206, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("好像是那边！", 37, 9390202, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("麻烦了。先撤退。", 37, 9390227, true, true)
                    } else {
                        if (status === a++) {
                            cm.npc_ChangeController(9390203, "oid=2380621", 160, 343, 60, 110, 210, 0, false, 0, false);
                            cm.npc_SetSpecialAction("oid=2380621", "summon", 0, 0);
                            cm.npc_ChangeController(9390236, "oid=2380622", 300, 343, 60, 250, 350, 0, true, 0, false);
                            cm.npc_SetSpecialAction("oid=2380622", "summon", 0, 0);
                            cm.npc_ChangeController(9390206, "oid=2380623", 430, 343, 61, 380, 480, 0, false, 0, false);
                            cm.npc_SetSpecialAction("oid=2380623", "summon", 0, 0);
                            cm.forceCompleteQuest(17654);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};