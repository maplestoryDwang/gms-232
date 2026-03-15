var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    if (cm.getMapId() != 867113100) {
        cm.sendNormalTalk("#h0#！你去哪里，快回到#m867113100#来。\r\n你该知道通过次元之镜可以进入“异逝界”吧？", 4, 9400205, false, false);
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
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63026.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63026.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
    }
    if (cm.getMapId() != 867113100) {
        cm.sendNormalTalk("#h0#！你去哪里，快回到#m867113100#来。\r\n你该知道通过次元之镜可以进入“异逝界”吧？", 4, 9400205, false, false);
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
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(1000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b这里怎么有门？难道是？", 57, 0, false, true)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_PushScaleInfo(700, 2000, 700, 0, 94)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, 0, -256)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b一、二、三……十二……！？怎么有这么多锁……？\r\n(去找阿依赖问问门的事吧。)", 57, 0, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_PushScaleInfo(700, 2000, 700, -300, 120)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_ForcedFlip10(1, 56);
                                                        cm.inGameDirectionEvent_AskAnswerTime(501)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#b阿依赖！这里这道巨门是什么？是可以离开这地方的门吗？", 57, 0, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("\r\n#fs20##fc0xffd9d9d9##e唔……门？什么门？", 37, 9400205, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#b你看不见这里这道巨门吗？", 57, 0, false, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#fc0xffd9d9d9#唔~~~~~~~~嗯~~那道门啊？", 37, 9400205, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#fc0xffd9d9d9#嗯！对的。那道门或许可以让你回到你之前待的地方。", 37, 9400205, false, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#fc0xffd9d9d9#不过那道门在我诞生之前，甚至更~久远之前就存在了，却至今从未开启过。\r\n而且谁也不知道钥匙在哪里！", 37, 9400205, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#fc0xffd9d9d9#曾经也有些人想强行打开它，但每次都失败了。你也别白费力气，不如放弃吧？", 37, 9400205, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#b…………", 57, 0, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#b只要找齐钥匙就能出去了吧？", 57, 0, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#fc0xffd9d9d9#这事还没人办到过，我不清楚……\r\n你刚来不了解情况，异逝界这地方比你想象的大多~了。你是打算踏遍这片广大天地寻找那不知道在哪里的钥匙吗？", 37, 9400205, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#fc0xfff3ddff##h0#，这里的生活真的很幸福~不管是你想整天打打杀杀，还是想静下来思考一下，都没问题。\r\n你就在这里做做自己喜欢的事情，好好过日子吧！", 37, 9400205, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#b阿依赖，谢谢你的关心，但我一定要找到钥匙，返回冒险岛世界。", 57, 0, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#fc0xffd9d9d9##h0#，你真固执！\r\n#e嗯~~~那就没办法咯……", 37, 9400205, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#fc0xffd9d9d9#我会帮助你走遍异逝界。你去寻找钥匙吧。", 37, 9400205, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#fc0xfff3ddff#在这期间，假如你改变心意想留下来，随时来告诉我，好吗？", 37, 9400205, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#b嗯，谢谢你，阿依赖！", 57, 0, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#fc0xfff3ddff#好。\r\n那我现在送你去#e“勇士之地”#n！", 37, 9400205, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.forceCompleteQuest(63026);
                                                                                                                                                cm.gainExp(158800);
                                                                                                                                                cm.updateInfoQuest(63026, "exp=1");
                                                                                                                                                cm.setStandAloneMode(false);
                                                                                                                                                cm.dispose();
                                                                                                                                                cm.warp(867113200, 0, false);
                                                                                                                                                cm.setInGameDirectionMode(false, true, false)
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
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