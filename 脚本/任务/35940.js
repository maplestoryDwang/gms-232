var status = -1;

function start(d, c, b) {
    if (d == 1) {
        status++
    } else {
        if (status == 1) {
            cm.sendNext("你为什么不接受呢？你不必有任何负担的。", 1012100);
            cm.dispose();
            return
        }
        status--
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext("#h0#, 我有东西要交给你。这是一本#b冒险之书#k, 它可以记录你日后在冒险岛世界旅行过程中所经历的事情。在这里可以记录将要发生的只属于你的故事。", 1012100)
        } else {
            if (status === a++) {
                cm.askStartEndS("怎么样，要领取#b冒险之书#k吗？")
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32360);
                    cm.sendNext("给你……这本冒险之书正适合你……", 1012100)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest();
                        cm.sendNext("详细内容你可以慢慢查看。", 1012100)
                    } else {
                        if (status === a++) {
                            cm.sendOk("虽然这条路并不平坦, 但我希望即将启程的你可以尽情享受这次冒险之旅。", 1012100);
                            cm.dispose()
                        } else {
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    if (d === 0) {
        status--
    } else {
        status++
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNextS("#b冒险之书#k？你是说可以在这里写下我的冒险故事，对吧？")
        } else {
            if (status === a++) {
                cm.sendNextS("我正想开始进行冒险，现在马上开始就行了。……哎？")
            } else {
                if (status === a++) {
                    cm.curNodeEventEnd(true);
                    cm.setInGameDirectionMode(true, false);
                    cm.fieldEffect_ScreenMsg("adventureStory/mapleLeaf/0");
                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                } else {
                    if (status === a++) {
                        cm.sendNextS("这是什么枫叶？这么看来，冒险岛上存在着巨大的枫树。这枫叶是跟随我来到这里的吗？")
                    } else {
                        if (status === a++) {
                            cm.sendNextS("这也算是一种纪念，好好珍藏吧。夹在#b 冒险之书#k里的话，就不会弄皱了。")
                        } else {
                            if (status === a++) {
                                cm.gainItem(4460004, 1);
                                cm.forceCompleteQuest();
                                cm.curNodeEventEnd(false);
                                cm.setInGameDirectionMode(false);
                                cm.dispose()
                            } else {
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};