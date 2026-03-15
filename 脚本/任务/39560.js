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
                    cm.updateInfoQuest(39597, "40=h0;41=h0;42=h1;07=h0;37=h2;38=h2;39=h2");
                    cm.forceStartQuest(39560, "");
                    cm.dispose();
                    cm.warp(993160154, 0, false)
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
            cm.sendNormalTalk_Bottom("#face0#仙人掌被沙怪附身了，\r\n那家伙现在相当矛盾，既喜欢炽热的沙漠，又不能离开水。", 36, 3001651, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#难道就没什么特别的攻略吗？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#除了在有水的地方出现过之外便没有其他踪迹了，\r\n一旦发现就削弱那家伙，这样就行了。", 36, 3001651, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face11#好吧，知道了。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（从周围的仙人掌处获得了水，\r\n用这个来引诱那个怪物就可以了吧？）", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face5#准备就绪，去怪物所在的空间看看吧。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(39560, "NpcSpeech=30016831");
                                    cm.updateInfoQuest(39560, "NpcSpeech=30016831;do=1");
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
                cm.sendNormalTalk_Bottom("#face12#我虎影的名声很快也会传遍这座村庄，\r\n哎……人气太大也叫人头痛呢！", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#哼！谁会对你这种冒冒失失的……", 36, 3001651, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face10#我看你是一点都不懂呢，这种可都是出人意料的魅力。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#啧啧……就知道耍嘴皮子。", 36, 3001651, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face5#这也是我的魅力之一，那什么，只要你找到了怪物的气息，随时都可以叫我，\r\n我虎影都会统统解决。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.teachSkill(160000076, 4, 10);
                                    cm.updateInfoQuest(39597, "40=h0;41=h0;42=h0;07=h0;37=h2;38=h2;39=h2");
                                    cm.forceCompleteQuest(39560);
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