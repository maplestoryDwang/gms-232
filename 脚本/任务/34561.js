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
            cm.sendNormalTalk_Bottom("#face0#啾～", 36, 3003480, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#是我，我……不，江。#h0#，这里好像正在发生什么事。", 36, 3003480, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你有什么发现吗？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("#face0#嗯，详细的情况等见面后再说。你先到特鲁埃博广场来一趟。\r\n你能马上过来吗？\r\n#b（接受时立即移动。）#k", 36, 3003480)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("明白了。我马上就去！", 57, 0, false, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(34561, "");
                                    cm.forceCompleteQuest(34593);
                                    cm.updateInfoQuest(34560, "30=h0;40=h0");
                                    cm.updateInfoQuest(34560, "30=h0;31=h0;40=h0");
                                    cm.updateInfoQuest(34560, "30=h0;31=h0;40=h0;32=h0");
                                    cm.updateInfoQuest(34560, "30=h0;31=h0;40=h0;32=h0;33=h0");
                                    cm.updateInfoQuest(34560, "30=h0;31=h0;40=h0;32=h0;33=h0;34=h0");
                                    cm.updateInfoQuest(34560, "30=h0;31=h0;40=h0;32=h0;33=h0;34=h0;35=h0");
                                    cm.updateInfoQuest(34560, "30=h0;31=h0;40=h0;32=h0;33=h0;34=h0;35=h0;36=h0");
                                    cm.updateInfoQuest(34560, "30=h0;31=h0;40=h0;32=h0;33=h0;34=h0;35=h0;36=h0;37=h0");
                                    cm.updateInfoQuest(34560, "30=h0;31=h0;40=h0;32=h0;33=h0;34=h0;35=h0;36=h0;37=h0;38=h0");
                                    cm.updateInfoQuest(34560, "30=h0;31=h0;40=h0;32=h0;33=h0;34=h0;35=h0;36=h0;37=h0;38=h0;39=h0");
                                    cm.updateInfoQuest(34560, "30=h0;31=h0;40=h0;41=h0;32=h0;33=h0;34=h0;35=h0;36=h0;37=h0;38=h0;39=h0");
                                    cm.updateInfoQuest(34560, "30=h0;31=h0;40=h0;41=h0;32=h0;42=h0;33=h0;34=h0;35=h0;36=h0;37=h0;38=h0;39=h0");
                                    cm.updateInfoQuest(34560, "30=h0;31=h0;40=h0;41=h0;32=h0;42=h0;33=h0;43=h0;34=h0;35=h0;36=h0;37=h0;38=h0;39=h0");
                                    cm.updateInfoQuest(34560, "30=h0;31=h0;40=h0;41=h0;32=h0;42=h0;33=h0;43=h0;34=h0;44=h0;35=h0;36=h0;37=h0;38=h0;39=h0");
                                    cm.updateInfoQuest(34560, "30=h0;31=h0;40=h0;41=h0;32=h0;42=h0;33=h0;43=h0;34=h0;44=h0;35=h0;45=h0;36=h0;37=h0;38=h0;39=h0");
                                    cm.updateInfoQuest(34560, "30=h0;31=h0;40=h0;41=h0;32=h0;42=h0;33=h0;43=h0;34=h0;44=h0;35=h0;45=h0;36=h0;46=h0;37=h0;38=h0;39=h0");
                                    cm.updateInfoQuest(34560, "30=h0;31=h0;40=h0;41=h0;32=h0;42=h0;33=h0;43=h0;34=h0;44=h0;35=h0;45=h0;36=h0;46=h0;37=h0;47=h0;38=h0;39=h0");
                                    cm.updateInfoQuest(34560, "30=h0;31=h0;40=h0;41=h0;32=h0;42=h0;33=h0;43=h0;34=h0;44=h0;35=h0;45=h0;36=h0;46=h0;37=h0;47=h0;38=h0;48=h0;39=h0");
                                    cm.updateInfoQuest(34560, "30=h0;31=h0;40=h0;41=h0;32=h0;42=h0;33=h0;43=h0;34=h0;44=h0;35=h0;45=h0;36=h0;46=h0;37=h0;47=h0;38=h0;48=h0;39=h0;49=h0");
                                    cm.updateInfoQuest(34560, "30=h0;31=h0;40=h0;50=h0;41=h0;32=h0;42=h0;33=h0;43=h0;34=h0;44=h0;35=h0;45=h0;36=h0;46=h0;37=h0;47=h0;38=h0;48=h0;39=h0;49=h0");
                                    cm.updateInfoQuest(34560, "30=h0;31=h0;40=h0;50=h0;41=h0;32=h0;51=h0;42=h0;33=h0;43=h0;34=h0;44=h0;35=h0;45=h0;36=h0;46=h0;37=h0;47=h0;38=h0;48=h0;39=h0;49=h0");
                                    cm.updateInfoQuest(34560, "30=h0;31=h0;40=h0;50=h0;41=h0;32=h0;51=h0;42=h0;33=h0;52=h0;43=h0;34=h0;44=h0;35=h0;45=h0;36=h0;46=h0;37=h0;47=h0;38=h0;48=h0;39=h0;49=h0");
                                    cm.updateInfoQuest(34560, "30=h0;31=h0;40=h0;50=h0;41=h0;32=h0;51=h0;42=h0;33=h0;52=h0;43=h0;34=h0;53=h0;44=h0;35=h0;45=h0;36=h0;46=h0;37=h0;47=h0;38=h0;48=h0;39=h0;49=h0");
                                    cm.updateInfoQuest(34560, "30=h0;31=h0;40=h0;50=h0;41=h0;32=h0;51=h0;42=h0;33=h0;52=h0;43=h0;34=h0;53=h0;44=h0;35=h0;54=h0;45=h0;36=h0;46=h0;37=h0;47=h0;38=h0;48=h0;39=h0;49=h0");
                                    cm.updateInfoQuest(34560, "30=h0;50=h0;31=h0;51=h0;32=h0;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;37=h0;38=h0;39=h0;40=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                    cm.updateInfoQuest(34560, "30=h0;50=h0;31=h0;51=h0;32=h0;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;38=h0;39=h0;40=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                    cm.updateInfoQuest(34560, "30=h0;50=h0;31=h0;51=h0;32=h0;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;39=h0;40=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                    cm.updateInfoQuest(34560, "30=h0;50=h0;31=h0;51=h0;32=h0;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;40=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                    cm.updateInfoQuest(34560, "30=h0;50=h0;31=h0;51=h0;32=h0;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                    cm.updateInfoQuest(34560, "30=h0;50=h0;31=h0;51=h0;32=h0;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                    cm.OnStartNavigation(450006130, 1, "3003432", 0);
                                    cm.warp(450006130, 0, true);
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
            cm.sendNormalTalk_Bottom("出什么事了？", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face13#有报告说出现了一些可疑的家伙。\r\n好像正在窥探莫拉斯内部。", 36, 3003480, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("可疑的家伙？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face13#他们好像进入了地下监狱。快跟我来。\r\n我想搜集更多关于这些人的情报。", 36, 3003480, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("要现在就去吗？", 57, 3003432)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(34561);
                                cm.dispose();
                                cm.warp(450006330, 2, true)
                            }
                        }
                    }
                }
            }
        }
    }
};