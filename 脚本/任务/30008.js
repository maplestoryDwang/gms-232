var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("冒险岛联盟决定尽全力救出世界树。", 0, 1101002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("既然有冒险岛联盟出面，我就放心了。", 2, 1101002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("世界树的生命力量，是足以和黑魔法师对抗的强大力量。过去要是没有世界树的帮助，我们也不可能把黑魔法师封印起来。但是因为那场战斗，世界树迅速地枯萎了。赫丽娜戴着世界树剩下的#b生命的根源#k，来到了金银岛。", 0, 1101002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("但是有一天生命的根源突然消失了，我们还担心会不会是被黑魔法师一伙抢走了，没想到她是在那种地方恢复力量……", 0, 1101002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我们必须保护世界树。虽然不知道将世界树封印起来的人是谁，但他们一定是不怀好意。要是世界树的力量落入他们的手中，不知道会发生什么事。", 0, 1101002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("不过守护世界树的封印的人好像都不是等闲之辈。", 2, 1101002, true, true);
                                cm.npc_ChangeController(1101007, "oid=5745", -1105, 25, 55, -1155, -1055, 1, false, false);
                                cm.npc_ChangeController(1101006, "oid=5744", -1486, -185, 100, -1536, -1436, 0, false, false)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline("如果像你所说，他们都拥有强大的力量的话，一定会是非常艰苦的战斗。你能在这次的任务中助我们一臂之力吗？现在我们迫切需要人手。", 0, 1101002)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("我向你的勇气表示敬意。请你先去消灭封印守护者，解开世界树的封印。然后请你把世界树安全地带到圣地。", 1, 1101002, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("冒险岛联盟已经公告了营救世界树的行动，动作快的人也许已经到达鲁塔比斯了。请你和他们一起，救出世界树。", 1, 1101002, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("以后，你可以通过次元之镜，或冒险岛向导，移动到鲁塔比斯。", 1, 1101002, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(30008, "");
                                                    cm.forceStartQuest(30029, "start");
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
        if (status === a++) {
            cm.sendNextNoESC("虽然幸运地平安救出了世界树，可是所有的危险并没有消失。之前封印世界树的势力好像晚一步得知了世界树被运往圣地的事。他们#r复活了封印守护者#k，意图获得强大的黑暗力量吞噬金银岛。", 1101002)
        } else {
            if (status === a++) {
                cm.sendNextNoESC("为了阻止他们的阴谋，我们需要你持续不断的支援。希望你今后也为了冒险岛世界的和平而努力。", 1101002)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest();
                    cm.dispose()
                } else {
                    cm.dispose()
                }
            }
        }
    }
};