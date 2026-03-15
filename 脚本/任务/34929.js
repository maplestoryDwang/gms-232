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
            cm.sendNormalTalk_Bottom("#face0#（把在避难处外面找到的破碎的动力源给她看。说必须找到其余两个碎片。）", 36, 3001500 + cm.getPlayer().getGender(), 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3#嗯，这么说真的要到很远的地方去才行了……我们必须找到另外两个碎片……", 36, 3001508, 1, 1)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face3#做好出发的准备之后，你能到#r#m402000620##k来一趟吗？\r\n唉……对你们来说，或许将是非常艰苦的旅程。", 36, 3001508)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#我去把避难处的居民们召集起来。我们必须给你们动力源探索队送行。\r\n好的，一会儿见。", 36, 3001508, 0, 1)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(34929, "");
                            cm.OnStartNavigation(402000620, 0, "", 0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34929.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#你来啦。都准备好了吗？", 36, 3001508, 0, 1)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(34929);
                cm.gainExp(6107);
                cm.updateInfoQuest(34929, "exp=1");
                cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;11=h0;02=h1;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;09=h0");
                cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;11=h0;02=h0;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;09=h0");
                cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;11=h0;02=h0;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;09=h1");
                cm.warp(402090002, 0, false);
                cm.npc_LeaveField("oid=144129598");
                cm.npc_LeaveField("oid=144129599");
                cm.npc_LeaveField("oid=144129600");
                cm.npc_LeaveField("oid=144129601");
                cm.npc_LeaveField("oid=144129602");
                cm.npc_LeaveField("oid=144129603");
                cm.npc_LeaveField("oid=144129604");
                cm.npc_LeaveField("oid=144129605");
                cm.npc_LeaveField("oid=144129606");
                cm.npc_LeaveField("oid=144129607");
                cm.npc_LeaveField("oid=144129608");
                cm.npc_LeaveField("oid=144129609");
                cm.npc_LeaveField("oid=144129610");
                cm.npc_LeaveField("oid=144129611");
                cm.dispose()
            }
        }
    }
};