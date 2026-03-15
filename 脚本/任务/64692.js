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
            cm.sendNormalTalk_Bottom("#face0#哈哈……我年轻的时候在冒险岛世界冒险时，还没有这种风俗呢。", 37, 9400922, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#啊，我不是反对你们过节，只是有点担心。过节多好啊，既能给村子增添活力，还能为大家带来欢笑。", 37, 9400922, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我也想像你说的那样，为特鲁迪和村里的孩子举办一个精彩的万圣节派对，可是我不知道该怎么做。", 37, 9400922, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#现在的年轻人，都喜欢什么啊？", 37, 9400922, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b嗯……每个人都有自己擅长的东西，你不用为了迎合大家而勉强自己。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1#哈哈哈，你说得对。", 37, 9400922, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#唔……我是个建筑家，既然如此…… ", 37, 9400922, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face1#我要打造一栋壮观的阴森宅邸，让大家都去里面开派对。", 37, 9400922, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#b太棒了！这是只有凯尼斯你才能做到的事情。", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askAcceptDecline_Bottom("#face1#谢谢你的夸奖。不过……你能帮帮我吗？", 37, 9400922)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#b没问题！", 57, 0, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#谢谢你。稍等，我写下需要的材料给你。", 37, 9400922, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#寻常的材料我都有……需要你找的是我从来没想过会用上的材料…… ", 37, 9400922, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face1#请你收集#i4000042:##t4000042#和#i4000035:##t4000035#给我吧。以前你可以从栖息在废弃都市地铁的蝙蝠和小幽灵身上获得它们，现在还是不是这样我就不知道了。", 37, 9400922, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("你要用#b#t4000042#和#t4000035#……做建筑材料？", 57, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#哈哈哈，拜托你了。", 37, 9400922, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.forceStartQuest(64692, "");
                                                                            cm.OnStartNavigation(103020200, 0, "", 0);
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
            cm.sendNormalTalk_Bottom("#face1#哦，#h0#你这么快就回来了。我就知道这事对你来说不算难，给你添麻烦了啊，哈哈。", 37, 9400922, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b不麻烦，还有什么需要我帮忙的吗？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#暂时没有了，谢谢你。", 37, 9400922, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#接下来我就要尽情发挥特长了！哈哈！请期待凯尼斯的#e阴森万圣节大宅#n吧！", 37, 9400922, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#对了，你接下来有什么打算了？", 37, 9400922, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#你要是有时间，能去看看艾丹吗？别看那孩子块头大，其实他胆子小得很。", 37, 9400922, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#现在卡朋特也不在，我担心他一个人害怕得直哆嗦呢。", 37, 9400922, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b好的，我这就去找他。", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face1#哈哈，谢谢你。你可别告诉他我说他胆小哦。", 37, 9400922, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(64693, "");
                                                cm.OnStartNavigation(871000000, 1, "9400923", 0);
                                                cm.forceCompleteQuest(64692);
                                                cm.gainItem(4000042, -20);
                                                cm.gainItem(4000035, -20);
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
};