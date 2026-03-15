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
            cm.sendNormalTalk("#p2410008#！就是这里！刚才发现的地方就是这里，周围好像有很多怪物。唔……每次看到的时候，都觉得很恶心……", 32, 2410003, false, true);
            cm.effect_Voice("Voice.img/Milro/0", 100)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这次不是我消灭，我只是后方支援，我们只要消灭掉我们这里的怪物就行了。多亏了#p2410008#，我们也能够轻松一下了！", 32, 2410003, true, true);
                cm.effect_Voice("Voice.img/Milro/1", 100)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("啊，#r怪物#k好像在#b#m321000300##k地区。数量还是#b9只#k。额额，是因为天气太差了，好想快点回去休息！快点消灭它们！", 32, 2410003);
                    cm.effect_Voice("Voice.img/Milro/2", 100)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(40001, "");
                        cm.forceStartQuest(40001, "");
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40001.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("我是让你快点消灭……没想到你这么快就消灭完了？只有你才能完成影子骑士团的任务。那么我们就撤退吧！", 33, 2410003, false, true);
            cm.effect_Voice("Voice.img/Milro/3", 100)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……嗯？等一下？怎么？还有没消灭的……", 33, 2410003, true, true);
                cm.effect_Voice("Voice.img/Milro/4", 100)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(40001);
                    cm.gainExp(590000);
                    cm.dispose()
                }
            }
        }
    }
};