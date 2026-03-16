var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, true, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_MoveAction(1);
            cm.inGameDirectionEvent_AskAnswerTime(3500);
            cm.curNodeEventEnd(true)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.sendNormalTalk("抓住那个冒险岛人！", 1, 9201174, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("它把我的太空钱包偷走了！", 1, 9201174, true, true)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_MoveAction(2);
                            cm.inGameDirectionEvent_AskAnswerTime(30)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/3"], [0, 0, -100, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_MoveAction(0);
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien/0"], [2500, 700, -611, 1, 0, 1, 1, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien/0"], [2500, 650, -611, 1, 0, 1, 1, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien/0"], [2500, 600, -611, 1, 0, 1, 1, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien/0"], [2500, 550, -611, 1, 0, 1, 1, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien/0"], [2500, 500, -611, 1, 0, 1, 1, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien/0"], [2500, 450, -611, 1, 0, 1, 1, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien/0"], [2500, 400, -611, 1, 0, 1, 1, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction.img/effect/NLC/alien/0"], [2500, 350, -611, 1, 0, 1, 1, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111002/effect"], [0, 700, -611, 1, 0, 1, 1, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111002/effect"], [0, 650, -611, 1, 0, 1, 1, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111002/effect"], [0, 600, -611, 1, 0, 1, 1, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111002/effect"], [0, 550, -611, 1, 0, 1, 1, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111002/effect"], [0, 500, -611, 1, 0, 1, 1, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111002/effect"], [0, 450, -611, 1, 0, 1, 1, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111002/effect"], [0, 400, -611, 1, 0, 1, 1, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111002/effect"], [0, 350, -611, 1, 0, 1, 1, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("啊哟！我的脑袋！", 1, 9201174, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("哈？搞什……", 3, 9201174, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("你没事吧？抱歉来迟了，但我们来救你了！", 1, 9201054, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("我们也来帮忙！快点儿过来！", 1, 9201094, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("你们怎么才来？！我的脑子差点被外星人吃了！", 3, 9201094, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_MoveAction(1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                            cm.npc_LeaveField("oid=68368")
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_MoveAction(0);
                                                                cm.sendNormalTalk("谢谢你救了我，刚才朝你大吼大叫的，真是抱歉……", 3, 9201094, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("没关系，害怕是人之常情嘛。再说了，你为我们做了这么多，这是我们欠你的。", 1, 9201094, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("嗯，谢啦。我没受伤，就是吓得不轻。", 3, 9201094, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("至少它们没把你洗脑，让你以为你已经逃了出来，其实你还困在它们的实验室里头呢！", 1, 9201094, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("哈！开玩笑啦。你还是去见下市长吧？他可喜欢科幻故事了。我就先走了！", 1, 9201054, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("等会儿！这真的是现实吗？难道是我的幻觉？！", 3, 9201054, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("哈哈哈，别傻了。回见，小笨蛋！", 1, 9201094, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.forceCompleteQuest(28753);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                            cm.gainItem(4033191, -1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.setStandAloneMode(false);
                                                                                                cm.eventSKill(0);
                                                                                                cm.warp(600000000, 36, false);
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
};