var status = -1;
var selectionLog = [];
function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom('#face0#在遭遇麦格纳斯的入侵之后，直到现在我们仍然未能夺回首都赫里希安，\r\n所以我们正以此地为据点养精蓄锐。', 36, 3000002, false, true, 1);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face0#因近来判断已经有了足够的力量，便成立了赫里希安反攻总部，\r\n并开始为正式夺回首都而做准备。', 36, 3000002, true, true, 1);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face0#不过没想到麦格纳斯的势力异常强大，\r\n眼下就连好不容易成立的总部都惨遭沦陷的危机。', 36, 3000002, true, true, 1);
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom('#face0#你要做的事就是去帮助正在指挥反攻总部的伊黛娜和皮塔斯，\r\n怎么样，能做到吧？', 36, 3000002, 1);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('#face0#走上右边的台阶，从传送口前往#r赫里希安#k区域，\r\n侦察兵#b提洛#k会在那里等你，去接受他的指引吧。', 36, 3000002, false, true, 1);
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(36252, '');
                                cm.dispose();
                            }
                        }
                    }
                }
            }
        }
    }
}
function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo('');
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose();
            }
        }
    }
}
function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom('#face0#啊，你就是那个阿尼玛的道士啊？我刚刚听贝尔德说了，\r\n我是侦察兵提洛。', 36, 3001007, false, true, 1);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('看起来……情况不太妙啊！', 56, 0, true, true, 1);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#face0#啊，是，我们正艰难地维持着反攻总部的运营，没想到幽灵部队\r\n就发动了空袭，呜呜……反攻总部有危险。', 36, 3001007, true, true, 1);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face0#唔，等一下，我先擦干眼泪……', 36, 3001007, true, true, 1);
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(36252);
                            cm.dispose();
                        }
                    }
                }
            }
        }
    }
}