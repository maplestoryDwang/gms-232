var status = -1;
var selectionLog = [];

function start(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNext("…....发生了一件非常遗憾的事情。")
        } else {
            if (status == a++) {
                cm.sendNextPrevS("怎么了？")
            } else {
                if (status == a++) {
                    cm.sendNextPrev("因为织田信长和浓姬的第二次时空转移，正在产生不稳定的气息。再这样下去，冒险岛世界终究会被时空转移，我们可能都会消失的。")
                } else {
                    if (status == a++) {
                        cm.sendNextPrevS("难道没有办法能阻止他们吗？")
                    } else {
                        if (status == a++) {
                            cm.sendNextPrev("为了第二次时空转移而召唤的魔王既没有进浓姬体内，也没有回自己原来的所在之地。为了把魔王送回去，必须消灭召唤者浓姬。")
                        } else {
                            if (status == a++) {
                                cm.sendNextPrev("五星的意志……为了帮助我们，留下了口信。这应该有助于我们消灭浓姬。")
                            } else {
                                if (status == a++) {
                                    cm.sendNextPrev("战士要维承火之言灵，法师是水之言灵，弓箭手是木之言灵，盗贼是金之言灵，海盗是土之言灵。")
                                } else {
                                    if (status == a++) {
                                        cm.sendNextPrev("这下我们必须消灭浓姬的理由就变得更加明确了。")
                                    } else {
                                        if (status == a++) {
                                            var d = Math.floor(cm.getJob() % 1000 / 100);
                                            switch (d) {
                                                case 1:
                                                    cm.playerMessage(5, "学习了[技能]火星之言灵。请打开技能栏进行确认。");
                                                    cm.playerMessage(-1, "学习了[技能]火星之言灵。请打开技能栏进行确认。");
                                                    cm.teachSkill(80011083, 1, 0);
                                                    break;
                                                case 2:
                                                    cm.playerMessage(5, "学习了[技能]水星之言灵。请打开技能栏进行确认。");
                                                    cm.playerMessage(-1, "学习了[技能]水星之言灵。请打开技能栏进行确认。");
                                                    cm.teachSkill(80011084, 1, 0);
                                                    break;
                                                case 3:
                                                    cm.playerMessage(5, "学习了[技能]木星之言灵。请打开技能栏进行确认。");
                                                    cm.playerMessage(-1, "学习了[技能]木星之言灵。请打开技能栏进行确认。");
                                                    cm.teachSkill(80011087, 1, 0);
                                                    break;
                                                case 4:
                                                    cm.playerMessage(5, "学习了[技能]金星之言灵。请打开技能栏进行确认。");
                                                    cm.playerMessage(-1, "学习了[技能]金星之言灵。请打开技能栏进行确认。");
                                                    cm.teachSkill(80011086, 1, 0);
                                                    break;
                                                case 5:
                                                    cm.playerMessage(5, "学习了[技能]土星之言灵。请打开技能栏进行确认。");
                                                    cm.playerMessage(-1, "学习了[技能]土星之言灵。请打开技能栏进行确认。");
                                                    cm.teachSkill(80011085, 1, 0);
                                                    break
                                            }
                                            cm.forceCompleteQuest();
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58955.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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