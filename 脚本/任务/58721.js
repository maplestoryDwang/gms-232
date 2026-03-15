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
            cm.sendNormalTalk_Bottom("#face0#非常感谢你回应我的召唤。", 36, 9110002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#说正事……不瞒你说，我有个体弱多病的妹妹。", 36, 9110002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("啊？你有个妹妹？", 56, 9110002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#嗯，因为身体不好，她平时只能待在神社里。\r\n最近她因为健康再度恶化，每天都很难熬。", 36, 9110002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("真可怜……没有药吗？", 56, 9110002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#很可惜，人类的药无法治疗她的病情。\r\n我只能……每日向#b大太法师#k祈祷让她早日康复……。", 36, 9110002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#不久前，不知道是不是因为我的祈祷感动了大太法师，他给我赐下了启示。\r\n启示中说，只要集齐五行，我妹妹就可以恢复健康。", 36, 9110002, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("五行？", 56, 9110002, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#是的，五行是构成樱之岛的力量根源。\r\n我听说五行共有五个，分别由五行守护者在看守着……。", 36, 9110002, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#第一个是火之五行，据说在狸猫妖怪们手里。", 36, 9110002, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.askYesNo_Bottom("#face0#求求你，你可以帮我妹妹回收五行吗……？", 37, 9110002)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#非常感谢！", 36, 9110002, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#狸猫妖怪们居住在妖怪森林的狸猫山丘里。\r\n拜托你了。", 36, 9110002, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceCompleteQuest(58721);
                                                                cm.OnStartNavigation(800010000, 0, "", 0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58721.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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