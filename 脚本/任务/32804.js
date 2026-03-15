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
            cm.sendNormalTalk_Bottom("你这次的任务也完美完成了吗？很好，干得不错。不愧是我们#r<神兽学校恋爱调查团>#k的顶梁柱啊。", 37, 1530100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("要是在这里和大家公开情报的话恐怕是不太隐蔽。弄不好我们的真实身份就会暴露。#h0#队员们，我命令大家回到总部。我的讲话就到这里！", 37, 1530100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯？什么？不知道总部吗？就是#b屋顶#k呀，#b屋顶#k！！", 37, 1530100, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32804, "");
                        cm.dispose()
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
            cm.sendNormalTalk_Bottom("辛苦了，各位。那么一个一个来说一下各自获得的情报吧。", 37, 1530100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("1号队员报告！根据神兽学校偶像奥尔卡的证词，如果两个人恋爱的话，一定会是一场晴天霹雳的！", 37, 1530140, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("2号队员报……一定要说这个吗？总之，斯坦老师说，因为这两个老师，每次开教务会的时候，都跟爆发一场战争一样。", 37, 1530080, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#……嗯，根据分析的情报来看，两个人吵架的次数一共是288次。由此产生的损坏器具、扰乱课堂等学校损失也是相当之多。", 37, 1530070, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("用两位的原话来说就是，麦格纳斯老师说希拉老师‘性格糟糕透顶’，而希拉老师则说麦格纳斯老师‘无知’‘让自己看不顺眼’。", 57, 1530103, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("看来还是太困难了。两个人只要一见面就争吵不休，怎么可能会在一起？", 37, 1530080, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("大家不必慌张。越是这种毫无希望的战争，胜利时的喜悦就越是令人激动！大家只要按照我的命令行事就行了！", 37, 1530100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("哇啊啊啊啊啊啊！", 37, 1530140, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("啊啊，我想回家。", 37, 1530080, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("真不明白从一开始我为什么会到这儿来……！", 37, 1530070, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                    cm.forceCompleteQuest(32804);
                                                    cm.effect_Text(["#fn黑体##fs20#计划2. 制造舆论"], [100, 2500, 5, 80, 0, 1, 4, 0, 0, 0]);
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
};