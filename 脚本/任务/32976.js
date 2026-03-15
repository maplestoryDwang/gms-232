var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#今天的任务是狩猎森林中的野兽。让我们差不多应付一下，然后再走吧。", 37, 2560003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face4#好了，快去狩猎吧。", 36, 2560003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("（原来叫我来是为了这个！这家伙也一样，就知道使唤人……）", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("（明明是这种人，在其他人面前却装作很老实的样子。）", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#喂，你在磨蹭什么呢？", 36, 2560003, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我，我是医务队员，战斗力完全不行……", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("啊！对了！如果我受伤了，就没法制作影子中和剂了。\r\n那样岂不很糟糕？", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face16#……", 36, 2560003, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("还，还有，我刚好正在熬制百年草……\r\n啊……要是放着不管，就不能用了，哈哈。我得赶紧去看看才行。", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("（能糊弄过去吗？一定要糊弄过去……）", 56, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face16#……", 36, 2560003, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face4#好了，废话我已经听够了。你能快点开始吗？", 36, 2560003, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("呜呜……", 56, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.askAcceptDecline_Bottom("#face0#你去消灭200个#b#o8230064:##k。据说在#b#m307000221:##k有很多。", 36, 2560003)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceStartQuest(32976, "");
                                                                    cm.OnStartNavigation(307000220, 0, "hunt00", 0);
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
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("呼……搞定了。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(32976, "exp=1");
                cm.gainExp(2462700);
                cm.forceCompleteQuest(32976);
                cm.dispose()
            }
        }
    }
};