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
            cm.askYesNo("我要交给你的第三个任务是搜集#t4000594#。狩猎#m220000000#时间塔最深处的#r#o9001028##k，偶尔可以获得#b#t4000594##k。你只要搜集#b100个#k交给我就行。", 0, 1013203)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我会一直待在这个地方，你只要来这里找我就行了。\r\n…………话说，你饲养的蜥蜴的外形非常奇特啊。就像一只龙…………。不过，应该不可能是龙吧。", 0, 1013203, false, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("好吧，我可以把你送到有#r#o9001028##k的地方去。你想现在就去吗？", 0, 1013203)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(22582, "");
                        cm.dispose();
                        cm.warp(922030002, 1, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22582.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("啊，任务好像完成啦。让我看看你搜集到的#t4000594#吧。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 44669 exp", 0, 1013203, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(44669);
                cm.sendNormalTalk("呵呵……很好。这样的话，就可以执行我们的计划了……", 0, 1013203, true, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4000594, -100);
                    cm.sendNormalTalk("#b喂……我有个问题……", 2, 1013203, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不好意思，因为要处理你搜集到的自由的灵魂，我现在很忙。你能在我完成处理工作之后再来找我吗？好像需要花费一点时间……", 0, 1013203, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b#b(到人迹罕至的时间塔深处捕捉怪物，会对别人有什么帮助吗？虽然很想问他，但他看起来好像很忙。过一会儿再来找他吧。)", 2, 1013203, true, false);
                            cm.forceStartQuest(22582, "");
                            cm.forceCompleteQuest(22582);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};