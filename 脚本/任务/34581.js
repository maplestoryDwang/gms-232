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
            cm.sendNormalTalk_Bottom("梅尔朗？", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#从现在开始，我来帮你。", 36, 3003501, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("这是什么地方？我还以为太阳会全都是白色呢。", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#这是塔纳原来所在的神殿。以镜世界的形式重现了出来。", 36, 3003501, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("之后会发生什么呢？这个太阳是为什么而创造出来的呢？", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#这就是我们需要弄清楚的事。我们必须阅读凝聚在空间中的记忆。", 36, 3003501, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("什么？但是要是不快点走，沃莉……", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#千万不能着急。你刚才不是经历过了吗？", 36, 3003501, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("……", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askAcceptDecline_Bottom("#face0#走吧，就在前面。", 36, 3003501)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(34581, "");
                                                    cm.updateInfoQuest(34560, "30=h0;50=h0;31=h0;51=h0;32=h1;52=h0;33=h1;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                                    cm.updateInfoQuest(34560, "30=h0;50=h0;31=h0;51=h0;32=h1;52=h0;33=h1;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h1;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                                    cm.OnStartNavigation(450007210, 0, "", 0);
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
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0#就是这里。", 36, 3003501, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(34581);
                cm.dispose()
            }
        }
    }
};