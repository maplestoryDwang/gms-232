var status = -1;

function start(e, d, c) {
    if (e === 0) {
        status--
    } else {
        status++
    }
    if (cm.getPlayerStat("GENDER") == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            cm.sendNormalTalk_Bottom("哎哟？这种地方居然有猫，喵喵啊，这里现在很危险的。", 37, a, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("#face4#喵！！", 37, 1531003, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("让我瞧瞧……你，还是小朋友啊。", 37, a, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("#face5#哈-！！！", 37, 1531003, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("哎哟呵？你现在这是在发火吗？你这个小不点，你是没了妈妈吗？", 37, a, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("#face5#啊！！！！！！", 37, 1531003, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("哈哈，不过你看上去还挺有韧性的嘛，我看你也无处可去了，跟我走吧？", 37, a, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("#face4#……喵呜！", 37, 1531003, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk_Bottom("好吧，既然你是黑色的……内罗！内罗怎么样？", 37, a, true, true)
                                        } else {
                                            if (status === b++) {
                                                cm.sendNormalTalk_Bottom("#face4#…………", 37, 1531003, true, true)
                                            } else {
                                                if (status === b++) {
                                                    cm.sendNormalTalk_Bottom("#face2#你说你特别喜欢？你也不想想这是谁起的，这是当然的咯。", 37, a, true, true)
                                                } else {
                                                    if (status === b++) {
                                                        cm.sendNormalTalk_Bottom("#face4#……喵……", 37, 1531003, true, true)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.askYesNo_Bottom("#b(带回去吧？)#k", 37, a)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.sendNormalTalk_Bottom("#b(赶紧回到杰那里。)#k", 37, a, false, true)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.updateInfoQuest(22700, "V01=1;V02=1;q21end=0;coNight=1;kinetuto=1;E1=1;kinetuto2=1;blackCat=2;E2=1;E3=1");
                                                                    cm.forceStartQuest(22729, "");
                                                                    cm.setPartner(1, 1531003, 80001789, 0);
                                                                    cm.npc_LeaveField("oid=1524362");
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

function end(e, d, c) {
    if (e === 0) {
        status--
    } else {
        status++
    }
    if (cm.getPlayerStat("GENDER") == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            cm.sendNormalTalk_Bottom("赶紧过来……等等，你后面那是什么？", 37, 1531001, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("#face4#喵！", 37, 1531003, true, true)
            } else {
                if (status === b++) {
                    cm.curNodeEventEnd(true);
                    cm.setInGameDirectionMode(true, false, true);
                    cm.setStandAloneMode(true);
                    cm.fieldEffect_PlayBGM("Bgm38.img/LifeIsComedy", 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("额！……猫……甚至还是只野猫。\r\n肯定浑身都是细菌和病毒……跳……！说不定还有跳蚤和虱子！\r\n你怎么会带了只野猫回来，多危险啊！赶紧给送回去。", 37, 1531001, false, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("啊-！冷静点，杰，你瞧瞧这个小不点的脚，它这么小一只，在那么危险的地方还能逃得出去吗？我要是送它回去它会死的。", 37, a, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("#face4#喵！", 37, 1531003, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("#face2#你瞧瞧，这家伙也说是啊，你要摸摸它的脚掌嘛？软乎乎的呢？", 37, a, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("#face5#额……啊，不要！\r\n总之我知道了，我知道了，不要离我太近。", 37, 1531001, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk_Bottom("#face5#你为什么……为什么要把那么危险的生物带回来？\r\n我不是让你去带来可以分析怪物的资料嘛。", 37, 1531001, true, true)
                                        } else {
                                            if (status === b++) {
                                                cm.sendNormalTalk_Bottom("#face2#啊，提起这个，在这里。", 37, a, true, true)
                                            } else {
                                                if (status === b++) {
                                                    cm.sendNormalTalk_Bottom("#face6#……那是什么，灰尘？！\r\n这，这个天底下我最讨厌的就是灰尘了。", 37, 1531001, true, true)
                                                } else {
                                                    if (status === b++) {
                                                        cm.sendNormalTalk_Bottom("#face8#站住，就在那里，不要再靠近了。\r\n你要是靠过来，我就把这些资料全都初始化。", 37, 1531001, true, true)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.sendNormalTalk_Bottom("#face2#来，我想让你再靠近一点看嘛。", 37, a, true, true)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.sendNormalTalk_Bottom("#face7##fs30#凯内西斯~~~！！！", 37, 1531001, true, true)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                } else {
                                                                    if (status === b++) {
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                    } else {
                                                                        if (status === b++) {
                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                        } else {
                                                                            if (status === b++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                            } else {
                                                                                if (status === b++) {
                                                                                    cm.effect_Text(["#fn黑体##fs18#第二天,  据点"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0, 0]);
                                                                                    cm.forceCompleteQuest(22729);
                                                                                    cm.gainExp(750);
                                                                                    cm.setStandAloneMode(false);
                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                    cm.gainItem(4034602, -10);
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
};