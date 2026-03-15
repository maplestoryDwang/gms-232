var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("嗯…… #b哔嘟？#k你想做什么肉饼啊……", 2, 3003155, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("蛋……蛋……蛋……蛋", 0, 3003164, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你要说出来我才能知道~ 你说什么？", 2, 3003155, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我不是说了我要吃#b蛋#k吗？\r\n希望你能认真点听我说话。", 0, 3003164, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("哦？原来你会好好说话的啊？", 2, 3003155, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("呵呵~我…不太会…说话…哼哼……\r\n如果…放上用蛋做成的饼……。应该很好吃，呵呵", 0, 3003164, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("搞什么啊……这家伙……", 2, 3003155, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("呵呵~ 请去狩猎#b天宇鲸山#k的#b大猩鸦#k和#b大猩鸦族长#k，搜集#i4034954:##z4034954:##i4034955:##z4034955:#…#k它们可以当作…调料…还可以用来孵化…我拥有的蛋……？", 0, 3003164, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("用羽毛…作为调料……。嗯，我现在都不觉得奇怪了…我去去就会！", 2, 3003155, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("快去快回，呵呵，转转转！", 0, 3003164, true, false)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(34213, "");
                                                    cm.npc_LeaveField("oid=1");
                                                    cm.npc_LeaveField("oid=1");
                                                    cm.npc_LeaveField("oid=2");
                                                    cm.npc_LeaveField("oid=2");
                                                    cm.npc_LeaveField("oid=3");
                                                    cm.npc_LeaveField("oid=3");
                                                    cm.npc_LeaveField("oid=4");
                                                    cm.npc_LeaveField("oid=4");
                                                    cm.npc_LeaveField("oid=5");
                                                    cm.npc_LeaveField("oid=5");
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("呜…哇…… 你这么快就把羽毛拿回来啦。", 0, 3003164, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("好了~ 哔嘟，现在可以了吧？快点完成你的蛋饼吧~", 2, 3003155, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("哼，你怎么会任务我的任务只有一项呢？在你眼里我就那么傻呀？！", 0, 3003164, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("噢！哔嘟你！", 2, 3003155, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("啊，呵呵呵，我不管…我还需要更多~ 哼，再去搜集吧…哼", 0, 3003164, true, true)
                        } else {
                            if (status === a++) {
                                cm.gainItem(4034954, -20);
                                cm.gainItem(4034955, -20);
                                cm.forceCompleteQuest(34213);
                                cm.Hidden_background("obj_01", 1, cm.isQuestFinished(34208) ? 1 : 0, 0, 0);
                                cm.Hidden_background("obj_02", 1, cm.isQuestFinished(34212) ? 1 : 0, 0, 0);
                                cm.Hidden_background("obj_03", 1, cm.isQuestFinished(34214) ? 1 : 0, 0, 0);
                                cm.Hidden_background("obj_04", 1, cm.isQuestFinished(34215) ? 1 : 0, 0, 0);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};