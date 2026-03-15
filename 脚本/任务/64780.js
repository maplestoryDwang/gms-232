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
            cm.warp(867147007, 0, true);
            cm.dispose()
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
            cm.sendNormalTalk_Bottom("嗯哼～？小可爱们，能稍微让开一下吗？", 37, 9401031, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("有什么事吗，亲爱的？", 37, 9401031, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b嗯，嗯？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我说你，我该叫你什么呢？", 37, 9401031, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b叫我#h0#就好。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#h0#，简明扼要的说明你的来意，我很忙。", 37, 9401031, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("如果你是来请我加入远征队，那就请向我推荐一下你的远征队吧。", 37, 9401031, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b啊……我那个…… ", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("首先有我这样聪明的魔法师，还有个可靠的战士！", 37, 9401029, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("还有敏捷的米西蒂，嘿嘿嘿", 37, 9401032, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("还有呢？", 37, 9401031, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#b哦……嗯…………还有我！", 57, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("你拥有多少声望？", 37, 9401031, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#b什么？", 57, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("你拥有多少增益技能？", 37, 9401031, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("我在寻找能让我发光发热的远征队，如果你符合条件了，再来找我。", 37, 9401031, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("我们现在是被拒绝了吗？", 37, 9401032, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("那么自信，他应该特别厉害吧？", 37, 9401029, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("队长，我们完全可以做到那种程度嘛！是吧？", 37, 9401029, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#b是吧……", 57, 0, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.updateInfoQuest(64780, "NpcSpeech=94010311");
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
            cm.sendNormalTalk_Bottom("名……字，啊！#h0#！", 36, 9401031, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("一直没有你的消息，我还以为你放弃了。没想到你如此有韧性，真是优秀。", 36, 9401031, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("我看看，满足所有条件了呢？厉害。", 36, 9401031, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("凭你的实力，还拥有可以帮助我的声望与增益技能，现在再加上我，我们就是最强远征队。", 36, 9401031, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("好！如果你的愿望真的是这样，那我就加入你的远征队吧。", 36, 9401031, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b虽然我没说过这是我的愿望，但，幸会。", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("以后我会好好努力的。", 37, 9401031, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(64780);
                                        cm.sendNormalTalk_Bottom("各位～！请看～～这就是深渊第一美男子洛尼大人选择的远征队！请大家都来加入我们吧！", 36, 9401029, true, true)
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
};