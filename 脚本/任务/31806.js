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
            cm.sendNormalTalk("见到你很高兴，格兰蒂斯大陆和反攻总部的环境你还适应吧？我叫你来，是为了扩大战线的事，还需要你帮帮忙。", 0, 3001000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("事实上，我觉得补给路线被截断的原因不仅仅是由于那些战斗犬。", 2, 3001000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("对，为了能顺利运输补给，需要对#b#m401010010##k，的#r#o2400109##k占领的地方发动攻击。你能帮我们消灭#r#o2400109##k吗？", 0, 3001000, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("由于他们手持盾牌堵着通往森林的分岔路，令人十分恼火。那些盾牌兵的体力和防御力虽高，但攻击力较低。你去消灭那些盾牌兵吧？\r\n\r\n#b#e(接受后将立即移动到战场地图。如果想重新开始任务，请放弃任务后再重新开始。)#n#k", 0, 3001000)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我觉得这个任务不是太难，你会做得很好的。", 1, 3001000, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(31806, "");
                                cm.dispose();
                                cm.openNpc("赫里希安_清理盾牌兵")
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31806.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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