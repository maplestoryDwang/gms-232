var status = -1;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.askAcceptDecline("由我来说明让怪怪强化的一些方法吧。", 9330072)
        } else {
            if (status === a++) {
                cm.sendNext("有些可以让怪怪强化的方法唷。您可以在怪怪图鉴的强化分页上进行怪怪的强化。", 9330072)
            } else {
                if (status === a++) {
                    cm.sendNextPrev("#i3801010#\r\n请先把要进行强化的怪怪放在 Base 格。之后再配置用来强化的怪怪们。配置的数量能最少为 1只，最多为 4只。", 9330072)
                } else {
                    if (status === a++) {
                        cm.sendNextPrev("#i3801010#\r\n配置完成后点击强化按钮，要强化的目标就会得到其他怪怪们的力量了。强化最高能进行到 Lv5为止。", 9330072)
                    } else {
                        if (status === a++) {
                            cm.sendNextPrev("#i3801010#\r\n强化有可能会成功也有可能会失败，成功机率会依照强化用怪怪的阶级不同而有所变化。", 9330072)
                        } else {
                            if (status === a++) {
                                cm.sendNextPrev("#i3801010#\r\n我是觉得…更高等级的强化用怪怪应该会有比较好的强化机率吧？", 9330072)
                            } else {
                                if (status === a++) {
                                    cm.sendNextPrev("#i3801010#\r\n至于强化的顺序是依照配置强化用怪怪的顺序来进行，由左至右。在完成强化后，强化用怪怪们的力量会消失并回归自然。", 9330072)
                                } else {
                                    if (status === a++) {
                                        cm.sendNextPrev("#i3801010#\r\n若在得到所有强化用怪怪的力量前目标就抵达最高等级时，剩下的强化用怪怪则会回到图鉴中。", 9330072)
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