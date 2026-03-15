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
            cm.askMenu("#b#e<深渊远征队> 远征队队长指南#k#n\r\n\r\n#L0# 1。#b深渊远征队#k是？#l\r\n#L1# 2。找到优秀#b远征队队员#k的方法#l\r\n#L2# 3。#b队员道具#k获得方法#l\r\n#L3# 4。#b关于指挥等级#k和#b升级#k#l\r\n#L4# 5。远征队探险奖励#l\r\n#L5# 6。#b远征队运营时间#k#l\r\n\r\n#L6# 没有其他想知道的了#l", 4, 9401021)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#b#e[1。#b深渊远征队#k是？]#k#n用一句话来说，这是一个#b为了去深渊探险而聚在一起的组织#k。由1名队长和5名队员组成，大家互相帮助、共同对抗敌人、共同成长，是#b共享经验值#k的伙伴。", 4, 9401021, false, true);
        status = -1
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#b#e[2。找到优秀#b远征队队员#k的方法]#k#n\r\n如果想要将优秀的冒险家引入远征队，首先就需要提高远征队队长的指挥等级。远征队总部的#b大叔#k负责联系符合队长等级的队员，所以去找他寻找队员是最简单的方法了。", 4, 9401021, false, true);
        status = -1
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#b#e[3。#b队员道具#k获得方法]#k#n获得道具的第一个方法是去远征队总部的#b宝贝#k那里消耗声望来购买道具。有时候他会卖一些不错的道具，建议你可以经常去那里看看。", 4, 9401021, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("#b#e[3。#b队员道具#k获得方法]#k#n第二个方法是通过深渊探险获得。在深渊各处有远征队队员、还有远征队总部的人留下的#i2631535:##t2631535:#和#i2631536:##t2631536:#，仔细找一找吧。还有，如果你能将出现在深渊里的#b暗影消灭#k的话，还可以获得非常不错的道具哦。", 4, 9401021, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b#e[3。#b队员道具#k获得方法]#k#n最后一个方法是在结束每天的探险后，返回总部领取支援箱。根据探险时间，你可以获得 #i2631532:##t2631532:#，#i2631533:##t2631533:##i2631534:##t2631534:#，可不要忘了。", 4, 9401021, true, true);
                status = -1
            }
        }
    }
}

function action分支3(mode, type, selection, i) {
    if (status <= i++) {
        cm.sendNormalTalk("#b#e[4。关于指挥等级和升级]#k#n\r\n我们会根据远征队长的能力和努力，为队长授予#b指挥等级#k。所有人一开始虽然都是#b新手#k，但是随着远征队长等级的上升，大家都有机会升级。远征队长的等级是根据#b队员的等级合算#k出来的，当远征队等级达到足够的等级时，去找#b大叔#k，向他#b支付一定量的声望#k，就可以升级了。", 4, 9401021, false, true)
    } else {
        if (status === i++) {
            cm.askMenu("#b#e[4。关于指挥等级与升级]#k#n \r\n\r\n查看各指挥等级的探险时间/队员数量/升级条件\r\n #L0# 新手 #l\r\n #L1# 初级 #l\r\n #L2# 高级Ⅰ #l\r\n #L3# 高级Ⅱ #l\r\n #L4# 高级Ⅲ #l\r\n #L5# 资深Ⅰ #l\r\n #L6# 资深Ⅱ #l\r\n #L7# 资深Ⅲ #l\r\n #L8# 大师Ⅰ #l\r\n #L9# 大师Ⅱ #l\r\n #L10# 大师Ⅲ #l\r\n", 4, 9401021)
        } else {
            var reactor = "action分支3_" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支3_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#b#e[4。关于指挥等级与升级]#k#n\r\n\r\n#e <新手> #n\r\n - 远征时间：2小时 \r\n - 可使用队员数量“：1名 \r\n - 需要远征队等级：10 \r\n - 提供声望：100\r\n", 4, 9401021, false, true);
        status = -1
    }
}

function action分支3_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#b#e[4。关于指挥等级与升级]#k#n\r\n\r\n#e <初级> #n\r\n - 远征时间：3小时 \r\n - 可使用队员数量“：2名 \r\n - 需要远征队等级：20 \r\n - 提供声望：500\r\n", 4, 9401021, false, true);
        status = -1
    }
}

function action分支3_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#b#e[4。关于指挥等级与升级]#k#n\r\n\r\n#e <高级Ⅰ> #n\r\n - 远征时间：4小时 \r\n - 可使用队员数量“：3名 \r\n - 需要远征队等级：30 \r\n - 提供声望：1000\r\n", 4, 9401021, false, true);
        status = -1
    }
}

