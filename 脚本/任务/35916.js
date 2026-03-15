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
            cm.askAcceptDecline_Bottom("#face0#你再去帮我从#r#o2300204##k身上搜集#b15个#k#b#i4036528# #t4036528##k。\r\n香炉兔是#r#m100051021##k常见的怪物。", 36, 1013351, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#香炉兔的灰会散发出让人内心平静的香味。\r\n那就拜托你了,嗯哼,嗯哼。", 36, 1013351, false, true, 1)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(35916, "");
                    cm.OnStartNavigation(100051021, 0, "", 35916);
                    cm.npc_LeaveField("oid=895");
                    cm.npc_LeaveField("oid=897");
                    cm.npc_LeaveField("oid=898");
                    cm.dispose();
                    cm.warp(100051022, 2, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35916.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#哦,来啦。我说怎么感觉心情变得更平静了。一,二……\r\n数量刚刚好。啊,这是……呼呼……古代的味道。", 36, 1013351, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#虽然还想让你帮忙做别的事……\r\n但更多的要求,似,似乎就不太讲道理了。好吧,就到此为止吧。", 36, 1013351, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#罗盘的碎片就掉落在森林虫之地附近。\r\n在大地发出轰鸣的那天,我亲眼看到了。", 36, 1013351, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#如果我没记错,一共是裂成了三块碎片。\r\n去森林虫之地附近仔细找找,应该就能找到,咳咳。", 36, 1013351, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#哦,来啦。我说怎么感觉心情变得更平静了。一,二……\r\n数量刚刚好。啊,这是……呼呼……古代的味道。", 36, 1013351, false, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1#虽然还想让你帮忙做别的事……\r\n但更多的要求,似,似乎就不太讲道理了。好吧,就到此为止吧。", 36, 1013351, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#罗盘的碎片就掉落在森林虫之地附近。\r\n在大地发出轰鸣的那天,我亲眼看到了。", 36, 1013351, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#如果我没记错,一共是裂成了三块碎片。\r\n去森林虫之地附近仔细找找,应该就能找到,咳咳。", 36, 1013351, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(35916);
                                            cm.gainExp(2727);
                                            cm.updateInfoQuest(35948, "00=h0;10=h0;11=h1;02=h1;12=h0;22=h1;13=h0;23=h1;14=h0;15=h0;06=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h1;19=h0");
                                            cm.setPartner(0, 1013350, 0, 0);
                                            cm.gainItem(4036528, -15);
                                            cm.dispose()
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};