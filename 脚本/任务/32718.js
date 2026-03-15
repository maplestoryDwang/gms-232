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
            cm.sendNormalTalk_Bottom("#b（向汉斯说明事情的经过。）#k\r\n\r\n……原来如此。那里的人有着和冒险岛世界的人相同的相貌，却过着完全不一样的生活，所以两边一定是#b平行世界#k。", 37, 1530390, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("那么哪一边才是真实的世界呢？不是有庄周梦蝶的典故吗？那到底是我梦见了蝴蝶，还是蝴蝶梦见了我呢？现在真是无法断言到底那边的世界才是真实的，还是这边的世界才是真实的。", 37, 1530390, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("一直以来，对于平行世界领域，我们既无法观测，更没有办法接近。出现这样的通道，而且还能穿越到那边的世界去，这还是史无前例的头一次。", 37, 1530390, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("噢，我果然是个天才。", 37, 1530020, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你这家伙！到现在还没清醒过来吗！#b（汉斯的血压顿时升高了。）#k\r\n平行世界的两边最好不要相互干涉！", 37, 1530390, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("呃……所以我们把那个学生送回去之后，尽快把空间封住不就行了吗？原本我也是这么打算的呢，只不过是打算悄悄进行而已。", 37, 1530020, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("可是现在已经造成恶劣影响了！都是因为你，冒险岛世界的邪恶气息已经蔓延到平行世界去了。", 37, 1530390, true, true)
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
                                                cm.sendNormalTalk_Bottom("弗朗西斯所说的地震……他的确说过那时候从天空中落下了什么东西。莫非那就是冒险岛世界的邪恶气息？", 57, 0, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("现在还无法得知那邪恶气息的真实面目是什么。但是它可以以空间破裂的地方为中心像传染病一样逐渐向四周蔓延，所以我们必须在事态变得更严重之前将邪恶气息收回才行。", 37, 1530390, true, true)
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
                                                                cm.askYesNo_Bottom("你说你已经伪装成那里的学生进入那个世界了，对吧？既然事已至此，你愿意为这件事出一份力吗？", 37, 1530390)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("我没办法一直呆在这里……所以带了援兵过来。如果说#b埃尔文#k是#b结界之魔法师#k的话，那么#b莉莉#k就是#b操作之魔法师#k。", 37, 1530390, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceStartQuest(32718, "");
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
            cm.sendNormalTalk_Bottom("你就是#h0#吗？我叫莉莉。那个笨蛋埃尔文一闯祸，就得我来替他收拾残局。看来这次又是这样了。", 37, 1530040, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("喂，你非得把自己说成像我大姐一样吗？", 37, 1530020, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("就比我提前出生那么一点儿，还想跟我摆架子……\r\n#b（莉莉略带轻视地对埃尔文说。）#k", 37, 1530040, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你也看到了，埃尔文就是我的笨蛋哥哥。虽然他结界魔法运用得很好，但在学校的时候他却只知道把自己的才能浪费在恶作剧上。比如，把我和我的朋友用结界阻隔在厕所里，不让我们出来等等……", 37, 1530040, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("喂，那你后来还操作了我的考试卷，让我吃了零蛋呢！", 37, 1530020, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("还真是，我看我是白费力气了。就算我不做手脚，你那次考试也就能打15分。", 37, 1530040, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("开玩笑？明明能打17分好不好？", 37, 1530020, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b（莉莉对埃尔文轻视地叹了口气。）#k\r\n你看到了吧，就因为我这个笨蛋哥哥闯的祸，现在可是迫切需要你的帮忙啊，#h0#。", 37, 1530040, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("不过，在处理这个问题的时候一定不能让这件事传出去，否则一定会引起骚乱的。我可不希望给那个世界的人带来不必要的混乱。#h0#你要暂时扮演一下神兽国际学校的学生，同时一定要小心不能暴露自己的身份才行。", 37, 1530040, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#b（我能扮演好吗……？那地方可不好适应呢。）#k", 56, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("这是给你的礼物。你不是说这东西在那个世界很有用的吗？以后有机会的话还可以获得的。", 37, 1530040, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceStartQuest(32718, "");
                                                        cm.forceCompleteQuest(32718);
                                                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                        cm.forceCompleteQuest(32700);
                                                        cm.finishAchievement(1205);
                                                        cm.sendNormalTalk_Bottom("那么以后有事的话我再找你喽，#h0#……不对，应该是#h0#同学。", 37, 1530040, true, true);
                                                        cm.gainItem(4310125, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.dispose();
                                                            cm.warp(330002055, 0)
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