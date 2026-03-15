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
            cm.sendNormalTalk_Bottom("#face0#好像差不多干了。", 36, 3003500, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#必须发射信号弹，与休麦和梅尔朗取得联系。\r\n我已经看好了一个合适的地方。我们马上出发吧。\r\n#b（接受时立即移动。）#k", 36, 3003500)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(450007310, 0)
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
            cm.sendNormalTalk_Bottom("#face0#你们没事啊，休麦。", 36, 3003500, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#当然了。死在这种地方，岂不让人笑掉大牙。", 36, 3003502, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#梅尔朗怎么样？", 36, 3003500, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#呼…… ", 36, 3003501, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#这家伙掉进水里之后还在睡觉。要不是我把他捞了上来，也许早就赴黄泉去了。", 36, 3003502, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#哈哈……", 36, 3003500, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#现在通信装备可以连上吗？", 36, 3003500, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face3#好像有点问题。坠落的时候，装备摔坏了。", 36, 3003502, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#呼呼……嗯？！……出什么事了？", 36, 3003501, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#没错，没错……我们坠毁了。", 36, 3003502, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#咦，你们看天空。", 36, 3003501, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#天空？", 36, 3003500, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#没有太阳。", 36, 3003501, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("？？？", 56, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceCompleteQuest(34566);
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
};