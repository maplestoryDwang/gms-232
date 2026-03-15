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
            cm.sendNormalTalk_Bottom("博士……博士？不对，没法通讯。", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("是因为无线电的干扰吗？降落伞只能传送一个啊……", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("大家都已经先下去了吗？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("#face4#我们也……下去吧……", 36, 2052027)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(3491, "");
                            cm.dispose();
                            cm.warp(221030821, 0);
                            cm.curNodeEventEnd(true);
                            cm.setInGameDirectionMode(true, false, true);
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 200, 0)
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
            cm.sendNormalTalk_Bottom("#face4#不对……用小冒险勇士徽章也没法变身。", 36, 2052027, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("……还是先等冒险能量恢复吧。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face4#如果这种时候我是阿敏姐姐……", 36, 2052027, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("阿敏是个什么样的人呢？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face4#姐姐……我就是因为对姐姐很憧憬，才会下定决心想要当个冒险勇士的。", 36, 2052027, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face4#不过现在这件事也算是结束了。", 36, 2052027, true, true)
                            } else {
                                if (status === a++) {
                                    cm.gainExp(3668312);
                                    cm.forceCompleteQuest(3491);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};