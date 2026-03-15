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
            cm.sendNormalTalk_Bottom("那么现在只要把感冒病毒转移到两位老师的身上就可以了。", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("把感冒病毒放在那个杯子里就行了吧？希拉老师来医务室要做的事除了补妆就是喝咖啡。在希拉老师回来前赶紧把事情处理好。", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32808, "");
                    cm.updateInfoQuest(32720, "sms=102");
                    cm.dispose()
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
            cm.warp(330002312, 0);
            cm.dispose()
        }
    }
};