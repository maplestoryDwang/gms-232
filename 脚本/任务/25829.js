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
            cm.sendNormalTalk("你获得力量还没多久，还不太适应吧？我给你讲讲几种技能，你好好听。", 4, 3000018, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("好，快说吧。", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我要讲解的是新手技能中几种和攻击无关的技能，先说说都有哪些吧。", 4, 3000018, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("第一个技能是#i3800342#白日梦。使用该技能可以移动到我#e特别#n准备的据点。", 4, 3000018, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("特别？据点？那又是什么东东？", 16, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("呵呵，你要是想知道，就亲自用技能去看看。接下来是#i3800344#装扮技能，使用该技能可以自由转换变身前、后的效果，即便在变身前尝试使用其他技能，也会先行使用装扮技能，你也没必要觉得吃惊。", 4, 3000018, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("...", 16, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("看来你被我的介绍打动了呢。其他那些攻击技能你亲自使用后会更快了解，我的说明就到此结束吧。", 4, 3000018, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(25829);
                                            cm.gainExp(200);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25829.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};