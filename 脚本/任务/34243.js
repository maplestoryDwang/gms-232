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
            cm.sendNormalTalk_Bottom("没想到变回原来样子的速度这么快……", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face13#她已经离开了这里，这好像是最大的原因。", 36, 3003480, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face13#持续施加影响的人消失了……当然无法继续保持下去了。", 36, 3003480, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("但是……前往下一个地区的线索怎么办呢？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face13#我们当然必须阻止那样的事情发生。#h0#，你的担子很重。", 36, 3003480, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face10#不过我有个好消息。", 36, 3003480, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("？？？", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#如果完全摆脱了她的影响，我自然就会变回飞鱼。但是现在……", 36, 3003480, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("在找到线索之前，我们必须留在这里，对吧？", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face10#但有个问题，就是不知道我什么时候会变回飞鱼。", 36, 3003480, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#总之在找到线索之前，我们必须让这里维持住。还有，偶尔还得给我弄点记忆碎片来。", 36, 3003480, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("知道了。", 56, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#最好是一边帮助特鲁埃博的艾尔达们，一边寻找线索。\r\n他们也许和研究室中的研究员一样，知道些什么。", 36, 3003480, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("帮助他们……又是让我去吧……？", 56, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face11#……", 36, 3003480, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("……", 56, 0, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face11#不过我可以帮你接受艾尔达们的委托。这样省得你跑来跑去，可以为你减少一半的工作！", 36, 3003480, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("……知道了。必须尽快到下一个地区去。加油！", 56, 0, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#我也会想办法寻找离开这里的方法。在这之前，让我们一起努力！", 36, 3003480, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.playerMessage(-1, "莫拉斯地区剧情结束.");
                                                                                        cm.forceStartQuest(34243, "");
                                                                                        cm.forceCompleteQuest(34243);
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
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};