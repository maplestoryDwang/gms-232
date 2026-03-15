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
            cm.sendNormalTalk("#b#h0##k，你好。", 0, 9062278, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嘻嘻，这么唐突地和你联系，你肯定很惊讶吧。", 0, 9062278, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我叫#b达丽雅#k，是#e#b<RISE沙龙>#k#n的主人。", 0, 9062278, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我们#e<RISE沙龙>#n云集了各层各界专家、艺术家，财阀，是个颇有品味的空间。", 0, 9062278, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我经常在这里赞助一些极具潜力的年轻骑士们。", 0, 9062278, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("这件事还蛮有意义的，哈哈。", 0, 9062278, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("现在，你已经猜到我为什么要联系你了吧？", 0, 9062278, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("哈哈，#b#h0##k。你难以想象我们#e<RISE沙龙>#n有多少关于你活跃的传闻。", 0, 9062278, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("所以，希望你能来访问一下我们#e<RISE沙龙>#n，怎么样？", 0, 9062278, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("我#b达丽雅#k保证，你绝不会后悔的，嘻嘻。", 0, 9062278, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.askYesNo("#b#h0##k，\r\n你要接受#e#b<RISE沙龙>#k#n的邀请吗？\r\n\r\n#r※接受后，立即移动至<RISE沙龙> 活动地图。", 0, 9062278)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceCompleteQuest(100507);
                                                        cm.updateInfoQuest(100507, "rMap=" + cm.getMapId() + ";lv=1");
                                                        cm.dispose();
                                                        cm.warp(993176500, 4, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100507.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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