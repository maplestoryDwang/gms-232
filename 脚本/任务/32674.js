var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.askYesNo_Bottom("你不是说要帮我抓住带到方舟上的动物吗？\r\n#b（接受时将自动移动。）", 36, 2550003)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("那件事你不用担心，反正花不了多长时间。", 56, 0, false, true)
            } else {
                if (status === a++) {
                    cm.curNodeEventEnd(true);
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(true, false, true);
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                        cm.effect_Text(["#fn黑体##fs18#第二天"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0])
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("那我走了。", 57, 0, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("你要干什么？", 37, 2550001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("抓只刺猬回来。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("在刺猬栖息地附近就能看见#fs18##r狮子王之城#k#fs16#了。\r\n你正好先观察一下。", 37, 2550002, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("好，放心吧，不会有事的。", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.dispose();
                                                cm.warp(306090020, 0, true)
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
    status++;
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