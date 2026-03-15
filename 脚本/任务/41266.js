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
            cm.sendNormalTalk("只剩下最后一步了，制作氯化洛伊德最后一步就是给予生命。到现在为止是制作身体的步骤，那么剩下的就是给他生命。需要的材料只有一个！心……脏……？", 0, 2460006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("氯化洛伊德需要心脏。可以给身体供应魔力和电源的机械心脏……", 0, 2460006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……", 0, 2460006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我可以最后再请求一次吗？把我的心脏……移植给这孩子吧？", 0, 2460006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你在说什么！要把你的心脏给他？那你自己怎么办！", 2, 2460006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我没关系。虽然这孩子还没睁开眼睛，但我依稀能感觉到想给他生命的这个心情……也许这就是为人父母的心情吧。所以我无所谓，我比世上任何一个人都感到幸福。", 0, 2460006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("不可以，我不做，绝对不行。", 2, 2460006, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("我求你了，我说不定就是为了这个瞬间才诞生出来的。如果这孩子睁不开眼睛，我肯定也会不幸。就把我的心脏给这孩子吧。", 0, 2460006, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.updateInfoQuest(41272, "");
                                            cm.forceStartQuest(41272, "");
                                            cm.updateInfoQuest(41266, "");
                                            cm.forceStartQuest(41266, "");
                                            cm.sendNormalTalk("这是#r机械心脏#k，我快要动不了啦。我很难过我无法亲眼目睹孩子站起来，不过也没关系。替我转告他，我……(哧哧)真的……(哧哧)……很……爱(哧哧)……他……", 0, 2460006, true, true);
                                            cm.gainItem(4033851, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("(人造人A不再动了)", 0, 2460006, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41266.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("(为氯化洛伊德安装了人造人A的机械心脏)", 0, 2460007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("额，额！动了，动了！", 4, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(41266, "");
                    cm.forceStartQuest(41266, "");
                    cm.forceCompleteQuest(41266);
                    cm.gainExp(6000000);
                    cm.sendNormalTalk("氯化洛伊德nx2013电源充能完毕。正在配置基本信息，请输入需要的信息。", 0, 2460007, true, true);
                    cm.gainItem(4033851, -1);
                    cm.gainItem(4310085, 15)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……你的父亲是人造人A，他真的很爱你，都可以把心脏交给你……", 4, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("人造人A是我的父亲，人造人A非常爱我。信息设定完毕。", 0, 2460007, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("……为人父母到底会是什么心情呢……？", 4, 2400006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("……没有也没关系。", 4, 2400005, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("只是好奇而已。", 4, 2400006, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("……", 4, 2400005, true, false)
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
};