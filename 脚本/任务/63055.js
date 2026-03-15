var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }
    var a = cm.getPlayer().getGender() == 0 ? "哥哥" : "姐姐";
    (e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("" + a + "，你来自哪里？", 4, 9400222, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk("你真白。就像一张白纸！好羡慕你可以随心所欲地给自己涂色。", 4, 9400222, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("#b(涂色……这方法值得一试！)", 2, 0, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk("#b#p9400222#，你能帮我把身上涂上颜色吗", 2, 0, true, true)
                    } else {
                        if (status === b++) {
                            cm.askYesNo("你说真的？！我很愿意！不过我没有足够的颜料给" + a + "你涂色。你帮我收集来色素，我就给你涂上颜色！", 4, 9400222)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk("很好，请你把这个桶装满色素！", 5, 9400222, false, true);
                                cm.gainItem(4036012, 1)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk("只要把#t4036012:#放在背包里去狩猎，就能收集到怪物的色彩。你快给我带回#t4036013:#吧！", 5, 9400222, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.updateInfoQuest(63091, "time=20/01/12/22/13;SunState=9;BestWarrior=1;CC=0");
                                        cm.forceStartQuest(63055, "");
                                        cm.forceStartQuest(63056, "");
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

function stage0(d, c, b) {
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63055.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }
    var a = cm.getPlayer().getGender() == 0 ? "哥哥" : "姐姐";
    (e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("哇，这么多！装得满满的！这些色素应该够给" + a + "你上色了。请稍等……", 4, 9400222, false, true)
        } else {
            if (status === b++) {
                cm.updateInfoQuest(63091, "time=20/01/12/22/13;SunState=9;BestWarrior=1;CC=0");
                cm.forceCompleteQuest(63055);
                cm.gainExp(476400);
                cm.updateInfoQuest(63055, "exp=1");
                cm.forceCompleteQuest(63056);
                cm.updateInfoQuest(63090, "lightning=0;green=0;red=1;DnN=0;raining=0;blue=0");
                cm.updateInfoQuest(63090, "lightning=0;green=1;red=1;DnN=0;raining=0;blue=0");
                cm.updateInfoQuest(63090, "lightning=0;green=1;red=1;DnN=0;raining=0;blue=1");
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, true);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
                cm.gainItem(4036013, -1)
            } else {
                if (status === b++) {
                    cm.npc_SetSpecialAction("oid=114790", "action", 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === b++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower"], [0, 0, 0, 1, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                    } else {
                        if (status === b++) {
                            cm.fieldEffect_InsertCanvas11(5, 0, 0, 0, 0, 0);
                            cm.fieldEffect_BackgroundCanvas(5, 255, 255, 255, 100, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                            cm.effect_NormalSpeechBalloon("好啦！你看看怎么样？漂亮吧？！嘿嘿", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400222, cm.getPlayer().getId())
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk("真好玩。我还没涂够呢……要是你身体又变成像画纸一样白，记得来找我。", 5, 9400222, false, true)
                            } else {
                                if (status === b++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === b++) {
                                        cm.addPopupSay(9400205, 2000, "这地方也逛得差不多了！", "", 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                    } else {
                                        if (status === b++) {
                                            cm.addPopupSay(9400205, 2000, "这里是最后一个地区了……", "", 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                        } else {
                                            if (status === b++) {
                                                cm.addPopupSay(9400205, 3000, "返回勇士之地，从头开始仔细搜索怎么样？", "", 0);
                                                cm.updateInfoQuest(63055, "speak=1;exp=1");
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
};