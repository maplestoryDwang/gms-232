var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    if (cm.getQuestStatus(34804) != 2) {
        cm.playerMessage(-1, "请先和利奥对话。");
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.askAcceptDecline_Bottom("#face0#好，现在大家都组队完成了吧？\r\n为了制作大门，请采集20个#i4036164# #t4036164#！", 36, 3001304)
        } else {
            if (status === a++) {
                cm.forceStartQuest(34805, "");
                cm.sendNormalTalk_Bottom("#face0##i4036164##b#t4036164##k可在#r#o2400401##k那获得，一定别搞错了。\r\n好，我这就用魔法送你过去。一路平安哦。", 37, 3001304, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0##b重新返回水晶学院时，建议你使用向导#k。", 37, 3001300, true, true)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(402000519, 0)
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
            cm.sendNormalTalk_Bottom("#face0#虽然算不上出众,但你的表现已经很不错了。那下节课见。慢走。", 37, 3001304, false, true, 1)
        } else {
            if (status === a++) {
                cm.setPartner(true, 3001310, 80002331, 0);
                cm.sendNormalTalk_Bottom("#face0#伊利温！我要走了,下次再一起吧！", 37, 3001310, true, true, 1)
            } else {
                if (status === a++) {
                    cm.gainItem(4036164, -20);
                    cm.sendNormalTalk_Bottom("#face9#啊！嗯！下次见！", 37, 3001351, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#今天的课程全部结束了,最好去拜访一下阿加特大人。我带你去校长室吧。", 37, 3001300, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.setPartner(false, 3001310, 0, 0);
                            cm.OnStartNavigation(402000528, 0, "", 0);
                            cm.forceCompleteQuest(34805);
                            cm.updateInfoQuest(34805, "exp=1");
                            cm.dispose();
                            cm.warp(402000524, 3, false)
                        }
                    }
                }
            }
        }
    }
};