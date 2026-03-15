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
            cm.sendNormalTalk_Bottom("哎呀，已经完全变成这个城市的现代人了嘛！人类果然是适应力极强的动物。看来如何使用智能手机，你也一定很快就能掌握的？", 37, 1530020, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("话说回来，你要去的那所学校嘛！我听说，可是有些不可理喻呢。", 37, 1530020, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("好像叫做#b私立神兽国际学校#k，是个名为#b神兽集团#k的超大的财阀家族新建的一所学校！为了让他家视如珍宝的独生女来上学，好像把旧的建筑都拆了，直接重建了一遍。是不是超有钱的？", 37, 1530020, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("总之，就算是再特别的学校，里面最奇特的人也是你，所以你一定要小心，不要暴露你的真实身份啊！现在既然校服也已经得到了，那就进到学校里看看吧。", 37, 1530020)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("就算是从未来过的新世界，你也不至于迷路吧？学校呀，学校！就是那个最醒目的建筑！", 37, 1530020, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(32712, "");
                                cm.dispose()
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