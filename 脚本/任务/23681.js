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
            cm.sendNormalTalk("有什么事吗？有什么问题吗？", 0, 2300001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我想向朋友送礼物，但是不知道该送什么好。希望你能给我个建议。", 16, 2300001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这个想法很好。但是每个人的爱好都不一样，不知道我能不能帮到你……你的朋友，难道不应该去听听年轻人的建议吗？", 0, 2300001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不，我认识的人里面，你和那位朋友最像。性别，还有年龄……", 16, 2300001, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("啊，是吗？看来是你的忘年交吧？像我这个年纪的人，一般喜欢看书。等等……，如果你想送书，我可以帮你在我没看过的书中选一本。怎么样？", 0, 2300001)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(23681, "");
                                cm.sendNormalTalk("在右边的走廊前面有#b没有整理好的书堆#k。全部拿过来可能会有点困难，请你去稍微#b敲打一下#k，把掉下来的书拿过来。那样的话，我就帮你在里面挑一本有意思的书。", 1, 2300001, false, true)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
                                    cm.warp(923050005, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23681.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#t4033644#拿来啦。整理起来很累吧？", 0, 2300001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("比想象的还要累。感觉就跟和怪物战斗一样……", 16, 2300001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("啊，是吗……我这里有点乱？", 0, 2300001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("博士们经常像这样和书战斗，当作训练吗？", 16, 2300001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("啊，这个……嗯……从某种角度来看，你说的没错……呵呵。啊，这本好像不错。你把它拿走吧。", 0, 2300001, true, true)
                        } else {
                            if (status === a++) {
                                cm.spawnMobLimit(9300644, 1, 685, 47, 100);
                                cm.sendNormalTalk("这是我过去看过的很有意思的书。希望你的朋友能喜欢。", 1, 2300001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.gainItem(4033645, 1);
                                    cm.gainItem(4033644, -1);
                                    cm.forceCompleteQuest(23681);
                                    cm.gainExp(30000);
                                    cm.dispose();
                                    cm.warp(230050000, 0, false)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};