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
            cm.sendNormalTalk("那么现在告诉你们怪盗幻影的据点就可以了吧？幻影的据点就在南部沙漠的大岩石下边。因为有魔法挡着，必须要喊出咒语才能进到里边。", 32, 2420012, false, true)
        } else {
            if (status === c++) {
                cm.askAcceptDecline("咒语是#b芝麻开门#k。忘记了可就进不去了，所以一定要记住。还有……一定要抓到幻影。呼呼。", 32, 2420012)
            } else {
                if (status === c++) {
                    cm.updateInfoQuest(40104, "");
                    cm.forceStartQuest(40104, "");
                    cm.updateInfoQuest(41832, "desert=enter;afrien=off;cave=off");
                    cm.sendNormalTalk("啊？我们要不要一起去？啊啊，我们没关系。只要两位能抓到幻影就可以了，只要抓到幻影我们就解恨了。那么我就在这里等着。", 32, 2420012, false, false)
                } else {
                    if (status === c++) {
                        var g = ["mirrorD_322_0_", "mirrorD_322_1_", "mirrorD_322_2_", "mirrorD_322_3_"];
                        var a = [0, 0, 0, 0];
                        var b = ["能够望见牢牢竖在滚烫沙漠上的仙人掌的阿里安特西门外。", "能在炙热沙地上啪嗒啪嗒跑动的蜥蜴所栖息的阿里安特东门外。", "阿里安特北门外，聚集着专门打劫阿里安特商团的入侵者们。", "由木乃伊把守的古代阿里安特王国的金字塔。"];
                        var f = new Array();
                        var e = 41800 + parseInt((cm.getMapId() - 320000000) / 1000000) * 4 - 4;
                        for (var c = 0; c < b.length; c++) {
                            if (cm.getNumberFromQuestInfo(e + c, "count") > 0) {
                                f.push(b[c] + "\n\n通关次数:" + cm.getNumberFromQuestInfo(e + c, "count") + "\r\n最短纪录:" + cm.getNumberFromQuestInfo(e + c, "min") + "分 " + cm.getNumberFromQuestInfo(e + c, "sec") + "秒")
                            } else {
                                f.push(b[c] + "\n\n通关次数:- \r\n最短纪录:-分 -秒")
                            }
                        }
                        if (cm.isQuestActive(40104)) {
                            g.push("map322090110");
                            a.push(0);
                            f.push("怪盗幻影的据点所在的南部沙漠。")
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40104.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
                cm.fieldEffect_PlayBGM("Bgm33.img/SmileZero", 0, 0);
                cm.sendNormalTalk("……你是怪盗幻影……？怪盗幻影长这样吗？", 41, 2400006, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("什么呀，你那失望的表情？你还真以为怪盗幻影是个帅哥吗？我是阿里特安的时尚帅哥#p2420007#！该死，你们也是被那群姐妹骗到这里来的吗？", 33, 2420007, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#face6#姐妹……？", 41, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("被骗……？", 41, 2400006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("是的！#p2420012#！#p2420013#！#p2420014#！这三个姐妹！我也是听了她们的话，还以为这里是幻影的据点，才来到这里！但是发现这里到处都是#o9300760#！", 33, 2420007, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我怕被#o9300760#给打死了，所以才躲到角落认真地想了一下……突然想出来一个名字！那就是叫做#r怪盗斯维茨#k的三姐妹！听说她们很能骗人，原来是以幻影作为幌子把我骗到这里来了！", 33, 2420007, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("把我关在#o9300760#洞里之后，让我消灭#o9300760#，自己却要去偷盗宝石！该死！我还愚蠢地想要成为她们的同伴，要给她们证明实力呢！", 33, 2420007, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#face6#等下……你的意思是，我们都被她们给骗了？可恶……！我不会饶了她们的！", 41, 2400005, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("发火也不管用！她们应该早就跑掉了……这就是怪盗斯维茨的手段。额啊~气死我了！我为什么要被误会成怪盗幻影啊！其实我长得很帅的！", 33, 2420007, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#face0#……那就是你生气的原因吗……", 41, 2400005, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("镇定点。", 41, 2400006, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("啊，我得向你们道谢。没有你们，我就得待在这里变成乌鸦了。一两只我还能搞定，但是数量实在是太多了。", 33, 2420007, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("谢谢你们，此恩此德我永远不会忘记的。现在我身上也没什么，所以无法表示我的谢意……不过你们可以到#b沙图团的据点#k来找我。", 33, 2420007, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("沙图团的据点在#b阿里安特东边#k，虽然有些隐蔽有点难找……不过你们肯定能找到的。那么我们后会有期！", 33, 2420007, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceCompleteQuest(40104);
                                                                        cm.forceCompleteQuest(40911);
                                                                        cm.updateInfoQuest(41832, "desert=off;afrien=off;cave=off");
                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                        cm.gainExp(1890000);
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
};