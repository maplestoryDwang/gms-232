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
            cm.sendNormalTalk_Bottom("#face0#嗯？你是外地人吧。是第一次来塞尔提乌吗？", 36, 3004403, false, true);
            cm.openUI(1897)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("没错。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#嘿嘿，不介意让我这个老人家来为你简单说明一下吧？", 36, 3004403, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#圣地塞尔提乌由奉#b太阳神密特拉#k为主神的王室来统治。", 36, 3004403, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#因此，供奉着#b太阳神密特拉#k的北边王城，\r\n可以说既是王宫也是寺院。", 36, 3004403, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#广场西边有#b黎明之神尼罗塔#k的寺院，\r\n东边有#r火焰之神斯皮萨#k的寺院。", 36, 3004403, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#说是寺院，但大部分不过是挂了个名头。", 36, 3004403, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("（我想问问，来圣地前，遇到的那些家伙经历了什么。）", 56, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#原来是那些#r不信神者#k。", 36, 3004403, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("不信神者？", 56, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#都是对世界感到幻灭、失去信心的人。\r\n毕竟自从神谕消失后，已经过去很长的时间了，他们感到绝望也不是没有道理的……", 36, 3004403, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#我也真是的，在远道而来的客人面前，说话也太没分寸了。\r\n你不要太担心了。有王子殿下和守护者大人在，肯定没有问题的。", 36, 3004403, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.askYesNo_Bottom("#face0#行了，有句话说得好，百闻不如一见，既然到了圣地，就要亲眼看看圣地的模样。不如先去#b左侧的寺院#k看看吧？", 36, 3004403)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceStartQuest(37404, "");
                                                                cm.updateInfoQuest(37400, "01=h0;02=h0;11=h1;04=h1");
                                                                cm.OnStartNavigation(993140000, 1, "3004404", 37404);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37404.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -725, 30)
        } else {
            if (status === a++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -667, 5);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("嗅嗅……（好像有什么奇怪的味道。）", 57, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#欢迎光临，你是朝圣者吧？", 37, 3004404, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#最左边的是黎明与黄昏之神尼罗塔的寺院。\r\n据说是数百年前#b尼罗塔#k教团占领这里时所修建的。", 37, 3004404, true, true)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, -846, -87)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("（蓝色羽毛的纹样好像是#b黎明神尼罗塔#k象征。）", 57, 0, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, -725, 30)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#黎明祭司每天都在同一时间互相祈祷。\r\n因为他们相信所有人都有拥有一个#b尼罗塔#k。", 37, 3004404, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("如果是独身一人呢？", 57, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#听说每到那时，那些人就会去寻找积聚的水，看着水中自己的倒影来祈祷。", 37, 3004404, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("这样么……", 57, 0, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#听说现身的尼罗塔长得就像一头#b散发湛蓝光芒的鹿#k，真是美呆了。", 37, 3004404, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#听说在黎明时分，内心平和的人偶尔会看到它，运气好的话，还可以见到尼罗塔的真身。", 37, 3004404, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("哦！真的吗？", 57, 0, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#那是肯定的。听说只要专注地盯着，就能看到太阳从鹿角之间升起，如果这时候眨了眼，顷刻便会消失得无影无踪。", 37, 3004404, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#所以，黎明祭司才会练习努力不眨眼睛。\r\n说是坚持得越久，代表拥有的信念越强。", 37, 3004404, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("嗯……这就有些……奇怪……", 57, 0, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/blow", 100);
                                                                                                    cm.userSetFieldFloating(993140000, 3, 3, 5);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.userSetFieldFloating(993140000, 0, 0, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#……又来了。", 37, 3004442, false, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("发生了什么？", 57, 0, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#看来是火焰祭司在放烟火了。\r\n黎明祭司的听觉灵敏，对此尤其敏感。", 37, 3004404, true, true)
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
                                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                                    cm.forceCompleteQuest(37404);
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
                }
            }
        }
    }
};