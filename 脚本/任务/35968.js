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
            cm.sendNormalTalk("（使用#i2630359#海螺之后，隐约听到了脚步声。）", 2, 1013410, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("找到了？大哥在哪？", 4, 1013441, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("在#b#m100051052##k。", 2, 1013410, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("走吧！最后一个人请其他人吃东西！！", 4, 1013441)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我第一！", 4, 1013441, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("哥哥，等等我！！", 4, 1013442, true, true)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(35950, "00=h1;10=h1;01=h0;02=h0;03=h0;04=h0;05=h0;06=h0;07=h0;08=h0;09=h0;27=h0;28=h0");
                                    cm.updateInfoQuest(35950, "00=h1;10=h0;01=h0;02=h0;03=h0;04=h0;05=h0;06=h0;07=h0;08=h0;09=h0;27=h0;28=h0");
                                    cm.updateInfoQuest(35950, "00=h1;10=h0;01=h0;11=h1;02=h0;03=h0;04=h0;05=h0;06=h0;07=h0;08=h0;09=h0;27=h0;28=h0");
                                    cm.updateInfoQuest(35950, "00=h1;10=h0;01=h0;11=h1;02=h0;12=h1;03=h0;04=h0;05=h0;06=h0;07=h0;08=h0;09=h0;27=h0;28=h0");
                                    cm.updateInfoQuest(35950, "00=h1;10=h0;01=h0;11=h1;02=h0;12=h1;03=h0;13=h1;04=h0;05=h0;06=h0;07=h0;08=h0;09=h0;27=h0;28=h0");
                                    cm.forceStartQuest(35968, "");
                                    cm.OnStartNavigation(100051052, 0, "west00", 35968);
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
            cm.sendNormalTalk("呵呵呵……", 4, 1013440, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("三兄弟终于全都找到了！", 2, 1013413, true, true)
            } else {
                if (status === a++) {
                    cm.spawnMobLimit(2300265, 1, 130, -626, 1);
                    cm.sendNormalTalk("#fs14##r#e又有一只愚蠢的飞蛾来自投罗网了……", 4, 1013440, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("（好的，快向南哈特报告吧。）", 2, 1013413, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("啊！哎呀！竟然装作没听见？！！", 4, 1013440, true, true)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                cm.sendNormalTalk("（使用#i2630358# #r#t2630358##k。）", 2, 1013413, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(35968);
                                    cm.updateInfoQuest(35950, "00=h1;10=h0;01=h0;11=h1;02=h0;12=h1;03=h0;13=h1;04=h0;14=h1;05=h0;06=h0;07=h0;08=h0;09=h0;27=h0;28=h0");
                                    cm.gainExp(713849);
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