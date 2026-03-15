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
            cm.askAcceptDecline_Bottom("#face0#我需要#b10个#k可以从#r#o2300201##k身上获得的#b#i4036525# #t4036525##k。\r\n胖胖花就生活在#r#m100051013##k。", 36, 1013350, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#那就拜托你了,勇士。\r\n啊,胖胖花的刺很尖,小心别被戳到。明白了吗？", 36, 1013350, false, true, 1)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(35909, "");
                    cm.OnStartNavigation(100051013, 0, "", 35909);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35909.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#咦,胖胖花茎干已经搜集到了吗？\r\n这么快……勇士,你真是太强了。", 36, 1013350, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#胖胖花茎干非常硬、非常粗糙,\r\n但是用代代相传的秘方,就能做成制作灵药的材料。", 36, 1013350, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#在节日的最后,会祈祷村子平安,然后把灵药分给大家喝。\r\n你也想尝尝看吗？虽然味道非常苦。", 36, 1013350, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#好了……我来告诉你接下来需要帮忙的事。\r\n准备好了之后,请重新和我对话,嘿嘿。", 36, 1013350, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0##b(把灵药分给大家喝……)#k", 36, 1013358, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(35909);
                                cm.gainExp(398);
                                cm.gainExp(449);
                                cm.gainItem(4036525, -10);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};