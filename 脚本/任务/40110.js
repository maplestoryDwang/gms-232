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
            cm.forceStartQuest(40110, "");
            cm.updateInfoQuest(40110, "");
            cm.dispose()
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40110.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.fieldEffect_PlayBGM("Bgm33.img/ShadowTemple", 0, 0);
                cm.sendNormalTalk("……是来找我的吗？……啊……看你手上的章，是来参加大会的选手啊……祝贺你。竟然把10只#p2430002#全都抓住了，奖品是……", 33, 2420000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b(……刚才那个非常期待的脸，是不是变得突然失望了？此前在接见室里见到的时候也是……他们好像对我们有别的什么要求。)", 41, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#p2420000#宰相大人……是不是想跟我们要什么东西？", 41, 2400006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face0# #b(闯祸了！)", 41, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("想要……什么吗？是啊……我也不知道要什么，但是我比看起来更上年纪了。在阿里特安生活了很久了，但不是因为我喜欢这里。", 33, 2420000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我在这里活下去……是因为我感觉我#b等待的那位#k总有一天会来到阿里特安。成为宰相，也是为了等到了那位之后，不要让自己惭愧……。", 33, 2420000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("……但是再怎么等下去，却一直等不到那位。我已经被遗忘了也说不定呢。根本就没有人在找我……只是我一个人在愚蠢地等着。", 33, 2420000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("不会是那样的。", 41, 2400006, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("谢谢你这么安慰我。实际上我以为两位就是我所等待的那位……但是能得到两位的安慰，我也感觉好多了。", 33, 2420000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#face5#如果你能告诉我等待的是什么人，也许我们能帮助你。因为我们也经常旅行……", 41, 2400005, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("不，没关系。如果那位不过来找我，就没有任何意义了。非常感谢两位的关心，我感觉和两位更加亲近了。", 33, 2420000, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("来，我给两位抓蝎子大会的奖励。希望两位能有辉煌的未来。", 33, 2420000, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("#b(一开始就感觉很奇怪。不知道是不是因为听了#p2420018#的话……感觉他不像是个人类。)", 41, 2400005, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("#b(总感觉这人并不陌生，好像认识了很久一样。)", 41, 2400006, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceCompleteQuest(40110);
                                                                        cm.forceCompleteQuest(40913);
                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                        cm.gainExp(2406000);
                                                                        cm.gainItem(4310085, 10);
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
            }
        }
    }
};