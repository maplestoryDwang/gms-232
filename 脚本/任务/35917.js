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
            cm.sendNormalTalk_Bottom("#face0#唉……真是乱来。向勇士提出了这么多奇怪的要求。\r\n他其实不是个坏人。", 36, 1013350, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#啊,对了。快去找罗盘碎片吧。\r\n从现在开始,我来给你带路。", 36, 1013350, true, true, 1)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face2#嘿嘿,和我一起去,应该很快就能找到罗盘碎片。\r\n因为我很熟悉这里的路。好了……你想跟我一起去吗？", 36, 1013350, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#好的,请跟我来,勇士。\r\n嘿嘿,我们快到森林虫之地去寻找罗盘碎片吧～！", 36, 1013350, false, true, 1)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(35948, "00=h0;10=h0;11=h1;02=h1;12=h0;22=h1;13=h0;23=h1;14=h0;15=h0;06=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0");
                            cm.updateInfoQuest(35948, "00=h0;10=h0;11=h1;02=h1;12=h1;22=h1;13=h0;23=h1;14=h0;15=h0;06=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0");
                            cm.forceStartQuest(35917, "");
                            cm.OnStartNavigation(100051031, 1, "1013312", 35917);
                            cm.setPartner(1, 1013350, 80002700, 0);
                            cm.teachSkill(3010002, 20, 0);
                            cm.npc_LeaveField("oid=895");
                            cm.npc_LeaveField("oid=897");
                            cm.npc_LeaveField("oid=898");
                            cm.dispose();
                            cm.warp(100051031, 1, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35917.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#森,森林虫之地到了。", 36, 1013350, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#高尔根说的没错,确实有罗盘碎片掉在地上……\r\n但是……有好多虫子……", 36, 1013350, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0##b(周围森林里的虫子总是跑过来捣乱。\r\n这样好像没办法把碎片捡起来。)#k", 36, 1013358, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(35917);
                        cm.dispose()
                    }
                }
            }
        }
    }
};