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
                    cm.updateInfoQuest(39597, "40=h0;41=h0;42=h0;43=h1;07=h0;37=h2;38=h2;39=h2");
                    cm.forceStartQuest(39561, "");
                    cm.dispose();
                    cm.warp(211040300, 0, false)
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
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（刚一靠近那个看起来像是入口的地方，就感受到了一阵非同寻常的震动，\r\n那里面到底会有什么样的怪物？）", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#在雪原看到的怪物啊……我倒是想起来一个家伙。", 36, 3001651, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#那到底是什么家伙？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#就是狼怪，虽说是狼却并不残暴，不知道这算不算是种特征呢。\r\n因为天生胆小，总是会躲在强者背后。", 36, 3001651, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#为了拿下狼怪，必须先削弱其他家伙，\r\n再伺机发起攻击。", 36, 3001651, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face5#尽管交给我吧，我这就进去看看。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(39561, "NpcSpeech=30016831");
                                    cm.updateInfoQuest(39561, "NpcSpeech=30016831;do=1");
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
                cm.sendNormalTalk_Bottom("#face7#一只有气无力的困兽啊……我可千万不能沦落到那副田地，\r\n说起来，这地方也相当厉害，完全不亚于别处吧？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#厉害，什么意思？", 36, 3001651, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face7#我曾生活过的仙游山山脚并没有这样的地方，\r\n能来到如此白雪皑皑的雪原，实在是很神奇啊……", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#你这是仗着自己来自穷乡僻壤吗？", 36, 3001651, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face5#饕餮你……想不想尝尝乡下雪球什么滋味啊！？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（就这样，我和饕餮打了许久雪仗，\r\n那家伙和我都咬牙坚持、不肯认输，最终也没有分出胜负。）", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face10#哈……挺厉害嘛。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#倒是你小子还挺厉害的嘛。", 36, 3001651, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#唔……好久没动真格的了，还挺累的，我这就回去了。\r\n等找到怪物了再叫我。", 36, 3001651, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.teachSkill(160000076, 5, 10);
                                                    cm.updateInfoQuest(39597, "40=h0;41=h0;42=h0;43=h0;07=h0;37=h2;38=h2;39=h2");
                                                    cm.forceCompleteQuest(39561);
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
            }
        }
    }
};