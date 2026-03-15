var status = -1;
function start(c, b, a) {
    if (c == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendNormalTalk_Bottom('#b#h0##k。嗯？小灵灵你要给我什么？', 56, 3005119, true, true);
    } else {
        if (status == 1) {
            cm.sendNormalTalk_Bottom('已经100级啦，可以进行第四次转职了！', 36, 3005151, false, true);
        } else {
            if (status == 2) {
				cm.forceCompleteQuest(36258);
                cm.changeJob(16212);
				cm.gainItem(1190561,1);
                cm.addPopupSay(9110002, 5000, "#fn微软雅黑##e第四次转职成功#k\r\n。");
                cm.dispose();
            }
        }
    }
}
function end(c, b, a) {
    cm.dispose();
}