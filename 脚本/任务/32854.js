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
            cm.sendNormalTalk_Bottom("音乐室空无一人，但是却传来了钢琴声？如果对这里的怪物进行调查，说不定能获得什么线索呢。", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("那么，辛苦你了。你在狩猎怪物的过程中，怪物身上肯定会掉落些什么的。", 37, 1530030)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("如果对怪物掉落的东西进行调查，应该会有所发现吧。\r\n#b（进入尘土地带，消灭怪物，搜集证物吧）#k ", 37, 1530030, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32854, "");
                        cm.updateInfoQuest(32720, "sms=141");
                        cm.updateInfoQuest(32719, "sms=0;gal=1;add=1");
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
            cm.sendNormalTalk_Bottom("找到证物了吗？搞什么啊，这是录音机？", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("啊哈哈，这里面录制了钢琴演奏曲啊！还不止有一两个，居然有这么多？\r\n肯定是有人在恶作剧。而且，那个人还费了很多心思。", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32854, "");
                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                    cm.forceCompleteQuest(32854);
                    cm.gainItem(4034173, -8);
                    cm.dispose()
                }
            }
        }
    }
};