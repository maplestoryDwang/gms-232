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
            cm.sendNormalTalk_Bottom("喂，你。小毛孩，我从来没见过你嘛！", 37, 9310558, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("你是来豫园游玩的？嗯，你看上去挺强的啊。\r\n那么，我就为你说明一下有关#b#e每日委托布告栏#k#n的内容吧。", 37, 9310558)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你应该知道豫园里发生了很多事件吧！而这当中，有很多事情是那些豫园的平凡居民所无法解决的。所以我才制作了这个每日委托布告栏。", 37, 9310558, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("居民们会把自己无法解决的事情登记到这每日委托布告栏上，而只要有能力解决这些事情，#e无！论！是！谁！#n 都可以接受委托，并获得奖励。", 37, 9310558, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("当然了，根据对你的评价，也会有一些委托是你无法执行的。不过，只要你去不断地帮助豫园居民，并和他们亲密相处，那么评价等级就会在不知不觉间提高。所以你不用担心。", 37, 9310558, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("啊，对了，请你注意，每天的委托都各不相同，而且每天可以接受的委托数量也是有限的。", 37, 9310558, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("啊，你很想知道奖励是什么吧？奖励就是#e#b豫！园！铜！钱#n#k！嘿嘿，这可是能在豫园的特别商店、黑市商店等许多地方使用的万能钱币！\r\n根据委托的难度，发放的铜钱个数也会不同。所以你需要尽快提升实力和评价等级，那样就可以执行更高难度的委托了~ ", 37, 9310558, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("要是你有什么疑问的话，可以随时来找我。嘿嘿", 37, 9310558, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(62150);
                                            cm.updateInfoQuest(62150, "chk=1");
                                            cm.addNumberForQuestInfo(62109, "yuyuanPoint", 2);
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