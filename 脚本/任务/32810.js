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
            cm.sendNormalTalk_Bottom("在各位的努力下，我们的初步计划已经取得了圆满成功。那么，下一步的计划是……！我们怎么做好呢，南哈特？", 37, 1530100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("传闻到什么时候都只是传闻。只要当事人不介意，传闻也会逐渐平息的。所以，现在该到让两个人注意对方的时候了。", 37, 1530070, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("是啊，这也正是我想说的！……所以，我们该怎么做呢？ ", 37, 1530100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我！胡克队长，我想到个好主意！", 37, 1530140, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("弗朗西斯队员，说说看吧。", 37, 1530100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("就是在每个教室的黑板上写#r姓名测试#k！那样的话，校医和体育老师也会知道彼此是命中注定的！", 37, 1530140, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("姓名测试？那是什么？", 57, 1530103, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("竟然连姓名测试都不知道，真是个蠢家伙。就让我来亲自给你解释下吧。用我和奥尔卡的姓名进行测试的结果是这样的……", 37, 1530140, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_ScreenMsg("Map/Effect2.img/spinOff1/name");
                                            cm.sendNormalTalk_Bottom("6%？看来挺靠谱的嘛。", 37, 1530100, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("可信度那是相当高啊", 37, 1530070, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#怎，怎么可能。竟然才6%，这个不准！……唉，是啊，这一定是哪个可恶的家伙为了破坏我和奥尔卡的关系而做了手脚……", 37, 1530140, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("很好，下一步的计划是把体育老师和校医的姓名测试写在每个教室的黑板上。那么，#h0#队员，你去从#b1楼教务室#k把#b粉笔#k拿过来吧。这段时间，其他队员负责做好姓名测试。行动！", 37, 1530100, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceStartQuest(32810, "");
                                                            cm.effect_Text(["#fn黑体##fs20#计划4. 捏造流言蜚语"], [100, 2500, 5, 80, 0, 1, 4, 0, 0, 0]);
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
            cm.sendNormalTalk_Bottom("那就是这个世界的粉笔？真神奇！拿给我看看，给我！", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("……什么嘛？跟我们世界的没什么两样嘛？真让人失望。", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32810, "");
                    cm.forceCompleteQuest(32810);
                    cm.gainItem(4034151, -25);
                    cm.dispose()
                }
            }
        }
    }
};