var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#这感觉像是队长说的话，哈哈。", 36, 2560002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯……对了，队长说森林里诅咒气息很强，让我们小心。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#真的吗？呃……我还以为医务队会安全一点呢……", 36, 2560002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#去执行任务吧。这次的目的地是#b区域2-A#k。\r\n我先去那里做好准备，你慢慢过来。", 36, 2560002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("嗯……", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(32971, "");
                                cm.OnStartNavigation(307000200, 1, "2560104", 0);
                                cm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;17=h1;18=h0;19=h0");
                                cm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h0;13=h0;04=h1;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;17=h1;18=h0;19=h0");
                                cm.npc_LeaveField("oid=22317");
                                cm.npc_LeaveField("oid=3562664");
                                cm.npc_LeaveField("oid=3562665");
                                cm.npc_LeaveField("oid=3562764");
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#这么快就来啦？", 36, 2560002, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(32971);
                cm.updateInfoQuest(32971, "exp=1");
                cm.gainExp(550003);
                cm.dispose()
            }
        }
    }
};