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
            cm.sendNormalTalk_Bottom("首先，难道你们从未以貌取人过吗？你们为了看希拉老师一眼，故意在医务室那里瞎转悠，你们连批判我们的资格都没有！没有资格！没有资格！", 37, 1530251, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("其次，因为长得帅就要被退职，这像话吗？我们认为应该保障阿白实习老师终生就业！终生就业！终生就业！", 37, 1530251, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("再者，长相丑陋的前男友们！请不要半夜发来“睡了吗？”之类的短信！你们在我们眼中已经不再是男人！不再是男人！不再是男人！", 37, 1530251, true, true)
                } else {
                    if (status === a++) {
                        cm.askMenu_Bottom("好了，#b#h0#！#k 如果你同意我们的主张，就在这里签名吧！\r\n#b#L0# 签名。 #l  \r\n#b#L1# 不签。#l", 37, 1530251)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(33008, "");
                            cm.sendNormalTalk_Bottom("我们绝不能容忍有人妨碍我们对阿白实习老师的爱！斗争！", 37, 1530251, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b（呼……回到斯坦老师那里吧。）#k", 56, 1530251, true, false)
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom("嗯，那些家伙为什么那么闹腾？", 37, 1530370, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b（说明事情的原委吧。）#k", 57, 1530372, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("什么？这些家伙真是吃饱了没事干……你等一下！", 37, 1530370, true, true)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_PlayBGM("Bgm38.img/LifeIsComedy", 0, 0);
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#fs20#呀，你们这些家伙！不要在那里吵吵嚷嚷了，快进教室！", 37, 1530370, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#fs20#以后无论是女生还是男生，只要被我抓到就要扣分！", 37, 1530370, true, true)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("呼，现在终于安静些了。", 37, 1530370, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("我还以为他们对学校有什么不满呢。", 37, 1530370, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("……很抱歉，骚乱都是因我而起。", 37, 1530200, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("这与你没有任何关系，错在那些不懂事的孩子。", 37, 1530370, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                            cm.forceCompleteQuest(33008);
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
};