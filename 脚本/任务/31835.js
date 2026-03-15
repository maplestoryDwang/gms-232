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
            cm.sendNormalTalk("虽然不知道敌人的确切来历，但有一点很明确！他们是从冒险岛世界来的！从他们的对话来看，他们好像是想入侵格兰蒂斯！真让人担心！", 0, 9020009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("不，我先来向你说明一下……他们说的到底是什么。不是很长，请仔细听好了。", 0, 9020009, true, true)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(940029000, 0)
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
            cm.askMenu("搜集到足够多的#t4034885#了吗？快选择自己想要的椅子吧。\r\n#b#e- 拥有#t4034885#：0个#k#n\r\n\r\n#L0# #i3018431:# #t3018431# (300个) #l\r\n#L1# #i3010188:# #t3010188# (100个) #l\r\n#L2# #i3018432:# #t3018432# (350个) #l\r\n#L3# #i3018433:# #t3018433# (350个) #l\r\n#L4# #i3010676:# #t3010676# (500个) #l\r\n#L5# #i3010290:# #t3010290# (150个) #l\r\n#L6# #i3010493:# #t3010493# (250个) #l\r\n#L7# #i3010568:# #t3010568# (200个) #l\r\n#L8# #i3018434:# #t3018434# (300个) #l", 1, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯，#t4034885#好像还不够。再去搜集一点吧。", 5, 9010000, false, false)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};