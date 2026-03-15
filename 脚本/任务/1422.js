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
            cm.sendNormalTalk("你想选择刺客之路吗？呼……这可不是一条容易走的路。刺客是主要使用飞镖的飞侠，擅长远距离快速攻击敌人。移动速度非常快，攻击力很强，被称为1:1的最强者。", 0, 1052001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("为了熟练使用投掷武器，需要学习#b精准暗器#k和#b快速暗器#k。通过#b强力投掷#k，看准敌人的弱点发动致命一击，这也是刺客的特点之一。", 0, 1052001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("有没有新的攻击技能？当然有。有召唤强大的风之护符，击退敌人的#b风之护符#k，还有飞出会爆炸的飞镖，给目标及其周围的敌人造成伤害的#b爆裂飞镖#k技能。", 0, 1052001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("好像说得太多了……你想成为刺客吗？那样的话，必须通过一个简单的考试……不是什么复杂的考试。只要进入准备好的考场，消灭怪物，搜集#r30个黑暗之珠#k就行。但问题是……那些怪物比普通怪物更强。", 0, 1052001, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("考试的时候如果药水用光了，必须#b放弃任务重新开始#k。所以一定要做好充分准备之后再进去。考试马上开始。接受的话，我就把你送到考试沼泽去。", 0, 1052001)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(1422, "");
                                cm.dispose();
                                cm.warp(910370000, 0, false)
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1422.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("#t4031013#全部拿来啦。很能干嘛？让你成为刺客，好像不错。那么……我马上让你变成刺客。准备好了吗？", 0, 1052001)
        } else {
            if (status === a++) {
                cm.forceStartQuest(1422, "");
                cm.forceCompleteQuest(1422);
                cm.forceCompleteQuest(29901);
                cm.teachSkill(261, 0, -1);
                cm.updateInfoQuest(1073, "400=10;410=202");
                cm.forceStartQuest(17904, "1");
                cm.forceCompleteQuest(17904);
                cm.playerMessage(5, "冒险之书任务已完成。");
                cm.changeJob(410);
                cm.sendNormalTalk("好的，从现在开始你就是#b刺客#k了。刺客是躲藏在阴影之中，刹那间将暗器插入敌人心脏的人。希望你能更加努力修炼。", 0, 1052001, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4031013, -30);
                    cm.gainItem(1142108, 1);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                    cm.sendNormalTalk("刺客必须变得更强。但是决不能把那种力量用在弱者身上。把自己的力量用在正确的事情上，比变强更加困难。", 0, 1052001, true, false);
                    cm.dispose()
                }
            }
        }
    }
};