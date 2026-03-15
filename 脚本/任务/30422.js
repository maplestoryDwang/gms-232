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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("#face0#你好，你就是那对著名的#b友爱的两兄弟#k中的大哥吧，是吧？", 37, 2074100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("什么著名啊……\r\n你哪位？", 37, 2074123, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我看你满脸的愁容，\r\n不知是不是有什么事情啊……", 37, 2074100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我可不打算买什么护符或者药之类的。", 37, 2074123, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#不是，我不是那个意思，嗯……\r\n我们是……那！", 37, 2074100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face3##b(宝玉的感觉……？这是！)#k", 37, 2074100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face2#这是……#g嫉妒#k？\r\n你原来在嫉妒啊？", 37, 2074100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("嫉妒？呵，呵呵，呵，我可真是。\r\n你说什么呢？嫉妒？我吗？嫉妒谁？我弟弟？\r\n呵呵呵呵！胡说八道！", 37, 2074123, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#我没说是你弟弟啊……\r\n哎哟？小姐，你还没走啊？", 37, 2074100, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("啊！那，那个，你别误会。\r\n这位白头发的姑娘和我没关系……", 37, 2074139, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face1#……果然是因为那个女人吗？", 37, 2074100, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("……被骗了啊。", 37, 2074123, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("怎么，我难道犯了什么罪吗？\r\n我难道不能喜欢人吗。", 37, 2074123, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#所以啊！我们这不就是来了嘛。\r\n女人的问题作为女人我很懂的，\r\n请叫我恋爱烦恼终极顾问小可爱。", 37, 2074100, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#(虽然我其实从来没有谈过恋爱啦，嘿嘿。)", 37, 2074100, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("那如何俘获她的芳心你也知道？", 37, 2074123, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#那是！如果存在情敌，可能就没那么简单了……\r\n不过刚刚你和你弟弟就是为了那个女人吵架的吧？", 37, 2074100, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("嗯，额，那个……我都这把年纪了虽然有点那什么，没错。\r\n虽然我也曾经想过要做出退让……", 37, 2074123, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("不过……我实在是没法眼睁睁地看着弟弟和她在一起的样子！", 37, 2074123, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#你和弟弟聊过吗？", 37, 2074100, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("你没看到我们俩刚刚是怎么相处的吗？\r\n这个嘛……就只是自己心里知道罢了……", 37, 2074123, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#嗯……我觉得还是有必要先跟弟弟聊一聊。", 37, 2074100, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("额……随你的便好了，\r\n我已经好久没有跟弟弟单独说过话了。", 37, 2074123, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("穿过右边的小溪就是弟弟的家。", 37, 2074123, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.forceStartQuest(30422, "");
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("嗯，你说是哥哥请求你来的？", 37, 2074124, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("……所以呢？", 37, 2074124, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#二位在一起谈一谈怎么样？\r\n原本三角关系就是……", 37, 2074100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("算了，我知道大哥也喜欢她，\r\n不过……我也没法做出让步。", 37, 2074124, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("一想到大哥在看着她我就生气，\r\n还请你不要干涉别人的事情。", 37, 2074124, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#我是生怕自己有所误会才会问的，\r\n你在和那位姑娘交往吗？", 37, 2074100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("……这！", 37, 2074124, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("不，还没有。", 37, 2074124, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face2#那你怎么说得好像对方是你的女人似的？", 37, 2074100, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face2#还有，你们分明是相亲相爱的两兄弟，互相这样都不觉得害臊吗？", 37, 2074100, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("……所以呢？你让我怎么办？", 37, 2074124, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#嗯，最终决定还是得由她来做的。\r\n就算你们两兄弟吵翻了天，也并不能解决问题。", 37, 2074100, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#你怎么不直接表白呢？", 37, 2074100, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("表，表白？这……这……啊，我快要疯掉了，额。", 37, 2074124, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#…………", 37, 2074100, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("那什么，表白还是有点……毕竟，额，额。", 37, 2074124, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face5#哎哟！愁死我了！\r\n还是我去打听看看吧！", 37, 2074100, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("啊，啊？喂！", 37, 2074124, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2##b#h0##k，做什么呢，赶紧走吧。\r\n我觉得只有让那位姑娘亲自做出决定，才能结束这个烂摊子。", 37, 2074100, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.updateInfoQuest(30422, "NpcSpeech=20740051");
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("欢迎光临，客人，\r\n有什么要买的吗？", 37, 2074125, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#你好，其实，我来是有些事情想要问你。", 37, 2074100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("是，有什么事你尽管……", 37, 2074125, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#你现在有在交往的人吗？", 37, 2074100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("哎？什么？你这突然问的是哪一出啊……", 37, 2074125, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#啊……我其实……\r\n是个媒人！是，我是个媒人。", 37, 2074100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#现在有几位男士和姑娘非常般配，怎么样？", 37, 2074100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("很抱歉，其实我……\r\n从很久之前开始心里就有喜欢的人了。", 37, 2074125, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#真的吗？是谁啊？", 37, 2074100, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("这我不能告诉你。", 37, 2074125, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#如果你有喜欢的人，为什么不去表白呢？\r\n既然你这么漂亮雅致。", 37, 2074100, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("其实，我每天都能遇到他，但是……", 37, 2074125, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#每天都能遇到，嗯……", 37, 2074100, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("我身份低微，他对我来说实在是有些难以企及。", 37, 2074125, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#嗯，如果那位男士先表白呢？", 37, 2074100, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("那种梦一般的事情会发生吗？", 37, 2074125, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#这个嘛，看来答案已经出来了，呵呵，来，回去吧！", 37, 2074100, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.updateInfoQuest(30422, "NpcSpeech=20740051/20740242");
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("是真的吗？", 37, 2074139, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("她在等待对方表白吗？", 37, 2074139, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#没错，\r\n#b(其实，我并不知道她在等待谁的表白……)#k\r\n所以趁着现在还不算迟，赶紧去传递你的心意吧。", 37, 2074100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("怎，怎么做……？", 37, 2074123, true, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(30422, "NpcSpeech=20740051/20740242/20740043");
                            cm.updateInfoQuest(30422, "gExpCheck=1;NpcSpeech=20740051/20740242/20740043");
                            cm.forceCompleteQuest(30422);
                            cm.gainExp(142059);
                            cm.inGameDirectionEvent_AskAnswerTime(400);
                            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                            cm.setInGameDirectionMode(false, true, false);
                            cm.dispose()
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