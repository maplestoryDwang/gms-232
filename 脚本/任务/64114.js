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
            cm.sendNormalTalk_Bottom("#h0#，你说要谢我？", 37, 9400601, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("那么… 可否帮我一个忙？", 37, 9400601, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("啊啊，我说的话听起来是否在向你索取什么回报？噢，不是那样的。我怕你太忙了，所以不知道能不能拜托你……", 37, 9400601, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b不，没关系。你尽管说。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("好好。我只是一介商人，但是作为商人我也有自己的使命。那就是我要常备人们所需要的所有物品。", 37, 9400601, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("别人可能会笑我那算什么使命… ", 37, 9400601, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b不，没人会那么认为。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("谁会那么想？我所看到的人都在感谢艾尔巴。", 37, 9400586, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("那真是太好了。", 37, 9400601, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("但是最近村子和冰峰雪域断了联系之后，很多物品都需要补给。", 37, 9400601, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("其他的倒是无所谓… 但是现在这种情况下，药水也快要断货了… ", 37, 9400601, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("虽然厚颜无耻，但还是要拜托你。", 37, 9400601, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#b不不，药水是我们大家都需要的。反而要感谢你，是你提醒到了我。", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("真的吗？哇噢，那我就可以放下心头的这块石头了。", 37, 9400601, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("虽然实力不怎么样，但是我会调制药水。只要有几个材料的话… ", 37, 9400601, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#b需要什么材料？", 57, 0, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("等下… 我记在哪里了呢… 啊！在这里。", 37, 9400601, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("需要独眼触须怪的触须20个，扁柏树叶10个，小白雪鬼结晶10个，埃特金森透明的血10ml… ", 37, 9400601, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("啊… 太多了吗？", 37, 9400601, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#b…不… 没有。独眼触须怪的触须20个，扁柏树叶10个… 还有呢… ", 57, 0, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("小白雪鬼结晶10个，埃特金森透明的血10ml！", 37, 9400601, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("我把这个笔记借给你吧，里边也写了寻找材料的方法，肯定会有帮助的。", 37, 9400601, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.forceStartQuest(64114, "");
                                                                                                    cm.playerMessage(-1, "打开艾尔巴的药水笔记。");
                                                                                                    cm.sendNormalTalk_Bottom("看… 是第10页的特级药水制作方法！", 37, 9400601, true, true);
                                                                                                    cm.gainItem(2439031, 1)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#b啊，原来如此。我这就出发。", 57, 0, true, true);
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
            cm.sendNormalTalk_Bottom("#h0#，你回来了。材料呢… ", 37, 9400601, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b在这里。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("独眼触须怪的触须…一个…两个…三…扁柏树叶…都对！", 37, 9400601, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("非常感谢。我的笔记能给我话？或者你想要的话，也可以送给你。", 37, 9400601)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(64114);
                            cm.removeAll(4036390);
                            cm.removeAll(4036391);
                            cm.removeAll(4036392);
                            cm.removeAll(4036397);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};