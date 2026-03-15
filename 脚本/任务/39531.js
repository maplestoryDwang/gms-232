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
            cm.askAcceptDecline_Bottom("#face11##fc0xFFbfbfbf#（道士自然有道士的解决方案，\r\n摇身一变为修行者，从入口进去吧，那就专注精神……）", 36, 3001674 + cm.getPlayer().getGender())
        } else {
            if (status === a++) {
                cm.useItem(2210218, false);
                cm.playerMessage(5, "为了骗过挡在法堂前面的小喽啰，摇身变为修行者。");
                cm.forceStartQuest(39531, "");
                cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#（嘻嘻……真是完美的变身，连每一根发丝都一模一样，\r\n不过总觉得缺了点什么，我的华服……）", 36, 3001674 + cm.getPlayer().getGender(), false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#噗！", 36, 3001651, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#（不许笑！）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face10##fc0xFFbfbfbf#（那什么，总之这样一来就算准备就绪了。\r\n呼……现在就要用完美绝伦的演技来展现画龙点睛的一笔了。）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39531.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#有什么事吗？", 36, 3001661, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#叽……不是，好像要赶不上法会了吧？", 36, 3001661, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#法会？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#那当然是俊秀法师开的法……", 36, 3001661, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#等一下，这家伙有古怪！\r\n他要是自己人，不可能不知道今天有法会啊。", 36, 3001661, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#更何况不知为何……貌似有股猛兽的味道。", 36, 3001661, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askMenu_Bottom("#face0##fc0xFFbfbfbf#（眼力见倒是够快的，再这么继续下去，恐怕就要暴露了，\r\n有没有什么法子能够摆脱眼下的状况？)\r\n\r\n#b#L0#引发骚乱#l　#L1#矢口否认#l　#L2#动之以情#l", 37, 3001674 + cm.getPlayer().getGender())
                                } else {
                                    if (status === a++) {
                                        if (b == 2) {
                                            cm.sendNormalTalk_Bottom("#face0#呜……呜呜……", 36, 3001674 + cm.getPlayer().getGender(), false, true)
                                        } else {
                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（我说，这么做可有违道士的身份，\r\n既不潇洒也不让人感动，想想其他方法吧。）", 36, 3001674 + cm.getPlayer().getGender(), false, true);
                                            status -= 2
                                        }
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#呜呜呜……呜呜……", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#什……什么！？", 36, 3001661, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#干吗那样？", 36, 3001661, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#呵……这是因为脱离老鼠的样子时间还不长，\r\n还没摆脱在田间生活的习惯。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#昨夜我凭本能循着食物的香味而去，结果就……\r\n不幸中了圈套，被关在仓库里好几天，好不容易才逃出来。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#再然后我被野狗到处追赶……\r\n虽然身型变大了不少，可我还……咳咳。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#该死……", 36, 3001661, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#这种心情我能理解。", 36, 3001661, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#可是违背规定……", 36, 3001661, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#额……唔……", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#在那冰冷的仓库里，得有多想念我们的同伴啊，\r\n若是能看到许多同伴，也许还能多少缓解一些悲伤……", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#放行吧，这种事……要不是自己人，\r\n是绝对感受不到的，快，趁现在还不迟，赶紧的！", 36, 3001661, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#好吧……我知道了，喂，你……给我乖乖进去！", 36, 3001661, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#这种时候倒是挺值得信任的……", 36, 3001651, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.dispose();
                                                                                                    cm.warp(993160110, 0, false)
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
};