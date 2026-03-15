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
            cm.sendNormalTalk("这里骨碌……", 4, 9062276, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("那里骨碌……", 4, 9062276, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("到处骨碌骨碌! \r\n不知道会滚去哪里的#e#b骨碌骨碌屋！#n#k", 4, 9062276, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("这个小巧可爱的屋子，以后会变得多么好看呢？怎么样？很好奇吧？很想知道吧？", 4, 9062276, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("怎么样？要培养骨碌骨碌屋吗？", 4, 9062276)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(100488, "part4=20;part5=20;part6=20;part7=20;part8=20;part9=20;lv=1;part0=20;part1=20;part2=20;part3=20");
                                cm.updateInfoQuest(100489, "check=100000000");
                                cm.updateInfoQuest(100490, "check=100000000");
                                cm.updateInfoQuest(100491, "check=1000");
                                cm.updateInfoQuest(100492, "check=1000000");
                                cm.updateInfoQuest(100493, "check=10000000");
                                cm.updateInfoQuest(100494, "check=100000000000");
                                cm.updateInfoQuest(100495, "check=10000000000000000000");
                                cm.updateInfoQuest(100496, "check=10000000000000000");
                                cm.updateInfoQuest(100497, "check=10000000");
                                cm.updateInfoQuest(100498, "check=100");
                                cm.updateInfoQuest(100485, "count=0;lastDate=" + cm.getNowTimeString(9));
                                cm.forceCompleteQuest(100485);
                                cm.forceStartQuest(100499, "");
                                cm.sendNormalTalk("好开心！你看，这里是#i3018467:# #e#t3018467:##n#k！\r\n我来告诉你培养骨碌骨碌屋的方法！", 4, 9062276, 0, 1);
                                cm.gainItem(3018467, 1);
                                cm.forceStartQuest(100484, "")
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#i3018467:# #e#t3018467:##n#k\r\n听到#i2631384:# #e#t2631384:##n的话会慢慢成长。", 4, 9062276, 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("狩猎#r#e等级范围怪物#k#就能获得 \r\n#i2631384:# #e#t2631384:##n！嘿嘿！\r\n\r\n #fc0xFFAAAAAA#- 等级范围怪物：以角色的等级为准 -20等级到+20等级范围内的相应怪物#k", 4, 9062276, 1, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("一天只能获得#b#e200个#n#k#i2631384:# #e#t2631384:##n！\r\n使用#i2631384:# #e#t2631384:##n的话，骨碌骨碌屋就可以听到歌曲！", 4, 9062276, 1, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("努力收集#i2631384:# #e#t2631384:##n，播放歌曲的话，#i3018467:# #e#t3018467:##n就会快快成长吧~？", 4, 9062276, 1, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("你可以将嗖嗖长大的#i3018467:# #e#t3018467:##n\r\n装扮得气派一些！\r\n不过，需要装扮的#e#b材料#n#k！", 4, 9062276, 1, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("\r\n#i2631286:# #i2631287:# #i2631288:# #i2631289:# #i2631290:# #i2631291:# #i2631292:# #i2631293:# \r\n增加到#i2631294:# #i2631295:#为止！\r\n\r\n在冒险岛世界藏着非常多不同的#e#b材料#n#k！", 4, 9062276, 1, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("使用#e#b材料#n#k时可登记新#e#b外形#n#k。\r\n你不知道会在何时何地得到材料，所以一定要时刻让#e#b消耗栏#n#k保持充足的栏数！", 4, 9062276, 1, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("可随时在#e#b[骨碌骨碌]布置骨碌骨碌屋！#n#k中变更\r\n已登记过的#e#b外形#n#k。", 4, 9062276, 1, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("对了！还有如果#i3018467:# #e#t3018467:##n长势喜人的话，我会给你特别礼物的！", 4, 9062276, 1, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("特别礼物就是！\r\n\r\n#e#b<骨碌骨碌屋 2级达成奖励>#n#k\r\n  #i2450167:# #t2450167:# 4个\r\n\r\n\r\n#e#b<骨碌骨碌屋 4级达成奖励>#n#k\r\n  #i2437089:# #t2437089:# 1个", 4, 9062276, 1, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("特别礼物就是！\r\n\r\n#e#b<骨碌骨碌屋 6级达成奖励>#n#k\r\n  #i2631414:# #t2631414:# 1个\r\n  #i2631415:# #t2631415:# 1个\r\n\r\n\r\n#e#b<骨碌骨碌屋 8级达成奖励>#n#k\r\n  #i2530008:# #t2530008:# 1个", 4, 9062276, 1, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("特别礼物就是！\r\n\r\n#e#b<骨碌骨碌屋 10级达成奖励>#n#k\r\n  #i2433604:# #t2433604:# 1个\r\n\r\n\r\n#e#b<骨碌骨碌屋 12级达成奖励>#n#k\r\n  #i2631413:# #t2631413:# 1个", 4, 9062276, 1, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("嘿嘿！那么快来培养\r\n#i3018467:# #e#t3018467:##n吧！", 4, 9062276, 1, 0)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100485.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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