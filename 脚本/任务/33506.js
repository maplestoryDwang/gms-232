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
            cm.askMenu_Bottom("啊，正好那些家伙出现了。去吧！无情地敲打吧！\r\n#b(接受后，进入狩猎场。) \r\n#L0#准备好了，出发吧。\r\n#L1#等一下，还不行。#l", 37, 1530030)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("GOGOGO！", 37, 1530030, false, true)
            } else {
                if (status === a++) {
                    cm.playerMessage(5, "必须消灭区域内所有的怪物才能移动至下一个区域。");
                    cm.dispose();
                    cm.openNpc("副本_好友故事_Act6_寻找戴米安")
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
            cm.sendNormalTalk_Bottom("你问怎么弹？", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("就像弹吉他一样弹就……嗯？你不会弹吉他？虽然你不会，但是吉他是打击乐器啊。只要随便拨弄两下就会出声音的。", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("吉他是弦乐器……", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我都说了不要在意细节。因为它是用魔法制成的物品，所以就算你随便弹也不会疼的。不要担心，随便拨两下就行。", 37, 1530030, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(33505);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};