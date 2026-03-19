function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestFinished(40053)) {
        cm.warp(321190210, 1, false);
        cm.dispose()
    } else {
        cm.openScriptNpc()
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk("……你们到我家来有什么事？", 1, 2411009, false, true)
        } else {
            if (status === a++) {
                cm.fieldEffect_PlayBGM("Bgm33.img/SmileZero", 0, 0);
                cm.sendNormalTalk("……听到了吗？有点像……被锁喉的青蛙声音一样。难不成这是阿弗利埃的声音？塔塔曼这个老不死的该不会是骗我们吧？如果真是这样，我就用他的胡子也给他锁喉，让他也发出这种声音。", 1, 2400005, true, true);
                cm.gainSkillBuff(100001263)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("青蛙……肯定很可爱。", 1, 2400006, true, true);
                    cm.gainSkillBuff(100001263)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("青蛙可爱？你这什么审美观……", 1, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("被锁喉的青蛙！？我可不是青蛙！也没有被锁喉！我的声音更不奇怪！呜呜……", 1, 2411009, true, true)
                        } else {
                            if (status === a++) {
                                cm.askText("你们到底是谁，为什么要闯入我家？这里不是什么人都能来的地方！你们到底是谁派来的，给我说清楚了！", "", 2411009, 0, 1000)
                            } else {
                                if (status === a++) {
                                    var d = cm.getText();
                                    if (d == "塔塔曼") {
                                        cm.askText("嗯～你说是塔塔曼介绍你来的？但是我不能就这样给你开门！只有聪明的人才能进入我们的家！#b3 + 5 + 1 + 24 + 19#k等于多少？必须一次答对！", "", 2411009, 0, 1000)
                                    } else {
                                        cm.sendNormalTalk("这个名字我没听过啊？到我们家的路只有塔塔曼和其他几个人知道。你答错了，我不能让你进来！", 1, 2411009, false, true);
                                        selectionLog[666] = 0
                                    }
                                } else {
                                    if (status === a++) {
                                        if (selectionLog[666] == 0) {
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.dispose()
                                        } else {
                                            var d = cm.getText();
                                            if (d == "52") {
                                                cm.askText("哎唷？还不错吗！很好！还有一题！世界上最帅的龙叫什么名字？！提示！嘿嘿，我本人是挺帅的！", "", 2411009, 0, 1000)
                                            } else {
                                                cm.sendNormalTalk("笨蛋，你答错了，我不能让你进来！", 1, 2411009, false, true);
                                                selectionLog[666] = 0
                                            }
                                        }
                                    } else {
                                        if (status === a++) {
                                            if (selectionLog[666] == 0) {
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.dispose()
                                            } else {
                                                var d = cm.getText();
                                                if (d == "米乐") {
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.dispose();
                                                    cm.warp(321190210, 1, false)
                                                } else {
                                                    cm.sendNormalTalk("笨蛋，你答错了，我不能让你进来！", 1, 2411009, false, true);
                                                    selectionLog[666] = 0
                                                }
                                            }
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
};