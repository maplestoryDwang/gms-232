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
            cm.sendNormalTalk_Bottom("#face2#等一下，在帮助你们之前，我有个条件。", 36, 2052009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#什么条件啊？", 36, 2052000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#有一些平时欺负我的朋友，\r\n那些人不仅跟我开玩笑，还借走了一些我的东西……", 36, 2052009, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#让我们帮忙找回来吗？\r\n不过要是引发骚乱，让白外星博士发现了，可就难办了。", 36, 2052000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#别担心，我会把通讯设备关掉的。", 36, 2052009, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#你还真是动真格的嘛……", 36, 2052000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face2#那个东西就是手办……", 36, 2052003, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#别误会~那是我在认识阿琳之前收集的~\r\n现在~我是痴心只为一人！我！爱！你！宋！琳！儿！", 36, 2052009, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#哈哈哈……", 36, 2052004, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#果然外星人的审美观念与众不同啊。", 36, 2052001, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face1#你这是什么意思~？", 36, 2052004, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.askYesNo_Bottom("#face2#那能请你们去#b走廊101#k，从#b白外星人卫兵#k那里帮我找回#b10个手办#k吗？", 36, 2052009)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceStartQuest(3482, "");
                                                            cm.sendNormalTalk_Bottom("#face0#好，出发~", 36, 2052009, false, false)
                                                        } else {
                                                            if (status === a++) {
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
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -495, -283);
            cm.sendNormalTalk_Bottom("#face2#手办都已经拿回来了，你还真是没少买啊。", 36, 2052000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#辛苦了，我去把它们放回房间里，稍等我一下。", 36, 2052009, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#是吗？那就在宅宅回来之前，稍微喘口气吧？", 36, 2052000, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(3482);
                        cm.gainExp(11004938);
                        cm.curNodeEventEnd(true);
                        cm.setInGameDirectionMode(true, false, true);
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                        cm.gainItem(4036073, -10)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(3000)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                cm.sendNormalTalk_Bottom("#face0#阿哲，私人线路连上了。", 37, 2052006, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#是，博士您请说。", 37, 2052000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face2#咦？串线了吗？博士？我也能听到啊？能听到我说话吗？", 37, 2052004, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#阿哲，我们的#b万能牌#k怎么样了？", 37, 2052006, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#很不错，能够立刻就派上用场。\r\n不过在#b更换队员#k之后，是否能够很好地融入团队，就有待观察了。\r\n毕竟团队协作也是很重要的。", 37, 2052000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face2##r更，更换队员？#k谁啊？", 37, 2052004, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#通过此次作战应该就能知道他是否能很好地融入团队了，\r\n那我就先中断通信了。", 37, 2052006, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face5#这个人要和我们之中的谁替换？", 37, 2052004, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face5#既然……已经提前准备了#b正式徽章#k，那看样子应该不是我……", 37, 2052004, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face5#哎~哟……总觉得不太喜欢……", 37, 2052004, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.fieldEffect_PlayBGM("Bgm47/DancesWithAliens", 0, 0);
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("阿琳？琳儿？宅宅说要出发了啊？", 57, 0, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face3#我也知道的！哼！", 37, 2052004, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("？？？", 57, 0, true, true)
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
};