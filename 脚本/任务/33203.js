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
            cm.sendNormalTalk_Bottom("这次需要#b灯和灯泡#k。\r\n在你搜集材料的这段时间内，我们会制作头盔的框架。", 37, 1540652, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("跟你总是谈不来，所以为了以防万一，我再提醒一下，这次请你到右边去看看。\r\n巡查队的那些家伙好像离我们越来越近了。", 37, 1540652, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(33203, "");
                    cm.getTopMsgFont("配件可以从避难处的右边地图中获得. ", 3, 20, 20, 0);
                    cm.npc_LeaveField("oid=35954");
                    cm.npc_LeaveField("oid=35956");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/33203.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askMenu_Bottom("怎么这么晚才回来？快拿给我。\r\n#b#L0#谢谢你，不高兴。#l", 37, 1540652)
        } else {
            if (status === a++) {
                cm.askMenu_Bottom("我警告你。\r\n不要这么喊我。\r\n#b#L0#你不喜欢你的名字吗？#l", 37, 1540652)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不要说蠢话了。\r\n总之，这些配件你亲自拿过去吧。", 37, 1540652, false, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(33203);
                        cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
                        cm.forceCompleteQuest(33193);
                        cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
                        cm.gainItem(4034234, -1);
                        cm.gainItem(4034236, -2);
                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                        cm.dispose()
                    }
                }
            }
        }
    }
};