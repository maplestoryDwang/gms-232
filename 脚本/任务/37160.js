var status = -1;

function start(d, c, b) {
    if (d == 1) {
        status++
    } else {
        status--
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("我并不想吓你，但你竟然晕了过去。胆子怎么这么小？", 4, 1501013, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("什么……你在那种黑黢黢的地方，戴着像鬼魂一样的黑布……", 2, 1501001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("鬼魂一样的黑布？你知道这有多贵重吗？", 4, 1501013, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("因……因为那些鸟，我连觉都睡不好……后来好不容易才弄到了这个可以隔音的面纱……你却说是鬼魂一样的黑布？", 4, 1501013, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("不……为……", 2, 1501001, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("啊！那些惨叫声难道是鸟叫？", 2, 1501001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("刚才我不是说了吗？", 4, 1501013, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("不对！我们只是在唱鲁安教给我们的歌！", 4, 1501010, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("鲁安，你不是说如果想跟树说话，可以这样唱歌吗！", 4, 1501010, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.setAmbience("SoundEff.img/Elodin/song_close", 90, 100);
                                                cm.sendNormalTalk("那也叫歌吗！天哪，勇士部落的野猪都发不出那种可怕的声音！", 4, 1501013, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("……喂", 2, 1501001, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("求你别唱了！你的惨叫声让树木都变得抑郁了！", 4, 1501013, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("……听我说……", 2, 1501001, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.playSoundEffDirectly("SoundEff.img/Elodin/song_close");
                                                                cm.sendNormalTalk("我为什么要停下来！不是鲁安教我们的吗！你说树木会对此做出应答！", 4, 1501010, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.setAmbience("SoundEff.img/Elodin/song_close", 90, 100);
                                                                    cm.forceStartQuest(37160, "");
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_ForcedFlip(1);
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_OneTimeAction(10, 0);
                            cm.fieldEffect_PlayFieldSound("Sound/Reactor.img/2002001/0/Hit", 200);
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === a++) {
                                cm.playSoundEffDirectly("SoundEff.img/Elodin/song_close");
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Elodin/scream_close", 200);
                                cm.sendNormalTalk("嘎啊！", 5, 1501010, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("……我还以为你很胆小，没什么用呢。没想到力气还挺大的嘛。", 5, 1501013, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("干嘛打我！干嘛打我！", 5, 1501010, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("再不闭嘴，我就让你再也叫不出来。", 3, 1501003, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.updateInfoQuest(37150, "00=h0;01=h1;02=h0;03=h2");
                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("不过那样对付那个可怜的小家伙，也太野蛮了！怎么能那样对待它呢？", 5, 1501013, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("是吧？那我就再……", 5, 1501010, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("哎呀，你想再被打一顿吗？我觉得它再受一次冲击，应该就能清醒过来了。你觉得怎么样？", 5, 1501013, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("呜呜……", 5, 1501010, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("你之前都在干嘛啊……为什么要等到现在……", 3, 1501003, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("当然要等你来做了。我是森林的朋友，怎么忍心伤害小鸟呢？", 5, 1501013, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("…………", 3, 1501003, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
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
                                                                                                    cm.eventSKill(0);
                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                    cm.forceCompleteQuest(37160);
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
};