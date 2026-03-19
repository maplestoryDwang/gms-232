function enter() {
    var b = 0;
    if (cm.getQuestStatus(20701) == 1) {
        b = 913000000
    } else {
        if (cm.getQuestStatus(20702) == 1) {
            b = 913000100
        } else {
            if (cm.getQuestStatus(20703) == 1) {
                b = 913000200
            } else {
                if (cm.isQuestActive(20771)) {
                    b = 913070300
                } else {
                    if (cm.isQuestActive(20772)) {
                        b = 913070310
                    } else {
                        if (cm.isQuestActive(20773)) {
                            b = 913070320
                        }
                    }
                }
            }
        }
    }
    if (b > 0) {
        if (cm.getPlayerCount(b) == 0) {
            var a = cm.getMap(b);
            a.resetFully();
            a.respawn(true);
            cm.warp(b, 0)
        } else {
            cm.playerMessage(-1, "地图上已经有人了。")
        }
    } else {
        cm.playerMessage(5, "只向接受了任务的骑士们开放。");
        cm.playerMessage(-1, "只向接受了任务的骑士们开放。")
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.dispose()
        }
    }
};