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
            cm.sendNormalTalk_Bottom("那我就将这约会劵交给最后的优胜者#h0#同学！", 37, 1530511, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("等下，不是给我，而是给这个转校生？", 37, 1530210, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("很遗憾，你答对了11个问题。答对所有12个问题的，只有#h0#学生。", 37, 1530511, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("……怎么会这样，我绝不能容忍！转校生不是爱白会会员，所以比赛结果无效。约会劵就由位于第二名的我获得！", 37, 1530210, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("姐姐，你应该大方地接受比赛结果才对啊。", 37, 1530300, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("没错。请承认失败吧。", 37, 1530310, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("你们这些家伙……居然不帮我？", 37, 1530210, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("姐姐，你是不是太贪得无厌了？", 37, 1530300, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("会长就可以随心所欲了？", 37, 1530310, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#b（好可怕。在爱情面前，友情也会瓦解吗……）#k", 56, 1530511, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(33021, "");
                                                    cm.sendNormalTalk_Bottom("大家停止，不要说了！", 37, 1530070, true, false)
                                                } else {
                                                    if (status === a++) {
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
            cm.sendNormalTalk_Bottom("为了一日约会劵，你们就要毁掉自己的友情吗？我有个对大家都好的解决方案。", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("对大家都好的解决方案？", 37, 1530256, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("阿白实习老师只说他能抽出一天的空，但没说只能见一个人啊。", 37, 1530070, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("阿白实习老师是大家的……事己至此，不如大家一起去和阿白实习老师约会吧。", 37, 1530070, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("原来如此……学生会长果然是天才！", 37, 1530256, true, true);
                            cm.effect_NormalSpeechBalloon("...!!!!!!!", 0, 0, 0, 2000, 1530258, cm.getPlayer().getId())
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("真不愧是学生会长！乌贼中最帅的学生会长！？", 37, 1530256, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("我不是乌贼……", 37, 1530070, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("等等，大家都去的话，那还算什么约会啊？", 37, 1530210, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("这比把约会劵交给随随便便的人要好吧。阿白实习老师是大家的！向教务室出发！", 37, 1530256, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.dispose();
                                                cm.warp(330002507, 0)
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