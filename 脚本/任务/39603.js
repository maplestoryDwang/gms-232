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
            cm.sendNormalTalk_Bottom("#face6#啊，是你……不是约好一会儿广场上见吗。\r\n你该不是一路跟踪我过来的吧！？", 36, 3001952, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face6#还有，我没偷东西……我不是小毛贼！\r\n我只是来把东西还，还给主人的！", 36, 3001952, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我不管你是什么人。\r\n你对我了解多少，全部说出来。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#哎……哎哟妈呀，我的天！", 36, 3001864, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我、我的传家宝……传家宝……", 36, 3001864, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#……", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face10#我知道这情况很容易让人误会……", 36, 3001952, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face10#总之，我不是小毛贼！", 36, 3001952, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#我被抢走的传家宝，居然又回来啦～！", 36, 3001864, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#虽不知阁下是谁，真是太感谢了……谢谢你。", 36, 3001864, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face3#……被抢走的传家宝？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face4#没错，我帮她找回了被可恶的贵族抢走的传家宝！\r\n怎么样，现在相信我的话了吧！？", 36, 3001952, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#还记得我说有要紧事和你讲吧？\r\n是这样的，我想请你做我的骑士。", 36, 3001952, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face3#骑士？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#对，能在危难之中保护我的骑士。\r\n我想把百姓们被抢走的东西一个个都给找回来。", 36, 3001952, true, true, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face4#让王国恢复往日的安宁。", 36, 3001952, true, true, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#并且，总有一天我定会……", 36, 3001952, true, true, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#总之，为了开展我的计划，需要有位优秀的骑士协助。\r\n因为我要对付的，是这个国家最有钱有势的贵族。", 36, 3001952, true, true, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#我没这闲工夫去掺和别人的事。\r\n我还要去查清楚自己是谁，为什么会来到这里。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face6#你是说……你失忆了？", 36, 3001952, true, true, 1)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face3#……嗯，差不多。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#如果是这样，我会尽力帮助你。\r\n再说了，你想找回记忆，也得先适应这里的生活吧？", 36, 3001952, true, true, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#既然如此，不如一起做点好事。\r\n等扳倒了那家伙，我保证不再强留你。", 36, 3001952, true, true, 1)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(据少年所说，十年前国王去世后，王室也跟着分崩离析。\r\n随后，这个王国的统治权就落入了众贵族手里。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(然而，贵族们掌握权力之后，苛政暴政层出不穷，\r\n受压榨的百姓们苦不堪言……)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#那把剑，只有得到剑之恩宠的人才能驾驭它。\r\n你施展的剑术……正符合我对传说中骑士的期待！", 36, 3001952, true, true, 1)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#传说？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#传说，有位骑士能辅佐他的主君成为国王。\r\n这个故事在这周边一带很出名……", 36, 3001952, true, true, 1)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.askAcceptDecline_Bottom("#face0#其余的，我稍后再慢慢和你说，我们先到喷泉广场那边去吧。\r\n那也是去我们据点的路。\r\n\r\n #r ※ 自动转至任务地图。#k", 36, 3001952, 1)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face2#你这是找借口想带我走？", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face7#哈哈……被你发现了。不过，我不会让你吃亏的！", 36, 3001952, true, true, 1)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#我付得起雇佣传说中骑士的费用！", 36, 3001952, true, true, 1)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#真是个狂妄的家伙。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#那么，你是答应和我走啦？路上顺便给我讲讲你的故事吧。", 36, 3001952, true, true, 1)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face6#对了，要想不被察觉，我们要做点伪装……", 36, 3001952, true, true, 1)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.dispose();
                                                                                                                                                        cm.warp(993162006, 0, false)
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39603.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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