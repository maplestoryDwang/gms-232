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
            cm.askAcceptDecline("是吗？你正在参加狐狸的考试？了不起，真了不起。你那不畏艰险、勇攀高峰的精神，一定会成为后辈们的榜样。好吧，考试现在开始。如果你能答对我所有的问题，我就认可你，给你盖上脚印图章。好了，你想现在开始吗？", 0, 3002006)
        } else {
            if (status === a++) {
                cm.askMenu("那我来问第一个问题。以下哪个是我们尖耳狐狸最喜欢的食物？\r\n#L0# 虫干#l\r\n#L1# 斑点翅膀#l\r\n#L2# 麻雀蛋#l\r\n#L3# 老鼠尾巴#l\r\n#b#e#L4# 生肝#l", 0, 3002006)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("是吗？你正在参加狐狸的考试？了不起，真了不起。你那不畏艰险、勇攀高峰的精神，一定会成为后辈们的榜样。好吧，考试现在开始。如果你能答对我所有的问题，我就认可你，给你盖上脚印图章。好了，你想现在开始吗？", 0, 3002006)
                } else {
                    if (status === a++) {
                        cm.askMenu("那我来问第一个问题。以下哪个是我们尖耳狐狸最喜欢的食物？\r\n#L0# 虫干#l\r\n#L1# 斑点翅膀#l\r\n#L2# 麻雀蛋#l\r\n#L3# 老鼠尾巴#l\r\n#b#e#L4# 生肝#l", 0, 3002006)
                    } else {
                        if (status === a++) {
                            cm.askMenu("答对了。我们尖耳狐狸最喜欢的食物是生肝。接下来是第二个问题。以下哪个是我们尖耳狐狸信奉的守护神？\r\n#L0# 虎神#l\r\n#b#e#L1# 狐神#k#n#l\r\n#L2# 狼神#l\r\n#L3# 山神#l\r\n#L4# 瘟神#l", 0, 3002006)
                        } else {
                            if (status === a++) {
                                cm.askMenu("没错。我们尖耳狐狸信奉狐神。下面是最后一个问题。我们尖耳狐狸拥有一种特别的能力。你知道是什么吗？\r\n#b#e#L0# 操控精灵的能力#k#n#l\r\n#L1# 操控时间的能力#l\r\n#L2# 操控动物的能力#l\r\n#L3# 不听话的能力#l\r\n#L4# 可爱得让人受不了的能力#l", 0, 3002006)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("回答正确。我们尖耳狐狸拥有操控精灵的能力。你也得到狐神的护佑了吧？希望你能珍惜那种能力。如果滥用的话，可能会招致狐神的愤怒。", 0, 3002006, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("好的，我的考试全部结束了。我来给你盖一个脚印。你去找#r#p3002009##k吧。他会告诉你下一项考试的内容。\r\n#fUI/DialogImage.img/quest/0", 0, 3002006, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.updateInfoQuest(38014, "");
                                            cm.forceStartQuest(38014, "");
                                            cm.forceCompleteQuest(38014);
                                            cm.gainExp(2800);
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38014.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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