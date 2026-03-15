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
            cm.sendNormalTalk_Bottom("尖，尖叫！戴米安大人应该在#b旧馆#k练习。", 37, 1530636, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("他正在接受月光，吸收黑暗的力量。哦哦……戴米安大人……", 37, 1530637, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b(我得去旧馆。)#k", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(33504, "");
                        cm.dispose()
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
            cm.sendNormalTalk_Bottom("你来了，你也感觉到了吗？嗯？你说什么？就是尘土啊，尘土。教室里全部都是。黑暗的气息都快要让人窒息了。", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(33504);
                cm.updateInfoQuest(33100, "date=19/11/24");
                cm.updateInfoQuest(33100, "count=0;date=19/11/24");
                cm.gainExp(Math.pow(cm.getLevel(), 3));
                cm.forceStartQuest(33101, "none");
                cm.dispose()
            }
        }
    }
};