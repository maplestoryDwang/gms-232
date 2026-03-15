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
            cm.sendNormalTalk("你是#h0#？", 0, 3000011, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("呃……嗯？是谁？这声音从哪里传来的？", 2, 3000011, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你别惊讶，好好听我说。我是你的前任，先代狂龙战士。", 0, 3000011, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("先……先代狂龙战士？", 2, 3000011, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("你做好准备听我说了吗？", 1, 3000011)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("几十年前，我为了应对达尔莫尔的进攻而前去守卫赫里希安，但麦格纳斯已经抢先一步袭取了赫里希安。为了让诺巴的难民们能够逃到#m400000000#，同时为了阻止麦格纳斯和幽灵们前往#m400000000#，我必须在那里挡住他们。", 1, 3000011, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("如果我没能在那里阻止他们，万神殿一定难以幸免于难。因为当时在#m400000000#还没有保护膜。#p3000002#将诺巴的圣物带到了#m400000000#，并利用它们展开了保护膜，虽然看上去有点卑鄙，但却是个正确的决定。", 1, 3000011, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("我在那里中了麦格纳斯的诡计，感染了致命的剧毒。在最后时刻，我献出全部的生命力，使用了日珥。结果我跟麦格纳斯，以及他的幽灵军队一起消失了。", 1, 3000011, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("但是麦格纳斯却活了下来！", 3, 3000011, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("麦格纳斯本该死去，但是达尔莫尔赐予他的力量实在太强了。因此他好像幸存了下来，并回到达尔莫尔那里去接受了治疗。", 1, 3000011, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("根据我的推测，即使麦格纳斯接受了治疗，寿命也会大大缩短。他能一直活到现在，一定是从什么地方获得了与生命力有关的能量源。", 1, 3000011, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("听说他在冒险岛世界获得了精灵之力。名字叫古瓦洛吗？总之因为获得了那种力量，所以才能一直延续着生命。", 3, 3000011, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("过去的事情就谈到这里吧。其实我找你不是为了别的，是因为你已经做好了接受我的精髓的准备。", 1, 3000011, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("嗯？精髓？", 3, 3000011, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("没错，狂龙战士是代代转生的。修行到特定阶段之后，就能继承上一代狂龙战士的精髓，成为真正的狂龙战士。我也是从上一代狂龙战士那里继承了精髓。", 1, 3000011, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("现在好像是时候把我的精髓传给你了。狂龙战士的意志将会与你同在。成为一名优秀的狂龙战士吧。我先来唤醒你的潜力，然后你再和我对话。", 1, 3000011, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.forceStartQuest(25712, "");
                                                                            cm.updateInfoQuest(1073, "6100=10;6110=201;6111=201;6112=201");
                                                                            cm.forceCompleteQuest(25712);
                                                                            cm.gainItem(1142487, 1);
                                                                            cm.gainItem(1190001, 1);
                                                                            cm.effect_PlayMusic("Voice.img/jobChanged/6112F");
                                                                            cm.forceStartQuest(29990, "");
                                                                            cm.forceCompleteQuest(29990);
                                                                            cm.changeJob(6112);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25712.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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