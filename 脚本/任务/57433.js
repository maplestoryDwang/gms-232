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
            cm.sendNormalTalk_Bottom("#face0#我曾在雪原附近看到过这些你所要寻找的人。他们似乎正在准备进行什么仪式。不过，一想起他们盯着我看的眼神……就让我觉得不寒而栗。在他们之中，还有一些和你的着装打扮完全相同的黑衣人。", 37, 2020005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("难道说……是森兰丸？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#我不知道他们会在那里停留多长时间。不过我是刚刚才看到他们的，如果你跑得快一点，说不定还能找到什么线索呢。我这就帮你开启传送门，你直接用这个来移动就好。", 37, 2020005)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(57433, "");
                        cm.OnStartNavigation(211000000, 0, "in99", 0);
                        cm.dispose()
                    }
                }
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
            cm.askYesNo_Bottom("#face0#调查顺利结束了吗？", 37, 2020005)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(57433);
                cm.sendNormalTalk_Bottom("果不其然，这次的阴谋也和织田军有关。但和之前不同的是，这一次他们是运用法术阵对魔物们造成了间接的影响，所以魔物身上没有留下丝毫的痕迹。", 57, 0, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("啊，你是不是已经知道那些穿着黑色衣服、打扮得好像兔子一样的人究竟是什么来头了？他们似乎正和织田军的阴阳师一起在进行着仪式……", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#穿着黑色衣服，打扮得好像兔子一样的人！？这些人可是黑色之翼的手下啊。黑色之翼是个企图让暗黑魔法师复活的邪恶组织。难道是说，黑色之翼与织田军联手了？这下可糟糕了。", 37, 2020005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("看来，我也要尽快将这件事告诉给伙伴们知道才行。谢谢你给了我这么多的帮助。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#我才要感谢你呢。谢谢你帮忙解决了#b#m211000000##k的问题。如果遇到了什么我能帮上忙的事情，就随时过来找我吧。无论是什么事我都乐意帮忙。", 37, 2020005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(57433);
                                    cm.gainExp(8000);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};