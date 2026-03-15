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
            if (!cm.isQuestFinished(1466)) {
                cm.sendNormalTalk_Bottom("…… 要怎么做才能抚慰他们的心灵呢？\r\n\r\n#b（必须完成<另一种力量，神秘力量>任务，获得神秘徽章。）", 0, 3003131, false, false);
                cm.dispose()
            } else {
                cm.sendNormalTalk_Bottom("#b（询问到底发生了什么事。）#k", 16, 3003131, false, true)
            }
        } else {
            if (status == a++) {
                cm.setInGameDirectionMode(true, false, true);
                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1600)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("我要先说一件事。你有没有看见这个村子外围辽阔的湖水啊？村子里的人称之为忘却之湖。如果掉进去的话，就会失去所有记忆。", 37, 3003113, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("而且…… 不知道是不是因为湖水的影响，附近的人每天在逐渐失去记忆。", 37, 3003113, true, true)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_ProcessOnOffLayer("kao", "Map/Effect2.img/ArcaneRiver1/tree1", 0, 1500, 0, -80, 0, 4, 1);
                            cm.sendNormalTalk_Bottom("所以，他们创造出了这记忆之树。他们把珍贵的记忆挂在树上，每天去看下，直到记忆风化消失…", 37, 3003113, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("从村子那里的人听说树的事情后，我的心砰砰直跳。不知道树上会不会有关于我的记忆。我决定立刻去调查下那棵树。但是…", 37, 3003113, true, true)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_ProcessOnOffLayer("kao2", "Map/Effect2.img/ArcaneRiver1/tree2", 0, 1500, 0, -80, 0, 4, 1);
                                    cm.sendNormalTalk_Bottom("不知什么原因，我的手刚触碰到那棵树…", 37, 3003113, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_ProcessOnOffLayer("kao3", "Map/Effect2.img/ArcaneRiver1/tree3", 0, 1500, 0, -80, 0, 4, 1);
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/tree", 200);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("记忆…村民们珍贵的记忆… 就纷纷散落了。", 37, 3003113, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("村民们陷入茫然之中，连每天重复做的事情都停了下来。就连在忘却之湖上面往返的船只都停止运作了。", 37, 3003113, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_ProcessOnOffLayer("kao", "", 2, 10, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("kao2", "", 2, 10, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("kao3", "", 2, 300, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                } else {
                                                    if (status === a++) {
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.forceCompleteQuest(34100);
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

function end(d, c, b) {
    status++;
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