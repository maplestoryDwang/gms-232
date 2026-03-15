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
            cm.sendNormalTalk_Bottom("#face0#要是你记得我，就告诉我吧。我是谁？", 36, 3003400, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("怎么回事……", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我不记得别人，也没人记得我。\r\n剩下的只有我的名字，还有我曾经追求过某些东西的依稀的记忆。", 36, 3003400, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("嗯……", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#但是你……我们在哪里……", 36, 3003400, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face5#嗬！！", 36, 3003400, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(34258, "");
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("看你那么痛苦，没事吧？", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#没关系。这是正常的实验副作用。", 36, 3003408, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("正常？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#她的身体往往会迅速恢复。\r\n根本不受本人控制。", 36, 3003408, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("这完全有悖人类构造嘛……", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#她并不是人类。\r\n虽然外貌和行为跟人类没什么两样，但总觉得不过是个驱壳而已。", 36, 3003408, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0##r#fs18不过是#没有感情、没有欲望、没有回忆的行尸走肉#fs16##k。", 36, 3003408, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("……", 56, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#看来你还没理解。\r\n查看#b研究日志#k应该能有助于你理解。请稍等。", 36, 3003408, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(34258);
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