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
            cm.sendNormalTalk_Bottom("#face2#你是那个恐怖分子？嗯？对我们公司有什么仇什么怨？！", 36, 3004002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#是垃圾场那帮家伙派你来的？还是黑市的那帮人？\r\n究竟是谁？谁派你来的？", 36, 3004002, true, true)
            } else {
                if (status === a++) {
                    cm.askMenu_Bottom("我只是……\r\n\r\n#b#L0# 我来参加免费观光的。#l\r\n#L1# 什么话也不说。#l", 56, 3004031)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#他好像没撒谎，他身上带着这个。", 36, 3004014, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#嗯？这不是我们旅行社的传单吗？", 36, 3004002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#那是怎么回事？嗯？你既然是来观光的，为什么发射飞弹？", 36, 3004002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("事情不是你们想的那样……（说明情况。）", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#嗯？", 36, 3004002, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#看来没有撒谎……", 36, 3004002, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#（窃窃私语）重点应该是他身上能不能榨得出钱财吧？", 36, 3004014, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#咳，说到这个……他不像是穷光蛋……", 36, 3004002, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("？？", 56, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face1#哎呀呀，你这一路上吓坏了吧。", 36, 3004002, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face1#怪我们的人眼拙，没看出你是前来观光的客人，多有冒犯。\r\n来，请坐，办公室比较简陋，你不要嫌弃，嘿嘿。", 36, 3004002, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("哈？啊……。", 56, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#你来到我们豪华观光办公室，是明智的选择。", 36, 3004002, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face1#从别具#g（放射能）#k风味的高级料理！\r\n无所不有的#g（非法武器）#k地区市场！\r\n到翠绿色#g（污染的）#k海洋！", 36, 3004002, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#你将经历一次非~常梦幻的旅行。\r\n本人只需负担少许费用即可，嘿嘿嘿。", 36, 3004002, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("要缴纳费用？", 56, 0, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1#来，先看看费用清单。", 36, 3004002, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face1#你看啊~\r\n首先观光税1亿2千金币，导游费，客房保证金2亿金币，\r\n便利物品租金1亿金币，观光手续费2亿等等……", 36, 3004002, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face1#零零碎碎全加在一起~#b共计27亿金币#k。", 36, 3004002, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("20……7亿金币？！！", 56, 0, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#老大，你忘记加上维修费了。", 36, 3004014, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face1#啊，对对~", 36, 3004002, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face1#我算下~外墙工程费3亿金币，打碎的家具器物重新购买费用2亿金币，施工期间办公室搬迁费1亿5千金币，迁去的办公室租金每月5千万金币，3个月需要1亿5千万金币……", 36, 3004002, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face1#最后还要算上办公室里置备的偶像手办收藏品，以及为治疗全体社员所受到的精神打击，安排金海滩特级度假村休养费用3亿金币x7个人~", 36, 3004002, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face1#共计#b45亿金币#k~", 36, 3004002, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.emotion(18, 4000);
                                                                                                                            cm.sendNormalTalk_Bottom("哈哈……", 56, 0, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face1#呵呵，你该不会不认账吧？", 36, 3004002, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#万一真是如此……", 36, 3004002, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face2#那~可不太好办……", 36, 3004002, true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#要我们出面吗，代表？", 36, 3004014, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.askMenu_Bottom("总共72亿金币。要付钱吗？\r\n\r\n#b#L0# 绝对不付！！#l\r\n#L1# 付钱。#l#k", 56, 3004031)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("我绝对不会付钱的！！", 56, 0, false, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face2#他说不付钱。兄弟们，给他上堂社会教育课。", 36, 3004002, true, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#是，老大！！啊不，是代表！！", 36, 3004014, true, true)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.dispose();
                                                                                                                                                                cm.warp(940203250, 0)
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.setStandAloneMode(true);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -40, 120);
            cm.inGameDirectionEvent_ForcedFlip(1);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#哎呦喂……疼死我了……", 37, 3004014, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face3#这家伙……看着文文弱弱的，咋这么厉害……", 37, 3004002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face3#既，既然如此……", 37, 3004002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#我要把住院费和赔偿金也一并讨了！！", 37, 3004002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/door_open", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("嗯？", 57, 0, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_PlayBGM("Bgm47/TheTuneOfAzureLight2", 0, 0);
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction21.img/SavageT/illust/0", 0, 3000, 0, -80, 12, 4, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(3500)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face1#哎呀……你们在开派对吗？", 37, 3004001, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face3#你又是来干嘛的？", 37, 3004002, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#你们好，我叫#b塞妮娅#k。", 37, 3004001, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.npc_ChangeController(3004001, "oid=7082751", 160, 100, 4, 110, 210, 1, true, false);
                                                                            cm.npc_SetSpecialAction("oid=7082751", "summon", 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 1000, 0, 0, 0, 0, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                    cm.effect_Text(["#fn黑体##fs18#稍后……"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0])
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.fieldEffect_PlayBGM("Bgm47/SavageTerminal", 0, 0);
                                                                                                cm.sendNormalTalk_Bottom("（这什么情况……）", 57, 0, false, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("（弄不好少女可能会无辜受伤，先静观其变吧。）", 57, 0, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#代表，这个圆滚滚的是逃生船。\r\n是从刚才坠毁的飞机上分离出来的，非常值钱。\r\n估计坠毁的飞机造价也相当惊人。", 37, 3004014, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#肯定是哪里出了严重故障。\r\n机舱里哐哐哐地发出了很大的声音。", 37, 3004001, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#嗯……既然是昂贵的飞艇，部件应该也很贵吧？", 37, 3004002, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#比起飞艇，我更担心飞艇里运载的物品是否损坏。\r\n那些物品非常重要……", 37, 3004001, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#重要物品？你说那些东西非常重要？", 37, 3004002, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#重要的？", 37, 3004014, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#贵重的？", 37, 3004002, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#昂贵的？", 37, 3004014, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#值钱的？", 37, 3004002, true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("真是一唱一和……", 57, 0, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/scanner_stand", 100);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#老大，我们追踪到坠落的飞艇所在位置了。\r\n当前位置在垃圾场。", 37, 3004014, false, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#什么？那里不是那帮乞丐的地盘吗。这怎么办？", 37, 3004002, true, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#老大，如此这般的话……（嘀嘀咕咕）\r\n那家伙好像挺能打的（嘀嘀咕咕）", 37, 3004014, true, true)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#嗯嗯~~嗯~~可以。噢，这主意不错。", 37, 3004002, true, true)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.updateInfoQuest(37102, "play=1;MPclear=1");
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face01#哎，先来的客人？", 37, 3004002, false, true)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("我……吗？有种不妙的预感……", 57, 0, true, true)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face1#我看你似乎挺有能耐的，\r\n可以帮忙找回塞妮娅丢失的物品吗？", 37, 3004002, true, true)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("啊？我为什么要……", 57, 0, true, true)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#是你把飞艇击落了啊！\r\n你给我们，还有这位美女，都造成了很大麻烦，既然犯了事情，得负起责任吧！", 37, 3004002, true, true)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("额，话倒没错……", 57, 0, true, true)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face2#那位朋友会帮我找回东西吗？哇~太感谢了。", 37, 3004001, true, true)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("（这位美女好像完全搞不清情况啊……）", 57, 0, true, true)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#你要是拒绝，这位美女可能会有更大麻烦，那样也不要紧吗？", 37, 3004002, true, true)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#可能会非~常不好过哦~", 37, 3004014, true, true)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("（呃……怎么办？）", 57, 0, true, true)
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                    cm.askYesNo_Bottom("暂且先按他们说的做吧？", 57, 3004031)
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#你的决定很明智，哈哈。", 37, 3004002, false, true)
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#行，那我们去喝杯茶吧？\r\n顺便聊聊那值钱……不，是贵重的物品。", 37, 3004002, true, true)
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#哦~好的呀！", 37, 3004001, true, true)
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("……", 57, 0, true, true)
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                        cm.dispose();
                                                                                                                                                                                                                                        cm.gainExp(18974824);
                                                                                                                                                                                                                                        cm.warp(402000000, 9);
                                                                                                                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                        cm.setStandAloneMode(false);
                                                                                                                                                                                                                                        cm.npc_LeaveField("oid=7082751");
                                                                                                                                                                                                                                        cm.npc_LeaveField("oid=7082751");
                                                                                                                                                                                                                                        cm.updateInfoQuest(37100, "31=h0;32=h0;dir=off");
                                                                                                                                                                                                                                        cm.updateInfoQuest(37100, "31=h0;32=h0;33=h0;dir=off");
                                                                                                                                                                                                                                        cm.forceCompleteQuest(37102)
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }
                                                                                                                                                                                                        }
                                                                                                                                                                                                    }
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
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