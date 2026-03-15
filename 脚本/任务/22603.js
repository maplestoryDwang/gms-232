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
            cm.sendNormalTalk("主人，你看。这次成长之后，我的力量几乎已经完整了。", 0, 1013000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b嗯，看上去就感觉很有气势。这就是玛瑙龙的真正力量吗？", 2, 1013000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这是玛瑙龙的力量，同时也是主人的力量。玛瑙龙只有在契约者变强的时候才会成长。也就是说，主人你也同样成长了。", 0, 1013000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b果然……你现在越来越会说话了，#p1013000#。", 2, 1013000, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("呵呵，那当然。我这么优雅的外表，如果太轻狂的话，岂不会被人笑掉大牙？对了主人，和上次一样，这次蜕皮之后又留下了一块鳞片。里面含有比以前更强的力量，我想应该会对你有所帮助。来，拿着。", 0, 1013000)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(22603, "");
                                cm.forceCompleteQuest(22603);
                                cm.sendNormalTalk("虽然因为龙神是人类，会受到怪物的攻击，可是说不定那块鳞片可以保护龙神。如果龙神变强，我也会变得更加强大……我们一起强大起来吧，龙神。", 0, 1013000, false, false)
                            } else {
                                if (status === a++) {
                                    cm.gainItem(1142157, 1);
                                    cm.forceStartQuest(29939, "");
                                    cm.forceCompleteQuest(29939);
                                    cm.forceStartQuest(22618, "");
                                    cm.forceCompleteQuest(22618);
                                    cm.gainItem(1190519, 1);
                                    cm.teachSkill(22170060, 1, 10);
                                    cm.teachSkill(22170071, 1, 10);
                                    cm.teachSkill(22170074, 1, 10);
                                    cm.teachSkill(22170071, 10, 10);
                                    cm.teachSkill(22170074, 4, 10);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22603.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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