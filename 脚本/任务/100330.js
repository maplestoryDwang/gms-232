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
            cm.askMenu("嘿嘿，你喜欢我的#b新型爆炸机器人#k吗？有任何问题都可以随时来问我。\r\n\r\n#b#L0#我要调整一下卡彭韦伯的火焰喷射方向。#l#k\r\n#b#L1#我想了解当前火力信息和更新标准。#l#k\r\n#b#L2#我想详细了解一下卡彭韦伯。#k\r\n#b#L3#暂时没有要交给你的事情。#k", 4, 3004213)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(mode, type, selection, i) {
    if (status <= i++) {
        cm.askMenu("你想改变方向啊！卡彭韦伯现在正以#r#e环绕型喷射#k#n喷射火焰。\r\n\r\n#b#L0#调整为环绕型喷射。#l#k\r\n#b#L1#调整为左右型喷射。#l#k\r\n#b#L2#调整为柱形喷射。#k\r\n#b#L3#调整为X型喷射#k。\r\n#b#L4#以后再说吧。#k", 4, 3004213)
    } else {
        var reactor = "action分支0_" + selectionLog[2];
        eval(reactor)(mode, type, selection, i)
    }
}

function action分支0_0(d, c, b, a) {
    if (status <= a++) {
        cm.setNumberForQuestInfo(100331, "shape", 0);
        cm.sendNormalTalk("小菜一碟！我这就帮你变成#b#e环绕型喷射#k#n。\r\n\r\n#r※ 新方向将从下次安装卡彭韦伯起生效。#k", 4, 3004213, false, false)
    } else {
        cm.dispose()
    }
}

function action分支0_1(d, c, b, a) {
    if (status <= a++) {
        cm.setNumberForQuestInfo(100331, "shape", 1);
        cm.sendNormalTalk("小菜一碟！我这就帮你变成#b#e左右型喷射#k#n。\r\n\r\n#r※ 新方向将从下次安装卡彭韦伯起生效。#k", 4, 3004213, false, false)
    } else {
        cm.dispose()
    }
}

function action分支0_2(d, c, b, a) {
    if (status <= a++) {
        cm.setNumberForQuestInfo(100331, "shape", 2);
        cm.sendNormalTalk("小菜一碟！我这就帮你变成#b#e柱型喷射#k#n。\r\n\r\n#r※ 新方向将从下次安装卡彭韦伯起生效。#k", 4, 3004213, false, false)
    } else {
        cm.dispose()
    }
}

function action分支0_3(d, c, b, a) {
    if (status <= a++) {
        cm.setNumberForQuestInfo(100331, "shape", 3);
        cm.sendNormalTalk("小菜一碟！我这就帮你变成#b#e环绕型喷射#k#n。\r\n\r\n#r※ 新方向将从下次安装卡彭韦伯起生效。#k", 4, 3004213, false, false)
    } else {
        cm.dispose()
    }
}

function action分支0_4(d, c, b, a) {
    if (status <= a++) {
        cm.dispose()
    }
}

function action分支1(mode, type, selection, i) {
    if (status <= i++) {
        cm.askMenu("你想了解哪方面呢？\r\n\r\n#b#L0#卡彭韦伯的使用方法#l#k\r\n#b#L1#火焰喷射方向#l#k\r\n#b#L2#更新和火力信息#l#k\r\n#b#L3#没有更多问题了。#l#k", 4, 3004213)
    } else {
        var reactor = "action分支0_" + selectionLog[2];
        eval(reactor)(mode, type, selection, i)
    }
}

