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
            cm.sendNormalTalk("#face2#呜哇，怎么都变成粉末了？你，到底做了什么事情？现在该怎么办？什么怎么办？武器都碎掉了当然全都玩完了，GAME OVER！我玩得很愉快，Say Goodbye……。", 37, 2400009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("…如果我那么说的话，你肯定会舍不得吧？哈哈，吓到你了？不过说真的，我也被吓得不轻。我其实是个很敏感的男人，要小心翼翼地对我~", 37, 2400009, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("其实武器就如同容器，只要我们还在容器随时可以恢复。好吧，看我聚集时间的力量……", 37, 2400009, true, true)
                } else {
                    if (status === a++) {
                        cm.zeroRestoreWeapon();
                        cm.sendNormalTalk("哈！看到了吧，怎么样？你说什么？因为可以随时修复，所以就放心大胆的强化吧？这个……", 37, 2400009, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face2#…你怎么会有这种想法？！武器碎了就像我们的心碎一样！我们也会受到很大打击的……", 37, 2400010, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("拉兹丽说得对。而且，虽然武器可以恢复，但是#b#e附加属性和潜能都会消失掉#k#n。所以强化的时候一定要小心，知道了吗？", 37, 2400009, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(41907, "0");
                                    cm.forceCompleteQuest(41900);
                                    cm.setNumberForQuestInfo(41901, "broken", 0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41900.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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