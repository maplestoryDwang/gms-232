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
            cm.sendNormalTalk("你们所说的封印石，是数百年前，我们在与黑魔法师展开战斗前制作的，目的就是以防万一。如果在与黑魔法师的决战中失败的话，我们就能将破灭的大陆恢复原样。", 0, 1520048, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("不过研究封印石的弗里德，好像想出了别的使用方法。最后那个瞬间，我在弗里德设置的封印中看到了封印石。也许那个原理就是以封印石作为媒介，将黑魔法师体内的时间之力牵引出来。", 0, 1520048, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("那么，有封印石的话，就能重新封印黑魔法师吗？", 2, 1520048, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我觉得那个很困难。现在弗里德也不在……最重要的是，利用时间的魔法对世界造成的影响非常巨大。仅仅使用一次魔法，就能将冒险岛世界的时间变得扭曲。如果再次使用和当时一样的魔法，谁也说不准会发生什么情况。", 0, 1520048, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("再说了，我不觉得黑魔法师会被相同的封印击中第二次。要不然，一听到黑魔法师的封印被解除后，我肯定马上就去找封印石了。如果封印还没有被解除的话，那当然是最好，可既然已经被解除了，就只能寻找其他办法了。", 0, 1520048, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("……对于封印石，我能说的就只有这些了。至于要如何才能复原受损的大陆，这我也不知道了。因为在那之后我也被封印了起来，所以，从来没有按照原来制作时的目的使用过那个封印石。没能帮到你真是不好意思。", 0, 1520048, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline("现在就让我把你送回到你原来的世界吧。你做好回去的准备了吗？\r\n\r\n#b#e<接受后，立即移动到地图。>#n#k", 0, 1520048)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("希望你们能用自己的双手顺利将冒险岛恢复原样。", 1, 1520048, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(32347);
                                            cm.forceStartQuest(32374, "exit");
                                            cm.gainExp(250000);
                                            cm.dispose();
                                            cm.warp(101000003, 1, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32347.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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