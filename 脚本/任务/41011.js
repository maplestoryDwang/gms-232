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
            cm.forceStartQuest();
            cm.forceStartQuest(41011, "");
            cm.updateInfoQuest(41011, "");
            cm.gainItem(4033789, 1);
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
            cm.sendNormalTalk("人类，你还挺厉害的嘛。不过这里可是侏儒的地盘，如果你还敢侵犯我的地盘，我这个侏儒怪皇帝莱格斯绝对不会放过你的。", 0, 2411015, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("废话不说了，来~在这里签名吧。只要签了名，所有的一切就全都齐全了。来来，快点签名。", 2, 2411015, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("说什么呢，能不能说点听得懂的话啊，人类。即便是侏儒也不会随便签名的。这个，莫非是传说中的传销？！", 0, 2411015, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("在这里签名就会有好事情的！来吧来吧~快来签名吧，嗯？我这人性格比较急，等不了多久。", 2, 2411015, true, true);
                        cm.gainSkillBuff(100001264)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("不要！我作为侏儒怪皇帝，不会听从他人的命令。如果你还继续这么欺骗我，我就把你当做是敌人，要打你了。", 0, 2411015, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("其实你不会签名吧？你知道什么是签名吗？不知道吧？你会写自己的名字吗？", 2, 2411015, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("当然知道！我可是侏儒怪皇帝莱格斯，这么可能连那个也不知道！", 0, 2411015, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("唔~真的嘛？那么你就在这里写写看，那样我才会相信你。当然，你这种侏儒怪怎么可能会知道。", 2, 2411015, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("你，人类！不要污蔑侏儒。来，看吧。我能写自己的名字。", 0, 2411015, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.updateInfoQuest(41011, "NpcSpeech=24110151");
                                                cm.sendNormalTalk("哇~真的呀？我承认，你会写自己的名字。不过你依旧是个笨蛋？你已经在这里签名了？这可是哈夫林和侏儒的和平协议书哦。既然已经签名了就不能反悔咯。那么我先闪了~", 2, 2411015, true, true);
                                                cm.gainItem(4033789, -1);
                                                cm.gainItem(4033790, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("！！！", 0, 2411015, true, false)
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
            cm.gainExp(180000);
            cm.forceCompleteQuest(41011);
            cm.gainItem(4033790, -1);
            cm.gainItem(2001530, 20);
            cm.gainItem(4310085, 3);
            cm.dispose()
        }
    }
};