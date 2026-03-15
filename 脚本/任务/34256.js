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
            cm.sendNormalTalk_Bottom("#face0#哎呀，没看我忙着吗……", 36, 3003412, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#传闻？那个……我倒是可以告诉你……", 36, 3003412, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#那个……能拜托你帮个忙吗？", 36, 3003412, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("请求？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#希望你帮我好好收拾那群#b强壮兄#k……\r\n那些家伙时常来捣乱，害我生意都没法做。", 36, 3003412, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#这、这事你跟我说也没用啊……", 36, 3003451, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#算了，不被坑就烧高香了。", 36, 3003412, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askYesNo_Bottom("怎么样#b夏伊#k？你不愿意帮忙？", 36, 3003412)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#谢谢。你只需要帮我消灭200个#b强壮兄#k。\r\n那些家伙应该在#b泼皮地盘3#k。", 36, 3003412, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#要不是我昨天扭了腰……", 36, 3003451, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#万一办不到……", 36, 3003412, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceStartQuest(34256, "");
                                                        cm.OnStartNavigation(450006160, 0, "", 0);
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("那个广场中央的纪念碑……", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#嗯？纪念碑？当时你不在吗？", 36, 3003412, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#几年前发生了一场大事故。反魔力石在设置过程中摔碎了。", 36, 3003412, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#那东西损毁后，在附近做生意的商贩一下子……\r\n#fs18##r蒸发#k#fs16#了。真是可惜。", 36, 3003412, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("原来如此……可听说有人活下来了……", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#你是说#fs18##r死神#k#fs16#啊。", 36, 3003412, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("死神？", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#我当时也在场，\r\n场面太惨了，吓得我好一阵子都睡不着觉。", 36, 3003412, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0##fs18##r死人竟然再次复活#k#fs16#\r\n这种事多不吉利啊。", 36, 3003412, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("原来是这样。塔纳……那个死神最后怎么样了？", 56, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#被士兵们带走后就没消息了。其实传闻说……", 36, 3003412, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#说不定那家伙知道。\r\n先前总是四处打探消息。可惜最近一直不见他出现……", 36, 3003412, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("那是谁啊？", 56, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#还有谁啊，当然是#b江#k。", 36, 3003412, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("哦……是江……", 56, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceCompleteQuest(34256);
                                                                        cm.updateInfoQuest(34256, "book=1");
                                                                        cm.sendNormalTalk_Bottom("啊，#b回忆录#k又发光了。", 56, 0, true, true);
                                                                        cm.gainItem(4161097, -1);
                                                                        cm.gainItem(4161098, 1);
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
};