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
            cm.sendNormalTalk_Bottom("虎影，你可知道冒险岛世界的众多势力为了\r\n携手对抗黑魔法师而组成了冒险岛联盟？", 36, 3003658, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("近来因决定与格兰蒂斯的万神殿议会结成同盟，\r\n包括诺巴种族在内的格兰蒂斯的勇士都在提供帮助。", 36, 3003658, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("要是不介意，虎影你也一同加入冒险岛联盟如何……\r\n你有心和我们联手吗？", 36, 3003658, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("如果你感兴趣，我可以这就送你去女皇之岛圣地，\r\n不妨就和希纳斯见个面，聊一聊。", 36, 3003658, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("发生大事的地方怎么能缺了我这个道士？\r\n这个提议，我欣然接受。", 56, 0, false, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("能有虎影你的加入，我真的倍感踏实呢。", 36, 3003658, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("等你到了圣地，就去找南哈特吧，他早前\r\n已对你有所耳闻……应该不用再多做解释了。", 36, 3003658, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(39569, "");
                                        cm.dispose();
                                        cm.warp(130000000, 0, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39569.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("我是天才道士虎影。", 56, 0, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#欢迎来到女皇之岛圣地，\r\n我是冒险骑士团的谋士南哈特。", 36, 3003651, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#fc0xFFbfbfbf#（唔……第一印象让人不是很喜欢，\r\n对方总是露出试图看穿一切的眼神。）", 56, 0, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(39569);
                        cm.dispose()
                    }
                }
            }
        }
    }
};