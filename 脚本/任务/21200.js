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
            cm.askAcceptDecline("修炼进展得如何？哟，等级升得这么高了？难怪人们都说济州岛是养马的天堂，金银岛是升级的天堂……对了，现在还不是说闲话的时候。能否麻烦你回岛上来一趟？", 0, 1201000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b保管在#m140000000##k的你的#b#p1201001##k突然出现了奇怪的反应。据说长矛在呼唤自己主人的时候才会发出那样的反应。#b也许有什么事情要转达给你？#k请速回岛上一趟吧。", 0, 1201000, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(21200, "");
                    cm.dispose();
                    cm.warp(140000000, 0, false)
                }
            }
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21200.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("嗡嗡嗡嗡嗡……", 4, 1201001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b（#p1201001#在发出嗡鸣声。奇怪，那边的少年是谁？）#k", 2, 1201002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b（以前没见过他啊？怎么看起来不太像人类？）#k", 2, 1201002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("喂！战神！还听不见我的声音吗？到底听不听得见？唉，烦死了！", 8, 1201002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b（咦？这是谁的声音？怎么听起来像个凶巴巴的少年……）#k", 2, 1201002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("唉……哪有这样的主人啊？丢开武器在冰窟里睡了几百年，现在连话都听不懂了……", 8, 1201002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("你是谁啊？", 2, 1201002, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("啊，战神？现在听到我的声音了？是我啊，不记得我了？我就是武器#b长矛 #p1201002##k啊？", 8, 1201002, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#b（……#p1201002#？#p1201001#会说话？）#k", 2, 1201002, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("不至于吧？这么吃惊？再怎么失忆，总不能连我都忘了吧？太不够意思了！", 8, 1201002, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("不好意思，真的一点都想不起来。", 2, 1201002, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.askYesNo("说声不好意思就能算了？！几百年来就我一个人孤苦伶仃地，有多寂寞你知道吗？不管怎样，你快点给我想起来！", 0, 1201002)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceStartQuest(21200, "");
                                                            cm.forceCompleteQuest(21200);
                                                            cm.sendNormalTalk("#b（一口一个自己是#p1201001#、#p1201002#的，还越说越生气了。再这么说下去也不会有啥进展，还是先走到 #p1201000#跟前，好好商量商量。）#k", 3, 1201002, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.eventSKill(0);
                                                                cm.setStandAloneMode(true);
                                                                cm.dispose();
                                                                cm.warp(914090200, 0, false)
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