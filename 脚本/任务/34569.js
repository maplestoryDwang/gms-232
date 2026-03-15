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
            cm.sendNormalTalk_Bottom("没事吧，沃莉？伤口……", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#我没事。回去慢慢治疗就行。", 36, 3003500, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("那就好，但是……", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face3#对了，#r终极之光和终极黑暗#k到底是什么意思呢？", 36, 3003500, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("那个……军团长那样层次的人，应该不会胡说八道。", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face3#啊，收到了休麦的联络。", 36, 3003500, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#你们俩没事吧？", 36, 3003502, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("（讲述了经历的事情。）", 56, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face3#船遭到袭击之后，又遇到了军团长……这可……", 36, 3003502, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#不用担心。\r\n反正那家伙不是#h0#的对手。", 36, 3003500, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("那，那是……", 56, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#哈哈，那就太好了。", 36, 3003502, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#现在只要回去联系总部，就行了吗？", 36, 3003500, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face3#不，现在的情况只允许进行短距离通信。\r\n受损的零件已经全部更换完毕，但是没有润滑油。", 36, 3003502, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face3#这个样子不知道什么时候会出故障。事实上，现在的状态也很不稳定。\r\n听见了吗？吱吱呀呀的齿轮摩擦声。", 36, 3003502, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#润滑油应该可以用#b动物油脂#k来代替，但是……\r\n现在我们的位置已经暴露，最好先离开这里。", 36, 3003500, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.askAcceptDecline_Bottom("#face0#先移动到#b生命起源处7#k。", 36, 3003500)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.updateInfoQuest(34560, "30=h0;50=h0;31=h1;51=h0;32=h1;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                                                                cm.updateInfoQuest(34560, "30=h0;50=h0;31=h1;51=h0;32=h1;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h1;46=h0;47=h0;48=h0;49=h0");
                                                                                cm.forceStartQuest(34569, "");
                                                                                cm.sendNormalTalk_Bottom("#face0#我先去看看情况。", 36, 3003500, false, true);
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
            cm.sendNormalTalk_Bottom("#face0#我在这里。", 36, 3003500, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(34569);
                cm.dispose()
            }
        }
    }
};