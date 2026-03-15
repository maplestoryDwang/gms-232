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
            cm.sendNormalTalk_Bottom("奥利弗，我想问你件事情！", 56, 9401084, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#h0#，还有杰斯、匹比。你们好。\r\n你们需要什么帮助吗？", 36, 9400436, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你知道克拉尼亚的#b秘密文件#k吗？", 36, 9401071, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("当然。它记录在我系统的最基本部分中。", 36, 9400436, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("那个文件现在在哪里？", 36, 9401072, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("请稍等，我分析一下。", 36, 9400436, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("抱歉……我无法得知。\r\n克拉尼亚好像每次都会删除我的记忆，重置那个部分。", 36, 9400436, 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("哎呀……那寻找克拉尼亚不就告吹了吗……", 56, 9401084, 1, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("不，还有方法。", 36, 9401072, 1, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("果然是匹比！", 36, 9401071, 1, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("你应该也知道。我们在相同的地方做过同样的事情啊……", 36, 9401072, 1, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("经历的事情太多我好像忘记了。嘿嘿……\r\n还有，原来你比我更厉害呢。", 36, 9401071, 1, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("呼……", 36, 9401072, 1, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("所以是什么方法？", 56, 9401084, 1, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("删除拟真机器人们的记忆后，会有短暂的#b备份#k。\r\n奥利弗的记忆刚删除没多久，应该还会有痕迹的。", 36, 9401072, 1, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("真是万幸！不过怎么样才能找到备份文件呢？", 56, 9401084, 1, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("那个有点困难……需要将想要恢复记忆的拟真机器人与#b赛恩的身体#k相连，才能下载备份文件……", 36, 9401072, 1, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("也就是说，需要#b把奥利弗带到阿特利埃，并与赛恩的本体连接#k。", 36, 9401072, 1, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("备份文件应该在#b以前的本体#k中吧？\r\n既然#h0#说赛恩现在的模样改变了，那么更换本体的可能性很高。", 36, 9401071, 1, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("据我推测，#b被丢弃的以前赛恩的本体#k应该在#b地下4层仓库#k。\r\n需要在那里#b连接奥利弗#k。", 36, 9401072, 1, 1)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("这件事太危险了……#h0#，你可以吗？", 36, 9401071, 1, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("这是一定要做的事情，所以我再所不辞。", 56, 9401084, 1, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("我也会尽力帮助你们。请随时吩咐。", 36, 9400436, 1, 1)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("如果我们能顺利带奥利弗过去就好了……\r\n但通往阿特利埃内部仓库道路的#b拟真机器人控制#k系统依然有效。", 36, 9401071, 1, 1)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#b#h0#像往常一样操纵#k#b奥利弗#k，带他过去。", 36, 9401071, 1, 1)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("整个阿特利埃都处在赛恩的监视下。\r\n我会给奥利弗植入电波，为你争取时间。", 36, 9401072, 1, 1)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("我也会竭尽全力的。", 56, 9401084, 1, 1)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.teachSkill(80011455, 0, -1);
                                                                                                                        cm.teachSkill(80011456, 0, -1);
                                                                                                                        cm.teachSkill(80011457, 0, -1);
                                                                                                                        cm.teachSkill(80011458, 0, -1);
                                                                                                                        cm.teachSkill(80011459, 0, -1);
                                                                                                                        cm.teachSkill(80011460, 0, -1);
                                                                                                                        cm.teachSkill(80011461, 0, -1);
                                                                                                                        cm.teachSkill(80011462, 0, -1);
                                                                                                                        cm.teachSkill(80011455, 1, 1);
                                                                                                                        cm.teachSkill(80011456, 1, 1);
                                                                                                                        cm.teachSkill(80011457, 1, 1);
                                                                                                                        cm.teachSkill(80011458, 1, 1);
                                                                                                                        cm.teachSkill(80011459, 1, 1);
                                                                                                                        cm.teachSkill(80011460, 1, 1);
                                                                                                                        cm.teachSkill(80011461, 1, 1);
                                                                                                                        cm.teachSkill(80011462, 1, 1);
                                                                                                                        cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                                                                                                                        cm.forceCompleteQuest(64914);
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64914.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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