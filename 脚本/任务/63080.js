var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }
    var a = cm.getPlayer().getGender() == 0 ? "哥哥" : "姐姐";
    (e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("因为打雷的缘故，我吓得不敢睡觉。呜呜……好可怕……", 4, 9400224, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk("童话书里说，在#e打雷的夜晚#n会有可怕的怪物入侵村庄……", 4, 9400225, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("#b孩子们，童话书里的故事都是编出来的，村庄里很安全，你们不用担心。", 2, 0, true, true)
                } else {
                    if (status === b++) {
                        cm.askYesNo("可是我还是很害怕！呜呜，我胆子很小的！！！！！请你消灭村庄外面的普力奇吧！！", 4, 9400225)
                    } else {
                        if (status === b++) {
                            cm.forceStartQuest(63080, "");
                            cm.sendNormalTalk("#b好的，孩子们！" + a + "这就去消灭那些可恶的普力奇，你们稍等一会儿哦！", 2, 0, false, false)
                        } else {
                            if (status === b++) {
                                cm.dispose()
                            }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63080.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("#b呼~~真累人。", 2, 0, false, true)
        } else {
            if (status === b++) {
                cm.setNumberForQuestInfo(63090, "raining", 0);
                cm.setNumberForQuestInfo(63090, "lightning", 0);
                cm.setQuestCustomData(63092, "");
                cm.setQuestCustomData(63096, "happy");
                cm.setQuestCustomData(63253, "not");
                cm.setQuestCustomData(63252, "click");
                cm.setQuestCustomData(63251, "click");
                var a = cm.getNumberFromQuestInfo(63090, "DnN") == 0;
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PL_AfterLand/RotationBack", 128);
                cm.updateInfoQuest(63095, "angle=" + (a ? 90 : 180));
                cm.afterlandChangeMapObject("RotationBack", 0, 0, 0, 1, a ? 90 : -90, 100, 1);
                cm.afterlandUpdateEnvironment();
                cm.forceCompleteQuest(63080);
                cm.gainExp(952800);
                cm.updateInfoQuest(63080, "exp=1");
                cm.sendNormalTalk("#b孩子们已经睡着了。天气也平静下来，说明孩子们消气了。", 2, 0, true, false);
                cm.dispose()
            }
        }
    }
};