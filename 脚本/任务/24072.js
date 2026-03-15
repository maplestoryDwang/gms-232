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
            cm.sendNormalTalk("组成联盟之后，我偶尔会感觉到黑色之翼在监视我。但是从来没有这样发动过袭击……他们好像知道了我想把#b银槲之剑#k还给你。", 0, 1012100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("银槲之剑……？你还留着吗？", 2, 1012100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("那当然。这是国王陛下暂时交给我保管的东西。我当时不清楚自己的力量，还想跟着你到那么危险的地方去。你是为了保护我才把它交给我的……但是现在村子有危险，所以我想把它还给你。", 0, 1012100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("但是为什么不袭击你，而袭击我呢？", 2, 1012100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("……#r黑色之翼中有具有变身能力的人。他们可能想除掉你，然后变成你的样子，拿走银槲之剑。", 0, 1012100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("没想到他们还有这种能力……", 2, 1012100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("是的，比起武力，他们在这个方面更加危险……他们……一定是听到了我和你的对话。那样的话，他们应该已经知道了#m101050000#……双弩精灵！我们快到村里去！", 0, 1012100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askAcceptDecline("他们的第一个计策失败了，接下去说不定会#b攻击#m101050000##k！抓走人质，让你把银槲之剑交出去！虽然可能是臆测……我来使用回城魔法！", 0, 1012100)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(24072, "");
                                            cm.dispose();
                                            cm.warp(910150220, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/24072.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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