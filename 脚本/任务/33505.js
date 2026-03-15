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
            cm.sendNormalTalk_Bottom("嗯？你的意思是直接去消灭它们吗？不行。如果轻率地闯进去，肯定会被打得落花流水。#b那些家伙和普通的尘土完全不同……#k", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你听好了。废弃学校里面的尘土似乎#b在你们学校的学生身上笼罩了Rock Soul#k 。我再告诉你一遍，如果你就这么轻率地攻击，可能会伤到你的朋友。", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯？你问那要怎么办？", 37, 1530030, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("不要担心！我已经准备好了！巨大尘土专用音波武器！现在购买，只要三万九千九百元！什么？没钱？我开玩笑的。来~你先拿着。", 37, 1530030, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b(获得金属吉他。)#k", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("什么？你说这是普通的吉他？\r\n你怎么能说这种话呢~在这六根弦里蕴含着强大的魔力。", 37, 1530030, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("你问是不是我制作的？嘿嘿，这原本是师傅的，我偷偷拿了出来。\r\n哎呀，不要在意细节，快进去吧。", 37, 1530030, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(33505, "");
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
            cm.sendNormalTalk_Bottom("你问怎么弹？", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("就像弹吉他一样弹就……嗯？你不会弹吉他？虽然你不会，但是吉他是打击乐器啊。只要随便拨弄两下就会出声音的。", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("吉他是弦乐器……", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我都说了不要在意细节。因为它是用魔法制成的物品，所以就算你随便弹也不会疼的。不要担心，随便拨两下就行。", 37, 1530030, true, true)
                    } else {
                        if (status === a++) {
                            cm.gainExp(Math.pow(cm.getLevel(), 3));
                            cm.forceCompleteQuest(33505);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};