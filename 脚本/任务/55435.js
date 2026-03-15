var status = -1;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.askAcceptDecline("由我来说明另一种让怪怪变得更强的方法吧。", 9330072)
        } else {
            if (status === a++) {
                cm.sendNext("怪怪不只能强化，也可以进化呢。透过怪怪图鉴上的进化分页就可以进行进化。", 9330072)
            } else {
                if (status === a++) {
                    cm.sendNextPrev("#i3801011#\r\n怪怪们可以进行进化。但是在进化前，必须确认目标怪怪已经抵达 Lv5 (最大等级)。", 9330072)
                } else {
                    if (status === a++) {
                        cm.sendNextPrev("#i3801011#\r\n先把Lv5的怪怪放在上方的 Base 栏后，再把相同阶级的怪怪材料配置在下方的 Material 栏上，点击进化按钮即可。", 9330072)
                    } else {
                        if (status === a++) {
                            cm.sendNextPrev("#i3801011#\r\n进化是无条件成功，做为进化用材料的怪怪也会因失去力量而回归自然。", 9330072)
                        } else {
                            if (status === a++) {
                                cm.sendNextPrev("进行进化的怪怪是会提升阶级，阶级从低到高分为C级、B级、A级、S级与SS级。", 9330072)
                            } else {
                                if (status == a++) {
                                    cm.forceStartQuest();
                                    cm.forceCompleteQuest();
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.dispose()
        }
    }
};