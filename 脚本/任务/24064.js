var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("抽泣，虽然#p1033101#很想和你一起去，但是我还没有多少力气。跟着你的话，会妨碍到你的。现在我想重新修炼。双弩精灵？要是我在这种情况下妨碍你的话，#p1033100#哥哥一定会骂我的。", 0, 1033101, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我会先留在村子里，努力恢复力量。我决心不妨碍你的修炼！不过#b你也必须努力修炼，让其他人快点醒来哦#k！", 0, 1033101, true, false)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("双弩精灵……", 0, 1033102, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#p1033102#！你的身体没事吧？！", 2, 1033102, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("是的，还好我这个老太婆没什么不舒服的地方，我很健康。虽然力量变弱了，但是没问题。", 0, 1033102, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("啊……太好了。#p1033100#和#p1033101#全都很结实，但是我很担心#p1033102#你。", 2, 1033102, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("多谢国王陛下的担心，我没事。呵呵呵……国王陛下一个人先醒过来，一定经历了不少事情吧？\r\n", 0, 1033102, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("嗯，但是没遇到什么困难。", 2, 1033102, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askAcceptDecline("你小小年纪就登上了王位，甚至还见过黑魔法师，你历经的苦难让你看起来成熟稳重…………看来磨练使人成长这句话果真没错啊。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 2000 exp", 0, 1033102)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(24064, "");
                                                cm.forceCompleteQuest(24064);
                                                cm.dispose()
                                            } else {
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
}

function end(c, b, a) {
    cm.dispose()
};