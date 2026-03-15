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
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.setStandAloneMode(true);
            cm.sendNormalTalk_Bottom("飞鱼！快醒醒！", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("……好像因为刚才的冲击晕了过去。怎么办才好呢……", 57, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("等一下，飞鱼之前说过……", 57, 0, false, true)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face10#吸收了#fc0xFFFFF176##t4036337:#，我的记忆应该暂时就会安定下来。\r\n因为那样可以把消散的记忆重新聚集起来。", 37, 3003480, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFFFF176#……就像吃了千年人参一样，浑身充满了力量。", 37, 3003480, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1600)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("对了，#i4036339:#  #r#t4036339:##k也许有用！", 57, 0, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647)
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
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.askAcceptDecline_Bottom("只能死马当活马医了。去搜集一些#i4036339:#  #r#t4036339:##k，交给江吧！", 56, 3003473)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.forceStartQuest(34241, "");
                                                                                cm.sendNormalTalk_Bottom("#i4036339:#  #r#t4036339:##k可以从#b莫拉斯的所有怪物#k身上获得。先去搜集#r50个#k吧。", 56, 0, false, true);
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("飞鱼……快起来……", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.setInGameDirectionMode(true, false, true);
                cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/morass/DailyQuest/2"], [0, 1499, 60, 1, 0, 1, 1, 0]);
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/memory_absorb", 100);
                cm.inGameDirectionEvent_AskAnswerTime(2500)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face4#呃……", 37, 3003480, false, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(34245, "71=h0;73=h1;75=h0;69=h1");
                        cm.setInGameDirectionMode(false, true, false);
                        cm.forceCompleteQuest(34241);
                        cm.gainItem(4036339, -50);
                        cm.dispose()
                    }
                }
            }
        }
    }
};