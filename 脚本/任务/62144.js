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
            cm.sendNormalTalk_Bottom("嗯，很好，相当好！在红豆粥中加入由我特制的这种粉末……那就变成了#t2270041:#。", 37, 9310540, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("现在，你拿着这#t2270041:#前往#m701103010#，泼洒在#o9600315#身上吧。\r\n如果在#o9600315#体力充沛的情况下使用，可能效果不是很理想，最好先使其体力降低至30%以下，再泼洒#t2270041:#。", 37, 9310540, true, true);
                cm.gainItem(4034643, -10);
                cm.gainItem(2270041, 10)
            } else {
                if (status === a++) {
                    cm.askMenu_Bottom("那样一来，#o9600315#肯定就会逃跑的！你能做到吧？\r\n#b(……居然要使其体力降至30%以下……难道它不会在受到攻击后逃走吗……)\r\n#L0#先按照要求做吧#l \r\n#L1#明显是忽悠人的，别理他。#l", 37, 9310540)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(62144, "");
                        cm.sendNormalTalk_Bottom("很好，请你把这#t4034643:#泼洒在10只#o9600315#身上，赶走它们吧。", 37, 9310540, false, false)
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
            cm.sendNormalTalk_Bottom("哦哦，你终于回来了啊！怎么样了？#o9600315#逃走了吧？", 37, 9310540, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(62144);
                cm.updateInfoQuest(62144, "chk=1");
                cm.addNumberForQuestInfo(62109, "yuyuanPoint", 3);
                cm.sendNormalTalk_Bottom("嗯……看来……它们的确对#t2270041:#产生了抵抗力啊……看来只能用那个方法了……", 37, 9310540, true, false)
            } else {
                if (status === a++) {
                    cm.addNumberForQuestInfo(62109, "yuyuanPoint", 2);
                    cm.dispose()
                }
            }
        }
    }
};