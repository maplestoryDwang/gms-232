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
            cm.sendNormalTalk_Bottom("你找我有什么事吗？", 37, 9310034, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("请问，你能不能帮我制作面具呢？", 57, 9310034, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("凭我的手艺，没有做不了的东西！你想要什么样的面具？", 37, 9310034, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("那个……如果你能帮我制作一个帅哥脸型的面具，那就太好了。", 57, 9310034, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("嗯……你要这种面具做什么？居然要做人脸面具，而不是动物的面具。我可是第一次接到这种委托。你是不是想欺骗别人，所以才想做这种面具啊？", 37, 9310034, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我向你保证，我不是用来做坏事的！拜托你了。", 57, 9310034, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("嗯……既然你这么诚恳，那我就帮你做吧。", 37, 9310034, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("啊……不过还缺一种材料。藏经阁仓库里存放着柔软的皮革，不过全被散发银光的妖怪偷走了！", 37, 9310034, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("你若能从它们那里搜集到30个柔软皮革，我就能为你制作一个面具。你能做到吗？", 37, 9310034, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("(散发银光的话……那应该是被#o9600022#或#o9600024#偷走了吧。快前往藏经阁吧。)", 57, 9310034, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(62019, "");
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
            cm.sendNormalTalk_Bottom("真厉害，你居然把材料搜集来了。接下来就看看我的手艺吧！", 37, 9310034, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("……嗒嗒嗒嗒……", 37, 9310034, true, true);
                cm.gainItem(4034724, -30);
                cm.gainItem(4034664, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("……嗒嗒嗒嗒……", 37, 9310034, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("好了~大功告成。喜欢吗？以后有什么需要，你还可以来找我。", 37, 9310034, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("(这张脸真是太帅了。鬼怪看到的话，肯定会很开心的！返回#m701220350#吧。)", 57, 9310034, true, true)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 5);
                                cm.gainExp(Math.pow(cm.getLevel(), 3) / 5);
                                cm.forceCompleteQuest(62019);
                                cm.getTopMsgFont("去[秘密书库]和 鬼妖见面吧.", 3, 20, 20, 0);
                                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};