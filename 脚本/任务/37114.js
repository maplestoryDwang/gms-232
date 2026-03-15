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
            cm.sendNormalTalk_Bottom("#face0#这是谁？正义使者黑鸦吗？", 36, 3004016, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#这是怎么回事？\r\n你是闲的无聊了，所以心里痒痒，就想欺负那群和我们一样天真可怜的恶人吗？", 36, 3004016, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我虽然是为其他事而来……但按你所说的去做应该也不错。", 36, 3004000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#……", 36, 3004016, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#别轻举妄动，走开。\r\n我正在考虑要不要把你们抓去当作大会商品呢。", 36, 3004016, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#恨你恨得牙痒痒的家伙\r\n可不是一两个，这你是知道的吧？", 36, 3004016, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("你到底做什么去了？", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#嗯？没什么。\r\n这家伙趁我们不注意，偷偷把我们非法捕获的动物栅栏给打开了。\r\n他还发现了我们收集的赃物，并返还给了主人。", 36, 3004000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#你不是把我们好不容易抓到的家伙也给放了嘛！！！\r\n你知道我们的人为了抓那家伙费了多大力气吗？", 36, 3004016, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#没错，是有那回事。\r\n真遗憾。我本来打算让一名#b强大选手#k参赛来着。", 36, 3004000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#什么？是你带回来的那家伙吗？", 36, 3004016, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("嗯？！（嘀嘀咕咕）我可没说过那话啊！", 56, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#（嘀嘀咕咕）要找回东西，这也是没办法了。\r\n他们应该是不会拱手相让的。", 36, 3004000, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#那家伙长相特别，很受关注，但……\r\n嗯……看上去也不是很强…… \r\n", 36, 3004016, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#要不要让你瞧瞧有多强？", 36, 3004000, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#去#b危险的斗战俱乐部1#k挑战吧！\r\n要是你能毫发无损地回来，我就承认你的实力。", 36, 3004016, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#去吧。我会留意周围情况的。", 36, 3004000, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.askAcceptDecline_Bottom("#face0#去#b危险的斗战俱乐部1#k挑战吧！\r\n要是你能毫发无损地回来，我就承认你的实力。\r\n\r\n#b（接受时，立刻前往区域。）", 36, 3004016)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.updateInfoQuest(37100, "40=h1;31=h0;41=h1;50=h1;32=h0;42=h0;51=h1;33=h1;52=h1;dir=off;53=h0;35=h1;36=h1;37=h1;47=h1;38=h1;39=h1");
                                                                                    cm.forceStartQuest(37114, "");
                                                                                    cm.dispose();
                                                                                    cm.warp(402000312, 0)
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
            cm.sendNormalTalk_Bottom("#face0#长时间战斗让大家都疲惫不堪，瘫成一堆烂泥了呀！", 36, 3004016, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(28462236);
                cm.forceCompleteQuest(37114);
                cm.dispose()
            }
        }
    }
};