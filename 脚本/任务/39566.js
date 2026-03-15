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
                    cm.updateInfoQuest(39597, "40=h0;41=h0;42=h0;07=h0;43=h0;44=h0;45=h0;46=h0;37=h2;47=h0;38=h2;48=h1;39=h2");
                    cm.forceStartQuest(39566, "");
                    cm.dispose();
                    cm.warp(410000113, 4, false)
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
            cm.sendNormalTalk_Bottom("#face0#我能感觉到前面有股怪物的气息。", 36, 3001651, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#唔，呜呜……", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#这算哪门子怪事，也太突然了吧！？", 36, 3001651, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#我说呢，难怪感觉附近有股和我相似的味道。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#哈哈，难道是错觉吗……", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#别废话了，赶紧去抓怪物吧。", 36, 3001651, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face12#喳~喳~小的知道了。", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(39566, "NpcSpeech=30016831");
                                        cm.updateInfoQuest(39566, "NpcSpeech=30016831;do=1");
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
                cm.sendNormalTalk_Bottom("#face12#这次的事也由我这个出色的道士解决了。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#这样摆谱的样子怕是很快也看不到了吧。", 36, 3001651, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#什么？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#现在就剩下一只怪物了。", 36, 3001651, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#嗯……反正我饕餮这就回去了，\r\n等找到了怪物再叫我。", 36, 3001651, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（……到最后了，还有点可惜呢！）", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.teachSkill(160000076, 10, 10);
                                        cm.updateInfoQuest(39597, "40=h0;41=h0;42=h0;07=h0;43=h0;44=h0;45=h0;46=h0;37=h2;47=h0;38=h2;48=h0;39=h2");
                                        cm.forceCompleteQuest(39566);
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
    }
};