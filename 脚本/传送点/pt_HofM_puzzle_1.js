function enter() {
    if (cm.getNumberFromQuestInfo(33965, "p1") > 0) {
        return
    }
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNewEffects(17, [3000, 1000, 700, 790, -822])
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(4000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("这一次是其他壁画，先调查看看吧。\r\n#b(点击四散的石板，需要按照图片摆放正确位置。)", 37, 1540801, false, true)
                } else {
                    if (status === a++) {
                        cm.mapleHeroJigsaw(0, 1, 0, [1, 2, 3, 4, 5, 6, 7, 9, 8])
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(33965, "meso=12893;p0=1;p1=1;p=0;exp=83");
                            cm.onSetBackEffect("light", 1, 1, 0, 0);
                            cm.sendNormalTalk_Bottom("啊，我好像知道这幅图是什么意思了！这幅图画的是三个超越者之中的光明超越者暴走成为黑魔法师时的样子。", 37, 1540805, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("……原来是这样。", 37, 1540804, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("等一下，回想起来，我曾经听说过一段数百年前的故事，我听说有一些独自记录世界上重要事情的空间……估计这个遗迹就算是这种空间。", 37, 1540801, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("什么？你的意思是空间会自己活动吗？", 37, 1540805, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("没错，虽然我从刚刚就感觉到了，但我觉得这个空间并不是被魔法操控，而是因为某种权力在活动。", 37, 1540801, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("一开始所见到的看守也是，就连不得已设置在陷阱上的绳索也是……也许这个空间有着自我意识。", 37, 1540801, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("果然数百年年轮之下的智慧就是与众不同啊！", 37, 1540805, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("等一下，我总觉得这让人心情很糟糕。", 37, 1540801, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("既然说完了，我们就出发吧。", 37, 1540804, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNewEffects(19, [1000])
                                                            } else {
                                                                if (status === a++) {
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
};