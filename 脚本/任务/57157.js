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
            cm.sendNormalTalk_Bottom("#face0#这段时间大家一直在赶赴各地执行任务，实在是辛苦了。在大家的努力下，我们联合军的战斗力日益充实。相反，织田军的战斗力却在日益减少。", 37, 9130000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#特别是明智光秀，他在形成一股独立势力后，不仅在与我们敌对，更是对信长露出了獠牙。同时，羽柴秀吉大人和德川家康大人也选择站到了我们这边来。织田四天王中所剩下的，就只有柴田胜家和泷川一益了。", 37, 9130000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#此外，根据秀吉大人所提供的情报，以信长、浓姬和兰丸为首的织田军指挥部正在准备离开本能寺，转移到其他地方去。日前我们的探子也回报说，柴田胜家负责承担起了本能寺与新据点之间的联络人员，他一直往返在这两个地方之间。而此时，他正好离开了本能寺。", 37, 9130000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#所以现在，正是我们起兵的最好时机！让我们集结联合军的战斗力，再一次进攻本能寺吧！", 37, 9130000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#好！那就让我来充当先锋吧！", 37, 9130009, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#要是没有抓住这次这个机会，下个机会什么时候会到来可就不好说了。所以这一战，我们一定要取胜才行！", 37, 9130006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#我也衷心祝愿各位能够凯旋而归。", 37, 9130021, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#好了，全军出阵！", 37, 9130000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(57157, "");
                                            cm.npc_LeaveField("oid=64854");
                                            cm.npc_LeaveField("oid=64855");
                                            cm.npc_LeaveField("oid=64856");
                                            cm.npc_LeaveField("oid=64859");
                                            cm.npc_LeaveField("oid=64863");
                                            cm.npc_LeaveField("oid=64869");
                                            cm.npc_LeaveField("oid=64843");
                                            cm.npc_LeaveField("oid=64844");
                                            cm.npc_LeaveField("oid=64845");
                                            cm.npc_LeaveField("oid=64847");
                                            cm.npc_LeaveField("oid=64848");
                                            cm.npc_LeaveField("oid=64850");
                                            cm.npc_LeaveField("oid=64852");
                                            cm.npc_LeaveField("oid=64853");
                                            cm.npc_LeaveField("oid=64862");
                                            cm.npc_LeaveField("oid=64867");
                                            cm.npc_LeaveField("oid=64868");
                                            cm.npc_LeaveField("oid=64870");
                                            cm.npc_LeaveField("oid=64871");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57157.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#剑斗。我有件事情想要麻烦剑斗你去做。", 37, 9130000, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(57157);
                cm.gainExp(9726077);
                cm.dispose()
            }
        }
    }
};