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
            cm.askMenu("#b#h0#！#k你想咨询什么？\r\n#L1# 我想打听#b活动时间#k。#l\r\n#L2# 我想知道#b参加方法#k。#l\r\n#L3# 我需要#b银色野猪#k的相关信息。#l", 4, 9062179)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#e<跑吧！银色野猪！>活动时间#n\r\n\r\n#b2020年7月8日 ～ 2020年7月21日下午11点59分#k\r\n", 4, 9062179, false, false)
    } else {
        if (status === a++) {
            cm.dispose()
        }
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#e<跑吧！银色野猪！>参加方法#n\r\n\r\n1. 在召唤出#b银色野猪#k的状态下，去#b狩猎等级范围怪物#k可以#r获得新复古能量#k。\r\n\r\n2. 吸收新复古能量后，银色野猪的气息会逐渐增强。\r\n\r\n3. 当银色野猪的气息蓄满时，按#r技能键#k即可#b骑乘银色野猪#k，去狩猎怪物。\r\n\r\n4. 骑上银色野猪可以立即获得#b银色野猪助阵增益#k和#r500点新复古能量#k。\r\n\r\n5. 获得银色野猪助阵增益期间，狩猎怪物时将获得#b200%的额外经验值#k。", 4, 9062179, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("#r#e※注意※#n#k\r\n\r\n1. #r收集的新复古能量达到每日上限时#k，银色野猪就会消失。\r\n\r\n2. 在#r部分职业群变身、骑宠状态#k下，无法骑乘银色野猪。\r\n\r\n3. #r骑乘银色野猪后，如果切换地图或频道#k，将解除骑乘，银色野猪助阵效果消失。\r\n\r\n4. #r如果在银色野猪的期限蓄满的状态下，移动到不属于等级范围怪物猎场的地图#k，银色野猪的气息会被初始化。", 4, 9062179, true, false)
        } else {
            if (status === a++) {
                cm.dispose()
            }
        }
    }
}

function action分支3(mode, type, selection, i) {
    if (status <= i++) {
        cm.askMenu("#b银色野猪#k是我们新复古王国的特产。\r\n新复古王国里数一数二的骑士人手一头。\r\n#b你想了解银色野猪的什么信息？#k\r\n#L1# 银色野猪的气息变化#l\r\n#L2# 银色野猪操纵方法#l\r\n#L3# 银色野猪助阵#l", 4, 9062179)
    } else {
        var reactor = "action分支3_" + selectionLog[2];
        eval(reactor)(mode, type, selection, i)
    }
}

function action分支3_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("在召唤出银色野猪的状态下获得新复古能量时，\r\n吸收新复古能量的#b银色野猪的气息会逐渐增强#k。\r\n等气息蓄满，就可以#r骑乘银色野猪#k了。", 4, 9062179, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("#b你问如何判断银色野猪的气息达到什么强度？#k\r\n\r\n#i03801403##i03801404##i03801405#\r\n\r\n随着银色野猪气息逐渐增强，#b它周围的光环#k会像这样发生变化，你可以参考下。很简单吧？", 4, 9062179, true, true)
        } else {
            if (status === a++) {
                cm.dispose()
            }
        }
    }
}

function action分支3_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#e<前方突进攻击>#n\r\n你在骑乘银色野猪的状态下，#b再次按下技能键#k，\r\n即可朝前方发动突进攻击。\r\n\r\n#e<上升突进攻击>#n\r\n同时#r按下↑方向键#k和#b技能键#k，\r\n即可朝对角线方向升空发动突进。\r\n\r\n此外，在半空中也能发动突进，这时候还可以输入#b跳跃键#k\r\n代替技能键。很简单吧？", 4, 9062179, false, true)
    } else {
        if (status === a++) {
            cm.dispose()
        }
    }
}

function action分支3_3(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("在召唤出银色野猪的状态下获得新复古能量时，\r\n吸收新复古能量的#b银色野猪的气息会逐渐增强#k。\r\n等气息蓄满，就可以#r骑乘银色野猪#k了。", 4, 9062179, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("骑乘银色野猪时，可以获得#b银色野猪助阵#k。\r\n银色野猪助阵具有#r经验值提升3倍#k的效果。\r\n不过，该效果仅持续#b30秒#k，你要趁机尽可能多消灭些怪物！", 4, 9062179, false, true)
        } else {
            if (status === a++) {
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100277.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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