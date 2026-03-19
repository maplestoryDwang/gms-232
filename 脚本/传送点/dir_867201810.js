function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -100, -250);
            cm.sendNormalTalk_Bottom("#face0#哈-哈……", 37, 9400580, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b抱歉，我还以为很快就能消灭完，但因为暴风雪，真是难以靠近啊。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b如果在远处攻击，它们根本不会受到什么伤害，我一个人是不行的。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#没事啊，这不是你需要道歉的事情！", 37, 9400580, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#入侵卡夫塔佩的芬里斯，在斯巴乐缇遇到的埃特金森……还有刚才那些东西都和其他怪物不一样。", 37, 9400580, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#……如果不是现在这种情况，这可以成为很好的研究资料呢，真是可惜……", 37, 9400580, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b研究资料？", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#没错，它们比其他怪物变异得更厉害，也许能帮助研究暴走的原因和状态，但是……", 37, 9400580, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#现在可不是说这个的时候啊！", 37, 9400580, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face4#我们先跟上那些怪物军团吧！", 37, 9400580, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceCompleteQuest(64086);
                                                    cm.sendNormalTalk_Bottom("#b(……派遣艾丽卡的目的本来是研究暴走怪物啊…… ", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#b(采集些标本对我来说是不成问题的。如果有机会就找来给艾丽卡吧。) ", 57, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceStartQuest(64087, "");
                                                            cm.playerMessage(-1, "为了研究暴走怪物，采集芬里斯、埃特金森、冰霜巨人的样本吧。");
                                                            cm.warp(867201820, 0);
                                                            cm.npc_LeaveField("oid=7619841");
                                                            cm.npc_LeaveField("oid=7619841");
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
};