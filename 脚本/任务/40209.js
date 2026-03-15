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
            cm.sendNormalTalk("#face3#计划很简单，进到洞里把影子骑士团全部干掉，越快越好，并且不能留下任何痕迹。知道了吗？", 44, 2400005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯。不能漏掉一个人，一定要完美解决。我知道了。", 44, 2400006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("好，那就从北部林间路过去吧！", 44, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#face4#嗯！", 44, 2400006, true, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(40209, "");
                            cm.forceStartQuest(40209, "");
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40209.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("两位是……要成为超越者的人吧！虽然有点弱……你们终于来找我了？我一直在等着你们！", 32, 2430000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("等了很久吧？对不起……我们来得太晚，让你受尽苦头了。", 44, 2400006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("不。我……我已经在这里过得很好。", 32, 2430000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("被关在这种地方，你还说什么傻话？村里的人们不是把你关在这里了吗，没必要替他们说话。", 44, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("不，不是的！不是他们把我关在这里的！是我跟斯坦长老说我要到这个洞里的！虽然斯坦大叔说没有关系……但是我自己说没有问题的。", 32, 2430000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("村里的人对突然出现的我，提供了房子给了我吃的，对我特别照顾。因为我怕再伤害这么多好心人……所以我自己到这里来了。", 32, 2430000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("那个……神之子。我可以再留在这个村里一会儿吗？我有件事情要拜托。", 32, 2430000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.gainExp(5000000);
                                        cm.forceCompleteQuest(40209);
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
};