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
            cm.sendNormalTalk_Bottom("#face0#果然不出所料。他们打算利用武陵的灵气去使唤这些妖怪……但我怎么也想象不出，他们这么做究竟是何目的。", 37, 2091001, true, true)
        } else {
            if (status === a++) {
                cm.gainItem(4033310, -20);
                cm.sendNormalTalk_Bottom("#face0#从目前的情况来看，你所寻找的这些人，是盯上了冒险岛灵气集中的地方——也就是仙人森林深处的妖怪森林。", 37, 2091001, false, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#我并不清楚他们究竟是什么人。自然也就不知道他们这么做是何目的。一切还需要你去亲自进行查探。要不要直接赶往妖怪森林进行调查呢？", 37, 2091001)
                } else {
                    if (status === a++) {
                        cm.OnStartNavigation(250010504, 0, "in01", 0);
                        cm.sendNormalTalk_Bottom("#face0#妖怪森林就位于仙人森林的深处。那里有一块告示牌隐隐透出奇怪的灵力，我预感那里就是突破口。然而，妖怪森林有一位非常冷血的主人，你切记不要招惹到他。", 37, 2091001, false, true)
                    } else {
                        if (status === a++) {
                            cm.npc_LeaveField("oid=16511");
                            cm.npc_LeaveField("oid=16509");
                            cm.forceStartQuest(57149, "");
                            cm.dispose()
                        }
                    }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57149.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("……这下问题大了。明智光秀……真没想到这个丑陋的恶魔动作竟会如此迅敏……如果他们在冒险岛的一切行动都是出自他的指示……那他可能比信长更加危险。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("必须要尽快将这个问题告诉枫叶山丘的人。快点写一封信给他们吧。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(57149);
                    cm.gainExp(1531024);
                    cm.dispose()
                }
            }
        }
    }
};