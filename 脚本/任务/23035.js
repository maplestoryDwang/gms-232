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
            cm.forceStartQuest(23035, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23035.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你成功地破坏了#o9001032#！你没有辜负我对你的期待……真的非常感谢。这样的话，我们村的能量不足现象就会有一定程度的缓解。你这次真的为我们村立了大功。", 0, 2151004, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("我亲眼确认了你的能力，现在轮到我向你展现我的能力了。我会将新的技能传授给你。技能的熟练度不高的话，将会无法使用。我本来想过一段时间再告诉你……不过现在的你已经拥有了充分的能力。", 0, 2151004)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(1073, "3500=10;3510=201;3511=201");
                    cm.changeJob(3511);
                    cm.sendNormalTalk("我已经让你完成了转职。现在你已经不再是从前的你了。更多样、更复杂、更强大的技能将会让你变得完整。会不会太难？请别担心。你应该完全有能力使用，因为你完成了那么难的任务。", 0, 2151004, false, true)
                } else {
                    if (status === a++) {
                        cm.gainItem(1142244, 1);
                        cm.forceCompleteQuest(23035);
                        cm.forceCompleteQuest(29943);
                        cm.sendNormalTalk("让我们下次课程再见吧。\n\n在那之前，希望你能以反抗者的身份，继续努力。", 0, 2151004, true, false);
                        cm.dispose()
                    }
                }
            }
        }
    }
};