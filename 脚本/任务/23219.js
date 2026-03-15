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
            cm.askYesNo("#h0#，修炼进展顺利吗？", 0, 2151009)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#p2151009#，我刚好想和你说话呢。", 16, 2151009, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("(啊！#h0#想和我说话！？)嗯？有什么事吗？？", 0, 2151009, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我想再进行一次上次的修炼。", 16, 2151009, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("上次的修炼？嗯……你好像又遇到了障碍。但是以你现在的水平，那种修炼好像不会有什么帮助……", 0, 2151009, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("好吧，知道了。", 16, 2151009, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("等一下……等一下。你这就要走了吗……在这之前，我想把我想到的修炼方法告诉你。#h0#，其实对你最有帮助的修炼，是和过去的自己战斗。所以我想到了一个办法，把你送回过去，和过去的自己决斗。", 0, 2151009, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("要想让时间倒转，必须到#m270000100#去。但是#h0#，对现在的你来说太危险了。因此我找到了一个地方，听说#m220000000#的时间流动有点异常。", 0, 2151009, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("在#m220000000#的时间塔下层，有个名叫#b#m220050300##k的地方，在那里可以进入时间缝隙。你到那里去，我会为你打开时间缝隙。", 0, 2151009, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("虽然我变成了召唤兽的样子，但正是因为如此，我可以移动到通往其他次元的空间。我会移动到只有我才能去的通道去，在那里等你。", 0, 2151009, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("由于进入的是时间缝隙，因此可能会到达过去的某个时间点，但是不会改变过去的事情，对现在或未来不造成影响。请你放心地和过去的自己战斗……", 0, 2151009, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceStartQuest(23206, "2");
                                                        cm.forceStartQuest(23219, "");
                                                        cm.dispose();
                                                        cm.warp(220050300, 2, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23219.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#h0#，你回来啦！！状态怎么样？", 0, 2151009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("和过去的自己战斗，是非常困难的事。和过去的自己见面之后，你应该会想起过去忘记了的技能。", 2, 2151009, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("成功了。#h0#，我感觉到了和全盛时期的你差不多的气息。别忘了进行刻印。要我帮你刻印吗？", 0, 2151009)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(1073, "3100=10;3110=203;3111=203;3112=203");
                        cm.forceStartQuest(23219, "001");
                        cm.forceCompleteQuest(23219);
                        if (cm.getJob() == 3121) {
                            cm.changeJob(3122)
                        } else {
                            if (cm.getJob() == 3111) {
                                cm.changeJob(3112)
                            } else {
                                cm.playerMessage(1, "你的职业不对无法转职，想正常体验剧情不要乱改职业。")
                            }
                        }
                        cm.sendNormalTalk("现在你已经差不多恢复了过去的力量。从现在开始，就要靠你自己修炼了。我想尽快恢复原来的样子。", 0, 2151009, false, false);
                        cm.gainItem(1322127, 1);
                        cm.gainItem(1142344, 1);
                        cm.forceCompleteQuest(29961);
                        cm.dispose()
                    }
                }
            }
        }
    }
};