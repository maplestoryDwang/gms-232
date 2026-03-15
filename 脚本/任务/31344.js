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
            cm.sendNormalTalk("#h0#，你能听到我说话吗？能和岩壁巨人对话吗？\r\n#b(是古瓦洛的声音。把和岩壁巨人的对话告诉他吧。)#k", 5, 2210011, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("岩壁巨人是大地精灵长期聚集在一起形成的新的生命体，看上去就像是粘土组成的一样。实际上是成百上千个小生命体结合在一起后诞生出来的东西。", 5, 2210011, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("因为我在几百年前遭到了军团长麦格纳斯的背叛，被吸收了力量。因此精灵们本能地感觉到了危机。就像受了伤之后，身体的各个组织会迅速运作起来恢复身体一样，精灵们决定通过“合体”来应对“我的力量消失”的危机。这一过程，经历了几百年时间。", 5, 2210011, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("但这很明显是违背自然规律的……原来精灵们不应该组成巨大的生命体，而是应该分散在各地，组成世界才对。如果精灵们分散在世界各地，即使某个地方的精灵受到了污染，他们也能自我净化。但是现在他们合成了一个生命体，就产生了很大的问题。", 5, 2210011, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("如果岩壁巨人被黑暗力量污染，那该怎么办呢？那样的话，一定会发生大灾难。从岩壁巨人说的话来看，好像已经出现了污染的征兆。这一切全都是我的错。", 5, 2210011, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("你能帮助岩壁巨人吗？必须阻止大灾难的发生。", 5, 2210011, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(31344, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31344.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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