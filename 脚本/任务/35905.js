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
            cm.sendNormalTalk_Bottom("#face1#呼,呼……终于得,得救了。\r\n真是谢谢……谢谢你……", 36, 1013353, true, true, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face1#呼……虽然还有点没缓过劲来,不过……\r\n我会遵守约定,满足你的一个请求。快告诉我吧。", 36, 1013353, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#把你知道的关于这一带的情况都告诉我。", 36, 1013358, false, true, 1)
                } else {
                    if (status === a++) {
                        cm.askMenu_Bottom("#face0#有什么问题,请尽管问。\r\n只要是我马斯卡波知道的,我会一五一十地全部告诉你。\r\n\r\n#b#L0# 关于遗迹 #l", 36, 1013353, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#遗,遗迹……难道是说那个废墟？\r\n据说那是受到古代人崇拜的地方,可以让受伤的人痊愈……", 36, 1013353, false, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1#但是随着时间的流逝,那里逐渐变得人迹罕至,\r\n并开始散发出阴森的气息。", 36, 1013353, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face1#年复一年,那种气息变得越来越强。\r\n现在变成了谁都不愿涉足的废墟,咕咕……", 36, 1013353, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.askMenu_Bottom("#face0#有什么问题,请尽管问。\r\n只要是我马斯卡波知道的,我会一五一十地全部告诉你。\r\n\r\n#b#L0# 关于遗物 #l", 36, 1013353, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#这片森林中经常可以发现原本埋藏在废墟中的东西。\r\n都是些奇奇怪怪的东西,连我们卡鲁帕都会觉得害怕。", 36, 1013353, false, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#虽然有些家伙喜欢收集废墟中发现的东西……\r\n不过对我们卡鲁帕来说,和废墟有关的东西都是不祥之物。", 36, 1013353, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face1#难道……你对废墟里的东西感兴趣？", 36, 1013353, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0##b(遗物多有价值啊。真是帮没有眼光的家伙。\r\n不过看来是不方便询问有关遗物的事情了……)#k", 36, 1013358, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.askMenu_Bottom("#face0#有什么问题,请尽管问。\r\n只要是我马斯卡波知道的,我会一五一十地全部告诉你。\r\n\r\n#b#L0# 关于村庄 #l", 36, 1013353, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#你对卡鲁帕的村庄感兴趣吗？", 36, 1013353, false, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#啊,卡鲁帕是指代代生活在卡鲁帕的村民。\r\n我也是其中之一。", 36, 1013353, true, true, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#我们大都很胆小,不喜欢到外面去。\r\n除了偶尔来访的冒险家之外,很少和外面交流。", 36, 1013353, true, true, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0##b(虽然是这里的土著居民,但却很害怕遗迹。\r\n看来关于遗迹入口的事情,也是很难问出来了。)#k", 36, 1013358, true, true, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face6##b(再问下去,可能也只是在浪费时间。\r\n不如到其他地方去打听一下。)#k", 36, 1013358, true, true, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#冒险家,看来你好像对这一带很感兴趣。\r\n嗯……如果可以,你能到村里去一趟吗？", 36, 1013353, true, true, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#今天刚好是村里的节日……\r\n名字叫做卡鲁帕灵药节！", 36, 1013353, true, true, 1)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#传说喝了那种灵药之后,可以净化一切邪恶,\r\n并且能让人延年益寿……", 36, 1013353, true, true, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face3##b(哦,可以净化邪恶的传说中的灵药……\r\n听上去还挺让人心动的嘛。说不定跟诅咒有什么关系。)#k", 36, 1013358, true, true, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0##b(虽然不太可信,但只能死马当活马医了。\r\n就当是调查村庄,暂时跟着去看看吧。)#k", 36, 1013358, true, true, 1)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.forceCompleteQuest(35905);
                                                                                                        cm.gainExp(1194);
                                                                                                        cm.gainExp(77);
                                                                                                        cm.sendNormalTalk_Bottom("#face0#好,那就带我到村里去吧。", 36, 1013358, false, true, 1)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#哦,你有兴趣吗？那真是太好了！", 36, 1013353, true, true, 1)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#对于救命恩人,怎么能光是回答几个问题就糊弄过去呢？\r\n我要邀请你参加节日,好好招待招待你。", 36, 1013353, true, true, 1)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#虽然村民们会感觉有点距离感……\r\n但他们很快就能看出你拥有一颗善良之心,并友善地对待你。", 36, 1013353, true, true, 1)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#相信你一定能很快跟村民们打成一片。\r\n呵呵……我看人的眼光可从来不会有错。", 36, 1013353, true, true, 1)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.askAcceptDecline_Bottom("#face0#呵呵,介绍就到这里……\r\n那我就马上带你到村里去吧。", 36, 1013353, 1)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#好的,请跟我来。\r\n我来把你带到卡鲁帕村。\r\n\r\n #r ※ 自动移动到任务地图。#k", 36, 1013353, false, true, 1)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.dispose();
                                                                                                                                    cm.warp(910090306, 0, false)
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35905.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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