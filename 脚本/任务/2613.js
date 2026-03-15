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
            cm.sendNormalTalk("呵呵呵，你顺利地接近了达克鲁。我怎么知道？呵呵，我有我的办法。总之，现在可以进入下一阶段了。你知道下一阶段要干什么吧？那就是#b接近废弃都市的人，挖掘达克鲁的黑历史#k。", 4, 1057001, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("不需要对所有人都进行调查。只要调查我提到的人就行。他们和达克鲁比较亲密，内拉, 吉姆, 钱老板……好了，希望你能带回好消息。\r\n对了，为了进行调查，你需要一样东西。到#r#m103050300##k的#b#p1055002##k那里去，就能拿到你需要的东西。", 4, 1057001)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(2613, "");
                    cm.OnStartNavigation(103000000, 1, "1052103", 2613);
                    cm.npc_LeaveField("oid=2062");
                    cm.npc_LeaveField("oid=2065");
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/2613.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("所有的调查都结束了吗？怎么样？有什么成果吗？……哦，虽然没有惊喜，但这些情报还挺有意思的嘛。达克鲁不是个容易对付的对手，但从琐屑的事情开始调查，一定可以找到什么破绽。", 4, 1057001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我们这边也收到了情报，说经常能在沼泽地带见到达克鲁。", 4, 1057001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("在沼泽地带见到了达克鲁……还有#b达克鲁每周都会收到一次包裹#k……那到底是什么呢？其中必然有什么文章。接下来必须对此进行调查。", 4, 1057001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("到了需要调查的时候，我会和你联系。在这之前，希望你能努力修炼，提升等级。记得要转职为见习刀客哦。呵呵……\r\n\r\n达克鲁在找你。快到#m103000003#去看看吧。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n\r\n#i2030005:# #t2030005:#1个\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 1242 exp", 4, 1057001, true, true)
                    } else {
                        if (status === a++) {
                            cm.gainExp(1242);
                            cm.forceCompleteQuest(2613);
                            cm.gainItem(2030005, 5);
                            cm.dispose();
                            while (cm.getLevel() < 16) {
                                cm.getPlayer().levelUp()
                            }
                        }
                    }
                }
            }
        }
    }
};