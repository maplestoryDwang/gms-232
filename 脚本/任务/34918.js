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
            cm.askAcceptDecline_Bottom("#face0#现在这里的东西好像足够了。可，可以的话，你能去帮助搜集粮食吗？", 36, 3001508)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#搜集粮食的事情由巴克巴克负责。你去找他，他就会告诉你需要什么东西。", 36, 3001508, 0, 1)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(34918, "");
                    cm.OnStartNavigation(402000600, 1, "3001401", 34918);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34918.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#（说决定帮避难处做事，有什么需要就尽管说。）", 36, 3001500 + cm.getPlayer().getGender(), 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3#哦哦，怀疑你是我的错觉。现在你也是我的" + (cm.getPlayer().getGender() == 0 ? "兄弟" : "姐妹") + "。\r\n哦哦，现在你也明白了避难处的现实。", 36, 3001509, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#（从巴克巴克那里了解到了避难处的窘迫情况。他唱着说出来，听着很吃力。）", 36, 3001500 + cm.getPlayer().getGender(), 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#（简单来说，本来情况就很窘迫，又有怪物入侵，所以变得更加困难了。）", 36, 3001500 + cm.getPlayer().getGender(), 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#（根据他的描述，那些怪物就像是为害生命体的饥渴的死神。）", 36, 3001500 + cm.getPlayer().getGender(), 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face4#喔，现在我们需要粮食↗ 喔，肚子饿了就无法唱歌↗", 36, 3001509, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(34918);
                                    cm.gainExp(537);
                                    cm.updateInfoQuest(34918, "exp=1");
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};