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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("#face2#正如你看到的一样，有的头痛了。", 37, 2052006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2##fc0xFFAAAAAA#(叮铃铃，叮铃铃)#k\r\n啊，本部来电话了！阿琳会代为解释的。", 37, 2052006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#啊~是是是~哎哟喂，这不是长官大人嘛~", 37, 2052006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#你好！我叫#b琳儿#k！也可以叫我#b阿琳#k~", 37, 2052004, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#一代粉狼姐姐隐退之后，就由我负责#b二代粉狼#k的工作了！", 37, 2052004, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(真是个充满活力的孩子)#k\r\n你好啊？", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#来，那我就来说明一下。\r\n这到底是怎么一回事呢……", 37, 2052004, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect3.img/omegaSector/pinkSay/cut1", 0, 100, 0, 0, 20, 4, 0);
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/cartoon/1", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_ProcessOnOffLayer("1", "Map/Effect3.img/omegaSector/pinkSay/balloon1", 0, 100, 0, 0, 21, 4, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_ProcessOnOffLayer("2", "Map/Effect3.img/omegaSector/pinkSay/cut2", 0, 100, 0, 0, 20, 4, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_ProcessOnOffLayer("3", "Map/Effect3.img/omegaSector/pinkSay/balloon2", 0, 100, 0, 0, 21, 4, 0);
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/cartoon/2", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.fieldEffect_ProcessOnOffLayer("4", "Map/Effect3.img/omegaSector/pinkSay/cut3", 0, 100, 0, 0, 20, 4, 0);
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/cartoon/3", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer("5", "Map/Effect3.img/omegaSector/pinkSay/balloon3", 0, 100, 0, 0, 21, 4, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_ProcessOnOffLayer("6", "Map/Effect3.img/omegaSector/pinkSay/cut4", 0, 100, 0, 0, 20, 4, 0);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/cartoon/4", 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.fieldEffect_ProcessOnOffLayer("7", "Map/Effect3.img/omegaSector/pinkSay/balloon4", 0, 100, 0, 0, 21, 4, 0);
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/cartoon/5", 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.fieldEffect_ProcessOnOffLayer("8", "Map/Effect3.img/omegaSector/pinkSay/balloon4_1", 0, 100, 0, 0, 21, 4, 0);
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/cartoon/6", 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.fieldEffect_ProcessOnOffLayer("9", "Map/Effect3.img/omegaSector/pinkSay/cut5", 0, 100, 0, 0, 20, 4, 0);
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/cartoon/7", 100);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.fieldEffect_ProcessOnOffLayer("10", "Map/Effect3.img/omegaSector/pinkSay/cut6", 0, 100, 0, 0, 20, 4, 0);
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/cartoon/8", 100);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/cartoon/9", 100);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.fieldEffect_ProcessOnOffLayer("11", "Map/Effect3.img/omegaSector/pinkSay/balloon6", 0, 100, 0, 0, 21, 4, 0);
                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/cartoon/10", 100);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/cartoon/11", 100);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("12", "Map/Effect3.img/omegaSector/pinkSay/cut7", 0, 100, 0, 0, 20, 4, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.fieldEffect_ProcessOnOffLayer("13", "Map/Effect3.img/omegaSector/pinkSay/balloon7", 0, 100, 0, 0, 21, 4, 0);
                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/cartoon/12", 100);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/cartoon/13", 100);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 500, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("1", "", 2, 500, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("2", "", 2, 500, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("3", "", 2, 500, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("4", "", 2, 500, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("5", "", 2, 500, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("6", "", 2, 500, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("7", "", 2, 500, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("8", "", 2, 500, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("9", "", 2, 500, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("10", "", 2, 500, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("11", "", 2, 500, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("12", "", 2, 500, 0, 0, 0, 0, 0);
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("13", "", 2, 500, 0, 0, 0, 0, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("没有变小啊？", 57, 0, false, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#我还没有说完呢，问题就在于#b第二天#k。", 37, 2052004, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.forceStartQuest(3476, "");
                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                        cm.dispose();
                                                                                                                                        cm.warp(221000201, 0);
                                                                                                                                        cm.updateInfoQuest(3476, "")
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
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
            cm.sendNormalTalk_Bottom("#face0##b阿哲哥哥#k，金博士叫你了。", 36, 2052004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#阿琳来啦，以第一次出动来说，\r\n昨天的作战中你表现得很好。", 36, 2052000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#来，我帮你戴上#b冒险勇士徽章#k。", 36, 2052000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#哦！终于被认可为是正式队员了吗？", 36, 2052004, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#……不对啊，这是#b小队员徽章#k嘛！！", 36, 2052004, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#嗯，挺适合的嘛。", 36, 2052000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face5#唔……到现在还拿我当少年队员对待吗？\r\n我可是在选拔测试里拿到了最高分的啊！", 36, 2052004, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face3#那只是体力测试，\r\n你在笔试里可是好不容易才能考及格的啊？", 36, 2052000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face3#在记忆力和操控实力上面，可真是不见长进啊。", 36, 2052000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face3#额~那要怎么办才好？！", 36, 2052004, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#你先说一遍#b冒险勇士精神#k。", 36, 2052000, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face5##fs17#不要犹豫，不要退却，那……", 36, 2052004, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face5##b#fs17#就能成功了吗？", 36, 2052004, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face3#什么嘛~？", 36, 2052000, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face5#嘤嘤……", 36, 2052004, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#听好了，\r\n等你明白了这句话的分量，就能成为#b真正的冒险勇士队员#k了。", 36, 2052000, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face3#虽说得先记起来。", 36, 2052000, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.updateInfoQuest(3476, "NpcSpeech=20520201");
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
            cm.sendNormalTalk_Bottom("#face0#哦，还有那种姿势啊！我得参考一下。", 36, 2052005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##b阿亮哥哥#k，金博士让你去司令室。", 36, 2052004, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#嘘！有新任务，咦？徽章很酷嘛，琳儿。", 36, 2052005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#是~这是#b小冒险勇士徽章#k，少年队员戴的。", 36, 2052004, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#呵呵，我也有过这样的时期。", 36, 2052005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#哥哥也有过吗？", 36, 2052004, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#不过呢，在#b数百多天#k的#b传奇般的战斗#k中大展拳脚之后，我也就顺理成章地被认可为正式队员了。", 36, 2052005, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#在那浩瀚无垠的平野之上，#b数千名外星人#k如被秋风扫落叶一般倒地不起……", 36, 2052005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#我每挥舞这拳头一下啊，就有#b数万人#k……", 36, 2052005, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face3#喂？你去哪儿？我说的是真的啊！", 36, 2052005, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.updateInfoQuest(3476, "NpcSpeech=20520201/20520252");
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
            cm.sendNormalTalk_Bottom("#face0##fs17#“看来这晚饭得去阴曹地府吃了！”\r\n嗯……难道不是这个吗？", 36, 2052001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##fs17#“从现在起，在撂倒你这件事上，我连一秒钟都不会浪费的！”\r\n嗯……", 36, 2052001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0##b阿海哥哥#k，金博士让你去司令室。", 36, 2052004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#我们阿琳来了啊，有没有想哥哥啊？", 36, 2052001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#呕，算了吧，这种肉麻的台词，你还是留着在镜头前面说吧。", 36, 2052004, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#虽说身为冒险勇士的职责很重要，不过维持我身为#b废都塔一流演员#k的人气，也至关重要。", 36, 2052001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face3#咳咳~制服敌人的毒舌，在调戏中说服对方的口才！再加上这俊朗的外表！\r\n连我都害怕自己如此天才的一面呢。", 36, 2052001, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face1#好可怕啊……", 36, 2052004, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.updateInfoQuest(3476, "NpcSpeech=20520201/20520252/20520213");
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
            cm.sendNormalTalk_Bottom("#face0##b小俊哥哥#k，金博士让你去司令室。", 36, 2052004, false, true);
            cm.npc_LeaveField("oid=11675");
            cm.npc_LeaveField("oid=11679");
            cm.getMap().spawnReactorIfNotExist(2212004, 0, -289, 1917, 1, "")
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#嗯嗯，噗哈哈噗哈哈！", 36, 2052002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#你在干什么呢这么开心？", 36, 2052004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#小孩子不用知道。\r\n啊，你来都来了，帮我把这个带给阿英吧，太沉了。", 36, 2052002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#你就是因为一天到晚只知道玩电脑，才会这么弱不禁风的。", 36, 2052004, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#是~肌肉大猩猩。", 36, 2052002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face1#肌肉……", 36, 2052004, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#哦？那是什么，#b小冒险勇士#k？噗哈哈！！", 36, 2052002, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face3#不许笑！我很快就会拿到正式徽章的。", 36, 2052004, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#好吧，好吧，要是有需要帮忙的地方就开口哦，噗哈哈！", 36, 2052002, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face1#额……#r(生气)#k", 36, 2052004, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.updateInfoQuest(3476, "NpcSpeech=20520201/20520252/20520213/20520224");
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
            cm.sendNormalTalk_Bottom("#face0##b阿英姐姐#k，金博士让你去司令室。", 36, 2052004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#嗯，等一下……\r\n行了！呵呵呵，很好，这样一来就有#b20倍超频#k了！", 36, 2052003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#超……什么？那是什么啊？", 36, 2052004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#就有这种东西啦，和那什么差不多，咦？哎哟呵？", 36, 2052003, true, true)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                            cm.userSetFieldFloating(221000201, 5, 5, 50);
                            cm.userSetFieldFloating(221000201, 0, 0, 0);
                            cm.sendNormalTalk_Bottom("#face1#啊！", 36, 2052003, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1#咳咳！咳咳！又失败了，果然还是不行吗……", 36, 2052003, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#咦？那是#b小冒险勇士徽章#k？", 36, 2052003, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face5#嗯……", 36, 2052004, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face5#红鹰哥哥说一定要领悟#b冒险勇士精神#k的分量。", 36, 2052004, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#这个嘛？我想是因为你还不能熟练操控#b冒险能量#k才会这样的吧？", 36, 2052003, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#要是不能保持稳定的输出，就会像这个机器一样，“啪”一下就不动弹了。", 36, 2052003, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face5#嗯……是这样吗？", 36, 2052004, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFAAAAAA#(那什么，虽说也许是有什么其他的意思……可光嘴上说说还是毫无用处的吧)#k", 36, 2052003, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.updateInfoQuest(3476, "NpcSpeech=20520201/20520252/20520213/20520224/20520235");
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
            cm.sendNormalTalk_Bottom("#face0##b波特博士#k，我已经通知过所有人了。", 36, 2052004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#那就去司令室吧。", 36, 2052007, true, true)
            } else {
                if (status === a++) {
                    cm.gainExp(3668312);
                    cm.forceCompleteQuest(3476);
                    cm.dispose();
                    cm.warp(221000301, 0);
                    cm.dispelBuff(2210202)
                }
            }
        }
    }
};