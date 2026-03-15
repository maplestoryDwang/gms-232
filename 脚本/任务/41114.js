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
            cm.forceStartQuest(41114, "");
            cm.updateInfoQuest(41114, "");
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
            cm.sendNormalTalk("你是来咨询的吗？让我看看……你这脸，估计要花不少钱了？一只眼睛要割个双眼皮，还要把鼻子垫高，再刮个下巴什么的话……", 1, 2430010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我天生丽质，哪有什么地方要整容啊！真正苦恼的人是娜塔……不，是个匿名的女性。如果让你动手术，你打算怎么整容？", 3, 2430010, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("想要变美，还要犹豫什么。只要经过我的手，谁都能像那个南部沙漠国度的精灵王妃#r阿烈达#k一样美如天仙。", 0, 2430010, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(41114, "NpcSpeech=24300101");
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function stage1(d, c, b) {
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
            cm.sendNormalTalk("想要变美并不难。只要投入一些金钱和时间，任何人都能成为美女。", 1, 2430011, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("价格先不说，如果让你动手术，你会怎么整容？", 3, 2430011, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我比较喜欢威严型的美女。据说，有个貌美的女王独自守护被灭亡的王国……好像叫什么#r血腥女王#k？", 0, 2430011, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(41114, "NpcSpeech=24300101/24300112");
                        cm.dispose()
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
            cm.askMenu("咨询得怎么样了？你觉得哪个更适合我，你给我推荐一下。\r\n#b#L0#差不多医生#l\r\n#b#L1#黛玛院长#l", 0, 2430018)
        } else {
            if (status === a++) {
                if (selectionLog[1] == 0) {
                    cm.sendNormalTalk("差不多医生说，可以把你变成南部沙漠之国的精灵王妃阿烈达那样。", 2, 2430018, false, true)
                } else {
                    cm.sendNormalTalk("黛玛院长说，可以把你变成威严的血腥女王那样。", 2, 2430018, false, true)
                }
            } else {
                if (status === a++) {
                    if (selectionLog[1] == 0) {
                        cm.sendNormalTalk("天呐，精灵王妃阿烈达啊？听听名字都感觉很美丽。如果是精灵的话，肯定长得非常漂亮。那好，我就在差不多医生那做整容手术吧。", 0, 2430018, true, true)
                    } else {
                        cm.sendNormalTalk("天呐，血腥女王啊？听听名字都感觉很威严。如果是女王的话，肯定长得非常漂亮。那好，我就在差不多医生那做整容手术吧。", 0, 2430018, true, true)
                    }
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(41114);
                        cm.gainExp(900000);
                        cm.gainItem(4310085, 8);
                        cm.dispose()
                    }
                }
            }
        }
    }
};