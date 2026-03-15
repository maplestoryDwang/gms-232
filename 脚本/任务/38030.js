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
            cm.sendNext("啊，对不起。那个狡猾的家伙……不，一想到那个家伙，我的火就直往上冒。一开始觉得他是很神奇的种族，所以还亲切地跟他问这问那，没想到竟然摆了我一道……", 3000000)
        } else {
            if (status == a++) {
                cm.sendNext("既然你来找我，如果有什么可以帮上忙的事情，请尽管说。嗯？去冒险岛世界的方法？你是从冒险岛世界来的人，竟然会不知道回去的方法……", 3000000)
            } else {
                if (status == a++) {
                    cm.askAcceptDecline("啊，可以理解。我有时也会不知道回家的路。但是那也只是在喝醉了的时候……嗯哼，总之通往冒险岛世界的次元传送口就在左侧的大神殿内部。你现在想回到冒险岛世界吗？", 3000000)
                } else {
                    if (status == a++) {
                        cm.forceStartQuest();
                        cm.dispose()
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38030.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("这里是冒险岛世界…………？我真的回来了吗？我还以为再也不能活着回来。", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("大家都无恙吧？再等等吧。我这就去找你们！", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(38030, "");
                    cm.forceStartQuest(38030, "clear");
                    cm.forceCompleteQuest(38030);
                    if (cm.getJob() == 2500) {
                        cm.changeJob(2510)
                    }
                    cm.dispose()
                }
            }
        }
    }
};