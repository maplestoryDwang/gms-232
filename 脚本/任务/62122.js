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
            cm.askMenu_Bottom("这可怎么办啊……\r\n\r\n#b#L0#询问遇到了什么问题。#l \r\n#L1#装作没听见，径自走开。#l", 37, 9310536)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你遇到什么事了？", 57, 0, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("哎，最近居民们好像都非常疲惫，我想为他们制作一些特别食品，可食材十分缺乏。", 37, 9310536, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("啊！你有时间的话，能不能帮我搜集#i4009361:##t4009361#？从上次的表现来看，你的狩猎本领还不赖！这次你要是也肯帮我搜集材料的话，我就会让你品尝一下我做的特别食品。", 37, 9310536)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(62122, "");
                            cm.sendNormalTalk_Bottom("很好，你去#m701102010#的话，就能看到很多#o9600303#和#o9600304#。狩猎那些羊的话，可以搜集到#i4009361:##t4009361#，你差不多帮我带来50个就可以了！", 37, 9310536, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我想用#t4009361#制作我独门的#t2010048#！嘿嘿，想想就让人流口水啊！那就拜托你啦！", 37, 9310536, true, false)
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
            cm.sendNormalTalk_Bottom("你已经搜集到50个#i4009361:##t4009361#了？", 37, 9310536, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(62122);
                cm.updateInfoQuest(62122, "chk=1");
                cm.addNumberForQuestInfo(62109, "yuyuanPoint", 3);
                cm.sendNormalTalk_Bottom("你真的非常厉害啊！请稍微等我一下！", 37, 9310536, true, true);
                cm.gainItem(4009361, -50);
                cm.gainItem(2010048, 10)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("(……嗞啦嗞啦……嗞啦嗞啦……) \r\n哟吼！特制#i2010048:##t2010048#完成啦。好了，你快尝尝吧", 37, 9310536, true, false)
                } else {
                    if (status === a++) {
                        cm.dispose()
                    }
                }
            }
        }
    }
};