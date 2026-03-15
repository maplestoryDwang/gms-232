var status = -1;
var selectionLog = [];

function start(g, e, d) {
    if (status == 0 && g == 0) {
        cm.dispose();
        return
    }(g == 1) ? status++ : status--;
    selectionLog[status] = d;
    var c = -1;
    if (status <= c++) {
        cm.dispose()
    } else {
        if (status == c++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 50, 57)
        } else {
            if (status === c++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -84, 20);
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200)
            } else {
                if (status === c++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                } else {
                    if (status === c++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                    } else {
                        if (status === c++) {
                            cm.effect_Voice("Voice4.img/BM3/wh/0", 128);
                            cm.sendNormalTalk_Bottom("#face0#你的肉体已经消失。\r\n灵魂在不久之后也会稀释并消失。", 37, 3003900, false, true)
                        } else {
                            if (status === c++) {
                                cm.sendNormalTalk_Bottom("……", 57, 0, true, true)
                            } else {
                                if (status === c++) {
                                    cm.effect_Voice("Voice4.img/BM3/wh/1", 128);
                                    cm.sendNormalTalk_Bottom("#face0#你拯救了世界。你胜利了。", 37, 3003900, true, true)
                                } else {
                                    if (status === c++) {
                                        cm.sendNormalTalk_Bottom("……既然一切都结束了，你为什么会出现在我的面前？", 57, 0, true, true)
                                    } else {
                                        if (status === c++) {
                                            cm.effect_Voice("Voice4.img/BM3/wh/3", 128);
                                            cm.sendNormalTalk_Bottom("#face0#我想最后再跟你说几句话。\r\n这是一场漫长的战斗，所以我等了你很久。", 37, 3003900, true, true)
                                        } else {
                                            if (status === c++) {
                                                cm.sendNormalTalk_Bottom("等我？", 57, 0, true, true)
                                            } else {
                                                if (status === c++) {
                                                    cm.effect_Voice("Voice4.img/BM3/wh/5", 128);
                                                    cm.sendNormalTalk_Bottom("#face0#因为你是……唯一可以从不灭的束缚中拯救我的人。", 37, 3003900, true, true)
                                                } else {
                                                    if (status === c++) {
                                                        cm.sendNormalTalk_Bottom("不灭的羁缚……", 57, 0, true, true)
                                                    } else {
                                                        if (status === c++) {
                                                            cm.effect_Voice("Voice4.img/BM3/wh/8", 128);
                                                            cm.sendNormalTalk_Bottom("#face0#身为超越者，却无法毁灭自己。是不是很讽刺？", 37, 3003900, true, true)
                                                        } else {
                                                            if (status === c++) {
                                                                cm.sendNormalTalk_Bottom("没有超越者的新世界……难道你是为了这个……", 57, 0, true, true)
                                                            } else {
                                                                if (status === c++) {
                                                                    cm.effect_Voice("Voice4.img/BM3/wh/10", 128);
                                                                    cm.sendNormalTalk_Bottom("#face0#是的，所以我才需要你。", 37, 3003900, true, true)
                                                                } else {
                                                                    if (status === c++) {
                                                                        var f = cm.getJob();
                                                                        if (f == 2712) {
                                                                            cm.sendNormalTalk_Bottom("#face0#你曾经是我的一部分，是另一道光。", 37, 3003900, true, true)
                                                                        } else {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                        }
                                                                    } else {
                                                                        if (status === c++) {
                                                                            var f = cm.getJob();
                                                                            if (f == 2712) {
                                                                                cm.sendNormalTalk_Bottom("#face0#迈向我安排好的另一个命运的光。", 37, 3003900, true, true)
                                                                            } else {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                            }
                                                                        } else {
                                                                            if (status === c++) {
                                                                                cm.effect_Voice("Voice4.img/BM3/wh/12", 128);
                                                                                cm.sendNormalTalk_Bottom("#face0#但从结果上来看，你把束缚住我的命运和我创造出来的命运全都毁掉了。", 37, 3003900, true, true)
                                                                            } else {
                                                                                if (status === c++) {
                                                                                    cm.sendNormalTalk_Bottom("……", 57, 0, true, true)
                                                                                } else {
                                                                                    if (status === c++) {
                                                                                        cm.effect_Voice("Voice4.img/BM3/wh/14", 128);
                                                                                        cm.sendNormalTalk_Bottom("#face0#你在埃斯佩拉拒绝夺取塔纳的生命的时候，\r\n命运之轴就已经开始向你倾斜。", 37, 3003900, true, true)
                                                                                    } else {
                                                                                        if (status === c++) {
                                                                                            cm.effect_Voice("Voice4.img/BM3/wh/16", 128);
                                                                                            cm.sendNormalTalk_Bottom("#face0#到底是什么呢？\r\n到底是你的什么东西，让你可以打破命运，斩断那坚硬无比的锁链？", 37, 3003900, true, true)
                                                                                        } else {
                                                                                            if (status === c++) {
                                                                                                cm.sendNormalTalk_Bottom("那个嘛……", 57, 0, true, true)
                                                                                            } else {
                                                                                                if (status === c++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                } else {
                                                                                                    if (status === c++) {
                                                                                                        cm.sendNormalTalk_Bottom("她说……帮帮我。", 57, 0, false, true)
                                                                                                    } else {
                                                                                                        if (status === c++) {
                                                                                                            cm.sendNormalTalk_Bottom("塔纳不想消失。", 57, 0, true, true)
                                                                                                        } else {
                                                                                                            if (status === c++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#……", 37, 3003900, true, true)
                                                                                                            } else {
                                                                                                                if (status === c++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                } else {
                                                                                                                    if (status === c++) {
                                                                                                                        cm.effect_Voice("Voice4.img/BM3/wh/18", 128);
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#你是说，生命有其存在的价值。", 37, 3003900, false, true)
                                                                                                                    } else {
                                                                                                                        if (status === c++) {
                                                                                                                            cm.effect_Voice("Voice4.img/BM3/wh/21", 128);
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#但是你失去了那个东西，不知道是否还有实现这一远大理想的资格。", 37, 3003900, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === c++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                            } else {
                                                                                                                                if (status === c++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("！！", 57, 0, false, true)
                                                                                                                                } else {
                                                                                                                                    if (status === c++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("身体……从指尖开始……正在渐渐消失……", 57, 0, true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === c++) {
                                                                                                                                            cm.effect_Voice("Voice4.img/BM3/wh/24", 128);
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#因为你无法在这里长时间停留。", 37, 3003900, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === c++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("等等。如果我在埃斯佩拉拒绝杀死塔纳的时候，\r\n你就已经失败了的话…… ", 57, 0, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === c++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("你为什么还要继续战斗呢？", 57, 0, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === c++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#……", 37, 3003900, true, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === c++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === c++) {
                                                                                                                                                                cm.effect_Voice("Voice4.img/BM3/wh/26", 128);
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#当你明白自己走在设定的命运之上的时候，当你连自己的意志都不得不怀疑的时候，你会有什么样的感觉？", 37, 3003900, false, true)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === c++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("……。", 57, 0, true, true)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === c++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("绝望……无力感，还有愤怒……吗？", 57, 0, true, true)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === c++) {
                                                                                                                                                                            cm.effect_Voice("Voice4.img/BM3/wh/28", 128);
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#这就足够了。", 37, 3003900, true, true)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === c++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("那是什么意思……？", 57, 0, true, true)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === c++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === c++) {
                                                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 3000, 0);
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === c++) {
                                                                                                                                                                                            cm.effect_Voice("Voice4.img/BM3/wh/34", 128);
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#请不要忘记那种愤怒。", 37, 3003900, false, true)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === c++) {
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === c++) {
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === c++) {
                                                                                                                                                                                                        var f = cm.getJob();
                                                                                                                                                                                                        if (f == 2112) {
                                                                                                                                                                                                            var a = 46;
                                                                                                                                                                                                            var b = "不屈的战士啊"
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (f == 2412) {
                                                                                                                                                                                                                var a = 56;
                                                                                                                                                                                                                var b = "盗取命运的怪盗啊"
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (f == 2512) {
                                                                                                                                                                                                                    var a = 58;
                                                                                                                                                                                                                    var b = "被遗忘的英雄啊"
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (f == 2217) {
                                                                                                                                                                                                                        var a = 62;
                                                                                                                                                                                                                        var b = "龙族的后裔啊"
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        if (f == 3112 || f == 3122) {
                                                                                                                                                                                                                            var a = 44;
                                                                                                                                                                                                                            var b = "悲怜的魔族啊"
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            if (f == 4112) {
                                                                                                                                                                                                                                var a = 1001;
                                                                                                                                                                                                                                var b = "切断命运的高贵之剑啊"
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                if (f == 4212) {
                                                                                                                                                                                                                                    var a = 1002;
                                                                                                                                                                                                                                    var b = "追逐命运的阴阳师啊"
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                    if (Math.floor(f / 100) == 142) {
                                                                                                                                                                                                                                        var a = 66;
                                                                                                                                                                                                                                        var b = "异世界的超能力者啊"
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                        if (f == 2712) {
                                                                                                                                                                                                                                            var a = 53;
                                                                                                                                                                                                                                            var b = "和我走不同道路的光芒啊"
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                            if (Math.floor(f / 100) == 101) {
                                                                                                                                                                                                                                                var a = 65;
                                                                                                                                                                                                                                                var b = "新时代的超越者呀"
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                if (Math.floor(f / 10) == 57) {
                                                                                                                                                                                                                                                    var a = 1003;
                                                                                                                                                                                                                                                    var b = "漂流于世界的复仇者啊"
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                    if (Math.floor(f / 100) == 112) {
                                                                                                                                                                                                                                                        var a = 1000;
                                                                                                                                                                                                                                                        var b = "跨越命运的新时代英雄啊"
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                        if (Math.floor(f / 100) == 65) {
                                                                                                                                                                                                                                                            var a = 49;
                                                                                                                                                                                                                                                            var b = "大魔法师的后裔呀"
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                            if (Math.floor(f / 100) == 61) {
                                                                                                                                                                                                                                                                var a = 49;
                                                                                                                                                                                                                                                                var b = "大魔法师的后裔呀"
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                if (f == 2312) {
                                                                                                                                                                                                                                                                    if (cm.getPlayer().getGender() == 1) {
                                                                                                                                                                                                                                                                        var a = 51;
                                                                                                                                                                                                                                                                        var b = "精灵女王呀"
                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                        var a = 52;
                                                                                                                                                                                                                                                                        var b = "精灵之王啊"
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                    if (Math.floor(f / 1000) == 3) {
                                                                                                                                                                                                                                                                        var a = 42;
                                                                                                                                                                                                                                                                        var b = "寻求正义的反抗者"
                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                        if (Math.floor(f / 100) == 51 || Math.floor(f / 100) == 11 || Math.floor(f / 100) == 12 || Math.floor(f / 100) == 13 || Math.floor(f / 100) == 14 || Math.floor(f / 100) == 15) {
                                                                                                                                                                                                                                                                            var a = 39;
                                                                                                                                                                                                                                                                            var b = "勇猛的女皇的骑士们啊"
                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                            if (Math.floor(f / 10) == 11 || Math.floor(f / 10) == 12 || Math.floor(f / 10) == 13 || Math.floor(f / 10) == 21 || Math.floor(f / 10) == 22 || Math.floor(f / 10) == 23 || Math.floor(f / 10) == 31 || Math.floor(f / 10) == 32 || Math.floor(f / 10) == 33 || Math.floor(f / 10) == 41 || Math.floor(f / 10) == 42 || Math.floor(f / 10) == 43 || Math.floor(f / 10) == 51 || Math.floor(f / 10) == 52 || Math.floor(f / 10) == 53) {
                                                                                                                                                                                                                                                                                var a = 36;
                                                                                                                                                                                                                                                                                var b = "来自异世界的冒险家"
                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                var a = 64;
                                                                                                                                                                                                                                                                                var b = "异世界的放浪者啊"
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }
                                                                                                                                                                                                        }
                                                                                                                                                                                                        cm.effect_Voice("Voice4.img/BM3/wh/" + a + "", 128);
                                                                                                                                                                                                        cm.effect_Text(["#fn黑体##fs23#" + b + "。"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0, 0]);
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(5000)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === c++) {
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === c++) {
                                                                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/soul2", 100);
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (status === c++) {
                                                                                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                    cm.dispose();
                                                                                                                                                                                                                    cm.warp(993070087, 0, true)
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }
                                                                                                                                                                                                        }
                                                                                                                                                                                                    }
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35814.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};