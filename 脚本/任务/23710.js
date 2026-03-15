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
            cm.sendNormalTalk("你来得正好，#b#h0##k。有条发给你的信息。", 0, 2300000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("信息？", 16, 2300000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("是的，是#b#p2159391##k发来的。她说想和你决一死战。\r\n……她说如果你不敢应战，就把埃德尔斯坦全部毁掉。看来她这次下定了决心。", 0, 2300000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("是吗？看来只能应战了。", 16, 2300000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("没关系吗？感觉她好像非常执着。这次可能不会像以前一样，能够善始善终。", 0, 2300000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那是你的#b预感#k吗？那种不确定的话，不太像是你能说出来的。", 16, 2300000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("把它说成是#b预测#k怎么又？嗯……这段时间和其他人一起生活，我学会了很多。\r\n总之这次必须格外小心。场所对方已经指定了。看，这是坐标。", 0, 2300000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("…………这里。", 16, 2300000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("我们逃出来的那个研究所。那里也是你和她第一次战斗的地方。", 0, 2300000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("看来她真的想和我决一死战。", 16, 2300000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.askYesNo("所以必须比平时更加谨慎。坐标已经有了，我可以直接送你去研究所。怎么样？你想现在去吗？\r\n#r(接受后立即移动。)#k", 0, 2300000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceStartQuest(23710, "");
                                                        cm.dispose();
                                                        cm.warp(931060040, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23710.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.setInGameDirectionMode(true, true, false);
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg0/1", "oid=0"], [1200, -160, -85, 1, 0, 1, 1, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(1140)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……结束了。", 1, 2159393, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你想听听过去的事情吗？你应该已经不记得了，最初制造出你的时候，父亲非常高兴。他说之前所做的一切，都是为了制造出你。我从来没有看见他那么高兴过。\r\n那时我就预感到了，也许有一天……", 1, 2159393, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("也许有一天我会和你战斗……。", 1, 2159393, true, true)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg0/1"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(1140)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("但是我没想到你竟然会背叛。\r\n所以我按照父亲的命令四处追踪你……和你战斗过几次。", 1, 2159393, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("每次遇到你的时候，你都会变得更强。战斗机器是不需要感情和记忆之类不确定的东西……我一直这么认为。但是我一次都没能战胜你。从这一点看，也许是父亲和我错了。", 1, 2159393, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#p2159391#……", 3, 2159393, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("我说过这将是最后一次战斗，对吧？好了，让我来给一切画上句号吧。\r\n从今以后，我不会再在你面前出现了。", 1, 2159393, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("那是什么意思？", 3, 2159393, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("这次是我最后的机会。如果这次我还是无法战胜你，我就会作为失败作品而被报废。", 1, 2159393, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1140)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("你说什么？！", 3, 2159393, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("呵呵……怎么了？\r\n你应该高兴才对。以后你就不用担心被我追踪了。", 1, 2159393, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("你在说什么呢？我怎么高兴得起来。\r\n报废……早知道这样的话，我就不和你打了！", 3, 2159393, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg0/1", "oid=0"], [1200, -160, -85, 1, 0, 1, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1140)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("……对了，你只要不回到#p2154009#那里去不就行了？\r\n别回去。既然这样，你就和我一起到维利塔斯去。那里的人都是好人。我会跟他们好好说的。", 3, 2159393, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("那是不可能的。", 1, 2159393, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("为什么？", 3, 2159393, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("任务是我最后的自尊心……是我存在的理由。我不能背叛父亲。如果承受失败的代价是我最后能做的事情，我就必须将任务完成到底。", 1, 2159393, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("但是回去的话，只会毫无意义地死去。", 3, 2159393, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk("机械人怎么会死？别说傻话……。", 1, 2159393, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk("这种事情哪有什么人类和机械人之分？死就是死！", 3, 2159393, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk("够了。别再说了。你的反应太像人类，连我都可能出现混乱。\r\n我和你不同，我只是机械人。机械人必须忠实于命令。不管你说什么，都无法改变这一点。", 1, 2159393, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk("你在胡说什么呢……。", 3, 2159393, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk("……也许就像你说的那样，我的死可能毫无意义。但即使死得毫无意义，我也不想连诞生的意义都一起失去。我诞生的意义就是为了完成任务……", 1, 2159393, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk("#p2159391#，别走。", 3, 2159393, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk("我和你直到最后都只有战斗。如果我们是普通的人类兄弟，故事也许就不一样了。……不，就算我们都是人类，我也会整天和你吵架……不过听说这就是所谓的兄弟，对吧？呵呵。", 1, 2159393, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg2/0", "oid=0"], [1200, -160, -85, 1, 0, 1, 1, 0, 0]);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/0"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(800)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk("等等！！", 3, 2159393, false, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.forceCompleteQuest(23710);
                                                                                                                                        cm.gainExp(1500000);
                                                                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                        cm.dispose();
                                                                                                                                        cm.warp(931060042, 0, false)
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