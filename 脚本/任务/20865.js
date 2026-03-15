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
            cm.forceStartQuest(20865, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20865.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("你真的选好了吗？出于谨慎，我必须告诉你，选择之后是不能后悔的。请慎重决定。你真的要选择奇袭者之路吗？", 0, 1101007)
        } else {
            if (status === a++) {
                cm.changeJob(1500);
                cm.sendNormalTalk("从现在开始，你就是奇袭者了！呀呼！闪电骑士团又增加了新成员！对了，我都忘了，得先给你分配一些能力。", 0, 1101007, false, true)
            } else {
                if (status === a++) {
                    cm.teachSkill(10000259, 0, -1);
                    cm.updateInfoQuest(1073, "1500=10");
                    cm.teachSkill(10001245, 1, 1);
                    cm.teachSkill(10000246, 1, 1);
                    cm.sendNormalTalk("现在你已经是奇袭者了。如果你想变得更强，可以在属性窗(S键)中提升相应的属性。如果觉得太难，还可以使用#b自动分配#k☆", 0, 1101007, true, true)
                } else {
                    if (status === a++) {
                        cm.gainItem(1482014, 1);
                        cm.gainItem(1142066, 1);
                        cm.forceCompleteQuest(20865);
                        cm.forceCompleteQuest(29906);
                        cm.sendNormalTalk("还有！作为奇袭者需要的东西可不少呢，我帮你增加了装备和其他道具的保管箱数量！是不是很棒？", 0, 1101007, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("对了, 还有……我给了你一些#bSP#k, 你可以打开#b技能菜单#k, 学习技能.虽然现在可以学习的东西并不多, 但很快你就能学会所有的技能.啊, 对了, 一开始并不是所有的技能都可以学习.有些技能必须在学会其他技能后, 才能学习.", 0, 1101007, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("和初心者时期不同，成为奇袭者之后如果死亡，会损失之前积累的部分经验值。所以别光顾着打猎而忘了危险。知道了吗？", 0, 1101007, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("好了……作为冒险骑士团的骑士，希望你冒险愉快！", 0, 1101007, true, true);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};