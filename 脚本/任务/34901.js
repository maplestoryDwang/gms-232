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
            cm.sendNormalTalk_Bottom("#face0#（即使失去了记忆……身体，这双手还本能地知道战斗的感觉。我也许已经熟悉了这样的情况……）", 37, 3001500 + cm.getPlayer().getGender(), 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face5#（……不，必须先做好进入战斗的准备。现在我的状态怎么样？可以使用的……）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
            } else {
                if (status === a++) {
                    cm.changeJob(15500);
                    cm.teachSkill(150010241, 0, -1);
                    cm.teachSkill(155001100, 1, 20);
                    cm.teachSkill(155001102, 1, 20);
                    cm.teachSkill(155001103, 1, 10);
                    cm.forceStartQuest(34901, "");
                    cm.forceCompleteQuest(34901);
                    cm.playerMessage(5, "获得了<深渊萌芽>勋章。");
                    cm.playerMessage(-1, "获得了<深渊萌芽>勋章。");
                    cm.forceCompleteQuest(34906);
                    cm.openUI(2);
                    cm.sendNormalTalk_Bottom("#face0#（只有这么点能力值。是遭到那家伙攻击的时候……造成的影响吗？等级升上去之后，应该就能恢复了吧。）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#（只能尽可能利用现有的一切了。先按基本快捷键(S)/选择型(C)，分配能力点吧。）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                    } else {
                        if (status === a++) {
                            cm.openUIWithOption(3, 155000007);
                            cm.sendNormalTalk_Bottom("#face0#（就只有这么点技能？需要的话，再多分配一点SP……虽然现在也没有多少……）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#（需要的技能最好放在快捷栏中。还有……如果需要打开技能窗，只要按基本快捷键(K)就行。）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#（用右键点击念力子弹技能图标时，可以切换为自动模式。一定要记住。）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.openUIWithOption(0, 2);
                                        cm.sendNormalTalk_Bottom("#face0#（一定会遇到各种困难，最好把药水也放到快捷栏中准备好。）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#（准备好之后，跟妮雅对话，然后到村里去吧。希望……不要出什么事。我很快就去带你回来。）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.updateInfoQuest(64985, "RunAct=0");
                                                cm.updateInfoQuest(64989, "count=0");
                                                cm.updateInfoQuest(64987, "count=0");
                                                cm.updateInfoQuest(64990, "count=0");
                                                cm.updateInfoQuest(500831, "rState=0;roulette=0;rResetDate=20/05/24");
                                                cm.updateInfoQuest(64686, "exp=0");
                                                cm.updateInfoQuest(64686, "mile=0;exp=0");
                                                cm.updateInfoQuest(500833, "");
                                                cm.updateInfoQuest(64680, "eventObj=0");
                                                cm.updateInfoQuest(64533, "num=0");
                                                cm.updateInfoQuest(64539, "Photo=0");
                                                cm.updateInfoQuest(64539, "Photo=0;already=0");
                                                cm.updateInfoQuest(65097, "lehellen=0");
                                                cm.updateInfoQuest(62563, "RunAct=0");
                                                cm.updateInfoQuest(62564, "count=0");
                                                cm.updateInfoQuest(62565, "count=0");
                                                cm.updateInfoQuest(62566, "count=0");
                                                cm.updateInfoQuest(64497, "dayCnt=0");
                                                cm.updateInfoQuest(64194, "count=3");
                                                cm.updateInfoQuest(62483, "eNum=0");
                                                cm.updateInfoQuest(62483, "eNum=0;lastDate=20/05/24");
                                                cm.updateInfoQuest(62484, "clear=0");
                                                cm.updateInfoQuest(62485, "clear=0");
                                                cm.updateInfoQuest(62486, "10=0;11=0;0=0;1=0;2=0;3=0;4=0;5=0;6=0;7=0;8=0;9=0");
                                                cm.updateInfoQuest(62487, "sc=0");
                                                cm.updateInfoQuest(62487, "a12=0;sc=0");
                                                cm.updateInfoQuest(62489, "gotKey=0");
                                                cm.updateInfoQuest(62497, "lastDate=20/05/24");
                                                cm.updateInfoQuest(62499, "lastDate=20/05/24");
                                                cm.updateInfoQuest(63033, "dayNW=0");
                                                cm.updateInfoQuest(63120, "dayNR=0");
                                                cm.updateInfoQuest(63042, "dayNR=0");
                                                cm.updateInfoQuest(62457, "date=20/05/24");
                                                cm.updateInfoQuest(62457, "sing=0;date=20/05/24");
                                                cm.forceStartQuest(62458, "");
                                                cm.updateInfoQuest(62459, "date=20/05/24");
                                                cm.updateInfoQuest(62459, "date=20/05/24;sing1=0");
                                                cm.forceStartQuest(62460, "");
                                                cm.updateInfoQuest(62461, "date=20/05/24");
                                                cm.updateInfoQuest(62461, "han=0;date=20/05/24");
                                                cm.forceStartQuest(62462, "");
                                                cm.updateInfoQuest(62463, "date=20/05/24");
                                                cm.updateInfoQuest(62463, "date=20/05/24;han1=0");
                                                cm.forceStartQuest(62464, "");
                                                cm.updateInfoQuest(62153, "lastday=20/05/24");
                                                cm.updateInfoQuest(58977, "");
                                                cm.updateInfoQuest(58977, "lastDay=20/05/24/20/05");
                                                cm.updateInfoQuest(58980, "");
                                                cm.updateInfoQuest(500773, "askR=0;bonusTalk=0;resetDate=20/05/24");
                                                cm.updateInfoQuest(100372, "count=0;prob=40;date=200524;max=0;coin=0");
                                                cm.updateInfoQuest(500827, "q1Set=0;q2Set=1;q3Set=0;q4Set=1;q5Set=1;qSetDate=20/05/24;accCheck=200524200509325");
                                                cm.updateInfoQuest(64665, "qSetDate=20/05/24");
                                                cm.updateInfoQuest(16402, "date=20/05/24");
                                                cm.forceCompleteQuest(16884);
                                                cm.updateInfoQuest(18793, "q0=0;q1=0;q2=0;pq=0;q1Date=20/05/24;q2Date=20/04/08;pqDate=20/04/08");
                                                cm.updateInfoQuest(18793, "q0=0;q1=0;q2=0;pq=0;q1Date=20/05/24;q2Date=20/05/24;pqDate=20/04/08");
                                                cm.updateInfoQuest(18793, "q0=0;q1=0;q2=0;pq=0;q1Date=20/05/24;q2Date=20/05/24;pqDate=20/05/24");
                                                cm.updateInfoQuest(7907, "point=0");
                                                cm.updateInfoQuest(7907, "lastW=19;point=0");
                                                cm.updateInfoQuest(26589, "coinCount=0");
                                                cm.updateInfoQuest(26589, "RGive1=0;coinCount=0");
                                                cm.updateInfoQuest(26589, "RGive1=0;RGive2=0;coinCount=0");
                                                cm.updateInfoQuest(26553, "count=0");
                                                cm.updateInfoQuest(26453, "val=0");
                                                cm.updateInfoQuest(18192, "count=0;val2=0;tDate=20/05/24/20/05;val=0");
                                                cm.updateInfoQuest(500208, "count=0;val2=0;tDate=20/05/24/20/05;val=0");
                                                cm.updateInfoQuest(500209, "count=0;val2=0;tDate=20/05/24/20/05;val=0");
                                                cm.updateInfoQuest(18282, "count=0;last=20/05/24");
                                                cm.updateInfoQuest(7708, "win=0");
                                                cm.updateInfoQuest(7708, "lose=0;win=0");
                                                cm.updateInfoQuest(7708, "draw=0;lose=0;win=0");
                                                cm.forceStartQuest(7019, "0");
                                                cm.forceCompleteQuest(7707);
                                                cm.forceCompleteQuest(63500);
                                                cm.updateInfoQuest(500833, "");
                                                cm.forceCompleteQuest(100297);
                                                cm.teachSkill(80011957, 1, 1);
                                                cm.updateInfoQuest(64346, "new=0");
                                                cm.updateInfoQuest(16401, "season=2019/09");
                                                cm.updateInfoQuest(500081, "season=2019/09");
                                                cm.updateInfoQuest(16402, "date=20/05/24");
                                                cm.updateInfoQuest(500862, "M1=0;M2=0;M3=0;openBox=0;M4=0;str=正在挑战第1个箱子！请完成1个每日任务！;M5=0;M6=0;date=20/05/24;booster=0;unlockBox=0");
                                                cm.updateInfoQuest(16860, "new=0");
                                                cm.updateInfoQuest(64711, "open=1");
                                                cm.updateInfoQuest(39160, "start=1");
                                                cm.updateInfoQuest(39165, "start=1");
                                                cm.updateInfoQuest(1072, "reset=1");
                                                cm.forceCompleteQuest(62417);
                                                cm.updateInfoQuest(15458, "lastdate=20/05/24");
                                                cm.updateInfoQuest(15458, "check=0;lastdate=20/05/24");
                                                cm.updateInfoQuest(15459, "gold=0");
                                                cm.updateInfoQuest(15459, "gold=0;tpoint=0");
                                                cm.updateInfoQuest(61389, "Wedding=0");
                                                cm.updateInfoQuest(18709, "dailyA=0;dailyB=0;date=20/05/24");
                                                cm.updateInfoQuest(14285, "");
                                                cm.updateInfoQuest(14285, "start=0");
                                                cm.updateInfoQuest(14285, "start=0;start2=0");
                                                cm.updateInfoQuest(15373, "resetData=1");
                                                cm.updateInfoQuest(15157, "guide=0");
                                                cm.updateInfoQuest(15157, "guide=0;gDate=20/05/24");
                                                cm.forceStartQuest(52387, "4");
                                                cm.forceStartQuest(52388, "0");
                                                cm.forceStartQuest(52389, "0");
                                                cm.forceStartQuest(52390, "1");
                                                cm.forceStartQuest(52347, "0");
                                                cm.forceStartQuest(52394, "24");
                                                cm.updateInfoQuest(14470, "state=0");
                                                cm.updateInfoQuest(26551, "check=1");
                                                cm.updateInfoQuest(13887, "MPAttend=0");
                                                cm.updateInfoQuest(13887, "lastGame=20/05/24;MPAttend=0");
                                                cm.updateInfoQuest(13261, "born=190325");
                                                cm.updateInfoQuest(13271, "sn2=0");
                                                cm.updateInfoQuest(13251, "count=0");
                                                cm.forceStartQuest(5402, "0");
                                                cm.forceStartQuest(5403, "24");
                                                cm.updateInfoQuest(18189, "eTime=12/12/31/00/00");
                                                cm.updateInfoQuest(18578, "miss=0;rewardDay=00/01/01;fixedDay=20/05/24/00/00");
                                                cm.updateInfoQuest(26415, "val=0");
                                                cm.updateInfoQuest(26416, "val=0");
                                                cm.updateInfoQuest(26417, "val=0");
                                                cm.updateInfoQuest(3155, "reset=1");
                                                cm.forceStartQuest(9571, "0");
                                                cm.forceStartQuest(20760, "0");
                                                cm.forceStartQuest(31190, "0");
                                                cm.forceStartQuest(42102, "0");
                                                cm.updateInfoQuest(42102, "date=00/00/00/00/00");
                                                cm.updateInfoQuest(7264, "dojangRank=0");
                                                cm.updateInfoQuest(7264, "dojangRankJob=0;dojangRank=0");
                                                cm.forceStartQuest(7621, "");
                                                cm.gainItem(2450130, 1);
                                                cm.gainItem(2450130, 1);
                                                cm.gainItem(2450130, 1);
                                                cm.gainItem(2450130, 1);
                                                cm.gainItem(2450130, 1);
                                                cm.gainItem(2450130, 1);
                                                cm.gainItem(2450130, 1);
                                                cm.useItem(2450130, false);
                                                cm.teachSkill(155001104, 1, 0);
                                                cm.teachSkill(155000006, 1, 0);
                                                cm.dispose()
                                            }
                                        }
                                    }
                                }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34901.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};