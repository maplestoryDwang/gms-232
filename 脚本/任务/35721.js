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
            cm.sendNormalTalk_Bottom("#face0#你似乎很累。", 37, 3003770, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("……", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#也是……不久前还并肩作战的人……这样亲手……", 37, 3003770, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("别说了！", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#啊呀？干嘛冲我发火啊？", 37, 3003770, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("……", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("对不起，我现在……有点累了。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#嗯……", 37, 3003770, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#要不休息一会？\r\n我在周围放哨，#h0#闭目养神片刻吧。", 37, 3003770, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("……", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("那就……拜托你了。", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.dispose();
                                                        cm.warp(993063045, 0, false)
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

function stage0(d, c, b) {
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35721.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.sendNormalTalk_Bottom("！！！", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("呼哧……呼哧……", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#你醒了？哎呀？你这是做噩梦了吧。流了这么多汗……", 37, 3003770, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(一直在重复……)", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#嗯？你没事吧？", 37, 3003770, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(他们全都已经……)", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（就算我现在做什么，他们也不会回来了……）", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face2#……", 37, 3003770, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face2##h0#！", 37, 3003770, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("！！！", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face2#你在其他地方愣神，#h0#也会被#r迷宫抓走永远被关在里面。#k", 37, 3003770, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("啊……", 57, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face1#不过现在已经被关在里面了。", 37, 3003770, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("……", 57, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(现在其他联盟成员……冒险岛世界……)", 57, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#那……我们开始行动吧？", 37, 3003770, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("呼……等一下……等我休息一下再出发……", 57, 0, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#嗯……", 37, 3003770, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#看来你真的很累。都休息那么长时间了还要继续休息。", 37, 3003770, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#我们得快点。#b如果不想错过时机的话。#k", 37, 3003770, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("……", 57, 0, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#其他联盟成员还在等#h0#呢。", 37, 3003770, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("……", 57, 0, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.forceCompleteQuest(35721);
                                                                                                        cm.gainExp(170671356);
                                                                                                        cm.sendNormalTalk_Bottom("#face1#这次……去那边看看吧。#h0#。", 37, 3003770, false, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face1##r去……更深处。#k", 37, 3003770, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.updateInfoQuest(35722, "altar=on");
                                                                                                                cm.dispose();
                                                                                                                cm.warp(450011580, 0, false)
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
                    }
                }
            }
        }
    }
};