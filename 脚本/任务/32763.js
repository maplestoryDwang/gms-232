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
            cm.askMenu_Bottom("这一事件的当事人是2年级的奥尔卡。你听过奥尔卡这个人吗？\r\n#b#L0#	这人既是黑色之翼的首领也是黑魔法师的军团长。#l\r\n#L1#	不知道#l", 37, 1530070)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("……？原来你不知道啊。听说她所属的经济公司名叫黑色之翼娱乐……她是最近电视上人气很高的偶像明星。", 37, 1530070, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("算不上人气很高，只是一般而已，一般！偶尔来一次学校的话，就会引来很多学生观看，真是乱作一团啊。", 37, 1530100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("不过，她的性格可是相当不好……", 37, 1530110, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("确实如此。上次我见她一个人吃饭，就过去坐在她旁边，暗送秋波地跟她说‘同学，要不要一起吃？’，结果竟然被她狠狠瞪了一眼，还说‘搞什么，离我远点’。那简直是要杀人一般的气势啊。", 37, 1530100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("那不光是奥尔卡，换做任何人都会那么做的吧？因为对方是你嘛。", 37, 1530120, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("切，你是在小看我吗？别看我长得不起眼，要是走出去的话，可是有人称赞我长得都够让偶像明星打脸的呢！", 37, 1530100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("看来你长得确实挺像打脸的。准确说应该是长了个暴力犯罪分子的模样吧？", 37, 1530120, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("呃，伊莉娜你~~", 37, 1530100, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askYesNo_Bottom("玩笑就到此为止吧。\r\n\r\n虽然我也不是很喜欢她，但这毕竟是发生在学校的问题，所以还是要想办法解决才行。#h0#，你可以去2年级教室，把那封可怕的威胁信拿来吗？", 37, 1530070)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("对犯人的搜索应该越快越好。就在我们延迟的过程中，说不定他早就想好逃跑对策了呢？", 37, 1530070, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceStartQuest(32763, "");
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
            cm.sendNormalTalk_Bottom("搞什么，你有话要对奥尔卡说？别烦我。", 37, 1530130, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("是学生会长派你来的？那你应该早点来才是呀，怎么磨蹭这么久？", 37, 1530130, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32763, "");
                    cm.forceCompleteQuest(32763);
                    cm.dispose()
                }
            }
        }
    }
};