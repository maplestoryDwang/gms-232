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
            cm.askAcceptDecline_Bottom("#face0##fc0xFFbfbfbf#(当时那个声音……耳边再一次响起了呼唤我的声音。\r\n响应骑士雕像的召唤，循声跟过去看看吧？)\r\n\r\n #r ※ 自动转至任务地图。#k", 36, 3001951 - cm.getPlayer().getGender(), 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(刚决定响应召唤，就出现了一道神秘光芒来指引我。\r\n光芒瞬间将我带到了广场上。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(39653, "rMap=" + cm.getMapId());
                    cm.dispose();
                    cm.warp(993162053, 0, false)
                }
            }
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39653.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest(39653);
            cm.updateInfoQuest(39601, "50=h0;51=h0;52=h0;53=h0;54=h0;j=3;55=h0;56=h0;57=h0;58=h0;59=h0;q=4");
            cm.updateInfoQuest(1073, "15100=10;15110=30;15111=61");
            cm.changeJob(15111);
            cm.openUIWithOption(3, 151111000);
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(神秘光芒揭露了刻印在我灵魂深处的力量。\r\n集中精神接收那份力量吧。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.forceStartQuest(39692, "");
                cm.forceCompleteQuest(39692);
                cm.sendNormalTalk_Bottom("#face5#真不敢相信……我……居然会背叛主君？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face5#我……我过去到底是什么样的人？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face6#我竟亲手……害了我誓要以灵魂来守护的主君吗。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};