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
            cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#我说，小老虎啊……", 36, 3001651, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#出什么事了？你感知到怪物的气息了吗？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#没错，不过这一次不是在冒险岛世界，\r\n而是在格兰蒂斯感觉到了。", 36, 3001651, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#格兰蒂斯啊……真是久违了呢。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("#face0##fc0xFF25f1ca#你愿意跟着我，追踪怪物的气息吗？", 36, 3001651, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（饕餮发挥了力量，只见周围亮了一下，\r\n就感觉像是被吸进了什么地方似的。）", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(39597, "40=h0;41=h0;42=h0;07=h0;43=h0;44=h0;45=h0;46=h0;37=h2;47=h1;38=h2;39=h2");
                                    cm.forceStartQuest(39565, "");
                                    cm.dispose();
                                    cm.warp(402000126, 0, false)
                                }
                            }
                        }
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
            cm.sendNormalTalk_Bottom("#face8#额……全都是垃圾嘛？", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face8#之前我也曾去一趟，可当时并不至于如此啊……\r\n村庄外面居然有个这样的垃圾场啊。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#哦，想起来了，可能会在这片垃圾场出现的怪物。", 36, 3001651, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#那是什么怪物？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#进去看看自然就知道了。", 36, 3001651, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face8#哈……好想赶紧离开这里啊，这地方跟我不搭。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(39565, "NpcSpeech=30016831");
                                    cm.updateInfoQuest(39565, "NpcSpeech=30016831;do=1");
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
            cm.sendNormalTalk_Bottom("#face0#这家伙……原来忍受不了肮脏啊？", 36, 3001651, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3#道士我啊生长在山清水秀的地方，\r\n这种地方与我委实不搭，真想赶紧离开这里。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face3#反正如果再感受到怪物的气息就叫我……", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                } else {
                    if (status === a++) {
                        cm.teachSkill(160000076, 9, 10);
                        cm.updateInfoQuest(39597, "40=h0;41=h0;42=h0;07=h0;43=h0;44=h0;45=h0;46=h0;37=h2;47=h0;38=h2;39=h2");
                        cm.forceCompleteQuest(39565);
                        cm.getTopMsgFont("<怪异封印>技能等级已提升。", 3, 20, 20, 0, 0);
                        cm.dispose()
                    }
                }
            }
        }
    }
};