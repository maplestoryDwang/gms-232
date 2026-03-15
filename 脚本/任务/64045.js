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
            cm.dispose()
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
            cm.setInGameDirectionMode(true, false, true);
            cm.forceCompleteQuest(64045);
            cm.inGameDirectionEvent_AskAnswerTime(500);
            cm.gainItem(4036384, -50)
        } else {
            if (status === a++) {
                cm.npc_setForceFlip("oid=3707792", 1);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.npc_SetForceMove("oid=3707792", 1, 110, 50);
                    cm.npc_setForceFlip("oid=3707793", 1);
                    cm.npc_setForceFlip("oid=3707794", 1);
                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/open", 128);
                        cm.onSetBackEffect("door", 1, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(250)
                    } else {
                        if (status === a++) {
                            cm.npc_ChangeController(9400597, "oid=3707903", 858, -45, 1, 808, 908, 1, true, false);
                            cm.npc_SetSpecialAction("oid=3707903", "summon", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#咳咳，都收集来了？我看看", 37, 9400597, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#嗯……不错！你们不愧是猎人~！咦，可汗村长眼睛怎么肿了？", 37, 9400597, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#……现在可以收留我们了吗？", 37, 9400587, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#咳嗯~~~咳！且慢！", 37, 9400597, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/close", 128);
                                                    cm.onSetBackEffect("door", 1, 1, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.npc_LeaveField("oid=3707903");
                                                        cm.npc_LeaveField("oid=3707903");
                                                        cm.npc_setForceFlip("oid=3707799", 1);
                                                        cm.npc_SetForceMove("oid=3707799", 1, 850, 100);
                                                        cm.sendNormalTalk_Bottom("#face0#有种不妙的预感。", 37, 9400582, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face4#这人……真没教养。", 37, 9400580, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#b……得趁夜幕降临之前赶紧进去啊……", 57, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(5000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/open", 128);
                                                                        cm.onSetBackEffect("door", 1, 0, 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(250)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.npc_ChangeController(9400597, "oid=3708086", 858, -45, 1, 808, 908, 1, true, false);
                                                                            cm.npc_SetSpecialAction("oid=3708086", "summon", 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#我看了一下，我们这儿没地方给你们睡啊？", 37, 9400597, false, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#夜晚这么寒冷，总得在地上铺点什么才行吧？咳咳", 37, 9400597, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#你们去收集些狼人的厚实毛发，弄到了我就让你们进来。", 37, 9400597, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#……你这是在得寸进尺吗？", 37, 9400587, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#你有没有点人性？大难当头，就只顾自己保命！！！！！！！", 37, 9400587, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.npc_setForceFlip("oid=3707794", 1);
                                                                                                    cm.npc_SetForceMove("oid=3707794", 1, 270, 80);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face4#……可汗村长，我也很气愤……但现在不是发火的时候。", 37, 9400580, false, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face4#你们彼此斗了那么久，自然不可能因为有了共同的敌人，就一下子变得和睦起来。如果想改善相互的关系，我们就必须拿出和之前不同的态度来。", 37, 9400580, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face4#像现在这样意气用事的话……", 37, 9400580, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#说得对……艾丽卡学者的话很有道理。", 37, 9400589, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#目前这种不和睦，也是我们自己造成的，不能全怪他们。", 37, 9400589, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#眼下他们抱着这样不友好的态度，如果我们也同样予以回击，就无法指望有任何改变。", 37, 9400589, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#咳~~！", 37, 9400597, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#……", 37, 9400587, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#我说，斯巴乐缇村长，你真有心收留我们吗？", 37, 9400589, true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#嘁，这还用问吗？！真无语，你的意思是我现在在撒谎耍你们？", 37, 9400597, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#知道了。只要你真有心，我们去收集狼人毛发，这次希望你遵守约定。", 37, 9400589, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#咳咳，好。", 37, 9400597, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/close", 128);
                                                                                                                                                            cm.onSetBackEffect("door", 1, 1, 0, 0);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.npc_LeaveField("oid=3708086");
                                                                                                                                                                cm.npc_LeaveField("oid=3708086");
                                                                                                                                                                cm.npc_setForceFlip("oid=3707799", -1);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#……", 37, 9400587, false, true)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#唉-。", 37, 9400581, true, true)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#骑士们已经很辛苦了，先歇会儿吧。我去收集。", 37, 9400589, true, true)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#b我也一起去！", 57, 0, true, true)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.warp(867201160, 0);
                                                                                                                                                                                            cm.forceStartQuest(64047, "");
                                                                                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                            cm.npc_LeaveField("oid=3707792");
                                                                                                                                                                                            cm.npc_LeaveField("oid=3707792");
                                                                                                                                                                                            cm.npc_LeaveField("oid=3707793");
                                                                                                                                                                                            cm.npc_LeaveField("oid=3707793");
                                                                                                                                                                                            cm.npc_LeaveField("oid=3707794");
                                                                                                                                                                                            cm.npc_LeaveField("oid=3707794");
                                                                                                                                                                                            cm.npc_LeaveField("oid=3707795");
                                                                                                                                                                                            cm.npc_LeaveField("oid=3707795");
                                                                                                                                                                                            cm.npc_LeaveField("oid=3707796");
                                                                                                                                                                                            cm.npc_LeaveField("oid=3707796");
                                                                                                                                                                                            cm.npc_LeaveField("oid=3707797");
                                                                                                                                                                                            cm.npc_LeaveField("oid=3707797");
                                                                                                                                                                                            cm.npc_LeaveField("oid=3707798");
                                                                                                                                                                                            cm.npc_LeaveField("oid=3707798");
                                                                                                                                                                                            cm.npc_LeaveField("oid=3707799");
                                                                                                                                                                                            cm.npc_LeaveField("oid=3707799");
                                                                                                                                                                                            cm.npc_LeaveField("oid=3707800");
                                                                                                                                                                                            cm.npc_LeaveField("oid=3707800");
                                                                                                                                                                                            cm.npc_LeaveField("oid=3707801");
                                                                                                                                                                                            cm.npc_LeaveField("oid=3707801");
                                                                                                                                                                                            cm.npc_LeaveField("oid=3707802");
                                                                                                                                                                                            cm.npc_LeaveField("oid=3707802");
                                                                                                                                                                                            cm.npc_LeaveField("oid=3707803");
                                                                                                                                                                                            cm.npc_LeaveField("oid=3707803");
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
};