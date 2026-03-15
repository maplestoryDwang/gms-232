var status = -1;

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("你还没回去啊。还有什么要说的吗？", 4, 1500001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("哼，显而易见。他的辩解实在是令人难以信服。异邦人的话不能相信，校长先生。", 4, 1500002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b我也只是受人之托来化解误会的。因此，我得先掌握清楚互相之间正确的事实关系，不是吗？#k", 2, 1500001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("哼，别废话了！我们5个孩子一下子消失了。这不是绑架是什么？", 4, 1500002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b有证据能够证明是魔法师库迪犯下的罪行吗？#k", 2, 1500001, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那个叫库迪的魔法师在我们森林附近出没也不是一两次了。虽然把他赶跑很多次，但他还是偷偷地干着什么奇怪的勾当。", 4, 1500002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("原来，为了干坏事，他已经事先考察过现场了吧。他想趁着放假，老师们全部去休假的空当，对孩子们下手。不过犯人总归会再次出现在现场。所以当他在这附近游荡的时候，被我抓了个正着。", 4, 1500002, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b(5个孩子消失，此事的确非同寻常。但果真是库迪所为吗？)#k", 2, 1500001, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("你说需要冷静思考问题，我也理解。但作为我们来讲，首先必须得对有嫌疑的人进行训问。", 4, 1500001, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#b(他们因为担心孩子，现在正处于非常兴奋的状态。看来最好听听魔法师库迪本人的话。)#k", 2, 1500001, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(32106, "");
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

function end(c, b, a) {
    if (c == 0 && b == 0) {
        status--
    } else {
        if (c == -1) {
            cm.dispose();
            return
        } else {
            status++
        }
    }
    if (status == 0) {
        cm.sendNext("你是来救我的吗？")
    } else {
        if (status == 1) {
            cm.sendNextPrev("你来的正好，请听我说。我根本不是犯人。我为何要绑架那些妖精呢？")
        } else {
            if (status == 2) {
                cm.gainExp(3630);
                cm.forceCompleteQuest(32106);
                cm.dispose()
            }
        }
    }
};