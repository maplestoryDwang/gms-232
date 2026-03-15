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
            cm.sendNormalTalk("\r\n好困……", 4, 9062227, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n#b这里是出售什么物品的商店？#k", 16, 9062227, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n梦境商店……我们出售梦境……睡眠枕头进入梦乡……那个梦境……对别人来说就是#b经验值#k哦……", 4, 9062227, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("\r\n呼啊啊啊啊啊……", 4, 9062227, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("\r\n梦境枕头会自动进入梦乡……只要#b放着它不管就行#k……\r\n……它会自动获取#b经验值#k……", 4, 9062227, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("\r\n#b好酷啊！梦境枕头多少钱呀？#k", 16, 9062227, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("\r\n枕头……", 4, 9062227, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("\r\n…… ……", 4, 9062227, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("\r\n…………", 16, 9062227, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("\r\n…………呼……呼……", 4, 9062227, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("\r\n（……说着说着就睡着了？）", 16, 9062227, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("\r\n#b喂……#k", 16, 9062227, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("\r\n……嗯……对不起……我忘了……", 4, 9062227, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("\r\n#b啊，枕头多少钱呀？#k", 16, 9062227, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("\r\n……不是……我忘掉了……#b枕头的价格#k……", 4, 9062227, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("\r\n#b嗯……？#k", 16, 9062227, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("\r\n……直接给你吧……我太困了……", 4, 9062227, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("\r\n…………呼……呼……", 4, 9062227, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("\r\n…………", 16, 9062227, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.askYesNo("#b(好像已经睡着了啊……我能收下这个吗？)#k", 16, 0)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("\r\n#b#e<詹比家美梦商店>#n#k\r\n\r\n#e活动时间#n\r\n2020年4月15日（周四）~ 2020年5月12日（周三）晚上11时59分#k", 4, 9062227, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk("\r\n#b#e<将睡眠枕头填满美梦的方法>#n#k\r\n\r\n枕头……喜欢睡觉……#b什么都不用做……#k 自己#b会做梦……#k", 4, 9062227, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk("\r\n#b#e<将睡眠枕头填满美梦的方法>#n#k\r\n\r\n梦……都是#b#e经验值#n#k……你拿到的话……\r\n\r\n#r※ 以#e冒险岛ID#n为单位保存/领取梦（经验值）。#k", 4, 9062227, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk("\r\n#b#e<将睡眠枕头填满美梦的方法>#n#k\r\n\r\n枕头呢……#r#e就是你不在……睡……#k#n", 4, 9062227, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk("\r\n#b#e<将睡眠枕头填满美梦的方法>#n#k\r\n\r\n但是，#b如果你在身边的话，会睡得更……。#k还会做很多梦…… \r\n\r\n#r※ 未登录状态下，梦的填充速度和时间会放慢#e一半#r。#k", 4, 9062227, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk("\r\n#b#e<将睡眠枕头填满美梦的方法>#n#k\r\n\r\n呼噜噜噜……嗯……", 4, 9062227, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk("\r\n#b#e<将梦经验值获得梦的方法>#n#k\r\n\r\n收集好梦……#b#e到这……来#k#n……我会帮你换的……#k", 4, 9062227, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk("\r\n#b#e<用梦交换经验值的方法>#n#k\r\n\r\n……。#b换成经验值……#k……", 4, 9062227, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk("\r\n#b#e<用梦交换经验值的方法>#n#k\r\n\r\n交换的……经验值……因人……而异……", 4, 9062227, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk("\r\n#b#e<用梦交换经验值的方法>#n#k\r\n\r\n领取人的等级……很重要……\r\n\r\n#r※ 200级以下的角色，根据其等级，应用的经验值也有所不同。#k", 4, 9062227, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk("\r\n#b#e<用梦交换经验值的方法>#n#k\r\n\r\n……枕头里如果有梦……无论何时……都能领取……经验值#k", 4, 9062227, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk("\r\n#b#e<用梦交换经验值的方法>#n#k\r\n\r\n……多来玩……这样枕头……才能做很多梦……", 4, 9062227, true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk("\r\n#b#e<用梦境获取经验值的方法>#n#k\r\n\r\n……………… …………唔…唔……", 4, 9062227, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk("\r\n#b#e<睡眠枕头使用注意事项>#n#k\r\n\r\n…枕头…… 一次可以睡好久…… 但是 #r#e装满梦境后…… 就睡不了……#k#n\r\n\r\n#r※ 未登录状态下可保存#e最多24小时#n，登录状态下可保存#e最多12小时#n。#k", 4, 9062227, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk("\r\n#b#e<睡眠枕头使用注意事项>#n#k\r\n\r\n你…… #b常来这家店吧#k……\r\n用梦境…… 换取经验值后…… 枕头#b又可以助你好梦……#k", 4, 9062227, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk("\r\n#b#e<睡眠枕头使用注意事项>#n#k\r\n\r\n即使我离你很远…… 只要你想知道…… …我就会告诉你…… 枕头是不是装满了……\r\n\r\n#r※ 通过活动通知可以确认睡眠枕头是否装满。#k", 4, 9062227, true, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.sendNormalTalk("\r\n#b#e<睡眠枕头使用注意事项>#n#k\r\n\r\n…梦境满了…… 可不行…呼啊啊啊啊……", 4, 9062227, true, true)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk("\r\n那就……给你……一个枕头……", 4, 9062227, true, true)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.sendNormalTalk("\r\n好好使用……让枕头……进入梦乡……", 4, 9062227, true, true)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.sendNormalTalk("\r\n……呼……呼……", 4, 9062227, true, true)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.forceCompleteQuest(100363);
                                                                                                                                                                            cm.setAccountQuestInfo(217, "uDate=20/04/16;qState=2;CL=1;T=" + cm.getNowTimeString(6));
                                                                                                                                                                            cm.setAccountQuestInfo(220, "complete1=0");
                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/Game.img/QuestClear", 100);
                                                                                                                                                                            cm.playerMessage(5, "睡眠枕头开始进入梦乡。");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100363.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};