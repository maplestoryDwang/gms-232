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
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（虽然我一点都没有想要帮忙的念头，不过这几天我想了想，\r\n假装帮忙，再借机会出去，感觉也不赖。）", 36, 3001674 + cm.getPlayer().getGender(), false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（等的人迟迟不来，那家伙又吵得很，\r\n再说我也很想去村里看看。）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face11##fc0xFFbfbfbf#（……也许等出了道观，我也能试着\r\n在这个世界发光发热。）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face10##fc0xFFbfbfbf#（既然按照那个家伙的约定，当真已经能施展道术了，\r\n去尘世间显摆显摆应该也挺开心的，虽说眼下还有点三脚猫功夫……）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("#face12##fc0xFFbfbfbf#（是啊！事已至此，就将逃出来的怪物统统封印起来吧！\r\n为此……就得先去村庄。）", 36, 3001674 + cm.getPlayer().getGender())
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face11##fc0xFFbfbfbf#（师父曾经说过解铃还须系铃人吧？\r\n如果我能将所有怪物封印，也许他就能多少原谅我一些了吧。）", 36, 3001674 + cm.getPlayer().getGender(), false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face12##fc0xFFbfbfbf#（好吧，那在找饕餮那家伙之前……做好出行准备吧。\r\n师父的抽屉里还有道术集和扇子。）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(39513, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39513.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom("#face0#到底为什么叫我？", 36, 3001651, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face11#走吧，去村庄，我改变主意了，要帮忙找怪物。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#那是真的？", 36, 3001651, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face12#毕竟事情因我而起，理应由我来收尾，\r\n我没脸就这么去见师父……也已经准备好去村庄了。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#一开始就该这样才是，害得我多费了那么多口舌！", 36, 3001651, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face5#既然都决定联手了，就忘掉过去的种种吧，\r\n若是太过纠结于过去，是没办法向前的，饕餮。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face11##fc0xFFbfbfbf#（师父，我会暂时离开这里，去外面的世界看看，\r\n要是您在我之前回来，也别太生气哦。）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_Hero9(0, 1500);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                    cm.fieldEffect_Hero9(100, 500);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                    cm.eventSKill(0);
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.dispose();
                                                                    cm.warp(993160103, 0, false);
                                                                    cm.getPlayer().forceSetEquipment(1353800, -10)
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