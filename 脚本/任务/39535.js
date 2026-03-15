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
            cm.askAcceptDecline_Bottom("#face0#我绝对不是怪物，如果你难以答应我的请求，\r\n还请至少听我说说我的故事。", 36, 3001655)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face12#既然你如此苦苦哀求……\r\n那我就姑且听你说说看好了，我可没答应你的请求哦！", 36, 3001674 + cm.getPlayer().getGender(), false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#呼……谢谢你，所以说……我到底该从何说起呢。\r\n请给我点时间，让我梳理一下。", 36, 3001655, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(39535, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39535.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.fieldEffect_Hero9(0, 2000);
            cm.inGameDirectionEvent_AskAnswerTime(2300)
        } else {
            if (status === a++) {
                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                cm.fieldEffect_Hero9(100, 500);
                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                cm.inGameDirectionEvent_AskAnswerTime(1600)
            } else {
                if (status === a++) {
                    cm.fieldEffect_PlayBGM("Bgm53/CreepyTemple", 0, 0);
                    cm.sendNormalTalk_Bottom("#face0#那已经是几个月前的事了，\r\n在那个山体动摇、河水倒流的大事件发生的几天前。", 36, 3001655, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#（这个话题……有点让人心里一惊啊！）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我竟然随随便便就丢掉了我的手指甲和脚趾甲，\r\n那个亦师亦父的人明明曾经叮嘱过来着。", 36, 3001655, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face7#这是什么意思？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_ProcessOnOffLayer("12", "Effect/Direction9.img/HoyoungStory/12", 0, 1000, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#我们村里有这样一条口口相传的民俗，说是不能随便乱扔手指甲和脚趾甲，\r\n听说若是被那鼠精吃掉，你的脸就会消失不见。", 36, 3001655, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#然后鼠精的脸会变成你的样貌……", 36, 3001655, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face7#这好像和我所知道的故事有点不一样啊……不对，等一下，\r\n你说你的脸被老鼠夺走了？这么说难道你是……", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_ProcessOnOffLayer("12", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("13", "Effect/Direction9.img/HoyoungStory/13", 0, 1000, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#我是俊秀法师，亲口说自己长相俊秀确实有点奇怪，\r\n不过自从大家都这么叫我之后，这个名头就固定下来了。", 36, 3001655, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face3#如此德高望重的法师居然就因为这被莫名其妙地摆了一道？\r\n真叫人不禁扼腕叹息啊。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#那真的只是片刻犯下的极小失误，可代价却是残酷的，\r\n如今我失去了力量，历经各种辛苦磨难……", 36, 3001655, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#当然……管你理解不理解。", 36, 3001651, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face5##fc0xFFbfbfbf#（噗！）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.fieldEffect_ProcessOnOffLayer("13", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                cm.fieldEffect_ProcessOnOffLayer("14", "Effect/Direction9.img/HoyoungStory/14", 0, 1000, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#总之我就这样失去了自己的脸，几天来只能躲在寺院仓库里度日。\r\n正当我后悔不已之际，我想起了大师曾经说过的话。", 36, 3001655, false, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.fieldEffect_ProcessOnOffLayer("14", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                        cm.fieldEffect_ProcessOnOffLayer("15", "Effect/Direction9.img/HoyoungStory/15", 0, 1000, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#这是一种应对这怪物的方法，让变幻人形的鼠精吐出手指甲和脚趾甲，\r\n就能让我重新找回我的脸。", 36, 3001655, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.fieldEffect_ProcessOnOffLayer("15", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                cm.fieldEffect_ProcessOnOffLayer("16", "Effect/Direction9.img/HoyoungStory/16", 0, 1000, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#回想起这句话之后，我就去找了那个在法堂里扮成我的样子的老鼠，\r\n不过奇怪的是，鼠精已经变得异常强大，强大到我都奈何不了它。", 36, 3001655, false, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face2#你说老鼠它……变强了？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.fieldEffect_ProcessOnOffLayer("16", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#然后接下来的事，我相信道士你一定很清楚了，\r\n我虽然竭尽全力想要除掉驱邪人偶，可因力量被夺走，实在是……", 36, 3001655, false, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#这个剧情……总感觉好像能猜出一二来啊！？\r\n稍微等一等，我得先进行一下内心的对话。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#你该不会是想要逃吧？", 36, 3001655, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#鼠精确实只能算是个小怪，就算失去了力量，\r\n法师也绝对可以一个人对付那个家伙。", 36, 3001651, false, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#如此说来难道……", 36, 3001651, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face2#如果从饕餮肚子里出来的怪物……附在了鼠精身上？\r\n然后又给了鼠精力量！？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face1##fc0xFF25f1ca#放肆……居然抢了我饕餮的台词！", 36, 3001651, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face7#你肚子里的怪物中就没有那种家伙吗？\r\n比方说会吸收精气？又或者让宿主变得更强的！？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#说起这种角色……我倒是想到有那么一个。", 36, 3001651, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（饕餮说肯定是跳蚤怪，它说跳蚤怪能分裂成许多只，\r\n吸收其他生物的精气，并分给宿主。）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face11#……哦，是这样啊，我收下了。", 36, 3001674 + cm.getPlayer().getGender(), false, true)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.fieldEffect_Hero9(0, 2000);
                                                                                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1300)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                            cm.fieldEffect_Hero9(100, 500);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.fieldEffect_PlayBGM("Bgm53/CheongUn", 0, 0);
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#这，这么说你愿意帮我吗！？", 36, 3001655, false, true)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face8#吓、吓我一跳！", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#对，对不起，我并无此意。", 36, 3001655, true, true)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face11#你应该就是想要求我打倒那只鼠精，拯救村庄吧，\r\n情况我已经明白了，不过我还没有确定要不要帮你的忙。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#什么？", 36, 3001655, true, true)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#唔……", 36, 3001651, true, true)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face2#也给我点时间做决定嘛！搞不好这会是一个需要豁出性命的委托嘛？\r\n这种事总不能轻轻松松就决定吧！？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（……虽然说要为委托豁出性命可能有点夸张了。）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#话虽如此，不过……", 36, 3001655, true, true)
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#这个家伙……你到底在犹豫什么！？", 36, 3001651, true, true)
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                            cm.forceCompleteQuest(39535);
                                                                                                                                                                                                                            cm.gainExp(3919);
                                                                                                                                                                                                                            cm.gainExp(1646);
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