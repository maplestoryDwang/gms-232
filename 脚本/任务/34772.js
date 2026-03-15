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
            cm.sendNormalTalk_Bottom("#face0##h0#！能听到我的声音吗？", 36, 3003500, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯？沃莉？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#我有话想跟你说。\r\n请跟我对话。", 36, 3003500)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(34772, "");
                        cm.dispose()
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
            cm.sendNormalTalk_Bottom("#face0#你来啦？", 36, 3003500, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("找我有什么事吗，沃莉？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#总部下达了命令。\r\n让我们#b对埃斯佩拉地区进行研究#k。", 36, 3003500, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("研究？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#是的！研究大致分为两类。\r\n第一种是#r消灭怪物#k，然后观察该地区的变化。\r\n第二种是，#r搜集#k怪物的特定部位或东西。", 36, 3003500, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0##h0#，如果你也能参加进来，一定能帮上大忙。\r\n完成之后会有#b奖励#k，所以千万不要错过。", 36, 3003500, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("嗯……是吗？", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#每天会发布#b三个命令#k。\r\n如果你想要，可以换成其他命令。", 36, 3003500, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#准备好了的话，请随时跟我说。", 36, 3003500, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(34772);
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
};