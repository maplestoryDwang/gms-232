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
            cm.sendNormalTalk_Bottom("啊！好了。不过，这样本怎么跟我想象中的不一样呢，我还以为上面应该会散发出黑暗气息……", 37, 9310535, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("哈哈，不过，我能看出啥名堂来呢？嗯，还是得对样本进行一下分析才行。\r\n你能否去找豫园的医生#p9310541#，并把#t4034647:#带来呢？", 37, 9310535)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#p9310541#在里面那栋有着整形外科和美容院的建筑里。", 37, 9310535, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(62135, "");
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
            cm.sendNormalTalk_Bottom("你有什么事吗~？", 37, 9310541, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("啊……所以你要我分析这个样本啊？哎，我的眼睛看不太清呢……\r\n算了，我还是先看看吧，你稍等一下。", 37, 9310541, true, true);
                cm.gainItem(4034644, -1);
                cm.gainItem(4034645, -1);
                cm.gainItem(4034646, -1)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(62135);
                    cm.updateInfoQuest(62135, "chk=1");
                    cm.addNumberForQuestInfo(62109, "yuyuanPoint", 3);
                    cm.dispose()
                }
            }
        }
    }
};