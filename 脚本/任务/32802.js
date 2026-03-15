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
            cm.sendNormalTalk_Bottom("所有的计划都是由我胡克想出来的。如果体育老师和校医谈恋爱的话，就不会再来阻止我们谈恋爱了吧！哈，这个主意实在是太妙了，不是吗？", 37, 1530100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("让他们两个谈恋爱？\r\n那还不如期待弗朗西斯和奥尔卡谈恋爱，这样也许更快些。", 37, 1530080, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗬，你是想唤醒我内心的恶魔吗？用不用我把你送到地狱去……", 37, 1530140, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("所以说，我到底为什么要到这儿来……", 37, 1530070, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("不行的话，就要想办法啊！那正是我们#r<神兽学校恋爱调查团>#k的信条。好了，我们的第一个任务就是，搜集情报。先调查一下体育老师和校医各自都是怎么想的吧！小伙伴们，出动……", 37, 1530100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("出动！", 37, 1530140, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("这又是什么情景剧？", 37, 1530080, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("所以说，我为什么……", 37, 1530070, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#b（这家伙，完全是随心所欲啊？看来这次真是被卷入麻烦事儿了。）#k", 57, 1530103, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askYesNo_Bottom("#h0#，我任命你为#r自由恋爱解放前线#k的名誉队员。你先去#b教务室#k问问#b麦格纳斯#k老师的想法吧。怎么样，没问题吧？", 37, 1530100)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(32802, "");
                                                    cm.sendNormalTalk_Bottom("哦哦，很好！就是这种气魄！你果然是个真正的男子汉！", 37, 1530100, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("你说谁是男子汉呢……？！", 57, 1530103, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.getTopMsgFont("前往1楼的教务室就可以和麦格纳斯老师对话了. ", 3, 20, 20, 0);
                                                            cm.effect_Text(["#fn黑体##fs20#计划1.搜集情报"], [100, 2500, 5, 80, 0, 1, 4, 0, 0, 0]);
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
            cm.sendNormalTalk_Bottom("……自己不想进教务室，就把我推出来？真没想到连南哈特也这样。", 57, 1530152, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#诶，那个谁。你来教务室有什么事吗？", 37, 1530150, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("我有问题想要问您。那个，问题是……", 57, 1530152, true, true)
                } else {
                    if (status === a++) {
                        cm.askMenu_Bottom("#face0#问题？你这家伙有什么问题？#b\r\n#L0#（虽然明知道不会有）您有女朋友吗？#l\r\n#L1#您可以和希拉老师交往吗？#l#l\r\n#L2#希拉老师为什么没有男朋友呢？#l", 37, 1530150)
                    } else {
                        if (status === a++) {
                            if (b == 2) {
                                cm.sendNormalTalk_Bottom("#face0#那当然是因为没有哪个男人愿意忍受她那种糟糕的性格了……嗬，瞧我都跟学生说什么呢。你这家伙，别在这儿废话了，赶紧回去！", 37, 1530150, false, true)
                            } else {
                                cm.sendNormalTalk_Bottom("什么？你这家伙在拿老师开玩笑吗？我要罚你在操场跑一百圈！#b（糟了，赶紧换个问题吧。）#k", 37, 1530150, false, true);
                                cm.dispose()
                            }
                        } else {
                            if (status === a++) {
                                cm.gainExp(Math.pow(cm.getLevel(), 3));
                                cm.forceCompleteQuest(32802);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};