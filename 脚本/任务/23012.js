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
            cm.forceStartQuest(23012, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23012.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("谢谢你这么爽快地接受……你真的经过深思熟虑了吗？豹弩游侠虽然很强，但也很难操作。在操作骑宠的同时，还必须进行攻击，因此在操控方面要求很高。你能做到吗？希望你仔细考虑清楚之后再回答我。", 0, 2151002)
        } else {
            if (status === a++) {
                cm.openUI(3);
                cm.openUI(1);
                cm.openUIWithOption(0, 1);
                cm.changeJob(3300);
                cm.sendNormalTalk("哈哈哈！很好！欢迎你正式成为反抗者。从现在开始，你就是豹弩游侠了。希望你能骑着骑宠，灵活机动地消灭敌人。", 0, 2151002, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(1462092, 1);
                    cm.gainItem(1142242, 1);
                    cm.gainItem(2061000, 2000);
                    cm.gainItem(2061000, 2000);
                    cm.gainItem(2061000, 2000);
                    cm.forceCompleteQuest(29941);
                    cm.forceCompleteQuest(23012);
                    cm.forceStartQuest(23977, "1");
                    cm.updateInfoQuest(1073, "3300=10");
                    cm.sendNormalTalk("如果在外面提到豹弩游侠的话，难免会引起黑色之翼的怀疑。所以从现在开始，你要叫我班主任。你是来教室接受特别课程的学生。呵呵呵……有意思吧？我的特别课程会把你培养成最好的豹弩游侠。", 0, 2151002, true, true);
                    cm.dispose()
                }
            }
        }
    }
};