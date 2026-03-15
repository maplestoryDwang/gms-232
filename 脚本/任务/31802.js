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
            cm.sendNormalTalk("唔……不好意思，我正在想事情……这里的指挥官#b#p3001000##k和#b#p3001001##k好像在战线上被困了。", 0, 3001007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b#p3001000##k和#b#p3001001##k的实力都非常出众，我相信他们一定能突围……但在本部地区进行最后防守的那些普通士兵的安危很令人担忧……", 0, 3001007, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("没时间详细跟你解释。如果你是来帮忙的，我可以马上引导你去战场，麻烦你消灭掉那些幽灵吧？战况迫在眉睫……", 0, 3001007, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline("非常感谢你！请你尽量保护那些士兵！等你做好出发准备，我立刻为你指路！你消灭所有幽灵后，就去见见#b#m401000001##k的#b#p3001001##k和#b#p3001000##k吧。祝你好运。多保重，冒险岛勇士。\r\n\r\n#b#e(接受后将立即移动到战场地图。如果想重新开始任务，请放弃任务后再重新开始。)#n#k", 0, 3001007)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我准备好了。下面就进入反攻总部，扫荡敌人吧。", 17, 3001007, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(31802, "");
                                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31802.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("好不容易解决掉了所有幽灵，可没想到幽灵军队人数居然如此众多……看样子诺巴也会有难啊。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这里的情况差不多也恢复了平静。你到#b#m401000001##k去，见见#b#p3001001##k和#b#p3001000##k吧。", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(31802);
                    cm.gainExp(98000);
                    cm.dispose()
                }
            }
        }
    }
};