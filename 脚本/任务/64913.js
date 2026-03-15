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
            cm.sendNormalTalk_Bottom("完蛋了？什么意思？没有可以阻止#b赛恩#k的方法吗？！", 56, 9401072, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("现在赛恩是开启#r紧急方案#k的状态。\r\n应该是克拉尼亚逃跑前开启的。", 36, 9401071, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#r紧急方案#k……那是什么？", 56, 9401072, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("当阿特利埃面临很大危机时……克拉尼亚本人肯定也会有很大的危机。", 36, 9401071, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("为#b防止赛恩的电源关闭#k，强制命令其进入无限循环模式。", 36, 9401071, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("可能克拉尼亚想让赛恩一直处于启动中……便于自己日后回归。", 36, 9401071, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("那个……怎么样才能关闭#r紧急方案#k呢？", 56, 9401072, 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("不会。", 36, 9401072, 1, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("什么……？", 56, 9401072, 1, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("只有#b克拉尼亚#k能关闭。", 36, 9401072, 1, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("匹比不是很聪明吗，你没有什么主意吗？", 56, 9401072, 1, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("这是结构十分简单的防御系统。黑客或变形作业都不能破解……", 36, 9401072, 1, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("克拉尼亚的五官、步伐、声音、指纹、虹膜……所有都一致的话，才能打开或关闭#b紧急方案#k。", 36, 9401071, 1, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("切，真是当头一棒。就算我再出众，也还是不能成为克拉尼亚啊。", 36, 9401072, 1, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("那现在怎么办？没人知道克拉尼亚在哪里啊。", 56, 9401072, 1, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("嗯……真是糟糕……", 36, 9401071, 1, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("那个……各位，我们好像可以帮到一点小忙。", 36, 9400498, 1, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.forceStartQuest(64913, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64913.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("亚当，夏娃……！怎么做呢？", 36, 9401071, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("克拉尼亚总说预见了这种情况。\r\n公司破产、东窗事发，需要跑路的处境，是她最害怕发生的。", 36, 9400499, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("所以她总是在做着准备。\r\n为防止遗忘，她把自己的所有计划都记录在#b秘密文件#k中。", 36, 9400498, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("太好了！那个文件现在在哪儿？", 36, 9401071, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("很遗憾……我们也不知道那个文件的具体位置。\r\n我们只是帮忙制作文件，没看到它被藏到哪里了。", 36, 9400499, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("不过，#b最近辅佐克拉尼亚#k的拟真机器人应该会知道……", 36, 9400498, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("那是……#b奥利弗#k！", 36, 9401071, 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                                        cm.forceCompleteQuest(64913);
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
};