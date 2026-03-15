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
            cm.askMenu("嗯？我好像见过你。你到#m103000000#来有什么事吗？你想成为飞侠吗？\r\n#b#L0#(询问有没有见到一个身上带药味的人。)#l", 0, 1052103)
        } else {
            if (status === a++) {
                cm.askMenu("药味？嗯，有人会在身上带着药草吗？大家不都带药水吗？你为什么要找他？想买药草吗？\r\n#b#L0#(说明#p1061005#的事情。)#l", 0, 1052103)
            } else {
                if (status === a++) {
                    cm.askMenu("嗯……是偷药草的人啊。怪不得你会那样问我……嗯？！等等等等等等！你认为小偷是 #m103000000#的吗？\r\n#b#L0##m103000000#不是小偷的村庄吗？#l", 0, 1052103)
                } else {
                    if (status === a++) {
                        cm.askMenu("我们不是小偷！我们是飞侠的村庄！啊，气死了！你把我们#m103000000# 的飞侠当成什么了？当然，飞侠们确实有点卑鄙、有点无耻、有点下流、有点阴险！但是我们绝不会威胁到别人的生计，绝不会去偷东西！\r\n#b#L0#真的吗？#l", 0, 1052103)
                    } else {
                        if (status === a++) {
                            cm.askMenu("那当然！我知道人们一直都对我们有误会，但没想到会听到这种话……我是在#m103000000#出生并长大的人，决不能忍受这种侮辱！罪犯绝不可能是#m103000000#的人！绝对！\r\n#b#L0#是，是吗？那小偷会在哪里呢？#l", 0, 1052103)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline("我也不知道！不过，他居然敢嫁祸给#m103000000#，这点我绝不能原谅，那个小偷！我要亲自找出那个偷走#t4032464#的小偷！帮#m103000000#洗清冤屈，重拾名誉！你明白了吗？我来亲自找出那个小偷！\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 10000 exp", 0, 1052103)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("好的！从现在开始，#b我会对那个小偷进行调查。你乖乖在这里等着#k。调查结果出来之后，我会联系你的。我一定会把他抓住的！", 0, 1052103, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("恩？你问在此期间你做什么？你就好好练级！目标就定在大概#b45级#k左右，怎么样？", 0, 1052103, true, false);
                                        cm.forceStartQuest(22536, "");
                                        cm.forceCompleteQuest(22536);
                                        cm.gainExp(10000);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22536.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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