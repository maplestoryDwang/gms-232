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
            cm.sendNormalTalk_Bottom("我正在等你。这么突然地把#e#b#h0##k#n\r\n叫来，我很抱歉。但是这件事非常重要。#h0#，你听说过叫凯梅尔兹的地方吗？", 36, 1540450, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("从很久以前开始，凯梅尔兹就是个小渔村。只是偶尔和冒险岛世界有往来。但是，最近凯梅尔兹派出了大型的交易船在冒险岛世界各地进行交易，自称是[凯梅尔兹共和国]。凯梅尔兹的商船已经在明珠港等冒险岛世界各地进行来往。", 36, 1540450, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我作为冒险岛世界的女皇，不能不考虑这样迅速成长的凯梅尔兹对我们会产生什么影响。如果我们能和他们建立良好的关系，那我们就能获得一个一起建设冒险岛世界未来的可靠友军。但是，如果凯梅尔兹和冒险岛联盟敌对，站到黑魔法师的那边……虽然我不希望发生这种事，但这将成为我们的巨大威胁。", 36, 1540450, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("#face0##h0#，我需要你的帮助。你是我最信任的勇士。而且，你比谁都更加珍惜冒险岛世界。请你去凯梅尔兹，向他们传达我的意思。冒险岛世界希望和凯梅尔兹结成友好的关系，并且希望今后能够一直进行合作……你能帮我吧？", 36, 1540450)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#谢谢你。我想你肯定会答应的。", 36, 1540450, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我已经拜托南哈特为你准备一切。希望你一切顺利。", 36, 1540450, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(17601);
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17601.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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