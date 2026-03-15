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
            cm.sendNormalTalk_Bottom("#face0#啊，#h0#！", 37, 3003758, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("新的怪物发射奇怪波长的事是真的吗？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#是的。通信已全部中断。\r\n这样一来，我们就没法执行突击作战了。", 37, 3003758, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#不过，只要消灭眼下涌来的敌人，还是可以整顿一下，发动反击的。", 37, 3003758, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("#face0#你愿意和我们一起战斗吗？", 36, 3003758)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#拜托了。请消灭#b世界尽头1-5，1-6的永恒原子#k。", 36, 3003758, false, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(35811, "");
                                    cm.OnStartNavigation(450012340, 0, "", 0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35811.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#现在通信好像恢复了。", 37, 3003923, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(35811);
                cm.gainExp(721799016);
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, true);
                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                cm.setStandAloneMode(true);
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 95, -20);
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("请告诉我。路，还有黑魔法师所说的注定的命运，到底是什么？", 57, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#你好像很害怕的样子。", 37, 3003923, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#担心自己会被命运的漩涡卷走，消失不见。", 37, 3003923, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("……", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_ProcessOnOffLayer("01", "Effect/Direction20.img/effect/BM3_thunder/0", 0, 1500, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                        } else {
                                            if (status === a++) {
                                                cm.effect_Voice("Voice4.img/BM3/ha/0", 128);
                                                cm.sendNormalTalk_Bottom("#face0#是的……每次谈到必灭者的命运，总是伴随着敬畏和恐惧。", 37, 3003923, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.effect_Voice("Voice4.img/BM3/ha/3", 128);
                                                    cm.sendNormalTalk_Bottom("#face0#那是因为对我们这些必灭者而言，未来永远是无法预测的未知的存在。", 37, 3003923, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("预知的话，女皇陛下不也……", 57, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.effect_Voice("Voice4.img/BM3/ha/5", 128);
                                                            cm.sendNormalTalk_Bottom("#face0#确实，人类之中偶尔会出现可以预知未来的人。", 37, 3003923, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.effect_Voice("Voice4.img/BM3/ha/7", 128);
                                                                cm.sendNormalTalk_Bottom("#face0#但他们只能看到即将到来的未来的非常短小的碎片。", 37, 3003923, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.effect_Voice("Voice4.img/BM3/ha/9", 128);
                                                                    cm.sendNormalTalk_Bottom("#face0#无法理解命运实现的过程。", 37, 3003923, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("无法理解过程……为什么？", 57, 0, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.effect_Voice("Voice4.img/BM3/ha/12", 128);
                                                                            cm.sendNormalTalk_Bottom("#face0#未来只会决定一种现实。", 37, 3003923, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.effect_Voice("Voice4.img/BM3/ha/15", 128);
                                                                                cm.sendNormalTalk_Bottom("#face0#但是在此过程中，人和人、事件和事件、命运和命运之间复杂地交织在一起。", 37, 3003923, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.effect_Voice("Voice4.img/BM3/ha/17", 128);
                                                                                    cm.sendNormalTalk_Bottom("#face0#单纯的一个手势或者一句没有意义的话，就能创造出或消除掉成千上万种未来。", 37, 3003923, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.effect_Voice("Voice4.img/BM3/ha/19", 128);
                                                                                        cm.sendNormalTalk_Bottom("#face0#那超越了人类的认知能力。", 37, 3003923, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.effect_Voice("Voice4.img/BM3/ha/21", 128);
                                                                                            cm.sendNormalTalk_Bottom("#face0#是我们这些必亡者万万不敢冒犯的，所谓#r神之领域#k。", 37, 3003923, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("你是说……黑魔法师可以做到吗？", 57, 0, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.effect_Voice("Voice4.img/BM3/ha/23", 128);
                                                                                                    cm.sendNormalTalk_Bottom("#face0#理解了过程，就能创造出结果。", 37, 3003923, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#即……他……", 37, 3003923, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.effect_Voice("Voice4.img/BM3/ha/26", 128);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.fieldEffect_ProcessOnOffLayer("02", "Effect/Direction20.img/effect/BM3_thunder/1", 0, 300, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.effect_Voice("Voice4.img/BM3/ha/28", 128);
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#操纵了命运。", 37, 3003923, false, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("02", "", 2, 2000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("操纵命运……？", 57, 0, false, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.fieldEffect_ProcessOnOffLayer("06", "Effect/Direction20.img/effect/BM2_ak/0", 0, 1500, 0, 0, 2, 4, 1, -1, 0, 0, 0);
                                                                                                                                cm.fieldEffect_ProcessOnOffLayer("07", "Effect/Direction20.img/effect/BM2_ak/1", 0, 1500, 0, 0, 3, 4, 1, -1, 0, 0, 0);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                    cm.effect_Voice("Voice4.img/BM3/black/1", 128);
                                                                                                                                    cm.effect_Text(["#r#fn黑体##fs26#我得好好奖赏一下恶魔……"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0, 0])
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("07", "", 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("08", "Effect/Direction20.img/effect/BM2_ak/2", 0, 700, 0, 0, 4, 4, 1, -1, 0, 0, 0);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.effect_Voice("Voice4.img/BM3/ha/29", 128);
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#一句话……他知道那会消除掉什么样的未来，又开启什么样的未来。", 37, 3003923, false, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.effect_Voice("Voice4.img/BM3/ha/32", 128);
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#因为分成无数条道路的未来，全都被抓在他的手中。", 37, 3003923, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("08", "", 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("06", "", 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.effect_Voice("Voice4.img/BM3/ha/33", 128);
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#黑色天堂、戴米安、艾欧娜的事情也不例外。", 37, 3003923, false, true)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.effect_Voice("Voice4.img/BM3/ha/35", 128);
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#他亲手打破了因果循环，并将其重新连接起来，创造和消除了无数的未来之路，将我们引导到了这里。", 37, 3003923, true, true)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("02", "Effect/Direction20.img/effect/BM3_thunder/1", 0, 300, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.effect_Voice("Voice4.img/BM3/ha/39", 128);
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#走向他决定的未来，踏上他的#r#fs18#创世之路#k#fs16#。", 37, 3003923, false, true)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer("02", "", 2, 2000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("！！！", 57, 0, false, true)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("怎么会这样……？我们……被操纵了吗？", 57, 0, true, true)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.effect_Voice("Voice4.img/BM3/ha/40", 128);
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#我们一直在凭借自己的意志战斗。不管从哪个角度看，这都是我们自己选择的路。", 37, 3003923, true, true)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.effect_Voice("Voice4.img/BM3/ha/41", 128);
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#但是谁知道呢？会不会有个人为我们创造出了这条路，并把我们引导到了这里。", 37, 3003923, true, true)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("太夸张了……", 57, 0, true, true)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("01", "", 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("03", "Effect/Direction20.img/effect/BM3_thunder/2", 0, 1500, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                            cm.effect_Voice("Voice4.img/BM3/ha/44", 128);
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#这是从巨大怪兽身上获得的核心碎片。", 37, 3003923, false, true)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                cm.effect_Voice("Voice4.img/BM3/ha/45", 128);
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#这里面装着原本存在，但却被黑魔法师清除掉的未来。", 37, 3003923, true, true)
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                    cm.effect_Voice("Voice4.img/BM3/ha/49", 128);
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#我在里面转了转。看到了很多未来。", 37, 3003923, true, true)
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                        cm.effect_Voice("Voice4.img/BM3/ha/51", 128);
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#有趣的是…… \r\n在决定性的瞬间妨碍黑魔法师的人，竟然是#r军团长们#k。", 37, 3003923, true, true)
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("！！", 57, 0, true, true)
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#麦格纳斯、戴米安、奥尔卡、阿卡伊勒、希拉……", 37, 1540451, false, true)
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#一旦他们明白黑魔法师的目的，将会第一个起头造反。", 37, 1540451, true, true)
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                cm.effect_Voice("Voice4.img/BM3/ha/53", 128);
                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#能够坦然接受结局的人，只有威尔。", 37, 3003923, false, true)
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                    cm.effect_Voice("Voice4.img/BM3/ha/56", 128);
                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#其他的军团长都拒绝了黑魔法师的理想。他们选择活下去。", 37, 3003923, true, true)
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("看来南哈特说的没错……", 57, 0, true, true)
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                            cm.effect_Voice("Voice4.img/BM3/ha/58", 128);
                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#好了，现在看看周围。他们之中还剩下谁？是谁除掉了他们？", 37, 3003923, true, true)
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("联盟……众英雄们……", 57, 0, true, true)
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("还有我……", 57, 0, false, true)
                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer("03", "", 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("还没结束……现在也许还能……", 57, 0, false, true)
                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                                                            cm.effect_Voice("Voice4.img/BM3/ha/61", 128);
                                                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#现在他任由我们知道这件事。难道你不知道这是什么意思吗？", 37, 3003923, true, true)
                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                                                cm.effect_Voice("Voice4.img/BM3/ha/63", 128);
                                                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#命运已经实现。", 37, 3003923, true, true)
                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                                                    cm.effect_Voice("Voice4.img/BM3/ha/65", 128);
                                                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#已经……无法挽回了。", 37, 3003923, true, true)
                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0##h0#！！做好进攻的准备了！", 37, 3003758, false, true)
                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("不是预知。", 57, 0, true, true)
                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("这是他一开始就设计好的命运，所以不可能不知道……", 57, 0, true, true)
                                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#没时间了！请马上跟上来！", 37, 3003758, true, true)
                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("我……我……到底在为什么战斗？我们到底是为了什么？如果命运早已注定，这场战争又有什么意义……", 57, 0, true, true)
                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                                                                                                                                                                                                                                    cm.dispose();
                                                                                                                                                                                                                                                                                                                                    cm.warp(993070079, 0, true)
                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }
                                                                                                                                                                                                        }
                                                                                                                                                                                                    }
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
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