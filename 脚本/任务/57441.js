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
            cm.sendNormalTalk_Bottom("#face0#你问我有没有在这一带看到什么可疑人物？这个嘛……说来前些天我去查看蟠桃果林时，见到了一些之前从没见过的人。而且，他们的服装和你非常相似。", 37, 2091002, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#不过当时我只顾着看桃树了，并没有仔细看他们……说不定负责管理果林的韩太守能够知道些什么呢。你不去见见韩太守吗？", 37, 2091002)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(57441, "");
                    cm.OnStartNavigation(250010500, 1, "2091003", 0);
                    cm.sendNormalTalk_Bottom("#face0#离开武陵后，只要一路向西，就能到达蟠桃果林了。韩太守是负责管理果林的人。你一到那里应该就能见到他。", 37, 2091002, false, true);
                    cm.dispose()
                }
            }
        }
    }
}

function stage0(d, c, b) {
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57441.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.sendNormalTalk_Bottom("#face0#嗯，这棵树的状态也不错……看来今年桃子的收成应该没有问题了。咦？你是来找我的吗？", 37, 2091003, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(57441);
                cm.gainExp(1536020);
                cm.dispose()
            }
        }
    }
};