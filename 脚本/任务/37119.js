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
            cm.sendNormalTalk_Bottom("#face0#这几个#b部件#k……不够……", 36, 3004008, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("呃，真郁闷，现在不应该这样的……", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.askMenu_Bottom("等一下！这样怎么样？\r\n\r\n#b#L0#毁坏装置？#l\r\n#L1#把装置移到远离海水的地方？#l\r\n#L2#堵住装置的排气口？#l", 56, 3004046)
                } else {
                    if (status === a++) {
                        if (b == 0) {
                            cm.sendNormalTalk_Bottom("把装置毁坏不就行了吗？", 56, 0, false, true)
                        } else {
                            if (b == 1) {
                                cm.sendNormalTalk_Bottom("如果接触海水后会发生反应，那么把装置转移到陆地上去不就行了吗？", 56, 0, false, true)
                            } else {
                                cm.sendNormalTalk_Bottom("如果堵住排气孔，无法排气？", 56, 0, false, true)
                            }
                        }
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#这其中……条件若发生改变…就是挥发性极强的……溶液……", 36, 3004008, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#装置上若有什么异常……或者装置脱离了指定位置……就会发生#r爆炸#k。", 36, 3004008, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("呃！", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#必须要收集……#b部件#k……", 36, 3004008, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askAcceptDecline_Bottom("#face0#古鲁格……弓手……在#b危险的古鲁格栖息地3#k……", 36, 3004008)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(37119, "");
                                                cm.OnStartNavigation(402000453, 0, "", 0);
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
            cm.sendNormalTalk_Bottom("#face0#（嘟嘟囔囔）", 37, 3004008, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(28462236);
                cm.forceCompleteQuest(37119);
                cm.gainItem(4036495, -50);
                cm.dispose()
            }
        }
    }
};