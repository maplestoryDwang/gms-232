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
            cm.sendNormalTalk_Bottom("#face0#谦信大人，兼续马上就要回来了！请你再稍等一下吧。谦信大人！呀哈！！！", 37, 9130022, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#……这就是恋爱吗？", 37, 9130081, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("别说这种无聊的话了，快点来考虑一下接下来的问题吧。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#这么年轻正当时的一个孩子，居然对恋爱方面的话题一点兴趣都没有……有时候我觉得你真是太悲哀了。", 37, 9130081, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("……哼。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#神那。请你看完这封信之后，立刻返回枫叶山丘。大家已经找到了樱乃姬的位置。", 37, 9130010, false, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline_Bottom("什么！！！找到了……姬儿的位置？那还犹豫什么，快点返回枫叶山丘吧！", 57, 0)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(57474, "");
                                        cm.sendNormalTalk_Bottom("使用#e#b#s40021227# #q40021227##k#n，前往#m807000000#。", 57, 0, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.openUIWithOption(3, 3);
                                            cm.OnStartNavigation(807000000, 1, "9130010", 0);
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
            cm.sendNormalTalk_Bottom("#face0#你总算是回来了啊。先来调整一下呼吸吧。瞧瞧你这粗气喘的。", 37, 9130010, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(57474);
                cm.gainExp(8000);
                cm.dispose()
            }
        }
    }
};