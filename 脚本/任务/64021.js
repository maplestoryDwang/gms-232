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
            cm.sendNormalTalk_Bottom("#face0#你们来啦！", 37, 9400589, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#你比我们到得还快啊？", 37, 9400582, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#嗬嗬-我找不到合适的地方安置他，就给他带到这里来了。", 37, 9400589, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0##h0#，这么冷的天，辛苦你了。", 37, 9400580, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#怎么不说我也辛苦了！", 37, 9400582, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b不客气。", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b佩图尔，给你木材。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(64021);
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
            cm.sendNormalTalk_Bottom("#face0#你们来啦！", 37, 9400589, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#你比我们到得还快啊？", 37, 9400582, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#嗬嗬-我找不到合适的地方安置他，就给他带到这里来了。", 37, 9400589, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0##h0#，这么冷的天，辛苦你了。", 37, 9400580, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#怎么不说我也辛苦了！", 37, 9400582, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b不客气。", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b佩图尔，给你木材。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#好！那我们开始吧？", 37, 9400589, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#哎呀呀，#h0#，我能再麻烦你一件事吗？", 37, 9400589, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#我之前委托斯洛克帮忙搓绳子，可他到现在都没跟我联络。", 37, 9400589, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#你代我去找他取绳子好吗？", 37, 9400589, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#b是的。", 57, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#他应该在村子入口。一有人靠近他就会一副不高兴的表情横着眼看人，很好找的。", 37, 9400589, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.playerMessage(-1, "去找斯洛克取绳子。");
                                                                cm.npc_LeaveField("oid=201369");
                                                                cm.npc_LeaveField("oid=201381");
                                                                cm.forceCompleteQuest(64021);
                                                                cm.forceStartQuest(64023, "");
                                                                cm.removeAll(4036370);
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
            }
        }
    }
};