function action分支1_0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n#b#e卡彭韦伯#k#n是可以自由改良的#b安装型爆炸机器人#k，通过#r#e预热#k#n升温，然后安装好机器人，就可以#r喷射火焰喷射#k了。", 4, 3004213, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("\r\n#b#e<预热>#n#k\r\n\r\n消灭等级范围怪物后，经有一定概率#e#b预热#k#n机器人，获得#e#b荣耀点数#k#n。斯皮萨兹也会帮你预热的。", 4, 3004213, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n#b#e<安装>#n#k\r\n\r\n预热完毕，即可将卡彭韦伯#b安装在任意地点#k。由于卡彭韦伯为浮游型机器人，在空中也可以使用。\r\n\r\n#r※ 在新手技能栏中使用爆炸机器人：卡彭韦伯技能，即可安装。#k", 4, 3004213, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n#b#e<安装>#n#k\r\n\r\n安装后将立即获得#e#b荣耀点数#k#n。", 4, 3004213, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("\r\n#b#e<安装>#n#k\r\n\r\n但是，安装后机器人会在#r60秒内会处于超负荷#k状态，在此期间#r#e无法#k#n#b预热#k或领取#b荣耀点数#k。", 4, 3004213, true, true)
                    } else {
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function action分支1_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n#b#e<更新和火力信息>#n#k\r\n\r\n每次#b安装卡彭韦伯#k，斯皮萨兹都要记录#b1个火力信息#k 记录。", 4, 3004213, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("\r\n#b#e<更新和火力信息>#n#k\r\n\r\n每#b#e安装7次卡彭韦伯#k#n，收集7个火力信息，我就会#e#r更新#k#n卡彭韦伯，然后交给你测试。", 4, 3004213, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n#b#e<更新效果>#n#k\r\n\r\n#b#e- 技能等级 1：基础技能效果\r\n- 技能等级 2：扩大范围\r\n- 技能等级 3：提高可攻击怪物数量上限\r\n- 技能等级 4：增加安装持续时间", 4, 3004213, true, true)
            } else {
                cm.dispose()
            }
        }
    }
}

function action分支1_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n#b#e<更改火焰喷射方向>#n#k\r\n\r\n想要更改#b#e卡彭韦伯#k#n#r喷射火焰的方向#k，就来找我吧。", 4, 3004213, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("\r\n#b#e<改变火焰喷射方向>#n#k\r\n\r\n一共有4个方向，包括向周围喷射的#e#b环绕型喷射#k#n、向左右两侧喷射的#e#b左右型喷射#k#n、向上喷射的#e#b柱形喷射#k#n，以及呈X形交叉喷射的#e#bX型喷射#k#n。", 4, 3004213, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n#b#e<改变火焰喷射方向>#n#k\r\n\r\n需要改变就来找我，改变结果将从下次安装起生效。#r配合环境调整方向#k，会更加有利于作战。", 4, 3004213, true, true)
            } else {
                cm.dispose()
            }
        }
    }
}

function action分支1_3(d, c, b, a) {
    if (status <= a++) {
        cm.dispose()
    }
}

function action分支2(e, d, c, a) {
    var b = cm.getNumberFromQuestInfo(100331, "power");
    var f = cm.getNumberFromQuestInfo(100331, "level");
    if (status <= a++) {
        if (f >= 3) {
            cm.sendNormalTalk("\r\n你已经通过安装卡彭韦伯，收集到#b#e" + b + "个#k#n火力信息了啊。不过你已经安装了最高等级的卡彭韦伯，无法再更新了。\r\n\r\n#r※ 每设置一次卡彭韦伯，斯皮萨兹就会收集1个火力信息。#k", 4, 3004213, false, true);
            cm.dispose()
        } else {
            if (b >= 7) {
                cm.askYesNo("\r\n你已经通过安装卡彭韦伯，收集到#b#e7个#k#n火力信息了啊。\r\n#e#r更新#k#n是没问题啦，但是能稍等我一会儿吗？\r\n", 4, 3004213)
            } else {
                cm.sendNormalTalk("\r\n你已经通过安装卡彭韦伯，收集到#b#e" + b + "个#k#n火力信息了啊。再有#e#r" + (7 - b) + "个#k#n就能更新了。\r\n\r\n#r※ 每设置一次卡彭韦伯，斯皮萨兹就会收集1个火力信息。#k", 4, 3004213, false, true);
                cm.dispose()
            }
        }
    } else {
        if (status === a++) {
            cm.teachSkill(80002813, f + 2, 4);
            cm.addNumberForQuestInfo(100331, "power", -7);
            cm.addNumberForQuestInfo(100331, "level", 1);
            if (f + 2 >= 4) {
                cm.sendNormalTalk("更新完毕！已经是最高等级的卡彭韦伯了啊。赶紧启动机器体验一下吧！", 4, 3004213, true, true)
            } else {
                cm.sendNormalTalk("更新完毕！还有一些需要更新的零件。你像之前那样设置并启动机器后，来告诉我一声。我会再更新一次。", 4, 3004213, true, true)
            }
        } else {
            if (status === a++) {
                cm.sendNormalTalk("交给我，你放心！快走吧，#h0#！", 4, 9062201, true, true)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
}

function action分支3(d, c, b, a) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100330.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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