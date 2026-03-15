var status = -1;
var selectionLog = [];

function start(d, h, j) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = j;
    var c = -1;
    if (status <= c++) {
        cm.dispose()
    } else {
        if (status == c++) {
            cm.sendNormalTalk("你们竟然想了解绑匪……真是些奇怪的家伙呢。关于我所目击的情况，我已经全部告诉贝尔了。你们为什么想要知道关于绑匪的事情呢？", 32, 2450002, false, true)
        } else {
            if (status === c++) {
                cm.askAcceptDecline("难道说你们认识绑匪？……那，好吧。告诉你们，我又没有什么损失。但是我不能就这么白白地告诉你们。同样的话要重复好几次，真的很烦人。", 32, 2450002)
            } else {
                if (status === c++) {
                    cm.updateInfoQuest(40401, "");
                    cm.forceStartQuest(40401, "");
                    cm.updateInfoQuest(41832, "desert=off;three=off;light=off;afrien=off;bell=enter;cave=off;west=off");
                    cm.sendNormalTalk("嗯……在这种地方说好像不太合适。我们去人更少的地方说吧。去#b#MDmap325090030##k吧。你们先走。我会在后面跟着你们的。", 32, 2450002, false, false)
                } else {
                    if (status === c++) {
                        var g = ["mirrorD_325_0_", "mirrorD_325_1_", "mirrorD_325_2_", "mirrorD_325_3_"];
                        var a = [0, 0, 0, 0];
                        var b = ["为强化埃德尔斯坦的治安所安排了巡逻机器人和警卫机器人的路灯街头。", "因山崩危险需要小心通过的岩山。", "只有在埃德尔斯坦才能挖掘到神秘镥矿石的矿山深处。", "一般人禁止入内的矿山警备区域。"];
                        var f = new Array();
                        var e = 41801 + parseInt((cm.getMapId() - 320000000) / 1000000) * 4 - 4;
                        for (var c = 0; c < b.length; c++) {
                            if (cm.getNumberFromQuestInfo(e + c, "count") > 0) {
                                f.push(b[c] + "\n\n通关次数:" + cm.getNumberFromQuestInfo(e + c, "count") + "\r\n最短纪录:" + cm.getNumberFromQuestInfo(e + c, "min") + "分 " + cm.getNumberFromQuestInfo(e + c, "sec") + "秒")
                            } else {
                                f.push(b[c] + "\n\n通关次数:- \r\n最短纪录:-分 -秒")
                            }
                        }
                        if (cm.isQuestActive(40401)) {
                            g.push("map325090030");
                            a.push(0);
                            f.push("和瓦尼约定见面的路灯街头。")
                        }
                        if (cm.isQuestActive(40943)) {
                            g.push("map325090310");
                            a.push(0);
                            f.push("阿尔杉走过来的岩石道路。")
                        }
                        cm.setMirrorDungeonInfo(g, a, f);
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40401.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("真是强悍的家伙啊……没办法了。只能我亲自出马了。好，来吧！", 32, 2450034, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("等下，你是谁？你和影子骑士团是一伙的吗？但是没见过你呢……但又不知为何觉得你眼熟……难道你是……", 44, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("刚刚的那个警察……？", 44, 2400006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("影子骑士团？那是什么东西？没错，我就是刚刚盘问你们的警察#p2450001#。虽说现在是要抓你们的警察。", 32, 2450034, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face11#你又不是影子骑士团的人，为什么要攻击我们？你好像是利用刚刚那个叫#p2450002#的男子把我们引到这里的。我们为什么会被你们攻击？", 44, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那不是理所当然的事情吗？拥有蓝色的头发的人……你们俩和绑匪是一伙的吧？和罪犯是一伙的话，我当然要抓你们啊！", 32, 2450034, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#face6#你在说什么啊？我们怎么会和罪犯是一伙的？", 44, 2400005, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("你们不是说来找那个绑匪的嘛？你们来见他，是又想在埃德尔斯坦制造些什么事端？你们年纪轻轻，就拿着那么危险的武器……你们有没有说谎，我还看不出来吗？", 32, 2450034, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#face10#……我知道你想说什么了…… 如果我们真的和绑匪是一伙的话，还会在你面前明目张胆地说要找绑匪吗？因为不是一伙的，才会寻找他的啊。起初，我们都不知道我们要找的人犯了罪。", 44, 2400005, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("噢……那，那样啊？", 32, 2450034, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("我承认，你有怀疑我们的理由。但是你猜错了。我们确实正在寻找绑匪，但那并不是为了犯罪。", 44, 2400005, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("那是什么？为什么要找那个人？", 32, 2450034, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("那个说来话长，就算我们说了你也很难相信，就算了吧。总之，可以确定的是我们要做的不是危害村庄的事。我们将带那个绑匪离开这个村庄。", 44, 2400005, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("看你们吞吞吐吐的样子，我感觉你们还是在说谎…… 怎么样，#p2450033#？你觉得他们的话是不是真的？", 32, 2450034, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("……不是谎话。说谎的人的感觉不是这样的。", 36, 2450033, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("#face6#……#o9300769#说话了？", 44, 2400006, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("第一次见到#o9300769#说话？嗯…… #p2450033#说你们没有说谎的话，那你们就真的没说谎…… 你们真的和绑匪不是一伙的吧？但你们要找绑匪？嗯哼……", 32, 2450034, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("正好！我们正缺少人手来完成计划，如果你们加入，那就正好了！从刚刚的打斗中不难发现，你们还是有点实力的…… 好吧！那你们就协助我们完成计划吧！这和你们的目的也是吻合的！", 32, 2450034, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("#face6#……怎么决定地这么快？你们的目的是什么？", 44, 2400005, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("那个在这说有点不方便……#b我先和其他同伴商量下，再通过#p2450002#联络你们#k。那再见！", 32, 2450034, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.gainExp(14503000);
                                                                                            cm.forceCompleteQuest(40401);
                                                                                            cm.forceCompleteQuest(40940);
                                                                                            cm.updateInfoQuest(41832, "desert=off;three=off;light=off;afrien=off;bell=off;cave=off;west=off");
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
};