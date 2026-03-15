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
            cm.sendNormalTalk("好了，走吧！那里的我不是召唤兽的形象，而是过去的我。", 0, 2153006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("当然，因为是我创造出来的幻象，因此没有过去的我强。但是那个次元是我的领域，因此会比现实中的强很多。因为是其他次元，所以不能停留太长时间。请一定要记住！", 0, 2153006, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(23206, "2");
                    cm.forceStartQuest(23218, "");
                    cm.warp(931050120, 0, false);
                    cm.getPlayer().scheduleWarpTask(1 * 1 * 20, cm.getMap(931050110));
                    cm.addPopupSay(0, 5000, "击杀后等待时间结束。");
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23218.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("修炼怎么样？有成果的话，我会把现在的状态刻印下来。", 0, 2153006)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(1073, "3101=10;3120=35;3121=201");
                cm.forceStartQuest(23218, "001");
                cm.forceCompleteQuest(23218);
                cm.sendNormalTalk("很高兴能对你有所帮助。今天用了那么多力量，一定很累吧？请回去吧。嗯？辛苦？别跟我客气……", 0, 2153006, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(1142555, 1);
                    cm.forceCompleteQuest(32002);
                    if (cm.getJob() == 3120) {
                        cm.changeJob(3121)
                    } else {
                        if (cm.getJob() == 3110) {
                            cm.changeJob(3111)
                        } else {
                            cm.playerMessage(1, "你的职业不对无法转职，想正常体验剧情不要乱改职业。")
                        }
                    }
                    cm.sendNormalTalk("脸红是因为用了用力过多！", 0, 2153006, true, false)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(310020100, 4, false)
                    }
                }
            }
        }
    }
};