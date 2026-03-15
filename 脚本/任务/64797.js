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
            cm.sendNormalTalk_Bottom("#b梅里耶，你在干什么？", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("啊，#h0#。我在写信准备寄给家族。", 36, 9401033, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b信？难道是？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你在想什么呢？呵呵，我马上就要回去了，所以让他们提前备好丰盛的宴席。", 36, 9401033, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b原来你决定回去了！", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("离开家乡后，我才知道自己做错了什么，也深切地体会到那里就是我的归属，那我还有什么理由不回去呢？", 36, 9401033, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("嗯～我这一路上跟你说了好多话，现在想起来还真有点害羞。希望我们不要再见面了。", 36, 9401033, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b你说真的？", 56, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("呵！当然是玩笑。", 36, 9401033, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("等我回去之后，一定会邀请你，哦不，就算不邀请也欢迎你随时来做客。", 36, 9401033, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("我们家族的成员要是听见我叫你队长，应该会吓一跳吧。", 36, 9401033, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#b你看上去很开心。", 56, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("嗯，我很想念他们。", 36, 9401033, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#b能有一个归宿真的很幸福。", 56, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("真的……总之，谢谢你。", 36, 9401033, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#b我也没做什么。", 56, 0, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("嗯，所以谢谢你。跟着你我好像学会了一些领导能力？", 36, 9401033, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("我是说相信伙伴，并且愿意托付于伙伴这件事，呵呵。", 36, 9401033, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("哈～～说到这里，我迫不及待想赶快回去了。", 36, 9401033, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("不过必须要在这里收获点什么才不丢人吧？呼。再去深渊看看吧！", 36, 9401033, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.forceCompleteQuest(64797);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64797.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};