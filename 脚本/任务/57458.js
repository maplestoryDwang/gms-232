var status = -1;
var selectionLog = [];

function start(c, b, a) {
    if (cm.getJob() == 4200) {
        start4200(c, b, a)
    } else {
        end(c, b, a)
    }
}

function start4200(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#face0#神那，你总算开始逐渐恢复力量了啊。记得刚来到冒险岛的时候，你根本就什么都做不好的呢。", 37, 9130081, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("哼，当时不过是因为环境突然发生变化，让我有些混乱了而已。但还是很快就适应了这里。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#你嘴上是这么说，但实际提供给我的灵力还远远不够用啊。再这么下去，我就要被活活饿死啦。", 37, 9130081, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("对了，接下来就要一边在冒险岛各地探险，一边完成任务了。在此之前，必须先把几个有关法术的封印给解开了才行。不然只凭初步的法术，是根本没有办法继续应付接下来的任务的。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("原本计划提供给小白的灵力，也要先用在新的法术上了。你记得做好心理准备吧。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#不是吧！喂喂，你要是继续撤走灵力，我就真的要饿死了啊！难道是因为我刚刚告诉你说，现在的灵力已经不够用了，所以你才在闹脾气吗？是这个原因吗？对不起嘛，是我说错话，你就别生气啦～！", 37, 9130081, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("（好了，我已经多少明白该怎样在冒险岛运用灵力。是不会真的让你活活饿死的。）", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("（不过，目前的灵力还不足以打倒信长，救出姬儿。必须要继续努力才行……）", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(57458, "");
                                            cm.forceCompleteQuest(57458);
                                            cm.gainItem(1552002, 1);
                                            cm.gainItem(1142507, 1);
                                            cm.forceCompleteQuest(57484);
                                            cm.changeJob(4210);
                                            cm.dispose();
                                            cm.openNpc(0, "全职满技能")
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