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
            cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#喂，小鬼！", 36, 3001651, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face12#咳咳，到底有何事，要叫我这个事务繁忙的道士！？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#这个杀千刀的家伙……\r\n总之我感知到了怪物的气息。", 36, 3001651, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face10#哦，是这样吗……\r\n那就让我难得发挥一下实力吧？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("#face0##fc0xFF25f1ca#你这是在捉弄长辈吗！？\r\n还是赶紧去怪物所在的地方看看吧。", 36, 3001651, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#能够感受到气息的地方是潮湿的沼泽，\r\n来，随我来吧。", 36, 3001651, false, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(39597, "40=h1;07=h0");
                                    cm.forceStartQuest(39558, "");
                                    cm.dispose();
                                    cm.warp(103030200, 4, false)
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
            cm.sendNormalTalk_Bottom("#face7#那是什么！？", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#这是因怪物的气息而扭曲的空间，\r\n那家伙从我肚子里出来的时间太久了，才会变成这样的。", 36, 3001651, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#因为那不是怪物该待的地方啊……有危险吗？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#目前为止还好，不过最好还是不要久留，\r\n若是打倒那里面的怪物，扭曲也会消失的。", 36, 3001651, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face10#好吧，很简单嘛。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#那就进扭曲里面看看。", 36, 3001651, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(39558, "NpcSpeech=30016831;do=1");
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
                cm.sendNormalTalk_Bottom("#face0#这次抓到的家伙是鳄鱼鸟怪，\r\n到底有多少怪东西钻进了你的肚子？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#还有不少怪物呢。", 36, 3001651, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face12#这肚子可真是神奇……你该不会偶尔还从那里掏东西出来吃吧？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#你又在调戏大人吗！？", 36, 3001651, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face10#嘻嘻……我岂敢如此？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#唔……真是个讨厌的小鬼，我累了，就先进去了，\r\n要是找到怪物了再叫我。", 36, 3001651, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.teachSkill(160000076, 2, 10);
                                        cm.updateInfoQuest(39597, "40=h0;07=h0");
                                        cm.forceCompleteQuest(39558);
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