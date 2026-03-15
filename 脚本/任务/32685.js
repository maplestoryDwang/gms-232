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
            cm.sendNormalTalk_Bottom("嗯，你在筹备粮食吗？我来帮忙吧。", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("谢谢。山龟最近正值产卵期，但对龟卵极为保护，所以很难收集。如果你能帮忙收集一些#b山龟卵#k，我将感激不尽。", 36, 2550007)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32685, "");
                    cm.sendNormalTalk_Bottom("把山龟赶出来，收集#b10个山龟卵#k就行了。", 36, 2550007, false, false);
                    cm.dispose()
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
            cm.sendNormalTalk_Bottom("给，山龟卵。", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("那个……队长。", 36, 2550007, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("不知道您还记不记得，我曾经和您并肩战斗过呢。\r\n您救了我的命。我一直想跟您说声谢谢。", 36, 2550007, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("是、是吗。哈哈哈哈。", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("您不记得也很正常。当时有上百人都多亏了队长您才能活下来。\r\n现在聚在这里的人，大部分都是当时保住一命的人。", 36, 2550007, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("啊啊……你是说峡谷里的那场战斗啊。好像就在附近呢。", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("我听说那场战斗之后，您就隐退了。", 36, 2550007, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("嗯……太累了。战争真的是永无穷尽啊。", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("如果是因为负罪感……请您想想还有我们这样的人在吧。", 36, 2550007, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("谢谢。", 56, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceCompleteQuest(32685);
                                                        cm.removeAll(4036139);
                                                        cm.gainExp(186336);
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