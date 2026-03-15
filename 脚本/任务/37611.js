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
            cm.sendNormalTalk_Bottom("#face0#你……打算和拉索尔一、一起战斗吗？", 36, 3004651, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("那个嘛。", 56, 0, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我没猜错吧？你应该不、不是个胆小鬼。", 36, 3004651, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#唉……看来我们生、生活在不同的世界。", 36, 3004651, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("……", 56, 0, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("（把#b#i4036638# #r#t4036638##k还给他吧。）", 56, 0, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("对了……这个发出的不仅是杂音。", 56, 0, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("虽然很模糊，但好像能听到人的声音。", 56, 0, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#……！！", 36, 3004651, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.askYesNo_Bottom("（先返回地下铁路避难处吧。）", 56, 3004601, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.askMenu_Bottom("对了，我……\r\n\r\n#b#L0# 曾经临阵脱逃过。#l\r\n#L1# 从未临阵脱逃过。", 57, 3004601, 1)
                                                } else {
                                                    if (status === a++) {
                                                        if (b == 0) {
                                                            cm.sendNormalTalk_Bottom("我曾经临阵脱逃过。", 56, 0, false, true, 1)
                                                        } else {
                                                            cm.sendNormalTalk_Bottom("我从未临阵脱逃过。", 56, 0, false, true, 1)
                                                        }
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("但是除了战斗，还有很多让我害怕的事。", 56, 0, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("重要的是克服恐惧的心。", 56, 0, true, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#……", 36, 3004651, true, true, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceStartQuest(37611, "");
                                                                        cm.OnStartNavigation(450014050, 0, "", 37611);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37611.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#简、简单来说是这样。毁灭加、加速器不用管。\r\n只要破、破坏T-boy的#r重力装置#k，一切就结束了。", 36, 3004651, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#我、我负责带路。#h0#，你来破坏。\r\n其他人负责看、看……", 36, 3004651, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#看……？", 36, 3004653, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#看……？", 36, 3004652, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#看家。尤其是你，拉索尔。", 36, 3004651, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0##fs18#啊！真是死脑筋！！", 36, 3004652, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(37600, "01=h0;10=h0;11=h0;02=h1;12=h0;13=h0;14=h0;09=h0");
                                    cm.updateInfoQuest(37600, "01=h0;10=h0;11=h0;02=h1;12=h0;13=h0;14=h0;15=h1;09=h0");
                                    cm.forceCompleteQuest(37611);
                                    cm.gainExp(8782820);
                                    cm.dispose();
                                    cm.warp(450014130, 0, true)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};