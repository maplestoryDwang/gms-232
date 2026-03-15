var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("#b#h0##k！如果要制作出让穆托满意的#r特制料理#k，我需要#i4034942:##b#t4034942#20个#k！哈！", 4, 3003152, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("你能速去速回吗？！", 4, 3003152)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(34203, "");
                    cm.sendNormalTalk("#i4034942:##b#t4034942##k可以通过狩猎栖息在村庄右边的#b五色花园#k地区的#b菠萝鹿#k获得！", 4, 3003152, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("没有时间了，你快去快回！哈！", 4, 3003152, true, false)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(34203, "");
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#ho#！噢！你这么快就搜集到材料啦！好的，那现在来完成我的#r特制料理#k吧？！", 0, 3003152, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我很快就能做好了，你稍后再来找我吧！哈！", 0, 3003152, true, false)
            } else {
                if (status === a++) {
                    cm.gainItem(4034942, -20);
                    cm.forceCompleteQuest(34203);
                    cm.dispose();
                    cm.warp(450002202, 0)
                }
            }
        }
    }
};