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
            cm.askYesNo("这肯定就是机械座驾了！看着好眼熟，大概是别的外星人留在这儿的吧！我们真得好好治治这帮入侵者了。靠，没油了！不过…… #b#p9201050##k说外星人采集的就是燃料。或许我能在这附近找找替代品！", 0, 9201176)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("(这些东西或许可以，它们四处都是。", 3, 9201176, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("(外星人警卫！我的攻击对它们可没用！我得避开它们！", 3, 9201176, true, true)
                } else {
                    if (status === a++) {
                        cm.playerMessage(-1, "避开外星人警卫并在附近收集5块矿石作为燃料。");
                        cm.forceStartQuest(28751, "");
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/28751.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("这下有燃料了！不过这玩意儿要怎么启动来着？", 3, 9201176, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("找不到开关——哎哟我的天！用钥匙的！", 3, 9201176, true, true)
            } else {
                if (status === a++) {
                    cm.gainExp(70000);
                    cm.forceStartQuest(28825, "1");
                    cm.forceCompleteQuest(28751);
                    cm.dispose()
                }
            }
        }
    }
};