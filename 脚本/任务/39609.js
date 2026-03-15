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
            cm.sendNormalTalk_Bottom("#face0#他俩是布鲁和拉迪，偶尔会给我帮忙。\r\n虽然制止过多次，他俩非要叫我大哥。", 36, 3001952, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#哎，你又害羞了！", 36, 3001962, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#大哥可是我们的恩人~！", 36, 3001963, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#除了整天吹牛要当国王，其他都很完美~！", 36, 3001962, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#呵呵，里斯托尼亚的国王万岁～！", 36, 3001963, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face10#拜托，你们别闹了……", 36, 3001952, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#又多了两个奇怪的家伙。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(少年神色慌张地向我介绍了他们。\r\n这些人似乎是从事危险物品生意的。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#我找他们过来，是为了打听那幅画的事情。\r\n顺便拜托他们调查你的情况。", 36, 3001952, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#你生活的时代应该比现在早上许多年。\r\n翼人之间发生的内战，是很久以前的事了。", 36, 3001952, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.askAcceptDecline_Bottom("#face0#因为需要查阅古代文件，估计得花点时间。\r\n不过，他们说找到了关于伯爵要找的那幅画的线索……你要听听吗？", 36, 3001952, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#其余的情况，布鲁和拉迪会跟你说明。\r\n你准备好了，就去找布鲁。", 36, 3001952, false, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceStartQuest(39609, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39609.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#能亲眼见到传说中的骑士，深感荣幸。\r\n嘻嘻，我们大哥果然了不起。", 36, 3001962, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#啊，客套的话就说到这，我们进入正题吧。\r\n喂，拉迪，把你偷偷带回来的东西拿来看看。", 36, 3001962, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#……偷偷？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#我们接到大哥的委托后，去打听了那幅画。\r\n过了几个小时，就接到消息说有人知道类似的画。", 36, 3001963, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#那幅画的所在位置，是一家古董商店的地下仓库。\r\n我们已经找到了进入该地的办法。", 36, 3001963, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#(我不想未经允许就擅自进入别人的仓库。\r\n虽说是为了王国，可非得做到这个地步吗？)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#听说那幅画明天一早就要卖出去了，\r\n你们今晚一定抓紧时间进去确认一下。", 36, 3001963, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#那我们回去了。\r\n祝你们成功，大哥！", 36, 3001962, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#关于骑士的情况，我们会尽力打听，\r\n请你们再耐心等等哦，嘿嘿。", 36, 3001963, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(39609);
                                                cm.gainExp(40);
                                                cm.gainExp(1075);
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