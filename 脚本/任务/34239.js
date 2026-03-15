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
            cm.sendNormalTalk_Bottom("#face13#看到往哪个方向去了吗？", 36, 3003480, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#往#r特鲁埃博外围地区#k去了。这里的尽头。那个东西一定是想离开这里，所以才会到那里去。", 36, 3003481, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face13#她也许是遇到了在那天来到特鲁埃博的记忆中的黑魔法师。", 36, 3003480, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face13#可能是那个人把路告诉了她。", 36, 3003480, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("黑魔法师……", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#你们想跟着去吗？", 36, 3003481, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face13#嗯，当然。", 36, 3003480, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#那么……如果你们遇到了那个东西……不，如果遇到了她，能帮我传句话吗？", 36, 3003481, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("乐意效劳。", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#我要为所有的一切谢罪……为那些无法原谅的事情……那些不应该做的事情……", 36, 3003481, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#……", 36, 3003481, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#我们没有资格乞求原谅，但是……希望你们能把我的话转告她。", 36, 3003481, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#希望今后她能从痛苦中摆脱出来，过上幸福的生活……", 36, 3003481, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.updateInfoQuest(34239, "once=1");
                                                                cm.sendNormalTalk_Bottom("#face13#……好了，现在我们出发吧？", 36, 3003480, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.askAcceptDecline_Bottom("#face13#跟在她后面，到#r特鲁埃博外围地区#k去！", 36, 3003480)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#祝你们好运。", 37, 3003481, false, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#还有……希望曾经守护过这里的人平安……", 37, 3003481, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.dispose();
                                                                                cm.warp(940204306, 0)
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
            cm.dispose()
        }
    }
};