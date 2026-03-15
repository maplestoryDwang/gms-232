var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return
    }(mode == 1) ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status == i++) {
            cm.sendNormalTalk_Bottom("#face0#这几天，我们仔细调查了大哥委托的事。\r\n只是，该从哪说起呢，嘿嘿……", 36, 3001962, false, true, 1)
        } else {
            if (status === i++) {
                cm.sendNormalTalk_Bottom("#face0#围绕他们二位想知道的情况来讲述，不就行了！？\r\n大哥，你来提问吧，我们会一一解答！", 36, 3001963, true, true, 1)
            } else {
                if (status === i++) {
                    cm.askMenu_Bottom("#face0#我想知道的就这些……提问顺序，就由阿黛尔来定吧？\r\n阿黛尔，你在其中挑选一下你想问的问题。\r\n\r\n#b#L0# 接收器的当前位置 #l　#L1# 关于宅邸的传闻 #l　#L2# 进入秘密通道的方法#l\r\n#k#L99# 没有想问的#l", 36, 3001952, 1)
                } else {
                    var reactor = "action分支" + selectionLog[3];
                    eval(reactor)(mode, type, selection, i)
                }
            }
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom("#face0#上次你们不是在那幅画背面装了接收器嘛。\r\n目前接收器的信号正指向伯爵宅邸的某处。", 36, 3001962, false, true, 1)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#啊，对了！昨天报纸上求购画作的广告全部都被撤掉了。\r\n估计伯爵已经找齐了所有的画作。", 36, 3001963, true, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#居然全都存放在自己的宅邸里……看来真的是很重要的画作。\r\n这下我们更有理由必须潜入伯爵宅邸去看看了。", 36, 3001952, true, true, 1);
                status = 1
            }
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom("#face0#伯爵宅邸曾是之前王室的别馆，是人尽皆知的事实。\r\n据说热爱艺术的国王珍爱的藏品几乎都留在那里。", 36, 3001963, false, true, 1)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#有个小道消息说，那宅邸里有个国王的秘密仓库。\r\n里面说不定藏着价值连城的物品呢。", 36, 3001963, true, true, 1);
            status = 1
        }
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom("#face0#广场西边有个据称是秘密出入口的地方……\r\n但至今还没收到过有人从那里进入宅邸内部的消息。", 36, 3001962, false, true, 1);
        status = 1
    }
}

function action分支99(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom("#face0#我脑海中已经大致有了如何潜入伯爵家的计划。\r\n给我点时间整理下思路。", 36, 3001952, false, true, 1)
    } else {
        if (status === a++) {
            cm.forceCompleteQuest(39612);
            cm.gainExp(432);
            cm.gainExp(879);
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39612.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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