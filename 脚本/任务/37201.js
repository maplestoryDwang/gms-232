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
            cm.sendNormalTalk("喳喳！！", 4, 3004150, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你好，#h0#，\r\n我叫摩柯，我们好久没见了吧？", 4, 3004150, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这场与堕落超越者#r黑魔法师#k之间关于世界兴亡的大战终于落下了帷幕。", 4, 3004150, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("那你难道就不好奇黑魔法师消亡之后的故事是什么样的吗？\r\n\r\n#r（※接受时将前往活动地图。） \r\n（※包含泰涅布里斯黎曼地区之后的剧情。）\r\n（※建议打开背景音乐进行。)", 4, 3004150)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("来，那就从#r决战当天#k开始一起看看吧？", 4, 3004150, false, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(100295, "rMap=" + cm.getMapId());
                                cm.dispose();
                                cm.warp(993110781, 0, false)
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
            cm.sendNormalTalk_Bottom("#face0#啊，勇士大人！近来没什么异常吧？", 36, 3003652, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("沃莉过得还好吧？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我吗？我很忙，\r\n眼下正忙着战后重建，没有片刻闲暇。", 36, 3003652, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("还没结束吗？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#毕竟要处理的事情实在太多了，人手有些不太够。", 36, 3003652, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#既要在埃斯佩拉附近搜索，又要追踪消失的军团长们，还得继续讨伐黑魔法师死后四散的怪物，眼下真是捉襟见肘啊。", 36, 3003652, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("这样啊。（啊，南哈特也刚好在左手边。）", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face3#（悄声耳语）如果准备去见南哈特，我劝你还是小心为妙，眼下他正在气头上呢。", 36, 3003652, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("？？", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#总之，很高兴见到你，勇士大人！", 36, 3003652, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.updateInfoQuest(37201, "NpcSpeech=30042021");
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
            cm.sendNormalTalk_Bottom("#face2#您来了啊？", 36, 1540451, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("（南哈特看起来憔悴了不少。）不知道这次是因为什么事情召我前来？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2##h0#，你身上有钱吗？眼下骑士团的财政状况糟糕，就要濒临破产了。", 36, 1540451, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("什么？怎么会……？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#你说……怎么会？", 36, 1540451, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#……真奇怪，什么叫怎么会？", 36, 1540451, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("？？", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face2#怎么不会不缺钱？你以为战争是不花钱的吗？那么多的军舰到底是由谁出资建造的？", 36, 1540451, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("啊……", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face2#何止军舰，你以为那些士兵都是没有报酬的吗？\r\n他们的军饷、医疗费、抚恤金又要如何发放？食物呢？装备呢？燃料费呢？维修费呢？弹药费呢？对了！那个舰炮！你知道一发舰炮要花多少钱吗？", 36, 1540451, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("冷，冷静点。", 56, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face2#每一发舰炮到底需要花费多少……！！！", 36, 1540451, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face2#……", 36, 1540451, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face2#呼……对不起，\r\n一整天光顾着应付债主，我也有些神经质了。", 36, 1540451, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("那真的是为了钱才叫我过来的吗？", 56, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face2#啊，我那是出于郁闷随口说说的，\r\n之所以会叫#h0#你过来，是为了组建特殊小组，执行特别的任务。", 36, 1540451, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("特殊小组？", 56, 0, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face2#详细的情况你最好听女皇陛下解释，\r\n她就在我左手边。", 36, 1540451, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.updateInfoQuest(37201, "NpcSpeech=30042021/30042032");
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
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("#face4##h0#，近来可好啊？", 36, 3003750, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face4#大致的情况我已经听南哈特说了。\r\n没错，我之所以叫你过来，是为了组建日后为联盟执行特殊任务的\r\n#b特殊小组#k。", 36, 3003750, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#看到南哈特那副样子，你大概也明白了……\r\n短期内我们的联盟可能难以展开大规模的作战计划，\r\n但在新的危机来临之前，也不能就这样坐失机宜。", 36, 3003750, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#所以我希望能集结能力出众的勇士，组成特别的精锐部队。", 36, 3003750, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#其名为……", 36, 3003750, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face4##fs18#特殊小组#b#e<荣耀特攻队>。", 36, 3003750, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("特殊小组#b#e<荣耀特攻队>？", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face4#特殊小组#b#e<荣耀特攻队>#n#k将为了冒险岛世界，执行各种重大任务。", 36, 3003750, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face4##h0#，我期待你能在其中发挥至关重要的作用。", 36, 3003750, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("唔……", 56, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face4#当然，还是你个人的意愿最为重要。", 36, 3003750, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.askAcceptDecline_Bottom("#face4##h0#，\r\n你愿意加入特殊小组#b#e<荣耀特攻队>#n#k，为了联盟，为了冒险岛世界而战斗吗？", 36, 3003750)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceCompleteQuest(37201);
                                                            cm.forceCompleteQuest(100295);
                                                            cm.forceCompleteQuest(500790);
                                                            cm.updateInfoQuest(500785, "lv=1");
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect3.img/glory/gloryon", 0, 3000, 0, 0, 25, 4, 3);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face4#你果然没有辜负我的期望。", 36, 3003750, false, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face4#从现在这一刻起，我将任命你为联盟特殊小组<荣耀特攻队>的一员，\r\n#b#h0##k。", 36, 3003750, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 500, 0, 0, 0, 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.fieldEffect_PlayFieldSound("Sound/MiniGame.img/Result_Yut", 100);
                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                cm.sendNormalTalk_Bottom("#face4#我期待你能继续在联盟与冒险岛世界中大放异彩。", 36, 3003750, false, true);
                                                                                                cm.effect_OnUserEff("Effect/CharacterEff.img/gloryonGradeup")
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
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};