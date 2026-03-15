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
            cm.forceStartQuest(32638, "");
            cm.dispose()
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
            cm.sendNormalTalk("什么？你在找大师？", 5, 2510010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我帮不了你。如果没有什么重要的事，不要接近大师的房间！！", 5, 2510010, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("呃，嗯……以后注意吧。大师在神殿的屋顶。", 5, 2510010, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("(这魔法师还挺敏感的。屋顶……要不要上去看看呢？)", 17, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.warp(302090400, 0)
                        }
                    }
                }
            }
        }
    }
};