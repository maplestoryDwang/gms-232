var status = -1;
var selectionLog = [];

function action(d, c, b) {
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
        if (status === a++) {
            cm.npc_ChangeController(2411022, "oid=24131", 176, 54, 136, 126, 204, 1, false, 0, false);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
            cm.curNodeEventEnd(true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这里就是神木村吗？的确比#m321000100#明亮多了。还以为到了#m321000100#之外会有什么巨大的发现，他们反倒看起来挺朴素的嘛。他们就是#p2400008#说的哈夫林吧？", 41, 2400005, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("那里……长着奇怪胡子的哈夫林……应该就是村长吧。", 41, 2400006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("是嘛？怎么感觉有点奇怪呢？看起来很忧郁，出了什么事情了？先去找他问问看吧。你如果觉得说不出来适当的话，那就闭上嘴巴不要插进来。知道了吗？", 41, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("嗯……", 41, 2400006, true, true)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_MoveAction(2);
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_MoveAction(0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#face5#你好，见到你很高兴。您是神木村的村长吧？我们是巡游世界的冒险家，想在这个村子里找一件东西，如果可以的话能帮我们一下吗？", 41, 2400005, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("噢噢，冒险家啊……如果是以前我肯定会举双手欢迎，但现在村子的情况有点乱，所以我高兴不起来。不过你们想问什么，我都帮你们回答。", 33, 2411000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#face4#我们在寻找叫做#b时间圣物#k的东西，是一个巨大的沙漏形态。您有没有见过？", 41, 2400005, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("嗯……还真没听说过这种东西……在神木村大家基本上都使用日晷。", 33, 2411000, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#b(唔……看起来不像是在说谎。难道是真不知道？那样的话就不用继续说了。不过这老头看起来好像还有话要说？怎么感觉有点烦……)", 41, 2400005, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("这么说来，我知道一件事情可能会对你们有帮助，想不想听一下？就在不久前，刚出生没多久的#b幼龙在村子里失踪#k了，在一个人迹罕见的北部森林里。", 33, 2411000, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("村民们为了寻找幼龙，到了北部森林。但是在那里发生了意想不到的事情，有一只庞大到足可以遮挡天空的#r巨大的龙#k站在那里！它的脸看起来想要吞噬1000个人似的，面目狰狞凶恶至极！", 33, 2411000, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("我们哈夫林再怎么不怕龙族，也没有办法面对这条龙，村民们被吓得匆忙逃回到村里。但是再怎么可怕我们不得不和那条龙对话。", 33, 2411000, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("之后，我们去了好几次想和这条龙对话，但是和这条龙实在是无法沟通。因为它的性格非常凶暴……我们都拿他没有任何办法。", 33, 2411000, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("突然有一天，出现了一位像你们一样的#b年轻冒险家#k，想要去会会那条龙……但是他却一去不复返了。感觉事态越来越严重了……真不知道这种时候该怎么办。", 33, 2411000, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("#face5#啊哈，原来如此。您的故事我们听好了。", 41, 2400005, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("#face5#那么我们就先告辞……", 41, 2400005, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("不不不！现在才开始。", 33, 2411000, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.dispose();
                                                                                            cm.warp(321100000, 9, true);
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

function start() {
    status = -1;
    action(1, 0, 0)
};