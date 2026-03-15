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
            cm.sendNormalTalk_Bottom("现在真的只能用上最后的办法了。", 37, 9310535, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("你准备好去捕捉#o9600315#了吗？", 37, 9310535)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("很好！那我就把我准备好的#t2270042#给你吧。这是把人参浸入煮有蒜和红豆的水里，然后和符咒一起捻搓上百次后制成的绳子。", 37, 9310535, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("有了这根绳子，就能捉到#o9600315#了。\r\n虽然我也很想跟你一起去……但我……我还有自己的事情要做……", 37, 9310535, true, true);
                        cm.gainItem(2270042, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("请你去外滩捕捉1只#o9600315#，只要1只就可以了！", 37, 9310535, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(62139, "");
                                cm.dispose()
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
            cm.sendNormalTalk_Bottom("我已等候多时了！#h0#！啊……你真的捉到僵尸啦，好厉害！", 37, 9310535, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("等一下，我要用照片记录下这历史性的瞬间。", 37, 9310535, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("一、二、三、咔嚓！\r\n这张照片就送给你当做纪念吧。", 37, 9310535, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(62139);
                        cm.updateInfoQuest(62139, "chk=1");
                        cm.addNumberForQuestInfo(62109, "yuyuanPoint", 3);
                        cm.gainItem(4034706, -1);
                        cm.gainItem(3014010, 1);
                        cm.dispose()
                    }
                }
            }
        }
    }
};