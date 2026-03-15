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
            cm.forceStartQuest(23162, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23162.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你拿回了#t4034787#啊，做得好！果然还是比想象中要厉害啊。", 0, 2151000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我之所以将这个任务交给你去做是有原因的，不知道你有没有看出来，你经手处理的黑色之翼就是从前欺负你的家伙，是个非常可恶的家伙，通过锻炼，你已经强大到足以轻松对付那种敌人了。能够双管齐下，一并拿下任务和报仇两件事，你的心情肯定很不错吧。", 0, 2151000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("不过我没想到你能够这么的熟练……我还从未见过像你这样快速适应武器的使用和近距离战斗的人，虽然这么夸人并不是我的风格……不过我想告诉你，你真的很厉害。", 0, 2151000, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("好吧！对你成长的确认，有这么多就足够了！虽然我觉得还为时尚早，不过也并不早了，那我们就进入下一个阶段吧，就是要成为凌驾于现有力量基础之上的更加强大更加快速的爆破手。", 0, 2151000)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(1073, "3700=10;3710=201");
                            cm.changeJob(3710);
                            cm.sendNormalTalk("我已经让你转职了，而且也传授了你凌驾于之前基础之上的更强大又帅气的技能，现在你再也不是从前的你了，希望你能尽快随心所欲施展强大力量，当然我相信你肯定很快就能做到。", 0, 2151000, false, true)
                        } else {
                            if (status === a++) {
                                cm.gainItem(4034787, -1);
                                cm.gainItem(1142243, 1);
                                cm.gainItem(1353401, 1);
                                cm.forceCompleteQuest(23162);
                                cm.forceCompleteQuest(29942);
                                cm.sendNormalTalk("那么我们下堂课再见，\n\n在此之前，我很期待你能作为反抗者大展拳脚。", 0, 2151000, true, false);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};