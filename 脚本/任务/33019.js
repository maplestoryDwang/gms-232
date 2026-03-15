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
            cm.sendNormalTalk_Bottom("你不用害怕，游戏是很公平的。为了保证游戏的公平性，我还特意请了打工仔。", 37, 1530211, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("那个带着奇怪小狗面罩的打工仔将会主持游戏。", 37, 1530211, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("Yo，很高兴见到你。我的名字叫甘迪！少女们的委托，我怎么能拒绝呢……", 37, 1530511, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("这个小狗面罩好眼熟……", 56, 1530211, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("NONONO，不要思考那么多，baby！", 37, 1530511, true, true)
                        } else {
                            if (status === a++) {
                                cm.gainExp(Math.pow(cm.getLevel(), 3));
                                cm.forceCompleteQuest(33019);
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
            cm.sendNormalTalk_Bottom("又是你？你又来瞎掺和什么？", 37, 1530211, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("哼，什么事情都要掺和……不过没关系。反正与阿白实习老师的一日约会劵是属于我的。", 37, 1530211, true, true)
            } else {
                if (status === a++) {
                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                    cm.forceCompleteQuest(33018);
                    cm.dispose()
                }
            }
        }
    }
};