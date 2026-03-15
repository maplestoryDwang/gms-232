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
            cm.sendNormalTalk_Bottom("啊……青儿，青儿……\r\n尼姑，求您一定要把青儿……", 37, 2074110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#我知道了。", 37, 2074100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("真，真的吗？", 37, 2074110, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#为了能尽快带沈青回来，\r\n我和我的，额……师父会帮忙的，你不用太担心。", 37, 2074100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("谢谢，那能请您，带我去#g清朝商人#k那里吗？", 37, 2074110, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("有传闻说#g清朝商人#k在#g老虎山坡#k处徘徊。", 37, 2074110, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(30409, "");
                                    cm.OnStartNavigation(224000120, 0, "", 0);
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
            cm.sendNormalTalk_Bottom("喔，喔，都说了我们现在不做生意~走吧~", 37, 2074111, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("不知你有没有见过一个长着一头漂亮的黑发，还戴着发带的少女啊？", 37, 2074110, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("戴着#b花样发带#k的姑娘岂止一两个啊？我不知道。\r\n今天我不做生意，你走吧。", 37, 2074111, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("……我没说过#b花样发带#k啊。", 37, 2074110, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("那……那什么，姑娘家戴着的不都是花样发带嘛，你说什么呢！", 37, 2074111, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("……你知道青儿吧？青儿去哪儿了！\r\n青儿，你把我家青儿带到哪里去了！", 37, 2074110, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("我不知道你在说什么，走吧！还不给我滚！", 37, 2074111, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face2#嗯，好像已经去#g印塘水#k了，赶紧追过去吧。", 37, 2074100, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("印塘水？那是哪儿啊……", 37, 2074110, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("你，你怎么知道印塘水的！你到底是谁？\r\n我不能让你去碰祭物~", 37, 2074111, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("什么，祭物？", 37, 2074110, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("这帮混账！难道你们是谁派来的细作吗？\r\n都愣着做什么！赶紧拦住这帮家伙！", 37, 2074111, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.dispose();
                                                            cm.warp(224005150, 0)
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
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