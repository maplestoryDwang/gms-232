var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.npc_LeaveField("oid=15042");
            cm.npc_LeaveField("oid=15043");
            cm.npc_LeaveField("oid=15045");
            cm.npc_LeaveField("oid=15047");
            cm.sendNormalTalk("有什么事吗？有什么问题吗？", 0, 3000001, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk("刚才你说士气低落，#m400000000#发生什么事情了吗？", 16, 3000001, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("看样子你是对我昨天说的话有些放心不下吧，是啊……简单来说，现在格兰蒂斯就在纷争的漩涡之中，高等翼人的王子、生命超越者吉伦·达尔莫尔消灭了平民翼人，制服了阿尼玛，几乎将整个格兰蒂斯掌控在自己的手中。", 0, 3000001, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk("我们诺巴也未能在那场纷乱之中幸免于难，数十年前，就曾因首都赫里希安展开过一场激烈的战斗。那场战斗中，曾守护诺巴的先代狂龙战士亡故，赫里希安则被叛徒麦格纳斯夺走了。", 0, 3000001, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk("#m400000000#原来由4个圣物守护着，在战乱中没有遭到破坏。但是最近由于各种原因，4个圣物中的2个消失了……\r\n因此在#m400000000#的边界不断有奇怪的人出现，以#p3000000#为首的人们正在全力守护边界。", 0, 3000001, true, true)
                        } else {
                            if (status === b++) {
                                cm.askYesNo("对了……你愿意帮助我们吗？\r\n\r\n#b#e<接受时立即移动到战场地图。>#n#k", 0, 3000001)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk("谢谢你。虽然有狂龙战士和#p3000000#在，但是#m400000000#面积广大，必须持续保持警惕。\r\n请你到东侧圣殿边界去看看有没有可疑的人。", 1, 3000001, false, true)
                                } else {
                                    if (status === b++) {
                                        cm.forceStartQuest(23654, "");
                                        var a = cm.getEventManager("尖兵_战斗1");
                                        a.startInstance(cm.getPlayer(), cm.getMap());
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23654.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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