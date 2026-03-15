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
            cm.askAcceptDecline_Bottom("#face0##fc0xFFbfbfbf#（饕餮再次叫了我，说是感觉到那里有怪物的气息……\r\n去饕餮指引的地方看看吧？）", 36, 3001674 + cm.getPlayer().getGender(), 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（饕餮发挥了力量，只见周围亮了一下，\r\n就感觉像是被吸进了什么地方似的。）", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(39597, "40=h0;41=h1;07=h0");
                    cm.forceStartQuest(39559, "");
                    cm.dispose();
                    cm.warp(993160152, 0, false)
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
            cm.sendNormalTalk_Bottom("#face0#僵尸蘑菇王似乎应该还有其他弱点，\r\n你记不记得有什么？", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#唔……就算是我，也不能完全看穿那些家伙的弱点，\r\n只不过我还记得那家伙……", 36, 3001651, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（饕餮记得的只有一件事，\r\n那就是符咒怪一定只会在暗处出现。）", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face7#那点亮这个洞穴后会怎么样呢……\r\n好吧，我想起一个能用来一试的法子。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face11##fc0xFFbfbfbf#（我想起曾在那家伙的巢穴里看到烧到一半的蜡烛，\r\n应该可以用那个点亮巢穴。）", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face10#还是值得一试的，快走吧。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(39559, "NpcSpeech=30016831");
                                    cm.updateInfoQuest(39559, "NpcSpeech=30016831;do=1");
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
            cm.sendNormalTalk_Bottom("#face0#完成回收。", 36, 3001651, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face5#我虎影又干成了一票大的。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#照亮洞穴、削弱那个家伙的战术，值得表扬啊。", 36, 3001651, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face5#这么说现在你也要认可我了吗？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#不，不是这样的，不过……", 36, 3001651, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face12#有什么好不好意思的，只要你找到了怪物的气息，随时都可以叫我，\r\n我虎影会帮你解决的！", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.teachSkill(160000076, 3, 10);
                                    cm.updateInfoQuest(39597, "40=h0;41=h0;07=h0;37=h2;38=h2;39=h2");
                                    cm.forceCompleteQuest(39559);
                                    cm.getTopMsgFont("<怪异封印>技能等级已提升。", 3, 20, 20, 0, 0);
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