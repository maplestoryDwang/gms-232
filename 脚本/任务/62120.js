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
            cm.sendNormalTalk_Bottom("不知道你有没有听说过#o9600318#？", 37, 9310533, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我只知道它比其他僵尸更大、力量更强，可最近又有了关于它的最新情报。#o9600318#是一个完全有别于其他僵尸的品种……", 37, 9310533, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("首先，它的关节比其他僵尸更加柔软，还能模仿人类说话。\r\n而且，它还能召唤鬼火，生成旋风、它会武功。因此有人推断，这些僵尸是不是由从前的武林高手的尸体转变而来的。", 37, 9310533, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("由于到处都在流传着这个说法，因此有人担心#o9600318#会不会穿过九曲桥。", 37, 9310533, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("因此我们决定去扫荡#o9600318#！\r\n可以我们的力量，完全敌不过它……\r\n所以我想到了#h0#你。你是我所知道的最厉害的人了。", 37, 9310533, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo_Bottom("你……能不能帮帮我们？", 37, 9310533)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(62120, "");
                                    cm.sendNormalTalk_Bottom("真是太感谢你了！#o9600318#会在外滩的#m701103030#中出没。\r\n不过好在#o9600318#的数量比其他僵尸要少得多。还有，他们并不是一直都待在那里的，而是会像鬼一样突然出现。", 37, 9310533, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("你去消灭5只#o9600318#吧。我会等你回来的。", 37, 9310533, true, false);
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
            cm.sendNormalTalk_Bottom("真的是太感谢你了！这是居民们的一点心意，请务必收下！", 37, 9310533, false, true)
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};