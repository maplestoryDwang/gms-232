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
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk("……咋这么马马虎虎呢……？", 41, 2400005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("怎么，怎么了？和我没关系！要找就去找#p2400009#！", 33, 2400010, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……唉，算了。赶紧说出使用武器点数的方法吧。", 41, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("哼，没办法，我就说一次你们听好了。先打开装备窗。", 33, 2400010, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("看到装备窗左下角的武器按钮了吗？看不到？你们真是麻烦。来，我给你们标上。", 33, 2400010, true, true);
                            cm.effect_REPEAT("Effect/Direction13.img/effect/zero/wptuto/0", 1, 1, 1, 0, 0)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("看到了吧？就这样点击按钮……", 33, 2400010, true, true);
                                cm.effect_REPEAT("Effect/Direction13.img/effect/zero/wptuto/1", 1, 1, 1, 0, 0)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("就会弹出武器窗。怎么样，到这里能理解吧？刚才也说了，我只说明一次，所以你们要记好了。先说一下附加属性。", 33, 2400010, true, true);
                                    cm.effect_REPEAT("Effect/Direction13.img/effect/zero/wptuto/1", 1, 0, 0, 0, 0);
                                    cm.effect_REPEAT("Effect/Direction13.img/effect/zero/wptuto/0", 1, 0, 0, 0, 0);
                                    cm.effect_REPEAT("Effect/Direction13.img/effect/zero/wptuto/2", 1, 1, 1, 0, 0)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("点击这个按钮，就可以重新设定潜能。当然这也需要一定的金币和武器点数。可以设定到唯一等级，你们就努力吧，当然不是说光努力就行的。", 33, 2400010, true, true);
                                        cm.effect_REPEAT("Effect/Direction13.img/effect/zero/wptuto/3", 1, 0, 0, 0, 0);
                                        cm.effect_REPEAT("Effect/Direction13.img/effect/zero/wptuto/3", 1, 1, 1, -42, 0)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("武器的成长是把武器的能力值，附加到另一个武器的功能。另一个武器嘛……就是说我们会成长成为另一个武器。", 33, 2400010, true, true);
                                            cm.effect_REPEAT("Effect/Direction13.img/effect/zero/wptuto/3", 1, 0, 0, 0, 0);
                                            cm.effect_REPEAT("Effect/Direction13.img/effect/zero/wptuto/3", 1, 1, 1, 40, 0)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("换句话说就是武器培养？所以要把我们培养好~", 33, 2400009, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#face0#你不是回去了吗？！不要突然冒出来，说这些没用的话！不是那样的 ！#p2400009#，别废话赶紧回去睡觉！", 33, 2400010, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("所谓成长……就是比现在变得更加强大。当然，并不是我自己一人成长，因为我们和你们的灵魂是绑定的，所以只有你们成长我们也才会成长。", 33, 2400010, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("就这样，等到武器成长之后，之前的强化属性是不会消失的。明白了吗？", 33, 2400010, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("嗯……也许吧……？", 41, 2400006, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("……我已经记住了，那就说下一个。", 41, 2400005, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("好的，最后我告诉你们，可以和我们进行对话的按钮。点这个按钮，就可以和我们对话。", 33, 2400010, true, true);
                                                                        cm.effect_REPEAT("Effect/Direction13.img/effect/zero/wptuto/3", 1, 0, 0, 0, 0);
                                                                        cm.effect_REPEAT("Effect/Direction13.img/effect/zero/wptuto/3", 1, 1, 1, 122, 0)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("#b(……稍微说个话都这么累，还要对话什么……？)", 41, 2400005, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("#face1#不、不是希望你能和我搭话，所以才做了这个按钮的！", 33, 2400010, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("反正，这么多应该都理解了吧？不会再让我说一遍吧？", 33, 2400010, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("嗯，都知道了。感谢你这么亲切的说明。", 41, 2400005, true, true);
                                                                                        cm.effect_REPEAT("Effect/Direction13.img/effect/zero/wptuto/3", 1, 0, 0, 0, 0);
                                                                                        cm.effect_REPEAT("Effect/Direction13.img/effect/zero/wptuto/2", 1, 0, 0, 0, 0)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("#face1#不、不是为了你特别亲切的！只是让你们好好对待我们而已！那我也回去了！", 33, 2400010, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk("啊，我收集了周围的武器点数，要不你们先用这个设定一下潜能和附加属性吧，怎么样？", 33, 2400009, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk("#face0#拉比斯！别装作是你自己一个人收集的！", 33, 2400010, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk("你还没回去啊？", 41, 2400005, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk("#face1#因为他说错了，我只是纠正而已！这次真的回去了！", 33, 2400010, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk("喂喂，拉兹丽？等等我！", 33, 2400009, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk("再见啊！", 41, 2400006, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.forceCompleteQuest(41909);
                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                        cm.dispose();
                                                                                                                        cm.forceStartQuest(41912, "0");
                                                                                                                        cm.warp(320000000, 3, false)
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41909.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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