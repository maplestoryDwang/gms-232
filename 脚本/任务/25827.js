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
            cm.sendNormalTalk("#h0#，你在认真修炼啊？", 0, 3000018, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯，我能帮助那么多的人，得到他们的喜爱，真开心。", 2, 3000018, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("(呃……这孩子真善良……)嗯，你的想法很积极向上。我有个建议给你，要不要听听？", 0, 3000018, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("你突然那么一本正经的，让人好紧张。是什么建议？", 2, 3000018, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我一直都很正经的。", 0, 3000018, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("越看越吓人额？哈哈哈。", 2, 3000018, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("真被你打败了。行了，说说正题吧。咱俩被强制结成契约有一段时间了吧，现在应该可以缔结额外契约了。", 0, 3000018, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("额外契约？", 2, 3000018, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("第一次契约不是我们自己决定的，而是受到命运的指引。但额外的契约必须要你我都同意才能缔结。", 0, 3000018, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("呃……是粉红色又要加深了吗？不过要是能获得帮助更多人的力量，粉红色我忍了。", 2, 3000018, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.askAcceptDecline("那么就建立额外契约咯！你必须跟我同时缔结契约，集中精神吧？", 1, 3000018)
                                                } else {
                                                    if (status === a++) {
                                                        cm.changeJob(6512);
                                                        cm.sendNormalTalk("为了大家，我要变强！！！", 2, 3000018, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceStartQuest(25827, "");
                                                            cm.updateInfoQuest(1073, "6500=10;6510=201;6511=201;6512=201");
                                                            cm.forceCompleteQuest(25827);
                                                            cm.gainItem(1142498, 1);
                                                            cm.effect_PlayMusic("Voice.img/jobChanged/6512F");
                                                            cm.forceStartQuest(29995, "");
                                                            cm.forceCompleteQuest(29995);
                                                            cm.npc_LeaveField("oid=2537");
                                                            cm.npc_LeaveField("oid=2538");
                                                            cm.npc_LeaveField("oid=2539");
                                                            cm.npc_LeaveField("oid=2546");
                                                            cm.npc_LeaveField("oid=2550");
                                                            cm.npc_LeaveField("oid=2551");
                                                            cm.npc_LeaveField("oid=2552");
                                                            cm.npc_LeaveField("oid=2556");
                                                            cm.npc_LeaveField("oid=2559");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25827.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};