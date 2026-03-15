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
            cm.sendNormalTalk_Bottom("#face2#哈哈，现在真的该轮到我巴克巴克大人出马啦啊啊啊啊啊啊啊啊啊↗", 36, 3001509, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#这个场景……好熟悉……所以让人感觉有点不安。", 36, 3001512, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#维依……在这里引爆，是吗？", 36, 3001513, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face4#啊，这次应该没事。下面……没有洞穴，是非常坚硬的东西。", 36, 3001510, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#叽，叽勒……这种沉闷的电波……", 36, 3001510, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face3#哎呀，终于可以爆破了吗↗\r\n看吧，马上就要爆炸啦↗", 36, 3001509, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline_Bottom("#face4#好了，孩子们，还有亚克！让我们炸个痛快吧↗", 36, 3001509)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face3#……该，该怎么办？直接点着就行。\r\n按照心跳的节拍↗", 36, 3001509, 0, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.dispose();
                                            cm.warp(402090006, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34936.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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