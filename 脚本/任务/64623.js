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
            cm.sendNormalTalk_Bottom("#b很抱歉怀疑了你，杰弗里。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#抱歉，杰弗里……", 37, 9400923, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face3#……不，这种反应是正常的……。", 37, 9400925, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b既然现在已经解开了疑惑，就一起去村子吧！", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face3#…", 37, 9400925, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face3#现在想来……我有着这么可怕的牙齿和爪子，还妄想平凡地和人类一起生活，实在是一种奢求……看来是我想太多了。", 37, 9400925, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b不！这是什么话啊。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face3#如果我去了村子里，其他人的反应肯定也和你们一样……就算解开了疑惑，以后碰面的时候一定也还是会害怕。因为我是……狼人……", 37, 9400925, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#……但是……", 37, 9400923, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#b肯定有办法可以帮到你的。", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#……对了！这样如何？把杰弗里变得像人一样！", 37, 9400923, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#b能做到……吗？", 57, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face1#穿上衣服……然后把脸涂成白色！把爪子都打理一下。", 37, 9400923, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face3#然后就能看起来像人了吗？", 37, 9400925, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#总不能不尝试就放弃吧？", 37, 9400923, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0##h0#，我去村子里偷偷带几件衣服出来，你去找10个#i4036536:##t4036536:#来吧。", 37, 9400923, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#b我知道了！交给我吧！", 57, 0, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#那我就先剪一下爪子吧！", 37, 9400925, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.forceStartQuest(64623, "");
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
            cm.sendNormalTalk_Bottom("#face1#那就开始吧？", 37, 9400923, false, true)
        } else {
            if (status === a++) {
                cm.gainItem(4036536, -10);
                cm.dispose();
                cm.warp(871000018, 0);
                cm.forceCompleteQuest(64623)
            }
        }
    }
};