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
            cm.sendNormalTalk_Bottom("那现在开始游戏吧，say HO！我提议的游戏是，YO~", 37, 1530511, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("心跳心跳心跳……OX问答！如果你能答对全部的12个问题，你就是赢家！怎么样？你想挑战吗？", 37, 1530511)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不要忘记，甘迪是不会大发慈悲的！12道问题中，只要答错一题，就得重新开始！", 37, 1530511, false, true)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.updateInfoQuest(33039, "stay=1;result=0");
                        cm.warp(330007210, 0)
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
            cm.sendNormalTalk_Bottom("真让人吃惊，baby！12个问题全都答对了！", 37, 1530511, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你是这时代真正的智者！你同时具备了对实习老师的真心及智慧，你是真正的问答游戏冠军！", 37, 1530511, true, true)
            } else {
                if (status === a++) {
                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                    cm.forceCompleteQuest(33020);
                    cm.dispose()
                }
            }
        }
    }
};