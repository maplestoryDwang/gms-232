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
            cm.sendNormalTalk_Bottom("#face0#哦……大家都安然无恙地下来了呢。", 36, 2052004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#情况应该已经……结束了吧？", 36, 2052004, true, true)
            } else {
                if (status === a++) {
                    cm.curNodeEventEnd(true);
                    cm.setInGameDirectionMode(true, false, true);
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                    cm.effect_Text(["#fn黑体##fs18#几天后……#fs15##fn黑体#地球防御本部，司令室"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0])
                } else {
                    if (status === a++) {
                        cm.OnStartNavigation(221000200, 1, "2052050", 0);
                        cm.forceStartQuest(3495, "");
                        cm.dispose();
                        cm.warp(221000200, 0);
                        cm.setInGameDirectionMode(false, true, false)
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
            cm.sendNormalTalk_Bottom("#face0#嗯……通过这一次的作战，看到阿琳成长得这么棒，我内心很是欣慰。", 37, 2052000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#而且看样子也很好地领悟了冒险勇士精神。", 37, 2052000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#你也要好好记住。", 37, 2052000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#我们不是为了胜利而战斗，而是为了守护而战。", 37, 2052000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#因为我们是地球防御队。", 37, 2052000, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(3495, "NpcSpeech=20520501");
                                cm.OnStartNavigation(221000200, 1, "2052051", 0);
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
            cm.sendNormalTalk_Bottom("#face0#嗯，我想到了一部以这一次战斗为主题的非常宏大的电影……", 37, 2052001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#我去粉丝论坛看了看，\r\n大家对剧本的评价非常好。", 37, 2052001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我居然还有当电影导演的天赋……哈，我都有点被自己吓到了呢。", 37, 2052001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#怎么样，#h0#，你想不想来当主演啊？", 37, 2052001, true, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(3495, "NpcSpeech=20520501/20520512");
                            cm.OnStartNavigation(221000200, 1, "2052052", 0);
                            cm.dispose()
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
            cm.sendNormalTalk_Bottom("#face0#噗嗤噗嗤，嗯？你问我有什么事这么好玩吗？", 37, 2052002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#我在和宅宅玩呢。", 37, 2052002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#宅宅？当然没事了~他加入我们本部了。", 37, 2052002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#现在可以每天都见到阿琳，你都不知道他有多开心呢。", 37, 2052002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#那个肌肉大猩猩到底有什么好喜欢的？", 37, 2052002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#对了，我听宅宅说，\r\n被清扫机器人抓住的时候，天上曾经掉下过礼物？", 37, 2052002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#你回头去找找博士吧，毕竟那是你的。", 37, 2052002, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(3495, "NpcSpeech=20520501/20520512/20520523");
                                        cm.OnStartNavigation(221000200, 1, "2052053", 0);
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
            cm.sendNormalTalk_Bottom("#face0#这次的作战也是以欢乐大团圆结局收场呢，谢谢了，#ho#，多亏了你。", 37, 2052003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#多亏了你，UFO的残骸也都满满地收回来了呢？这段日子应该不会无聊了。", 37, 2052003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#而且阿琳也有了很大的成长，想法似乎也变多了。", 37, 2052003, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#说不定……到了青春期会更严重的，呵呵。", 37, 2052003, true, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(3495, "NpcSpeech=20520501/20520512/20520523/20520534");
                            cm.OnStartNavigation(221000200, 1, "2052055", 0);
                            cm.dispose()
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
            cm.sendNormalTalk_Bottom("#face3#我的方便面……", 37, 2052005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#被博士给吃掉了！！！", 37, 2052005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#真讨厌，博士！！！", 37, 2052005, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(3495, "NpcSpeech=20520501/20520512/20520523/20520534/20520555");
                        cm.OnStartNavigation(221000200, 1, "2052054", 0);
                        cm.dispose()
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
            cm.sendNormalTalk_Bottom("#face0#喂~这场作战真的荡气回肠啊，是不是？", 36, 2052004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#啊，话说替换队员的事情，其实是因为阿海哥哥要拍电影……\r\n暂时需要队员填补空位啊。", 36, 2052004, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我连这些都不知道，真是的……\r\n你都不知道我被小俊哥哥戏弄了多久。", 36, 2052004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#什么？电影大卖吗？听说是因为演对手戏的演员换了人，彻底扑街了呢~", 36, 2052004, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#话说回来，下次的作战……你也会参加吧？", 36, 2052004, true, true)
                        } else {
                            if (status === a++) {
                                cm.gainExp(3668312);
                                cm.forceCompleteQuest(3495);
                                cm.forceStartQuest(3496, "");
                                cm.sendNormalTalk_Bottom("#face0#对了！司令室的#b金博士#k找你。", 36, 2052004, true, false)
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
};