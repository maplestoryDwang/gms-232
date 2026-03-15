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
            cm.sendNormalTalk_Illus_II("多亏了你搜集到的咒术书，我想起了信上写的解除咒术的方法了。", 9130102, 4, false, true, 9130102)
        } else {
            if (status === a++) {
                cm.askYesNo_Illus_II("为了解除这个咒术，还需要一个东西，你能再帮我一下吗？", 9130102, 0, 9130102)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Illus_II("为了解除这个咒术，需要#i4034128:##t4034128:#。", 9130102, 4, false, true, 9130102)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Illus_II("#i4034128:##t4034128:#需要抓住#m811000004:#、#m811000005:#、#m811000006:#的#o9450026:#、#o9450027:#后得到的#i4009286:##t4009286:#作为养分，才能成长。", 9130102, 4, true, true, 9130102)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Illus_II("你去#m811000004:#、#m811000005:#、#m811000006:#看看，留心观察，应该就能找到药草的种子，然后用那里的#t4009286:#提供营养就行。", 9130102, 4, true, true, 9130102)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Illus_II("#i4034128:##t4034128:#会经历3个成长阶段，每个阶段需要10个#t4009286:#。", 9130102, 4, true, true, 9130102)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(58903, "");
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
            cm.sendNormalTalk_Illus_II("你拿来#i4034128:##t4034128:#了吗？", 9130102, 5, false, true, 9130102)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Illus_II("为了培育#i4034128:##t4034128:#，真是辛苦你了。多亏了你，我们可以制造唤醒武将的药了。", 9130102, 5, true, true, 9130102)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Illus_II("我要制作治疗药，你能等一下吗？然后再重新和我对话吧。", 9130102, 5, true, true, 9130102)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(58903);
                        cm.gainItem(4034128, -1);
                        cm.dispose()
                    }
                }
            }
        }
    }
};