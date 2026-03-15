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
            cm.sendNormalTalk("你说过想知道白魔法师的行踪对吧？ ", 5, 2510002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("还记得，他隐居前说的最后的话吗？终极光明只能在终极黑暗中被发现……所以，他去了世界上最黑暗的地方之一——静谧之林。", 5, 2510002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("静谧之林是几乎没有白天的黑夜之森林。因此，与其他任何地方相比，那里的光明更为纯粹。听说他在那里秘密研究魔法。这样的情报，应该够了吧？", 5, 2510002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("如果你见到他的话，请转达我的问候……另外，告诉他，不要忘了我们的约定，等他完成光之研究后，一定要来到这里，和我一起实现理想。我会一直等他。", 5, 2510002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("必须啊，一定要帮我转达。我给你情报，就是为了让你帮我带话给他。\r\n\r\n#b(通过左边的传送口，离开艾琳森林。)#k", 5, 2510002, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(32635, "");
                                cm.dispose()
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
            cm.sendNormalTalk("…… (小孩好像丢了魂一样。)", 5, 2510003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("喂，你没事吧。", 17, 0, true, true);
                cm.effect_Voice("Voice.img/Library/MnA/F/13", 100)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……我没能扣动扳机。妈妈，爸爸……必须……报仇……我怕，怕得没法扣动扳机。", 5, 2510003, true, true);
                    cm.effect_Voice("Voice.img/Library/MnA/F/14", 100)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……", 17, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.warp(302090220, 0)
                        }
                    }
                }
            }
        }
    }
};