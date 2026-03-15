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
            cm.sendNormalTalk_Bottom("#face3#(没一个想跟我一组……呃……好想回家啊……)", 37, 3001351, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#主人，是不是因为没人跟主人一队，所以有些失望悲观了？", 37, 3001300, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face4#你搞什么，利奥………我没给你配备解读人心的功能啊……", 37, 3001351, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#看来你忘了我拥有通过面部肌肉感知对方情绪的技术了。", 37, 3001300, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#打起精神来。你用普普通通的金属碎片制造出那么多像我一样的机器人，这点小事一定也难不倒你。", 37, 3001300, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face3#那个……这对我来说……并不容易……", 37, 3001351, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#别这样，快去跟教室里的其他同学对话吧。", 37, 3001300, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face3#还不如让我学习呢……", 37, 3001351, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(34804, "");
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
            cm.sendNormalTalk("……", 3, 3001314, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你好？你为什么站在那里？", 1, 3001314, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯？啊，那个……", 3, 3001314, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("你想说什么吗？", 1, 3001314, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("不，不是的……", 3, 3001314, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(34804, "gossip=1;NpcSpeech=30013141");
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function stage1(d, c, b) {
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
            cm.sendNormalTalk("啊，你好？", 3, 3001315, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯。你好。", 1, 3001315, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("那个……你要和我一队吗？", 3, 3001315, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("啊，抱歉。我已经有同伴了。", 1, 3001315, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("啊……原来如此……", 3, 3001315, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(34804, "gossip=1;NpcSpeech=30013141/30013152");
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function stage2(d, c, b) {
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
            cm.sendNormalTalk("新来的学生？你好。", 1, 3001316, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("那个……", 3, 3001316, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯？你有话要说吗？", 1, 3001316, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("那个……", 3, 3001316, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("？？？", 1, 3001316, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("嗯……", 3, 3001316, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("你忘记想说的话了吗？", 1, 3001316, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("不，不是的，什么也……", 3, 3001316, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.updateInfoQuest(34804, "gossip=1;NpcSpeech=30013141/30013152/30013163");
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

function stage3(d, c, b) {
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
            cm.sendNormalTalk("就是……你要……和我一队……吗？", 3, 3001317, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯？听不清。", 1, 3001317, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你要……和我……", 3, 3001317, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("同样的……什么？", 1, 3001317, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("什么也没有！", 3, 3001317, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(34804, "gossip=1;NpcSpeech=30013141/30013152/30013163/30013174");
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function stage4(d, c, b) {
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
            cm.sendNormalTalk("你好，那个……", 3, 3001318, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你是新来的？你好～", 1, 3001318, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你要……和我一队吗……？", 3, 3001318, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我听说你也不擅长魔法？真的吗？", 1, 3001318, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("啊……那个……虽然不是做不到……", 3, 3001318, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("抱歉……我还是问一下其他人好了……", 1, 3001318, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("嗯……", 3, 3001318, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(34804, "gossip=1;NpcSpeech=30013141/30013152/30013163/30013174/30013185");
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

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 450, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 563, -158);
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#嗯？怎么可能！你说被拒绝了？？", 37, 3001300, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#看来你还没理解。我总不能把所有学生问个遍吧，别这样，快再试试……", 37, 3001300, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face3#利奥……有些事情再努力也没用……还是……放弃吧……", 37, 3001351, true, true)
                            } else {
                                if (status === a++) {
                                    cm.npc_ChangeController(3001307, "oid=10183726", -50, 53, 35, -100, 0, 0, true, false);
                                    cm.npc_SetSpecialAction("oid=10183726", "summon", 0, 0);
                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 1500, 2000, 370, 0)
                                } else {
                                    if (status === a++) {
                                        cm.npc_SetForceMove("oid=10183726", 1, 300, 150);
                                        cm.inGameDirectionEvent_AskAnswerTime(2500)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#喂，莫里奥！", 37, 3001307, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#你好！迪恩！", 37, 3001310, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#你有同伴？", 37, 3001307, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face1#同伴？还没找到！要不要跟我一组？", 37, 3001310, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face1#不是啦~~~我有同伴~~~噗哈哈！", 37, 3001307, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face1#我问过了~！那我走了~！", 37, 3001307, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face2#什、什么？", 37, 3001310, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#那家伙难道也被耍了……嘻嘻……", 37, 3001310, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                cm.npc_LeaveField("oid=10183726");
                                                                                cm.npc_LeaveField("oid=10183726");
                                                                                cm.forceCompleteQuest(34858);
                                                                                cm.npc_ChangeController(3001310, "oid=10184050", 502, -105, 2, 452, 552, 0, true, false);
                                                                                cm.npc_SetSpecialAction("oid=10184050", "summon", 0, 0);
                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                cm.inGameDirectionEvent_PushScaleInfo(1000, 1500, 1000, 370, -50)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#那个，现在好像只剩下我和你了。", 37, 3001310, false, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face5#(啊！？你是在跟我说话吗？)", 37, 3001351, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#你好像只能跟我一组了，没关系吗？", 37, 3001310, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face5#嗯、嗯！好！", 37, 3001351, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face1#你，看来就是今天新来的那个？你好，我是#b莫里奥#k。", 37, 3001310, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face5#嗯，我是伊利温……", 37, 3001351, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                cm.sendNormalTalk_Bottom("#face0#你好，我是伊利温主人的第13号物品#b利奥#k。伊利温主人在11岁时制造了我，距离最后一次更新已经……", 37, 3001300, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face3#利奥……", 37, 3001351, true, true)
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
                                                                                                                                    cm.npc_LeaveField("oid=10184050");
                                                                                                                                    cm.npc_LeaveField("oid=10184050");
                                                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.setStandAloneMode(false);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.forceCompleteQuest(34804);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.updateInfoQuest(34804, "gossip=1;NpcSpeech=30013141/30013152/30013163/30013174/30013185;exp=1");
                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                cm.setPartner(1, 3001310, 80002331, 0);
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
};