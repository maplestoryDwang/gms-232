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
            cm.forceStartQuest(23023, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23023.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#t4032737#被取回来啦。干得好！我就知道你一定可以做到。", 0, 2151001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("呵呵……这次任务是我故意交给你的。黑色之翼的那个家伙，过去好像曾经让你吃过苦头吧？过去你连他的衣角都碰不到，现在竟然这么轻易就打败了他。不觉得高兴吗？在完成任务的同时，又一雪前耻，感觉很爽吧？", 0, 2151001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("不过没想到你能完成得这么干净利落。你确实是个了不起的家伙。老实说，我根本没想到你会在这么短的时间内成长到现在这个程度。我还以为你会费一番功夫呢……真了不起。", 0, 2151001, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("很好！对于成长的确认这样就足够了！我还以为可能有点早，但好像完全用不着担心了。我们进入下一个阶段吧！你会变成以前根本无法想象的拥有更强力量的唤灵斗师……", 0, 2151001)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(1073, "3200=10;3210=201");
                            cm.changeJob(3210);
                            cm.sendNormalTalk("我让你转了职，同时向你传授了比之前的技能更强的技能。现在你已经不是从前的你了。你已经变成更强、更狂暴的唤灵斗师。呵呵，你成长的速度这么快，看来我的教课水平也不错嘛？", 0, 2151001, false, true)
                        } else {
                            if (status === a++) {
                                cm.gainItem(4032737, -1);
                                cm.gainItem(1142243, 1);
                                cm.forceCompleteQuest(23023);
                                cm.forceCompleteQuest(29942);
                                cm.sendNormalTalk("让我们进入下一个课程吧。\n\n在那之前，希望你能以反抗者的身份，继续努力。", 0, 2151001, true, false);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};