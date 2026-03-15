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
            cm.sendNormalTalk("英雄！你好！啊？你难道不知道自己是英雄吗？前面3个人都喊那么大声了，我还能听不见吗？整个岛都知道英雄苏醒的事情了。", 0, 1202004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("咦，你怎么好像不开心的样子？有什么问题吗？啊？不知道自己到底是不是英雄？你失忆了吗？怎么会……看样子是被封冻在冰里数百年来的后遗症。", 0, 1202004, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("嗯，既然你是英雄，挥挥剑也许就会想起什么来呢？试着去#b打猎怪兽#k，怎么样？", 0, 1202004)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("对了，这附近有许多#r#o9300383##k，请击退 #r3只#k试试，说不定你就能想起什么了。", 1, 1202004, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("哦，你应该还没有忘记使用技能的方法吧？#b将技能拖到快捷栏上，以方便使用#k。除了技能以外，消费道具也可以拖到这里来方便使用。", 1, 1202004, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(21012, "");
                                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21012.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("嗯……看你的表情就知道你啥都没想起来。不过不用担心。说不定这反倒更好。来，这里有一些药水，加油吧！\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0# \r\n#i2000022# #t2000022# 10个 \r\n#i2000023# #t2000023# 10个 \r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 57 exp", 0, 1202004)
        } else {
            if (status === a++) {
                cm.spawnMobLimit(9300383, 1, -4656, 86, 100);
                cm.spawnMobLimit(9300383, 1, -4656, 86, 100);
                cm.spawnMobLimit(9300383, 1, -4496, 86, 100);
                cm.spawnMobLimit(9300383, 1, -4496, 86, 100);
                cm.forceStartQuest(21012, "003");
                cm.forceCompleteQuest(21012);
                cm.gainExp(57);
                cm.sendNormalTalk("#b（就算我真的是英雄……一个什么能力都没有的英雄又能有什么用呢？）#k", 2, 1202004, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(2000022, 10);
                    cm.gainItem(2000023, 10);
                    cm.OnStartNavigation(140090400, 0, "", 0);
                    cm.gainExp(3);
                    cm.gainExp(3);
                    cm.updateInfoQuest(16027, "ComboK=4");
                    cm.dispose()
                }
            }
        }
    }
};