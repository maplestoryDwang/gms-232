var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return
    }(mode == 1) ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status == i++) {
            cm.askMenu("你想干什么呢？\r\n#b\r\n#L0# 装饰饼干伤害皮肤。#l\r\n#L1# 查看当前应用的伤害皮肤。#l\r\n#L2# 结束对话。#l", 4, 1012108)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.askMenu("\r\n#e#b[ 更改 ]#n#k 你想更改成什么形状的饼干呢？\r\n#L99# #b返回上一步。#k#l\r\n#b#L0# 蘑菇饼干装饰#k（获得0 / 3种）#l\r\n#b#L1# 水灵饼干装饰#k（获得0 / 3种）#l\r\n#b#L2# 白雪人饼干装饰#k（获得0 / 3种）#l\r\n#b#L3# 企鹅王饼干装饰#k（获得0 / 3种）#l\r\n#b#L4# 品克缤饼干装饰#k（获得0 / 3种）#l\r\n#b#L5# 袜子饼干装饰#k（获得0 / 3种）#l\r\n#b#L6# 树饼干装饰#k（获得0 / 3种）#l\r\n#b#L7# 礼物盒饼干装饰#k（获得0 / 3种）#l\r\n#b#L8# 礼物饼干装饰#k（获得0 / 3种）#l\r\n#b#L9# 姜饼人饼干装饰#k（获得0 / 3种）#l\r\n#b#L10# 拐杖饼干装饰#k（获得0 / 3种）#l\r\n#b#L11# 花环饼干装饰#k（获得0 / 3种）#l\r\n#b#L12# 圣诞鹿饼干装饰#k（获得0 / 3种）#l\r\n#b#L13# 拿铁饼干装饰#k（获得0 / 3种）#l\r\n#b#L14# 迷你树饼干装饰#k（获得0 / 3种）#l\r\n#b#L15# 雪人饼干装饰#k（获得0 / 3种）#l\r\n#b#L16# 雪片饼干装饰#k（获得0 / 3种）#l\r\n#b#L17# 雪晶饼干装饰#k（获得0 / 3种）#l\r\n#b#L18# 雪花饼干装饰#k（获得0 / 3种）#l\r\n#b#L19# 王冠饼干装饰#k（获得0 / 3种）#l\r\n#k", 4, 1012108)
    } else {
        if (status === a++) {
            cm.dispose()
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("饼干伤害皮肤还没完成！\r\n请先对所有数字进行装饰！", 4, 1012108, false, true)
    } else {
        if (status === a++) {
            cm.dispose()
        }
    }
}

function action分支2(d, c, b, a) {
    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100153.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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