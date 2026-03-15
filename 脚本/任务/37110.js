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
            cm.sendNormalTalk_Bottom("#face0#放下走吧！这次我就放过你，黑鸦！", 36, 3004006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#佩隆，这东西是最近来的吗？看起来可不一般呀！", 36, 3004000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#这就是普通的可拆卸式传送装置。剩下的部件我早就卖掉了，别担心。", 36, 3004006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("呃……", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#该不会没有组装起来看看是什么东西，就卖掉了吧？\r\n听说……那是公司的东西……", 36, 3004000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#！！！", 36, 3004006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("（这话不就是你说的嘛……）", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#我本来以为这东西是从垃圾场的孩童那儿买来的，没多大用处……", 36, 3004006, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#不是的，现在没有公司。\r\n#b安哥拉家族#k很早以前全都死了。我可是亲眼所见。", 36, 3004006, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#我知道，但也有可能是他们死前制作的物品呀！", 36, 3004000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#……", 36, 3004006, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#你该不会又要耍什么雕虫小技吧，黑鸦？", 36, 3004006, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#要真是公司的物品\r\n那你可是扔掉了一块肥肉呀，你没关系吗？", 36, 3004000, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#……切，你到底想要什么？", 36, 3004006, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#我只不过需要一点素材记录在案件日志里。\r\n怎么样？要不要帮我回收部件？", 36, 3004000, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#……", 36, 3004006, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#我卖给古斯托和安图因了。", 36, 3004006, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("等一下，公司到底是什么？", 56, 0, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#安哥拉公司？", 36, 3004000, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#他们专售高价武器，是全国有名的武器交易商。\r\n势力庞大，极度残忍，几年前他们一直都是格兰蒂斯的恐怖代名词。", 36, 3004000, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#由于遭遇了前所未有的大规模爆炸事故，他们全部都消失了。", 36, 3004000, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("啊啊！", 56, 0, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#他们之前制造的物品常常在市场上交易。\r\n由于价值高昂，大家都瞪大眼睛想据为已有。", 36, 3004000, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#喂！你不去吗？", 36, 3004006, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.askAcceptDecline_Bottom("#face0#催什么催！我现在要去安图因那里，华生你就负责#b古斯托#k。\r\n那家伙在#b左侧#k。", 36, 3004000)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.forceStartQuest(37110, "");
                                                                                                                cm.updateInfoQuest(37100, "31=h0;50=h1;32=h0;51=h1;33=h1;52=h1;dir=off;35=h1;36=h1;37=h1;38=h0;39=h1");
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
            cm.sendNormalTalk_Bottom("#face0#什么？佩隆让把东西找回来？", 37, 3001258, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#这可不好办……把钱收回来不是问题，但眼前我得开始做生意呀！铁板烧的订单已经有30单了！！", 37, 3001258, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(37110);
                    cm.gainExp(9487412);
                    cm.dispose()
                }
            }
        }
    }
};