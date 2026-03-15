var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("看见你正在为诺巴族努力战斗，我感到很自豪。狂龙战士，你是担心保护罩而来的？现在使用3个圣物复原保护罩的时间确实有些不够。", 0, 3000001, false, true)
        } else {
            if (status === b++) {
                cm.askYesNo("听说南侧正在开展激烈的战斗，你能不能去那里协助骑士团？\r\n\r\n#b#e<接受后将立即移动到战场地图。>#n#k", 0, 3000001)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("祭司们会努力复原保护罩，请狂龙战士前往保护罩南部边界，阻挡敌人的攻势吧。", 1, 3000001, false, true)
                } else {
                    if (status === b++) {
                        cm.forceStartQuest(25753, "");
                        var a = cm.getEventManager("狂龙战士_战斗8");
                        a.startInstance(cm.getPlayer(), cm.getMap());
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25753.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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