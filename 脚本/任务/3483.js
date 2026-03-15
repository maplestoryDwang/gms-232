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
            cm.sendNormalTalk_Bottom("#face2#第二个条件是……找回我被抢的钱。按照#b白外星货币#k，是#b十金币#k。", 36, 2052009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#这个可怜的朋友该如何是好……", 36, 2052005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#没关系的，从现在起，你们会帮忙教训的。", 36, 2052009, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face3#阿琳，你们学校也有这么坏的人吗？", 36, 2052003, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face5#嗯……嗯？我刚入学那会儿是有过的。", 36, 2052004, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face5#不过，现在没有了。", 36, 2052004, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#为什么？", 36, 2052001, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#这个嘛，因为我入学了啊。", 36, 2052004, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face2#啊……是嘛。", 36, 2052003, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#啊……这份魄力……", 36, 2052009, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face5##fc0xFFAAAAAA#(不过更换队员……这件事除了我，大家应该都不知道吧？)#k", 36, 2052004, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.askYesNo_Bottom("#face0#来，那就开始吧？去#b白外星人长官#k那里回收#b白外星金币#k。", 36, 2052000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceStartQuest(3483, "");
                                                            cm.sendNormalTalk_Bottom("#face0#拜托了，好好表现一次吧~？", 37, 2052009, false, false)
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
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -173, -298);
            cm.sendNormalTalk_Bottom("#face0#辛苦了，用这个应该就能买到#b阿琳#k#b等身大小的手办#k了。", 36, 2052009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#我的天啊！居然还有这种东西卖？", 36, 2052003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#看来我这个#b冒险勇士#k并非浪得虚名啊。", 36, 2052002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#对了，#b累计销售量#k方面，本人可是#b第一名#k……", 36, 2052001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face5##fc0xFFAAAAAA#(额……不过究竟要被换掉的人是谁呢？\r\n阿海哥哥？阿亮哥哥？\r\n还是两个都会被换掉？哎哟……怎么办……)#k", 36, 2052004, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#我要问个问题！有我这样的超级明星在，\r\n宅宅，你为何会那么喜欢阿琳呢？！", 36, 2052001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face2#这个吧~是在阿琳当上冒险勇士之前的事了~\r\n你们还记得#b火凤凰一战#k吗？", 36, 2052009, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#啊……那时候的事啊。\r\n当时担任#b冒险勇士粉狼#k的#b阿敏#k被隔绝了，孤身一人，四周被白外星人团团围住。", 36, 2052000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#那时候正好放学的一个#b女中学生#k就冲了过去，将她救了出来~\r\n实在是~太英雄了~", 36, 2052009, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#就是因为那时候的事情，#b阿琳#k才会荣升为少年队员的嘛。\r\n阿敏隐退之后，她也就自然担起了第二代粉狼的重任。", 36, 2052000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#没错，是有过这样的事情，真的很厉害来着。\r\n校服的短裙在空中飞舞，划出一记重磅飞腿踢！！！", 36, 2052002, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face2#就是在那时，我感受到了超越种族的爱情~\r\n而且自那之后，我也一直在为阿琳助威~", 36, 2052009, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#我！爱！你！啊！宋！琳！儿！\r\n牛！奶！皮！肤！宋！琳！儿！", 36, 2052009, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face5##fc0xFFAAAAAA#(要是哥哥们太伤心了该怎么办？哎，我还是装作不知道吧)#k", 36, 2052004, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face2#反倒是本人好像根本没有在听啊？", 36, 2052005, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#估计她早就把当初的事情忘光光了吧？", 36, 2052001, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#嗯……也许和大猩猩相比，还是金鱼更适合她……", 36, 2052002, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#来，来，我们走吧，去右侧尽头的传送口。", 36, 2052009, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.gainExp(11044938);
                                                                                    cm.forceCompleteQuest(3483);
                                                                                    cm.gainItem(4036072, -10);
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
};