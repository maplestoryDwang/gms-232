var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
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
        if (status === a++) {
            cm.npc_ChangeController(1520064, "oid=225801", 698, -456, 59, 648, 748, 1, false, 0, false);
            cm.inGameDirectionEvent_SetHideEffect(1);
            cm.npc_ChangeController(1520019, "oid=25245367", 140, -20, 1, 90, 190, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=25245367", "summon", 0, 0);
            cm.npc_ChangeController(1520020, "oid=25245368", -70, 30, 14, -120, -20, 0, false, 0, false);
            cm.npc_SetSpecialAction("oid=25245368", "summon", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(900)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.sendNormalTalk("听说冰峰雪域隐藏的洞穴中有神秘的宝石，我才来的……。看来是白费劲儿了。", 1, 1520019, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("虽然里面的确蕴含着某种力量……不过，这不是封印石。", 1, 1520020, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("那个我也知道！本来就有这么大的话，如何带着到处走啊。……还有，他们收集那个叫封印石还是啥的东西到底是为了什么呢？如果搞清楚原因，也就不枉此行。", 1, 1520019, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("那个不是你应该知道的事情。", 1, 1520020, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("别那这么说嘛，其实你不是也不知道嘛。哎，真是的…… 那些叫英雄还是啥的人，为何要制作一些让人都不知道该如何使用的东西出来呢，真是受罪！", 1, 1520019, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("这么说来，上次回收的封印石你有好好保管吧？最好还是先把那个交给奥尔卡。", 1, 1520020, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("不用你担心。", 1, 1520019, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("我是让你小心点，别丢了。", 1, 1520020, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.npc_SetSpecialAction("oid=25245368", "escape", 0, 1);
                                                cm.inGameDirectionEvent_AskAnswerTime(1440)
                                            } else {
                                                if (status === a++) {
                                                    cm.npc_LeaveField("oid=25245368");
                                                    cm.npc_LeaveField("oid=25245368");
                                                    cm.sendNormalTalk("切，少废话。还说是干部呢，到头来还不是和我一样，连重要的东西是啥都不知道！", 1, 1520019, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceStartQuest(32293, "1");
                                                        cm.npc_LeaveField("oid=25245367");
                                                        cm.npc_LeaveField("oid=25245367");
                                                        cm.dispose();
                                                        cm.forceCompleteQuest(32370);
                                                        cm.warp(910540600, 1, false)
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
};