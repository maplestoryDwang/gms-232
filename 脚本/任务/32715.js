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
            cm.askMenu_Bottom("……？转校生，你有话要对我说吗？\r\n#b（这家伙好像也在哪儿见过，莫非是错觉……？)\r\n#b\r\n#L0#我想和你交朋友。#l\r\n#L1#你这个邪恶的家伙，赶快现出真面目来！#l\r\n#L2#啊，没什么。#l", 37, 1530140)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("真的吗？你想和我做朋友？呵呵呵……很高兴认识你。我叫#b弗朗西斯#k，这是我的电话号码。", 37, 1530140, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("话说回来，你是不是很喜欢玩网络游戏呢？我从你刚才说的话中就听出来了，我可是个角色控呢。果然是有相同爱好的人心有灵犀啊……我们以后就做好朋友吧。", 37, 1530140, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("做好朋友当然好啦，可是……控是什么意思呢？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你还真会装。早都露馅啦，小子。\r\n\r\n#b（弗朗西斯一边说着难以理解的话，一边面带可疑的笑容。）#k", 37, 1530140, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("话说回来，不久前这里发生了一次地震，你知道吧？我没开玩笑！这可是一级秘密呢……那时，从天空中哗哗地落下了很多灰突突的东西，我还用手机拍下来了呢。", 37, 1530140, true, true)
                            } else {
                                if (status === a++) {
                                    cm.curNodeEventEnd(true);
                                    cm.setInGameDirectionMode(true, false, true);
                                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_ProcessOnOffLayer("00", "Map/Effect2.img/spinOff1/DustFall", 0, 1500, 0, 0, 12, 4, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("这个……？", 57, 0, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("哈哈哈，是不是很惊讶？", 37, 1530140, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("虽然大家都觉得没什么大不了的，但这次的地震中说不定隐藏着什么#b天大的秘密#k呢。比如说外星人入侵啊什么的。吼吼吼……我们要不要去探究一下这个谜团呢？", 37, 1530140, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 1500, 0, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.sendNormalTalk_Bottom("喂，弗朗西斯！", 37, 1530230, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0##b（大吃一惊）#k呃……嗯？", 37, 1530140, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("给我安静点，不知道打扰大哥我的休息了吗！", 37, 1530230, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#……可现在是休息时间啊……", 37, 1530140, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("什么？我没听清。你在那儿嘟囔什么呢？能不能给我消停点？还有你，转校生，过来一下。", 37, 1530230, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.forceStartQuest(32715, "");
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
            cm.sendNormalTalk_Bottom("看来你得打一架了？有两下子吗？", 37, 1530230, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("……？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("呵呵……不管你以前干过什么，我都无所谓。居然这么巧，和我在同一时间转学，有意思！", 37, 1530230, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("很好，我已经决定了。我要把你收做我的小弟。", 37, 1530230, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("以后要想在学校好好呆下去的话，就得成为我手下。因为我已经决定要接手这所学校了。", 37, 1530230, true, true)
                        } else {
                            if (status === a++) {
                                cm.askMenu_Bottom("所以别再和那个倒霉的#r人偶狂#k说话了。知道了吧？\r\n#b\r\n#L0#在学校欺负同学可不是什么好事。#l\r\n#L1#玩弄人偶纯粹属于个人爱好。尊重他吧。#l\r\n#L2#你比弗朗西斯长得还丑，我才不要。#l", 37, 1530230)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(32715, "");
                                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                                    cm.forceCompleteQuest(32715);
                                    cm.sendNormalTalk_Bottom("什么？你刚才说什么？真是吃了熊心豹子胆……你跟我到后院来！！", 37, 1530230, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("……？为什么突然要到后院去……\r\n\r\n#b（还没来得及说话，小流氓已经一脚踹开教室门出去了。）#k", 56, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.updateInfoQuest(32719, "gal=1;sms=0;add=1");
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