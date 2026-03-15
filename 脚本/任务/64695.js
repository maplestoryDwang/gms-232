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
            cm.dispose()
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
            cm.sendNormalTalk_Bottom("#face1#……你回来啦！", 37, 9400924, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b给你糖，还有蜂蜜。明明女士说添加蜂蜜可以做出更美味的糖果。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#……谢谢你。", 37, 9400924, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#等我准备好万圣节派对的事情后，就给你报酬。\r\n……敬请期待吧。", 37, 9400924, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#……对了，还有……", 37, 9400924, true, true)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline_Bottom("#face0#我一整天都没看到特鲁迪了。你要是有时间，帮我去找找他吧。", 37, 9400924)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b(之前你说起幽灵的时候，特鲁迪非常害怕来着……我担心他会不会出什么事。) ", 57, 0, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b(我去特鲁迪家的面包店看看吧。)", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(64695);
                                            cm.forceStartQuest(64696, "");
                                            cm.gainItem(4036604, -10);
                                            cm.gainItem(4036605, -30);
                                            cm.curNodeEventEnd(true);
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
    }
};