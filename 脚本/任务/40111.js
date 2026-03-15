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
            cm.sendNormalTalk("好，终于到了决战的时刻了。我说一下作战计划，王宫里会有人接应我们进入到内部。进到王宫之后，我们就等着怪盗幻影的出现。", 32, 2420010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("怪盗幻影出来之前，所有的王宫警卫会为了阻止怪盗幻影，集中到蓝色眼泪附近。我们会趁机洗劫宝物仓库。之后#r再烧一把火趁乱逃出去#k。", 32, 2420010, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你们要做的事情很简单，我们在洗劫宝物仓库的时候，帮我们放风。然后看准时机，拿走蓝色眼泪。", 32, 2420010, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#face11#我们的分量比想象得还要少？……是信不过我们吗？", 44, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("阿里特安自己的事情，不能让异乡人介入太多，希望你们能理解。你们原本也有自己的事情，所以不想被我们拖累吧？", 32, 2420010, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#face3#对，这我们承认。但是，万一计划失败的话，我们就会不顾一切地把蓝色眼泪拿走的。", 44, 2400005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline("那当然……那么现在就出发吧？点击就可以出发前往王宫。", 32, 2420010)
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(40111, "");
                                        cm.forceStartQuest(40111, "");
                                        cm.dispose();
                                        cm.warp(322090400, 0, false)
                                    }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40111.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……？！怎么会在这里……危险！这里很危险！快点出去吧！", 33, 2420000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#face1#哈啊，哈啊……那不可能！我们是来救你的！", 41, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("莫非……两位是……", 33, 2420000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face1#很抱歉我们没能认出来！可恶！我们想当然的以为你会是个宝石的模样，#p2420000#！", 41, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("不……应该叫#b女神之泪#k才对。", 41, 2400006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("…………。！", 33, 2420000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("我们让你等太久了吧？放在眼前也没有认出来。看到你失望的表情，我们怎么就没有察觉到呢。", 41, 2400005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("我……我以为两位永远都会认不出来，所以都已经放弃了。还以为我对两位毫无用处……那样的话我也没办法……没能帮助到两位就是我的错……", 33, 2420000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#face10#不是的，你没有错。", 41, 2400006, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("很高兴两位能这么说。终于，可以结束突如其来的人类生活，回到两位的身边了。", 33, 2420000, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_PlayFieldSound("Party1/Clear", 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 1, 1, 0, 0)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("那么就拜托你了……", 33, 2420000, false, true);
                                                            cm.effect_REPEAT("Effect/Direction13.img/effect/zero/ariantending/0", 1, 1, 1, 0, 0)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceCompleteQuest(40111);
                                                                cm.gainExp(1817000);
                                                                cm.dispose();
                                                                cm.warp(322090430, 0, false);
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
};