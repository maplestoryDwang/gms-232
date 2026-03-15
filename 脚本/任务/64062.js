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
            cm.sendNormalTalk_Bottom("勇，勇士！等一下！", 37, 9400598, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b嗯？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("我们曾经是捕鱼的渔夫。那个……在我们村子里出现的怪物……", 37, 9400598, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b剧毒打嗝怪？", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("啊！你是这么叫那个怪物的！？", 37, 9400598, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b啊……没，有个话唠骑士是这么叫它的。", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("那个……", 37, 9400598, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b那个？", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("它似乎是我们以前抓到的埃特金森！", 37, 9400598, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#b……那是？", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("啊！埃特金森是连血都是透明的鱼！虽然长得很恶心，但是作为阿布鲁地区的特产，味道很棒！", 37, 9400598, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#b但那是粉红色的……大小也不像是鱼啊。", 57, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("我也看到了！如果是吃了粉红色的什么……可能就会变色。但是移动的时候就会变透明了。啊，不只是这样！", 37, 9400598, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("埃特金森本来再生能力就很强！甚至在自己觉得安全的时候还会继续长大，总之它能自由地延展身体。", 37, 9400598, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("你看到……它把右手伸长的样子了吗？", 37, 9400598, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#b……嗯", 57, 0, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("你还不相信吗？还有！", 37, 9400598, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("正是那个毒！那个毒！埃特金森也是有毒的鱼！", 37, 9400598, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("如果，那个真的是埃特金森……", 37, 9400598, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#b如果是埃特金森？", 57, 0, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("如果是埃特金森……", 37, 9400598, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("为了再生而集中的那个时候！如果在那时行动的话，它是不会攻击的。我们应该要抓住那个时机！", 37, 9400598, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#b(……确实在它伸长手臂攻击后，有一段时间它是没有任何动静的……) ", 57, 0, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("但，其实……我虽然这么说，但这事儿其实有点奇怪。", 37, 9400598, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("明明看起来很像埃特金森，但是那么小一条鱼是怎么变成那样的怪物的呢。", 37, 9400598, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#b谢谢你能告诉我这些。", 57, 0, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("啊，没事！如果能帮上忙那就太好了！", 37, 9400598, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("如果你有什么想知道的事情，请随时来问我！", 37, 9400598, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#b好的，我知道了。", 57, 0, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("……咻~！", 37, 9400598, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.forceCompleteQuest(64062);
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
            cm.dispose();
            cm.warp(867201102, 1)
        }
    }
};