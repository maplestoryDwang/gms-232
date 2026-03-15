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
            cm.forceStartQuest(23616, "");
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23616.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("有什么事吗，#h0#？干嘛一脸紧张……嗯，你原来就是这种表情吗？", 0, 2300000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#p2300000#，我想跟你谈谈。关于我的过去和记忆。\r\n从#p2154009#的研究所中逃出来的时候失去的力量已经恢复了相当一部分。但是记忆却一点都没有恢复……如果一直恢复不了记忆，我该怎么办呢？我为什么要抛弃力量，从那里逃出来呢？", 16, 2300000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你在为这个苦恼？别说啥话。如果留在研究所中，你一定会继续受到#p2154009#的操纵。也许会被#p2154009#派来破坏埃德尔斯坦！", 0, 2300000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……是的，你说的对。我不后悔从那里逃出来。\r\n但是#p2300000#你一定觉得我即使恢复不了记忆也没关系，#p2159391#应该也是这么想的。只有我才想知道自己过去到底是个什么样的人。我这么执着地想知道过去，你们是不是觉得我很奇怪？", 16, 2300000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("今天的你是有点奇怪，但是……想恢复记忆的想法一点都不奇怪。你是你，我是我。面对相同的情况，各自拥有不同的想法是很正常的。不是吗？", 0, 2300000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("……", 16, 2300000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("是你告诉我，机械人不是普通的机器人。你，还有#p2159391#，从一开始想法就不一样。我们不可能是单纯的机器人。你比我更像人类，就像是人类和机械人的中间体。这就是你的个性。", 0, 2300000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("你想找回记忆，我可以理解。你这么努力，却还是无法恢复记忆，感觉不安也是难免的。\r\n但是是否继续寻找记忆得由你自己决定。如果觉得太痛苦，就这样放弃也没关系。如果你觉得即使很痛苦也必须要寻找，那就继续。不管你的决定是什么，我都不会阻拦你。", 0, 2300000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("不仅是我，其他人也一样。不管你做出什么决定，只要是你真心所向，大家都会帮助你。从#p2154009#的研究所中逃出来之后，你获得的最重要的东西就是同伴。这一点请不要忘记。", 0, 2300000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("我找到了同伴，要不要寻找记忆全都由我自己决定……。谢谢你，#p2300000#。我好像明白了什么。", 16, 2300000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.changeJob(3612);
                                                    cm.updateInfoQuest(1073, "3600=10;3610=30;3611=201;3612=201");
                                                    cm.forceCompleteQuest(23616);
                                                    cm.gainItem(1142578, 1);
                                                    cm.forceStartQuest(32008, "");
                                                    cm.forceCompleteQuest(32008);
                                                    cm.sendNormalTalk("别客气。你救过我的命。和那个相比，这点小事算什么。", 0, 2300000, true, false);
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
};