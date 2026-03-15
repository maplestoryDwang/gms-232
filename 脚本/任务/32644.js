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
            cm.sendNormalTalk("[亚林的纸条]\r\n给佣兵。\r\n\r\n刚才听一个叫做马尔斯的姑娘说。", 5, 2510003, false, true);
            cm.effect_Voice("Voice.img/Library/Arin/3", 100)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("她说像乌曼这样的家伙不是什么大问题。因为欧罗拉要追求更大的真理，所以没办法在乎那种小问题。", 5, 2510003, true, true);
                cm.effect_Voice("Voice.img/Library/Arin/4", 100)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我不知道更大的真理究竟是什么东西，我的目标就是消灭乌曼。", 5, 2510003, true, true);
                    cm.effect_Voice("Voice.img/Library/Arin/5", 100)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("直到现在，我一想起爸爸妈妈死去的那天，还无法入睡。", 5, 2510003, true, true);
                        cm.effect_Voice("Voice.img/Library/Arin/6", 100)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("这才不是小问题。", 5, 2510003, true, true);
                            cm.effect_Voice("Voice.img/Library/Arin/7", 100)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("即使只有一个人，我也要对附近展开调查。", 5, 2510003, true, true);
                                cm.effect_Voice("Voice.img/Library/Arin/8", 100)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("从上个月开始，这片森林里出现了相当多的乌曼。", 5, 2510003, true, true);
                                    cm.effect_Voice("Voice.img/Library/Arin/9", 100)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("别太担心。", 5, 2510003, true, true);
                                        cm.effect_Voice("Voice.img/Library/Arin/10", 100)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("不过也许我就再也回不来了，所以先说一下。", 5, 2510003, true, true);
                                            cm.effect_Voice("Voice.img/Library/Arin/11", 100)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("这段时间谢谢你。\r\n\r\n-亚林", 5, 2510003, true, true);
                                                cm.effect_Voice("Voice.img/Library/Arin/12", 100)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("这个傻孩子……！！", 17, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.dispose();
                                                        cm.warp(302090404, 0)
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
            cm.sendNormalTalk("佣兵……快跑。危险。", 5, 2510029, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("乌曼已经都被我消灭了。放心。", 17, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("不是说这个……是至今为止都没见过的……巨大的乌曼……", 5, 2510029, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("佣兵，快离开 #e'那个地方'#n……\r\n\r\n#b(亚林失去了意识。那个地方，什么意思……？)#k", 5, 2510029, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(32644);
                            cm.dispose();
                            cm.warp(302040010, 0)
                        }
                    }
                }
            }
        }
    }
};