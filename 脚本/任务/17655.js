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
            cm.sendNormalTalk_Bottom("嗯？你怎么也在这里？你在这里干嘛呢？不对，那人……那不是海本的使节团吗？", 32, 9390203, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("怎么躺在那里啊？#h0#究竟怎么回事？", 36, 9390202, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("啊，那个……", 56, 9390203, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("等会！！那人，已经死了？", 36, 9390206, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你说什么？真的吗？", 32, 9390203, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我知道了！是你这家伙干的！！从别的地方来的家伙，你究竟对凯梅尔兹有什么恶意竟然杀死了别的国家的使节团！！", 36, 9390206, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("等等！我没杀他！", 56, 9390203, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("吵死了！你这家伙！！您在干嘛呢。吉尔伯特首领！！你打算放任杀人犯逃跑吗？", 36, 9390206, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("请稍等！#h0#没理由会杀人的！", 36, 9390202, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("你竟然袒护从外地来的杀人犯！你这是要干什么！", 36, 9390206, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("你只会仅仅凭状况就去断定不认识的人是杀人犯吗", 36, 9390202, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("你这家伙！！现在看来你们是一伙的啊！！吉尔伯特首领！你儿子现在所作所为难道不是叛逆行为吗？！", 36, 9390206, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("……把两人都逮捕了", 32, 9390203, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("首领！！", 36, 9390202, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_ScreenMsg("Map/EffectBT.img/dawnveil1/Clare");
                                                                    cm.fieldEffect_ScreenMsg("Map/EffectBT.img/dawnveil1/Clare2");
                                                                    cm.sendNormalTalk_Bottom("搞，搞什么呀这是！！眼，眼睛！！我的眼睛看不见了！！", 36, 9390206, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("请冷静点！这只是暂时的！这是有谁在搞鬼了！", 32, 9390203, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("你在干嘛呢？你想被拖走吗？", 36, 9390204, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("哦哦，哦，哦", 56, 9390203, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.forceStartQuest(17655, "");
                                                                                    cm.dispose();
                                                                                    cm.warp(865030000, 0)
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17655.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.sendNormalTalk("这是哪儿啊？啊，你是……！！。", 2, 9390249, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这是离桑凯梅尔兹很远的地方。", 0, 9390249, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("谢谢你帮助我。每次我遇到考验的时候你都给予了我帮助。", 4, 9390202, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我并不是想帮你才那样的。不过你会给我谢礼的吧？", 0, 9390249, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("那当然啦。但是……你不能告诉我你到底是谁吗？", 4, 9390202, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("你，且看你竟然会使用这么高难度的快速移动魔法应该不是平凡人。", 2, 9390249, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("咳嗯…………", 0, 9390249, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(17655);
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
};