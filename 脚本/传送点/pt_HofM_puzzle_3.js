function enter() {
    if (cm.getNumberFromQuestInfo(33965, "p3") > 0) {
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
                    cm.sendNormalTalk_Bottom(" 主人，到底还要再进去多深？", 37, 1540807, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("在我看来，应该已经差不多到了。", 37, 1540805, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("脚步声回声的间隔越来越短了，估计这幅壁画就是最后一幅了。\r\n#b(点击四散的石板，需要按照图片摆放正确位置。)", 37, 1540801, true, true)
                        } else {
                            if (status === a++) {
                                cm.mapleHeroJigsaw(0, 3, 1, [])
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(33965, "meso=16917;p0=1;p1=1;p2=1;p3=1;p=0;exp=102");
                                    cm.onSetBackEffect("light", 1, 1, 0, 0);
                                    cm.sendNormalTalk_Bottom("#face3#这是弗里德所看到的未来。", 37, 1540805, false, true);
                                    cm.forceForfeitQuest(49003)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face3#在和黑魔法师的战争之后，弗里德带着存活在阿斯旺的巫女看到了未来的景象。", 37, 1540805, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face3#未来的景象依然漆黑一片，这其中有一句非常明确的启示。", 37, 1540805, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face3# #r最后一战来临之际，摆脱桎梏的狼将吞噬世界树。", 37, 1540805, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face3#失去了故乡的阿斯旺巫女因恐惧而颤抖着，但是弗里德并没有放弃，将未来交给了我们。", 37, 1540805, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNewEffects(19, [1000])
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.userSetFieldFloating(350122600, 5, 5, 5);
                                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion10", 100);
                                                                cm.sendNormalTalk_Bottom("#face4#！！大家小心点！", 37, 1540801, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.userSetFieldFloating(350122600, 0, 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("刚刚的震动是怎么回事？", 37, 1540804, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face3#我也搞不清楚，但感觉像是这个遗迹对什么做出了反应。", 37, 1540805, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("这应该是龙神给你的信号吧，不是吗？", 37, 1540803, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.fieldEffect_PlayBGM("Bgm45.img/Army Of Fears Theme", 0, 0);
                                                                                        cm.sendNormalTalk_Bottom("等一下！后面传来了脚步声，正跑过来。", 37, 1540801, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("什么？！我什么都没听到啊？", 37, 1540805, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("人数呢？", 37, 1540804, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/ACT2_wolves/skeleton", "animation", "", ""], [1, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/Wolves", 100);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2850)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face4#数不清！虽然不知道是什么人，但我们最好抓紧。", 37, 1540801, false, true)
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