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
            cm.sendNormalTalk_Bottom("#face0#这是典型的精神病患者症状。故意让墨水晕染开，好进一步刺激读信者的恐惧心理。", 37, 1530110, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("#face0#幸好信表面的贴纸上似乎留下了指纹。#h0#，你到科学室去把采集指纹所需的材料拿过来吧？", 37, 1530110)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#那就拜托你了。跟踪狂是所有女生的敌人！为了消灭跟踪狂！\r\n\r\n#b（前往科学室去找找奥兹所说的材料吧。）#k", 37, 1530110, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32765, "");
                        cm.dispose();
                        cm.warp(330001300, 0)
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
            cm.sendNormalTalk_Bottom("你来科学室做什么？这里也是出现怪物的地方呢。", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("威胁信？看来这学校还真是事故频发呢。", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32765, "");
                    cm.forceCompleteQuest(32765);
                    cm.dispose()
                }
            }
        }
    }
};