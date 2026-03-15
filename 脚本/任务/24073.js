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
            cm.sendNormalTalk("还好这次守住了村子……要是下次再受到攻击，可能会有危险。长老们和你都还没恢复过去的力量。", 0, 1033232, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……#b银槲之剑暂时最好放在你这里#k，#p1012100#。放在村里的话，要是受到攻击，被他们抢走，那就糟了。我相信你一定可以保护好它……", 2, 1033232, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("但是村子谁来保护呢……", 0, 1033232, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("必须想想其他办法。我也可以一直在村里守着。", 2, 1033232, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("双弩精灵，你得继续修炼……你看这个办法怎么样？把这件事告诉在最前线和黑色之翼战斗的#b冒险骑士团，向他们请求协助#k。", 0, 1033232, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("冒险骑士团？是现在的皇帝手下的骑士吗？", 2, 1033232, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline("是的，和以前不同，那里聚集了大量骑士。他们和我们有着相同的敌人。如果告诉他们我们的情况，他们肯定会帮我们的。\r\n\r\n#b#e(接受时将前往圣地。)#n#k", 0, 1033232)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("那我回#m100000000#去给冒险骑士团所在的#m130000000#写封信。双弩精灵，你能到村里去等待他们派人来吗？", 0, 1033232, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("不，我要到#m130000000#去见见他们的皇帝。我想亲眼确认一下他是不是可以信任的人。", 2, 1033232, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("双弩精灵，你果然还是没变……虽然是国王，但总是喜欢自己亲自处理事情……那我会给他们写封信，让他们做好迎接你的准备。", 0, 1033232, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.dispose();
                                                    cm.forceStartQuest(24073, "");
                                                    cm.warp(130000000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/24073.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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