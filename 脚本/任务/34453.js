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
            cm.forceStartQuest(34453);
            cm.dispose()
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
            cm.forceCompleteQuest(34453);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom("#face7#我觉得要是能救活自然生物，精灵之树也许能复苏，所以一直以来都在为此努力，可是……", 37, 3003301, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face4#……并不太顺利，呜呜……", 37, 3003301, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face4#……很，很抱歉我既是个胆小鬼又是个爱哭鬼，呜呜……", 37, 3003301, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#就算听不见也看不见，还是能感受到的吧~额，某些东西~？", 37, 3003302, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#友情、爱情、温暖的心意~", 37, 3003302, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#很好，你们的故事很是有趣~这么吸引人的事情，怎么能缺了我风精灵~", 37, 3003302, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face7#啊，风精灵！呜呜，他就是风精灵。嗯，这家伙可真叫人捉摸不透。", 37, 3003301, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face1#还有刚刚那首歌是我的自创曲目~就是想让你知道一下~", 37, 3003302, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("我们要重拾歌谣，复活精灵之树。你愿意帮助我们修复森林的自然环境吗？", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face1#风精灵啊，精灵之树也许能复活，你就帮帮我们吧。", 37, 3003301, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face2#哎哟，尽管开口吧~我已经被俘获了~我是说我的心已经被攻占了~真不知道要如何是好呢~", 37, 3003302, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face1#扑。通。扑。通。小。鹿。乱。撞。的这种心情~耶~", 37, 3003302, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.setInGameDirectionMode(false, true, false);
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
};