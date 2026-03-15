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
            cm.sendNormalTalk_Bottom("#face0#虽然暂时打退了敌人的追兵，但是既然织田军已经发现了我们的密谈，肯定会继续派出新的追兵前来。", 37, 9130075, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("幸盛，幸村，兼续。继续停留在敌方的地盘争论不休，实在是太危险了。我们还是带着他们三人一起返回枫叶山丘后，再和大家一起商量该怎么解决这件事吧。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#嗯……这里就依神那所言，我们快点撤退吧。", 37, 9130023, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#……！敌人的增援来了。我来负责阻挡敌人的追兵，家康大人和秀吉大人就交给你们了。", 37, 9130075, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("可是，就留你一个人……", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo_Bottom("#face0#不必担心我！快去吧！", 37, 9130075)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("那我们就先走一步了。忠胜，祝你好运！", 57, 0, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#哼……好了，放马过来吧！本多忠胜在此！", 37, 9130075, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(57451, "");
                                            cm.dispose();
                                            cm.warp(807000000, 0)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57451.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#神那，你回来了啊。这边这位是秀吉大人的伙伴吗？", 37, 9130021, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("是的。这位便是织田四天王之一——羽柴秀吉大人，而这边这位则是织田军的同盟德川家康大人。他们两位都对信长的残暴行径感到不满，并表示希望加入我们联合军共同战斗。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我名为羽柴秀吉。虽然之前我们一直是敌对身份，但是今后希望能让我加入各位的大部队。", 37, 9130025, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#我是德川家康。我不期待能立刻获得各位的信任。只希望大家能通过我今后的行动，看到我的决心。", 37, 9130026, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#但是，你们两位都是我们敌对势力的中心人物。就算突然说要加入我们，也实在让人觉得无法相信啊……", 37, 9130006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#哼。元就你就是想太多了。他们要是做出任何可疑的行径，只要我们直接动手砍了他们不就好了吗？", 37, 9130009, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#唉……你的想法也太简单了。万一发生了什么无法挽回的情况……", 37, 9130000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#两位远道而来，真是太辛苦了。我名为松山樱乃。两位还是第一次来到枫叶山丘，对很多人肯定都还不熟悉。期间多半会遇到一些不便之处，还望两位能够多多海涵。", 37, 9130021, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#那么今后就请多多关照了。秀吉大人，家康大人。", 37, 9130021, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#是！我秀吉一定会为了联合军而拼尽全力的！", 37, 9130025, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#一切都在手底下见真章吧。", 37, 9130026, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceCompleteQuest(57451);
                                                        cm.gainExp(6348411);
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
};