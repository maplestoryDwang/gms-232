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
            cm.askAcceptDecline_Bottom("#face0#我需要#b10个#k从#r#o2300202##k身上可以获得的#b#i4036526# #t4036526##k。\r\n毒毒花生活在#r#m100051013##k。", 36, 1013350, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#那就拜托你了,勇士。\r\n啊,毒毒花含有剧毒,一定要小心。明白了吗？", 36, 1013350, false, true, 1)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(35910, "");
                    cm.OnStartNavigation(100051013, 0, "", 35910);
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35910.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face2#嘻嘻,毒毒花叶子搜集到啦。那我就收下了。\r\n毒毒花叶子也可以用秘方做成制作灵药的材料。", 36, 1013350, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##b(这些材料好像没什么特别的嘛。\r\n用这些东西制作传说中的灵药？到底是什么秘方呢？)#k", 36, 1013358, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#秘方？", 36, 1013358, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#啊,在村子旁边有个用石头做成的石臼。\r\n那是历代村长代代相传的宝物。只要用它把材料捣碎,就能变成灵药。", 36, 1013350, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#现在节日的准备全部完成了。\r\n我要最后再确认一下是否有遗漏。请稍等一下。", 36, 1013350, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(35910);
                                cm.gainExp(622);
                                cm.gainExp(649);
                                cm.gainItem(4036526, -10);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};