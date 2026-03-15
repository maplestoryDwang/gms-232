var status = -1;
var selectionLog = [];

function start(d, c, b) {
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
            cm.askMenu_Bottom("你算什么东西？不要瞎掺和。\r\n#b#L0#欺负后辈是不好的行为。#l  \r\n#b#L1#我不想掺和，只是看看而已。#l", 37, 1530212)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("欺负后辈是不好的行为。", 56, 1530212, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你说欺负？那是什么意思，我们只是在聊天而已。对不对？", 37, 1530210, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("那个，姐姐，我真的没有撕毁你的信。", 37, 1530300, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你还不承认，有人亲眼看到的。听说你每天早上都在实习老师的桌上放一瓶饮料？对吧，不是吗？", 37, 1530210, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("没错……", 37, 1530300, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("你放完饮料后，我的信就不见了呢！这是怎么回事呢？", 37, 1530210, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("…………", 37, 1530300, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("老实交代吧，嗯？", 37, 1530210, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("嗯……但真的不是我……呜，呜呜……", 37, 1530300, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("不准哭，喂，如果被别人看见，还以为我在欺负你呢！", 37, 1530210, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("……呜咿。", 37, 1530300, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("不要让别人发现，下楼的时候保持微笑，知道了吗？", 37, 1530210, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("哦……", 37, 1530300, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("把眼妆卸掉，睫毛膏都……", 37, 1530210, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("我还以为是谁呢，原来你就是那个转校生啊。听说你最近到处胡作非为？", 37, 1530210, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("不过，你胡作非为的事情与我无关。如果你发现有人对阿白实习老师图谋不轨，一定要告诉我。招惹别人的男人是要付出代价的。哈哈……", 37, 1530210, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.forceCompleteQuest(33016);
                                                                                cm.curNodeEventEnd(true);
                                                                                cm.setInGameDirectionMode(true, false, true);
                                                                                cm.sendNormalTalk_Bottom("……屋顶上原来有比尘土怪更可怕的存在啊。", 57, 0, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("喵呜，喵，喵呜~", 37, 1530053, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("这不自然的猫叫声是……莉莉？", 57, 0, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                        } else {
                                                                                            if (status === a++) {
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

function end(d, c, b) {
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
            cm.askMenu_Bottom("你算什么东西？不要瞎掺和。\r\n#b#L0#欺负后辈是不好的行为。#l  \r\n#b#L1#我不想掺和，只是看看而已。#l", 37, 1530212)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("欺负后辈是不好的行为。", 56, 1530212, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你说欺负？那是什么意思，我们只是在聊天而已。对不对？", 37, 1530210, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("那个，姐姐，我真的没有撕毁你的信。", 37, 1530300, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你还不承认，有人亲眼看到的。听说你每天早上都在实习老师的桌上放一瓶饮料？对吧，不是吗？", 37, 1530210, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("没错……", 37, 1530300, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("你放完饮料后，我的信就不见了呢！这是怎么回事呢？", 37, 1530210, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("…………", 37, 1530300, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("老实交代吧，嗯？", 37, 1530210, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("嗯……但真的不是我……呜，呜呜……", 37, 1530300, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("不准哭，喂，如果被别人看见，还以为我在欺负你呢！", 37, 1530210, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("……呜咿。", 37, 1530300, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("不要让别人发现，下楼的时候保持微笑，知道了吗？", 37, 1530210, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("哦……", 37, 1530300, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("把眼妆卸掉，睫毛膏都……", 37, 1530210, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("我还以为是谁呢，原来你就是那个转校生啊。听说你最近到处胡作非为？", 37, 1530210, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("不过，你胡作非为的事情与我无关。如果你发现有人对阿白实习老师图谋不轨，一定要告诉我。招惹别人的男人是要付出代价的。哈哈……", 37, 1530210, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.forceCompleteQuest(33016);
                                                                                cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                                                cm.curNodeEventEnd(true);
                                                                                cm.setInGameDirectionMode(true, false, true);
                                                                                cm.sendNormalTalk_Bottom("……屋顶上原来有比尘土怪更可怕的存在啊。", 57, 0, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("喵呜，喵，喵呜~", 37, 1530053, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("这不自然的猫叫声是……莉莉？", 57, 0, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                        } else {
                                                                                            if (status === a++) {
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
};