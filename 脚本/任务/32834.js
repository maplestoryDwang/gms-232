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
            cm.sendNormalTalk_Bottom("#b希拉#k老师和#b麦格纳斯#k老师的共同点？这个嘛，他们两个人从里到外，没有一点相同的地方啊。就连年龄都相差足有#b三岁#k呢。", 37, 1530370, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("就算在开会的时候也经常争吵起来……就像猫和狗一样，完全誓不两立。而且一旦争吵起来就无休无止。", 37, 1530370, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不过，也有可能两个人在校外的关系会不错？你去问问#b学校警卫#k的话，或许能了解到什么情况。", 37, 1530370, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("学校警卫……就是站在旧楼前的那个块头很大的#b看门大叔#k吗？", 57, 1530372, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(32834);
                            cm.dispose();
                            cm.warp(330000000, 2)
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
            cm.sendNormalTalk_Bottom("喂？ #h0#？", 37, 1530060, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯，是我。什么事？", 57, 1530060, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("一整天都没见到#h0#你，所以打个电话。不知为什么南哈特也见不到影子，胡克也完全联系不上。不，不会是又开始讨厌我了吧？用奥兹的话说就是，我这个人有时候挺让人腻烦的……？", 37, 1530060, true, true)
                } else {
                    if (status === a++) {
                        cm.askMenu_Bottom("是吗……？\r\n#b#L0#就算是朋友之间也可能有不能说的秘密的。#l\r\n#L1#什么事也没有。#l#l\r\n#L2#没错，你确实挺让人腻烦的。#l", 37, 1530060)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#对，对不起。我明明学过，就算是朋友之间，也有一条不可跨越的界限，是我太自大了……天啊，奥兹 ？", 37, 1530060, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("把电话给我。喂，你们这一整天的到底在做什么？同学们都在议论纷纷，说你们几个聚在一起，行为很可疑！就算想不注意都不行，你们到底有什么秘密！", 37, 1530110, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("周围议论纷纷，就算想不注意都不行？这真是个不错的办法。谢谢你，奥兹。先挂了哈。", 57, 1530060, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("什么？喂！喂！（嘟）", 37, 1530110, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("是啊，如果周围的人都在谈论对方，那么就不得不关注了啊。不过谈论些什么呢？得是一些可以引起彼此好感的内容才行。不管怎样，最好先从人们口中获得些有用的情报。先和斯坦老师对话吧。", 57, 1530060, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(32812, "");
                                                cm.effect_Text(["#fn黑体##fs20#计划4. 唧唧咕咕散布传闻"], [100, 2500, 5, 80, 0, 1, 4, 0, 0, 0]);
                                                cm.dispose();
                                                cm.warp(330001000, 0)
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