function action分支3_3(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#b#e[4。关于指挥等级与升级]#k#n\r\n\r\n#e <高级Ⅱ> #n\r\n - 远征时间：5小时 \r\n - 可使用队员数量“：3名 \r\n - 需要远征队等级：40 \r\n - 提供声望：1500\r\n", 4, 9401021, false, true);
        status = -1
    }
}

function action分支3_4(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#b#e[4。关于指挥等级与升级]#k#n\r\n\r\n#e <高级Ⅲ> #n\r\n - 远征时间：6小时 \r\n - 可使用队员数量“：3名 \r\n - 需要远征队等级：50 \r\n - 提供声望：2000\r\n\r\n\r\n#b ※ 2020年3月4日后可升级#k", 4, 9401021, false, true);
        status = -1
    }
}

function action分支3_5(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#b#e[4。关于指挥等级与升级]#k#n\r\n\r\n#e <资深Ⅰ> #n\r\n - 远征时间：7小时 \r\n - 可使用队员数量“：4名 \r\n - 需要远征队等级：65 \r\n - 提供声望：2000\r\n\r\n\r\n#b ※ 2020年3月4日后可升级#k", 4, 9401021, false, true);
        status = -1
    }
}

function action分支3_6(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#b#e[4。关于指挥等级与升级]#k#n\r\n\r\n#e <资深Ⅱ> #n\r\n - 远征时间：8小时 \r\n - 可使用队员数量“：4名 \r\n - 需要远征队等级：80 \r\n - 提供声望：2000\r\n\r\n\r\n#b ※ 2020年3月4日后可升级#k", 4, 9401021, false, true);
        status = -1
    }
}

function action分支3_7(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#b#e[4。关于指挥等级与升级]#k#n\r\n\r\n#e <资深Ⅲ> #n\r\n - 远征时间：9小时 \r\n - 可使用队员数量“：4名 \r\n - 需要远征队等级：100 \r\n - 提供声望：3000\r\n\r\n\r\n#b ※ 2020年3月18日后可升级#k", 4, 9401021, false, true);
        status = -1
    }
}

function action分支3_8(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#b#e[4。关于指挥等级与升级]#k#n\r\n\r\n#e <大师Ⅰ> #n\r\n - 远征时间：10小时 \r\n - 可使用队员数量“：5名 \r\n - 需要远征队等级：130 \r\n - 提供声望：3000\r\n\r\n\r\n#b ※ 2020年3月18日后可升级#k", 4, 9401021, false, true);
        status = -1
    }
}

function action分支3_9(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#b#e[4。关于指挥等级与升级]#k#n\r\n\r\n#e <大师Ⅱ> #n\r\n - 远征时间：11小时 \r\n - 可使用队员数量“：5名 \r\n - 需要远征队等级：160 \r\n - 提供声望：3000\r\n\r\n\r\n#b ※ 2020年3月18日后可升级#k", 4, 9401021, false, true);
        status = -1
    }
}

function action分支3_10(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#b#e[4。关于指挥等级与升级]#k#n\r\n\r\n#e <大师Ⅲ> #n\r\n - 远征时间：12小时 \r\n - 可使用队员数量“：5名 \r\n - 需要远征队等级：160 \r\n - 提供声望：3000\r\n\r\n\r\n#b ※ 2020年3月18日后可升级#k", 4, 9401021, false, true);
        status = -1
    }
}

function action分支4(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#b#e[5。#b远征队探险奖励]#k#n我们都是冒险家。而且大部分人都渴望成长。在深渊里#b共享经验值#k会带给大家惊人的成长速度。#b更深处的深渊#k会提高#b成长效率。#k 这就是第一个奖励。", 4, 9401021, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("#b#e[5。#b远征队探险奖励]#k#n要想加快成长速度，一个#b好道具#k是必不可少的。我们为了支持远征队，每天都会根据探险时间发放许多装备和技能，这就是我们给的第二个奖励。", 4, 9401021, true, true);
            status = -1
        }
    }
}

function action分支5(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#b#e[6。#b远征队运营时间]#k#n深渊远征队总部预计#b从2020年2月19日起运营至3月31日#k。", 4, 9401021, false, true)
    } else {
        if (status === a++) {
            cm.dispose()
        }
    }
}

function action分支6(d, c, b, a) {
    if (status <= a++) {
        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64758.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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