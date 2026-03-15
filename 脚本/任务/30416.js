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
            cm.sendNormalTalk_Bottom("#face0#老虎像那样每天都找上门来的吗？", 37, 2074100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("是……说是娘做的年糕太美味了，\r\n每天都找上门来狂吃一通……", 37, 2074119, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("娘每天都得做年糕，一天都休息不了，\r\n就算我再怎么劝她又不听……\r\n但我也实在是没有办法不让老虎来啊。", 37, 2074119, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#嗯……怎么就。\r\n老虎也不是干了什么坏事，也不能用蛮力赶走它。", 37, 2074100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#说真的，要是喂它吃年糕喂到它撑破肚子怎么样？", 37, 2074100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("光靠我和我娘，做年糕的量是有限的，\r\n而且#b食材#k也不够……实在是没有办法啊。", 37, 2074119, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#我们一起帮忙怎么样？\r\n既然人数有两倍，那也能做出两倍的年糕来吧？", 37, 2074100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("虽然能够做年糕的只有娘，\r\n嗯……如果能有很多#b食材#k，应该也就能做出好多来了吧……", 37, 2074119, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("你是打算多做一些年糕吗？", 37, 2074120, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(30912, "1");
                                                cm.sendNormalTalk_Bottom("娘，娘？\r\n啊……我们在想不让老虎来的方法……", 37, 2074119, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("又！又在想这个了，\r\n你小子从来就碰都不碰一下年糕。", 37, 2074120, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("那，那个……我现在也会对年糕有点……", 37, 2074119, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("哼！老虎至少也能让我有点做年糕的乐趣，\r\n你为什么要赶走喜欢我年糕的客人！", 37, 2074120, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("不过多做点年糕也算是个不错的想法。", 37, 2074120, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("米粉可以从#g月妙#k那里拿到，你要是闲着就过去拿吧。", 37, 2074120, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#那，我们就去收集年糕的食材吧？\r\n要是填饱了老虎的肚子，想来#b宝玉#k也会脱落吧！", 37, 2074100, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.forceStartQuest(30416, "");
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
            cm.sendNormalTalk_Bottom("怎么回事？怎么这么晚？哼，混账东西。\r\n这些应该够多做一些了……\r\n算了，你们应该也饿了，就先吃这个吧，你们这些家伙！", 37, 2074120, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#伯母，是要给我们年糕吗？\r\n哦，我正好饿了呢，我会好好吃的。\r\n啊呜。", 37, 2074100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("哼，肚子饿了不就没法好好干活了嘛，\r\n细嚼慢咽着点，别噎着了。", 37, 2074120, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#哦！喔喔喔喔喔喔喔！\r\n真~的超好吃的，伯母！喔噢！果然值得让老虎痴狂呢！\r\n您的秘方到底是什么啊？", 37, 2074100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你以为只要知道秘方，谁都能做出来嘛！\r\n这年糕制作的秘方我可是连儿媳妇都不会告诉的，\r\n别高兴得太早。", 37, 2074120, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#哇，这么好吃，我还真的挺想当您儿媳妇呢。", 37, 2074100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("我不喜欢个子矮的女人。", 37, 2074119, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face6#我也没这个想法好吗！", 37, 2074100, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("吵死了！我要去做年糕了，你们要么就给我安安静静地待着！\r\n小日！给这些家伙倒点水吧。", 37, 2074120, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(30912, "1");
                                                cm.forceCompleteQuest(30912);
                                                cm.forceForfeitQuest(30912);
                                                cm.updateInfoQuest(30912, "");
                                                cm.sendNormalTalk_Bottom("#face0#伯母还真是相当的，那什么……\r\n表里不如一呢。", 37, 2074100, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("虽然话说得那么不中听，但其实非常贴心。\r\n所以我才会更加担心，她为了做年糕，压根就没有休息过……\r\n哎哟，这次要是能让老虎撑破肚子就好了……", 37, 2074119, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#啊，它过来了。", 37, 2074100, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("啊呜！我来了！", 37, 2074114, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceStartQuest(30918, "1");
                                                                cm.updateInfoQuest(30416, "gExpCheck=1");
                                                                cm.gainExp(369355);
                                                                cm.forceCompleteQuest(30416);
                                                                cm.inGameDirectionEvent_AskAnswerTime(400);
                                                                cm.gainItem(4034633, -10);
                                                                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
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
};