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
            cm.sendNormalTalk("\r\n#b#h0##k！\r\n做好过圣诞节的准备了吗？", 4, 1012108, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n圣诞节当然少不了甜蜜绵软的蛋糕！", 4, 1012108, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n那就是……\r\n\r\n#b#e亲手装饰的#k#n圣诞节蛋糕！", 4, 1012108, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("\r\n怎么样？\r\n你想和面包房一起装饰#b#e甜蜜绵软蛋糕#n#k吗？", 4, 1012108)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("\r\n好的！那我就来告诉你如何装饰蛋糕吧！", 4, 1012108, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("\r\n从等级范围内的怪物身上可以获得#e#b<蛋糕粉>#k#n！\r\n每天最多只能获得100个。\r\n\r\n#fc0xFFAAAAAA#- 等级范围内的怪物：以角色等级为基准，-20级到+20级范围内的怪物#k", 4, 1012108, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("\r\n搜集到200个<蛋糕粉>后使用，就能提升#e#b蛋糕等级#k#n！\r\n蛋糕等级提升时，蛋糕会变得更大，可以装饰的部位也会越多。", 4, 1012108, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("\r\n要想把蛋糕装饰得很漂亮，需要#e#b<蛋糕装饰材料>#k#n！", 4, 1012108, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("\r\n材料可以从精英怪物身上获得。\r\n\r\n获得精英怪物掉落的#e#b<随机蛋糕装饰>#k#n时，\r\n可以随机获得材料！", 4, 1012108, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("\r\n啊！还有，#b#e每天100个#k#n蛋糕粉全部搜集到之后，\r\n我会把我拥有的#e#b材料送给你作为礼物#k#n。", 4, 1012108, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("\r\n使用获得的材料时，可以把它添加为装饰材料。\r\n然后只要通过#e#b[蛋糕]装饰蛋糕！#k#n，用添加的材料装饰蛋糕就行！", 4, 1012108, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("\r\n好的，现在我把蛋糕交给你！", 4, 1012108, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.updateInfoQuest(100136, "lv=1;part0=0;part1=20;part2=0;part3=10;part4=0;part5=0");
                                                            cm.updateInfoQuest(100141, "check=1000000000");
                                                            cm.updateInfoQuest(100142, "check=1000000000");
                                                            cm.updateInfoQuest(100143, "check=100000000");
                                                            cm.updateInfoQuest(100144, "check=1000000000");
                                                            cm.updateInfoQuest(100145, "check=10000000000000000");
                                                            cm.updateInfoQuest(100146, "check=1000");
                                                            cm.updateInfoQuest(100138, "start=1");
                                                            cm.forceCompleteQuest(100138);
                                                            cm.sendNormalTalk("\r\n给，这是#i3018281:# #e#t3018281:##n#k！\r\n希望你能做出一个漂亮的蛋糕！", 5, 1012108, true, false);
                                                            cm.gainItem(3018281, 1);
                                                            cm.forceStartQuest(100136);
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100138.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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