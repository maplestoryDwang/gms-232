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
            cm.sendNormalTalk_Bottom("喂，#h0#！现在学校里发生了什么事情吗？", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("什么？长相帅气的实习老师？", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("问题没有这么简单。\r\n现在整个学校都快被黑暗气息所吞噬！", 37, 1530030, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("之前每当出现尘土怪和闹事者时，我都在学校里感受到了黑暗气息。但并不像现在这么强烈。在我眼中，现在大半个学校都被沉浸在黑暗之中！", 37, 1530030, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("上次弗朗西斯引发的骚动是由于他对一个人的单恋。但这次的骚动，几乎是由所有女生的单恋而引起的……也对，在青春期没有比这更大的情感冲击了。", 37, 1530030, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("但是原因真的这么简单吗？从情况的严重性来看，好像并不是那么简单吧？", 37, 1530030, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("总之，近期你要特别留意。如果有什么事情发生，我会立刻与你联络，你不要放松警惕啊。", 37, 1530030, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(33004, "");
                                        cm.dispose();
                                        cm.warp(330002505, 0)
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_ForcedFlip10(2, 819);
            cm.inGameDirectionEvent_ForcedFlip(1);
            cm.sendNormalTalk_Bottom("怎么样？……呃，从你的状态来看，我似乎已经明白了。", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("实习老师是很帅……但还没有帅到让人忘我的地步吧？\r\n我更喜欢有男子气概的男生。", 37, 1530120, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("虽然各有所好，但你也要承认他帅到了一定境界了啊，伊莉娜姐姐。", 37, 1530110, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("说的也是，看到他之后，我也无法将视线从他身上移开。\r\n王都桑大叔说的都是事实。", 37, 1530120, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("学校马上就会变成地狱。\r\n实习老师会在学生中引起一场巨大的纷争。", 37, 1530070, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("哎咦，不会吧……", 37, 1530110, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("你们都听过“倾国之色”这个词吧。\r\n用来形容一个人美到动摇国家的地步。", 37, 1530070, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("这句话原来用在女性身上，但男性好像也不例外。\r\n我举个实例吧，之前有阿联酋男子在沙特阿拉伯的一个宗教庆典上被驱逐出境，理由就是因为那男子长相过分帅气，可能会迷惑当地的女性。\r\n这件事就发生在2013年。", 37, 1530070, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("你是说为了校园的和平，我们应该将阿白老师赶出去？", 37, 1530080, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("那可不行。", 37, 1530060, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_PlayBGM("Bgm38.img/LifeIsComedy", 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("……嗯？", 37, 1530080, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("那可不行。", 37, 1530060, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 568, 60, 1, 0, 1, 1, 0]);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 448, 60, 1, 0, 1, 1, 0]);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 715, 60, 1, 0, 1, 1, 0]);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 950, 60, 1, 0, 1, 1, 0]);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 1049, 60, 1, 0, 1, 1, 0]);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 1133, 60, 1, 0, 1, 1, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam")
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#b（……我还是第一次见到希纳斯这么坚决呢。）#k", 57, 1530074, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love"], [0, 847, 60, 1, 0, 1, 1, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("我，我也是女生……\r\n在我当校长之前，作为神兽国际学校的女学生，我绝不能容忍这样的事情发生。", 37, 1530060, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(600)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                    cm.effect_NormalSpeechBalloon("....", 1, 0, 0, 2000, 1530123, cm.getPlayer().getId());
                                                                                    cm.effect_NormalSpeechBalloon("....", 1, 0, 0, 2000, 1530113, cm.getPlayer().getId());
                                                                                    cm.effect_NormalSpeechBalloon("....", 1, 0, 0, 2000, 1530074, cm.getPlayer().getId());
                                                                                    cm.effect_NormalSpeechBalloon("....", 1, 0, 0, 2000, 1530083, cm.getPlayer().getId())
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("那也没办法了。#b#h0##k，我交给你一项特殊任务。", 37, 1530070, false, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("在阿白实习老师在校的这3周期间，我任命你为#r非常对策委员会委员长#k。如果这段时间发生什么事情，我就唯你是问。知道了吗？", 37, 1530070, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("……\r\n#b（这学校怎么天天都处于非常状态……？）", 57, 1530074, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("那我就当你已经接受任务了。未来的3周，希望你能撑过去。", 37, 1530070, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.fieldEffect_PlayBGM("Bgm38.img/SchoolLife", 0, 0);
                                                                                                            cm.inGameDirectionEvent_ForcedFlip(0);
                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.forceCompleteQuest(33003);
                                                                                                                    cm.setInGameDirectionMode(false, true, false);
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