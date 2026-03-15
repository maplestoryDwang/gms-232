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
            cm.spawnMob(9300877, 1, -245, -410);
            cm.spawnMob(9300877, 1, -245, -410);
            cm.sendNormalTalk("你看到那~树上的幼虫了吗？继续放任不管的话，就连狐狸树的根都要被啃光了。怎么样才能抓住它呢？", 1, 3002101, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你该不会是想爬上去吧？我不是说使用#b[缩地]#k技能的话，一下子就能接近怪物的吗？好了，去消灭幼虫吧！快！", 1, 3002101, true, true)
            } else {
                if (status === a++) {
                    cm.playerMessage(-1, "请使用[缩地]技能接近树上的幼虫后, 将它消灭吧。");
                    cm.updateInfoQuest(38998, "");
                    cm.forceStartQuest(38998, "");
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38998.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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