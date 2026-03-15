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
            cm.forceStartQuest();
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25302.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest(25302);
            cm.forceCompleteQuest(25303);
            cm.teachSkill(20031160, 0, -1);
            cm.teachSkill(20031160, 1, 0);
            cm.playerMessage(-1, "获得了老爷车骑宠技能！");
            cm.playerMessage(5, "获得了<老爷车骑宠>技能。");
            cm.sendNormalTalk("我等你好久了！这是按照#p1401000#你的要求制造的敞篷车——老爷车！按照你的要求，在光亮的白色车体上用绿松石颜料刷上了美丽的花纹！是不是很完美？", 0, 2111008, false, true)
        } else {
            if (status === a++) {
                cm.gainItem(2001504, 10);
                cm.sendNormalTalk("这次不小心把纯金装饰装了上去，扣除这些费用，辛苦费就所剩无几了。不过没关系！和扣留工资相比，这不算什么……呵呵。希望你能喜欢！", 0, 2111008, true, false);
                cm.dispose()
            }
        }
    }
};