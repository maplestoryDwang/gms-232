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
            cm.sendNormalTalk_Bottom("#face0#那个，其实活儿差不多都干完了。\r\n再往里走，孩子们会发现到处都是堆好的木材。把它们搬运到凯尼斯大叔所在的工地就可以了。", 37, 9400923, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#谢谢你！伐木区里的怪物也少了很多。虽然它们构不成威胁，但它们总会妨碍我工作。", 37, 9400923, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face1#那我稍微整理一下，就先去工地了。\r\n你们收集好木材后就过来吧。我在工地等你们。", 37, 9400923)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(64904, "");
                        cm.sendNormalTalk_Bottom("#face1#好，那就加油吧！", 37, 9400923, false, true)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_PlayFieldSound("Sound/UI.img/Invite", 100);
                            cm.OnStartNavigation(871000056, 0, "go_871000060", 0);
                            cm.dispose()
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64904.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face1#我在等你呢！我在艾丹那儿听说你的故事了。辛苦了辛苦了！", 37, 9400922, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(64904);
                cm.fieldEffect_PlayFieldSound("Sound/Game.img/QuestClear", 100);
                cm.gainItem(4036630, -20);
                cm.effect_OnUserEff("Effect/BasicEff.img/QuestClear");
                cm.dispose()
            }
        }
    }
};