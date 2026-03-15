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
            cm.forceStartQuest(2616, "");
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/2616.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceStartQuest(11620, "0");
            cm.updateInfoQuest(15710, "lasttime=19/12/14/10/11");
            cm.sendNormalTalk("哦，搜集到了吗？真是谢谢你！也得谢谢达克鲁！……嗯？我跟达克鲁熟不熟？", 0, 1052002, false, true)
        } else {
            if (status === a++) {
                cm.gainItem(4034076, -1);
                cm.sendNormalTalk("大家都住在废弃都市，当然熟悉啦。虽然达克鲁并不喜欢跟其他人走得太近，不过他在村外好像有朋友。", 0, 1052002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯？我是怎么知道的？#b他每周都会收到一个包裹#k。是不是在跟其他村的朋友互相赠送礼物呢？", 0, 1052002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b（吉姆的调查结束了。现在还剩谁呢？红雅说的人是……美发店的钱老板吗……？）", 2, 1052002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b（请调查美发店的钱老板吧。）", 2, 1052002, true, true)
                        } else {
                            if (status === a++) {
                                cm.OnStartNavigation(103000005, 1, "1052100", 0);
                                cm.forceCompleteQuest(2616);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};