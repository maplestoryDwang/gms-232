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
            cm.askMenu("我怎么会在这里？你认识我吗？\r\n#b#L0#……你真的什么都记不清了吗？#l", 1, 2480004)
        } else {
            if (status === a++) {
                cm.askMenu("我什么都想不起来。这里到底是什么地方？我又是谁？我为什么会失去记忆？\r\n#b#L0#……#l", 1, 2480004)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(41369, "");
                    cm.forceStartQuest(41369, "");
                    cm.sendNormalTalk("求求你，帮助我。快去打听一下我是谁，一定要帮我找回记忆。", 0, 2480004, false, false)
                } else {
                    if (status === a++) {
                        cm.dispose()
                    }
                }
            }
        }
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
            cm.updateInfoQuest(41369, "NpcSpeech=24800001");
            cm.dispose()
        }
    }
}

function stage1(d, c, b) {
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
            cm.updateInfoQuest(41369, "NpcSpeech=24800001/24800012");
            cm.dispose()
        }
    }
}

function stage2(d, c, b) {
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
            cm.updateInfoQuest(41369, "NpcSpeech=24800001/24800012/24800023");
            cm.dispose()
        }
    }
}

function stage3(d, c, b) {
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
            cm.updateInfoQuest(41369, "NpcSpeech=24800001/24800012/24800023/24800034");
            cm.dispose()
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
            cm.sendNormalTalk("我给你的#r#t4033877##k不是失去记忆的药水，而是可以遮挡记忆的药水。#r卡奥#k肯定会再来找我的，我一定要多做些药水。", 0, 2480005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#r#t4033873##k和#r#t4033875##k有没有剩下的？", 4, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("是的，那是因为上一次你找来了很多材料，做了十来瓶……天啊，不不不……", 0, 2480005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……够了，你把每一种药水都去拿给#r他#k。", 4, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#r他#k是指……#r卡奥#k吗？", 0, 2480005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("是的，是那个愚蠢的家伙。即便他恢复了记忆跟你要#r#t4033877##k，你也千万不要给他。因为不能忍受才会抹去记忆？开什么玩笑。这小子明明是习惯性地逃避问题而已，他一直都是这样的。", 4, 2400005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("阿尔法……不要紧吧……？", 4, 2400006, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("有什么可要紧的，就当是我多管闲事吧。虽然我很讨厌参与这种事情，但我实在是看不下去了。", 4, 2400005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("阿尔法……", 4, 2400006, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("坚持一下就能坚持过去，忍一下就能忍过去，但是再怎么逃避也不会改变什么。如果真的想要改变，就不应该是抹去，而是要重新开始。所以，你！你也别再想着卖药水，你要去帮助他，让他能够重新振作。知道了吗？", 4, 2400005, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("啊？啊……", 0, 2480005, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.updateInfoQuest(41369, "");
                                                        cm.forceStartQuest(41369, "");
                                                        cm.forceCompleteQuest(41369);
                                                        cm.gainExp(19000000);
                                                        cm.gainItem(4310085, 30);
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
    }
};