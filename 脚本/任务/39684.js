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
            cm.sendNormalTalk_Bottom("#face0#事情紧急，我就省略那些繁文缛节了。\r\n此书信写给愿出力帮助诺巴的各位勇士。", 36, 3000001, false, true, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#诺巴一直在为收复首都而战，如今，决战的时机已经到来。\r\n请各位强大的勇士助我们一臂之力。\r\n\r\n #r ※ 自动转至任务地图。#k", 36, 3000001, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#fc0xFFbfbfbf#(有那么多人在受苦，我不能坐视不管。\r\n眼见不义却袖手旁观的话，就失去了身为骑士的资格。)", 56, 0, false, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#fc0xFFbfbfbf#(既然向我求助了，我就要帮助他们。\r\n他们也曾相信了身为高等翼人的我，给过我帮助。)", 56, 0, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#你去找赫里希安反攻总部的贝尔德，他会向你说明详细情况。\r\n我马上送你去万神殿。", 36, 3000001, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(39684, "");
                                cm.dispose();
                                cm.warp(400000000, 0, false)
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39684.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#我听说了你的事情。尽管我依然无法信任你，\r\n但既然是狼牙的委托，就交给你去试试吧。", 36, 3000002, false, true, 1)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(39684);
                cm.dispose()
            }
        }
    }
};