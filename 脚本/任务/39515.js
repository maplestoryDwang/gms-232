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
            cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#（居然偏偏在这个节骨眼上断了……啊，找酒馆老板娘下单了啊，\r\n不过从酒馆老板娘的脸色来看，似乎情况有些棘手啊？）", 36, 3001674 + cm.getPlayer().getGender(), false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face11##fc0xFFbfbfbf#（正好甜米露都吃完了呢，你说要去仓库拿回来要花点时间？\r\n这可不行，看来得由我这个道士出马了。）", 36, 3001674 + cm.getPlayer().getGender())
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（前往#r#m410000210##k#fc0xFFbfbfbf#消灭#r#o2400551##k#fc0xFFbfbfbf#，\r\n找到#b#i4036577##t4036577##k#fc0xFFbfbfbf#。能有#b10个#k#fc0xFFbfbfbf#就足够了。）", 36, 3001674 + cm.getPlayer().getGender(), false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(39515, "");
                        cm.OnStartNavigation(410000210, 0, "", 39515);
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39515.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2500, 0, 353, 80)
            } else {
                if (status === a++) {
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), 664, 26);
                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（佯装是酒馆的人，悄悄将甜米露端了过去，\r\n不知道是不是演技出神入化，似乎完全没有人看出来。）", 36, 3001674 + cm.getPlayer().getGender(), false, true)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1400)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（客人咕嘟咕嘟就喝掉了一碗甜米露，\r\n然后似是心满意足地放声大笑，开口说道。）", 36, 3001674 + cm.getPlayer().getGender(), false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#哈……现在总算是活过来了。", 36, 3001657, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#你就这么喜欢甜米露的滋味吗？快去查清楚传闻啊。", 36, 3001658, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#你应该也知道，村庄外面有一座小寺院，\r\n不过你应该不知道那座寺院的长辈去世了。", 36, 3001657, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#那可真是可怜啊。", 36, 3001658, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#是关于继承那个位置的年轻法师的传闻，\r\n名叫俊秀法师，长相真是俊秀无双。", 36, 3001657, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#不仅长相俊美，而且心地善良，德高望重。\r\n不过不久前传出消息，说是整日闭门不出。", 36, 3001657, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#说他整日埋首于法堂，为了村庄的稳定而祈祷，\r\n不过这是大家的猜测……", 36, 3001657, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#年轻的帅气法师留下的谜题……这个题材倒是挺不错的嘛！", 36, 3001658, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2500, 2000, 664, 80)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#（居然连德高望重的法师都在卖力祈祷……\r\n总觉得像是捅了什么大篓子……）", 36, 3001674 + cm.getPlayer().getGender(), false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face11##fc0xFFbfbfbf#（收集情报就到这里，进入下一阶段吧，\r\n正好有件事还挺吊人胃口的。）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.forceCompleteQuest(39515);
                                                                                                    cm.gainExp(360);
                                                                                                    cm.gainExp(328);
                                                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                    cm.gainItem(4036577, -10);
                                                                                                    cm.updateInfoQuest(25980, "normal=#166#;hard=#")
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                    cm.eventSKill(0);
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
                    }
                }
            }
        }
    }
};