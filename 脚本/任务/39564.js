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
            cm.sendNormalTalk_Bottom("#face10#那个，饕餮。我刚刚听说冒险岛世界有外星人出没，\r\n怎么样，有没有感觉到点什么？", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#啧啧……又要把时间浪费在无谓的事情上吗！？", 36, 3001651, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face11#又胡说，天底下哪有什么无用之事？\r\n正是昨日的那些鲁莽挑战才造就了今日我这个天才道士。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face9#总之我虎影一听说那地方有外星人就来感觉了！\r\n感觉那里好像有怪物。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#哼……随你的便好了，只不过……", 36, 3001651, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline_Bottom("#face0##fc0xFF25f1ca#你要是敢仗着抓怪物跑过去胡来，\r\n我绝不会饶恕你，懂了吗？", 36, 3001651, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face12#这怎么可能，饕餮？", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face10##fc0xFFbfbfbf#（……虽说想亲眼见一见外星人是首要原因，不过，\r\n那什么，搞不好还是会遇到怪物啊。）", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.updateInfoQuest(39597, "40=h0;41=h0;42=h0;07=h0;43=h0;44=h0;45=h0;46=h1;37=h2;38=h2;39=h2");
                                            cm.forceStartQuest(39564, "");
                                            cm.dispose();
                                            cm.warp(993160160, 0, false)
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
            cm.sendNormalTalk_Bottom("#face7#你怎么出来了？", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#……能感觉到。", 36, 3001651, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#这里……该不会真有怪物吧？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#唔……你小子的偷懒偶尔也能帮上忙啊。", 36, 3001651, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#这就是天才道士的直觉。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#这次就当运气不错吧。", 36, 3001651, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face5#好吧，看来时来运转了啊！那就乘胜追击，\r\n继续去找怪物吧？走吧，饕餮！", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(39564, "NpcSpeech=30016831");
                                        cm.updateInfoQuest(39564, "NpcSpeech=30016831;do=1");
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
                cm.sendNormalTalk_Bottom("#face0#那个叫白外星人司令的家伙……应该能靠这个让腰痛好起来吧？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#这毕竟是上了年纪才有的病，也是没办法啊。", 36, 3001651, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face12#你也腰痛吗？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#你又打算捉弄我饕餮吗！？", 36, 3001651, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face10#呵呵……但凡逗一逗就有反应，你可真是单纯啊！", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#唔……放肆无礼，饕餮我就先进去了，\r\n等找到了怪物再叫我。", 36, 3001651, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.teachSkill(160000076, 8, 10);
                                        cm.updateInfoQuest(39597, "40=h0;41=h0;42=h0;07=h0;43=h0;44=h0;45=h0;46=h0;37=h2;38=h2;39=h2");
                                        cm.forceCompleteQuest(39564);
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