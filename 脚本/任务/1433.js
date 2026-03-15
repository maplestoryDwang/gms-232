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
            cm.forceStartQuest(1433, "");
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1433.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("呵呵，和#b其他次元的武术教练#k战斗，感觉如何？那是#b神圣的石头#k拥有的惊人力量所展现的神秘幻象……武术教练同意将你引向更强的战士之路，所以才会现身。", 0, 2020008, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("通过肉搏战的考验, 你已经获得了成为真正战士的资格。现在剩下的就是转职成为真正的战士#b狂战士#k……嗯, 你已经准备好接受全新的力量了吗？", 0, 2020008)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(29902);
                    cm.forceStartQuest(1433, "");
                    cm.forceCompleteQuest(1433);
                    cm.updateInfoQuest(1073, "100=10;130=204;131=204");
                    cm.forceStartQuest(17905, "1");
                    cm.forceCompleteQuest(17905);
                    cm.playerMessage(5, "冒险之书任务已完成。");
                    cm.changeJob(131);
                    cm.sendNormalTalk("现在你已经成为了一名#b狂战士#k。作为#b枪和矛#k的专家、作为真正的战士, 从现在起你可以尽情地展示你的能力了。", 0, 2020008, false, false)
                } else {
                    if (status === a++) {
                        cm.gainItem(4031059, -1);
                        cm.gainItem(1142109, 1);
                        cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                        cm.dispose()
                    }
                }
            }
        }
    }
};