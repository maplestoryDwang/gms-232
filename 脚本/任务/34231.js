var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("有什么事吗，飞鱼？难道……", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face13#等等！你就叫我江好了。要是叫我飞鱼，其他人会觉得很奇怪的。", 36, 3003480, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("呃……嗯，江！找到让身体复原的方法了吗？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#嗯……还没……她的力量造成的影响比想象中更大。\r\n恐怕需要花费一点时间才能回去了。\r\n在这之前，我想再积蓄一点力量。", 36, 3003480, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face13#先不说这个。最近出了点问题。", 36, 3003480, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("问题？什么问题？", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face13#一直待在这里，感觉我正在逐渐失去自我，慢慢被江的记忆侵蚀。", 36, 3003480, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face13#陷在记忆的沼泽中无法自拔……\r\n逐渐变成了莫拉斯的一部分。", 36, 3003480, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("什么？！", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face13#这样下去，身为飞鱼就会消失……\r\n只有身为江的我会留在这里……", 36, 3003480, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("！！！", 56, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face9#……现在还没到那个地步，别那么紧张。", 36, 3003480, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（……以前说啾啾的时候很可爱……现在换了个身体说话……性格好像也变了……）", 56, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#现在的状态……是的，可以说暂时被这里的气场给压制住了。", 36, 3003480, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#虽然还没受到太大的影响，但这个状态持续下去总不会有什么好处。", 36, 3003480, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("嗯，我能帮你做点什么呢？", 56, 0, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face10#这个嘛……", 36, 3003480, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.updateInfoQuest(34231, "once=1");
                                                                                cm.sendNormalTalk_Bottom("#face10#在记忆沼泽中让我保持自我的方法……", 36, 3003480, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face10#吸收#i4036337:#  #r#t4036337:##k，我的记忆应该暂时就会安定下来。\r\n因为那样可以把消散的记忆重新聚集起来。", 36, 3003480, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.askAcceptDecline_Bottom("#face0#为了不让我陷入记忆沼泽，你能帮我去搜集#i4036337:#  #r#t4036337:##k吗？", 36, 3003480)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.forceStartQuest(34231, "");
                                                                                            cm.sendNormalTalk_Bottom("明白了。你能告诉我在哪里能找到吗？", 56, 0, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0##i4036337:#  #r#t4036337:##k可以从#b莫拉斯的所有怪物#k身上获得。\r\n大概有#r30个#k就够了。", 36, 3003480, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("稍等一下！我马上就回来。", 56, 0, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0##i4036337:#  #r#t4036337:##k全都搜集到了吗？", 36, 3003480, false, true)
        } else {
            if (status === a++) {
                cm.setInGameDirectionMode(true, false, true);
                cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/morass/DailyQuest/2"], [0, 219, 18, 1, 0, 1, 1, 0]);
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/memory_absorb", 100);
                cm.inGameDirectionEvent_AskAnswerTime(2500)
            } else {
                if (status === a++) {
                    cm.setInGameDirectionMode(false, true, false);
                    cm.sendNormalTalk_Bottom("#face7#呼……感觉好多了。以后要是有时间，希望你能常来帮我。", 36, 3003480, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#虽然看上去没什么差异，但我感觉就像吃了千年人参一样，浑身充满了力量。", 36, 3003480, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(34231);
                            cm.gainItem(4036337, -30);
                            cm.sendNormalTalk_Bottom("如果难以完全恢复原样，稍微来一点变化怎么样？", 56, 0, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face10#一点变化……", 36, 3003480, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("在现在的样子上，加上一点新东西，不是更容易吗？", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("只要装上新翅膀，不就又能飞了吗？反正我……只要有人背着就行。", 56, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face1#让我背着你飞？你看看我的体型！", 36, 3003480, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("啊哈哈，反正力气还在，我还以为没问题呢。", 56, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("但是塔纳是怎么跑到下一个地区去的呢？", 56, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#那个嘛，她可以操纵艾尔达，可以利用那种力量到达下一个地方。\r\n通过制造艾尔达之路，诸如此类。", 36, 3003480, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("那我们不也能跟着到下一地区去吗？\r\n我也能操纵艾尔达，虽然力量比她弱得多。", 56, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face1#！！！", 36, 3003480, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face11#你，还挺聪明的嘛？", 36, 3003480, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.updateInfoQuest(34232, "once=1");
                                                                        cm.sendNormalTalk_Bottom("#face0#快去寻找她的痕迹吧。\r\n最后一次见到她的地方是斜塔，最好到那里去看看！", 36, 3003480, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.askAcceptDecline_Bottom("#face0#你想现在出发吗？\r\n#r（接受时立即移动。）#k", 36, 3003480)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                if (d > 0) {
                                                                                    cm.dispose();
                                                                                    cm.warp(940204300, 0)
                                                                                } else {
                                                                                    cm.sendNormalTalk_Bottom("啊！稍等一下！", 56, 0, false, true)
                                                                                }
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face13#你不想去找她吗？快点！", 36, 3003480, true, true);
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
};