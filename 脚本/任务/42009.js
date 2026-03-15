var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("#b#h0##k。我得到报告说，希纳斯调查团在#r冒险岛世界的北部边缘#k发现了#b可疑的海底建筑#k。而且据说，在那个建筑中还发现了世界树阿丽莎很久之前的思念体。", 1, 1101002, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("看来牵连着生命超越者的这件事，将是希纳斯调查团员们要解决的一个重大事件。#b#h0##k你愿意亲自去一趟吗？你到达那里的话，就可以从#b阿丽莎的思念体#k口中得到更详细的信息了。", 0, 1101002)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我现在利用神兽的力量马上将你#b#h3##k送往那里。", 1, 1101002, false, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(42000, "slot1=-1;slot2=-1;slot3=-1;slot4=-1;slot5=-1");
                        cm.updateInfoQuest(42011, "time=600000;type=1");
                        cm.forceStartQuest();
                        cm.warp(992000010, 0);
                        cm.dispose()
                    } else {
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function end(c, b, a) {
    cm.forceCompleteQuest();
    cm.dispose()
};