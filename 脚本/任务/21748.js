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
            cm.forceStartQuest();
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21748.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("我听说了，为了调查黑色之翼的事件，你去了#m250000000#，战神。辛苦了。不过……这次是不是又中了黑色之翼的招儿？", 8, 1201000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b（讲述#m250000000#封印石的事情。）#k", 2, 1201000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……什么？是英雄……过去的你把封印石交给大家的吗？#m250000000#封印石被抢走了也没关系。这个情报可意义重大！", 8, 1201000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("意义重大？", 2, 1201000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("既然过去封印石是英雄的东西，那么#b只要对英雄进行一些调查，哪怕是很琐碎的一些情报，说不定就能发现封印石的下落了呢#k？那样的话，我们就能在黑色之翼之前，找到封印石了！", 8, 1201000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("原来是这样，真是个好办法！", 2, 1201000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("呵呵呵……太好了！现在又斗志昂扬了吧？来，战神！这是新的技能！", 0, 1201000)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(21748, "");
                                        cm.forceCompleteQuest(21748);
                                        cm.gainExp(12067);
                                        cm.sendNormalTalk("看来应该重新调查英雄的行踪了！特鲁大叔会继续打听关于黑色之翼的信息，你还是专心修炼吧！一定要练到把黑色之翼鼻子打扁的程度啊！", 0, 1201000, false, false);
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
};