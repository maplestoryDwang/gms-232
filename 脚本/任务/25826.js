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
            cm.sendNormalTalk("#p3000018#，最近我使用技能时，粉红色光芒似乎更强烈了呢。", 2, 3000018, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("那是当然。我激活这股力量时，它就变成了我最喜欢的颜色。这种现象说明你已经逐渐能熟练运用我的力量了。", 0, 3000018, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("粉红色没什么不好……可这似乎有点太粉了吧。", 2, 3000018, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("那就放弃咯，放弃的话就没烦恼了。", 0, 3000018, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("没办法吗？", 2, 3000018, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("先不说这个，看来你已经能感觉到自己越来越能得心应手地控制这股力量。是时候再次提升你能力值的极限了。", 0, 3000018, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("你说的是之前提过的灵魂的默契吗？", 2, 3000018, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("对，怎么样？你会成为真正的粉色天使。", 0, 3000018, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("这个嘛，我怎么想都觉得不太好额……", 2, 3000018, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askAcceptDecline("你应该摒弃偏见。一句话，你想变强吧？", 1, 3000018)
                                            } else {
                                                if (status === a++) {
                                                    cm.changeJob(6511);
                                                    cm.sendNormalTalk("哇啊！我好像变强了呢！", 2, 3000018, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceStartQuest(25826, "");
                                                        cm.updateInfoQuest(1073, "6500=10;6510=201;6511=201");
                                                        cm.forceCompleteQuest(25826);
                                                        cm.gainItem(1142497, 1);
                                                        cm.effect_PlayMusic("Voice.img/jobChanged/6511F");
                                                        cm.forceStartQuest(29994, "");
                                                        cm.forceCompleteQuest(29994);
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

function stage0(d, c, b) {
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
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25826.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};