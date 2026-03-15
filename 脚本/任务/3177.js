var status = -1;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    cm.forceStartQuest();
    cm.dispose()
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNext("看你的表情，好像是对狮子王产生同情心了吧。其实没有必要这样。我也可以理解他的愤怒和悲伤，但是即便这样，把灵魂出卖给黑魔法师也不是个正确的选择。")
        } else {
            if (status == a++) {
                cm.sendNext("我一直相信他是个即使身处绝境，也会为了美好的未来而前进的人，所以才会追随着他。抛弃一切，成为黑魔法师的仆人，和所有人类作对，就算是死，也不应该用这样的方式复仇。")
            } else {
                if (status == a++) {
                    cm.sendNext("而且仇已经报完了。依靠从黑魔法师那里获得的力量，他攻击了反黑魔法师同盟。在几百年之后的今天，他却还在这里危害子孙，没有比这更可耻的了。现在，到了把憎恨和复仇的锁链切断的时候了。")
                } else {
                    if (status == a++) {
                        cm.forceCompleteQuest();
                        cm.OnStartNavigation(211061001, 1, "2161001", 0);
                        cm.dispose()
                    }
                }
            }
        }
    }
};