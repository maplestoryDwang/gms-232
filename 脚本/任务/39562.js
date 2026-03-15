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
                    cm.updateInfoQuest(39597, "40=h0;41=h0;42=h0;43=h0;07=h0;44=h1;37=h2;38=h2;39=h2");
                    cm.forceStartQuest(39562, "");
                    cm.dispose();
                    cm.warp(250010503, 0, false)
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
            cm.sendNormalTalk_Bottom("#face7#这里的气氛和我之前生活的道观差不多哎！\r\n冒险岛世界居然也有这种地方，倒是让人有点想家了呢。", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#没时间在这里耗了，赶紧进去看看。", 36, 3001651, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face3#机会难得，我还想要好好沉浸在思考里享受一下，居然连这点时间都没有……\r\n哎……世道实在是险恶啊。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#别开玩笑了，\r\n我能感觉到空间那头相当强大的精气，还是小心为妙。", 36, 3001651, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face5#越是如此就越要有胆识，这便是我这个道士的方式，\r\n那这就进去看看吧，觉悟吧，怪物！", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(39562, "NpcSpeech=30016831");
                                cm.updateInfoQuest(39562, "NpcSpeech=30016831;do=1");
                                cm.dispose()
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
                cm.sendNormalTalk_Bottom("#face5#这家伙精气旺盛，不要放松警惕……真是个有趣的家伙。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#这家伙虽然有些恶趣味，但还是挺纯真的，\r\n能够自然而然地回归魂魄，看样子还挺开心。", 36, 3001651, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face12#哎……这场对决相当精彩，要是你再次找到怪物的气息，记得叫我，\r\n我虎影会出面解决的！", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.teachSkill(160000076, 6, 10);
                            cm.updateInfoQuest(39597, "40=h0;41=h0;42=h0;43=h0;07=h0;44=h0;37=h2;38=h2;39=h2");
                            cm.forceCompleteQuest(39562);
                            cm.getTopMsgFont("<怪异封印>技能等级已提升。", 3, 20, 20, 0, 0);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};