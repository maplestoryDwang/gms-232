var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return
    }(mode == 1) ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status == i++) {
            cm.askMenu_Bottom("\r\nYO，我是骑士甘迪，\r\n为了守护新复古王国~负责帮助勇士开展修行。\r\n关于#b勇士修行#k，你有什么想问的吗？\r\n#L1#百人勇士修行介绍#k#l\r\n#L2#百人勇士修行方法#k#l\r\n#L3##r没什么想问的了#l", 132, 9062175, 3)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom("\r\n#b#e<新复古椰子比赛>#n#k\r\n\r\n#e#r[进行时间]#k#n\r\n - 2020年7月15日（周四）~ 2020年8月4日（周二）\r\n#k\r\n#e#r[参加方法]#k#n\r\n - 上午10点~下午11点45分期间，每小时15分、45分时，\r\n    点击飞到头顶上方的邀请函参加\r\n#k", 132, 9062175, false, true, 3)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#b#e<新复古椰子比赛奖励>#n#k\r\n\r\n - #r第1名#k：#b9,000#k点新复古能量\r\n - #r第2 ～ 5名#k：#b7,000#k点新复古能量\r\n - #r第6 ～ 10名#k：#b5,000#k点新复古能量\r\n - #r第11 ～ 20名#k：#b4,000#k点新复古能量\r\n - #r第21 ～ 30名#k：#b3,000#k点新复古能量\r\n - #r排名外#k：#b1,600#k点新复古能量#k\r\n\r\n#r胜利队伍#k发放#b1.5倍#k的新复古能量！#k", 132, 9062175, true, true, 3)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("\r\n#e<新复古石头剪刀布>#n#k\r\n\r\n#e#r[进行时间]#k#n\r\n - 2020年7月15日（周四）~ 2020年8月4日（周三）\r\n#k\r\n#e#r[参加方法]#k#n\r\n - 上午10点~下午11点45分期间，每小时15分、45分时，\r\n    点击飞到头顶上方的邀请函参加\r\n#k", 132, 9062175, true, true, 3)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b#e<新复古石头剪刀布奖励>>#n#k\r\n\r\n - #r6层#k：#b4,000#k点新复古能量\r\n - #r5层#k：#b2,400#k点新复古能量\r\n - #r4层#k：#b1,600#k点新复古能量\r\n - #r3层#k：#b1,200#k点新复古能量\r\n - #r2层#k：#b1,000#k点新复古能量\r\n - #r1层#k：#b500#k点新复古能量#k", 132, 9062175, true, true, 3);
                    status = -1
                }
            }
        }
    }
}

function action分支2(mode, type, selection, i) {
    if (status <= i++) {
        cm.askMenu_Bottom("\r\n你想咨询哪种#b勇士修行方法！\r\n有什么问题就现在问YO～\r\n\r\n#L1#新复古椰子比赛修行方法#k#l\r\n#L2#新复古石头剪刀布修行方法#k#l\r\n#r#L7#返回上一页#l", 132, 9062175, 3)
    } else {
        var reactor = "action分支2_" + selectionLog[2];
        eval(reactor)(mode, type, selection, i)
    }
}

function action分支2_1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom("\r\n#b#e<新复古椰子比赛>#n#k\r\n\r\n比比看谁手速快！使用#r普通攻击#k摘#b椰子#k喽！\r\n在限制时间内获得更多椰子点数的队伍胜利！\r\n没有平局YO！同分情况下，首先获得该分数的队伍胜利YO！", 132, 9062175, false, true, 3)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("\r\n#b#e<新复古椰子比赛>#n#k\r\n\r\n记得当心可爱的青螃蟹和红螃蟹。\r\n它们睡觉的时候比较安全，\r\n你要趁这时候多摘些椰子YO。", 132, 9062175, true, true, 3)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("\r\n#b#e<新复古椰子比赛>#n#k\r\n\r\n比赛结束后，将根据记入排名的#b名次#k发放#b新复古能量#k。\r\n#r胜利队伍#k还有特别福利！将获得#b1.5倍的新复古能量#kYO。\r\n来和骑士甘迪一起，参加为守护新复古王国而开展的#b勇士修行#k吧！", 132, 9062175, true, true, 3);
                status = 0
            }
        }
    }
}

function action分支2_2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom("#b#e<新复古石头剪刀布>#n#k\r\n\r\n#b新复古石头剪刀布#k是与甘迪进行石头剪刀布对决，按照胜败结果向甘迪所在的上方前进的游戏YO！", 132, 9062175, false, true, 3)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#b#e<新复古石头剪刀布>#n#k\r\n\r\n#b9局#k定输赢的石头剪刀布！\r\n\r\n#b#e三次见到，三次石头，三次布！\r\n甘迪每种各出三次YO！#n#k", 132, 9062175, true, true, 3)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b#e<新复古石头剪刀布>#n#k\r\n\r\n进入倒计时后，#b点击#k剪刀/石头/布中的一个就可以YO！\r\n\r\n#b如果能打败甘迪，就可以上一层#k！\r\n#b如果输给甘迪，就要下一层#k！\r\n与甘迪不分上下，就原地不动！#k", 132, 9062175, true, true, 3)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b#e<新复古石头剪刀布>#n#k\r\n\r\n游戏总共#b3个回合！#k每个回合结束时，会根据\r\n你所在的#b层数#k发放#b新复古能量#k。\r\n\r\n大家一起来玩有趣的#b石头剪刀布#k吧！", 132, 9062175, true, true, 3);
                    status = 0
                }
            }
        }
    }
}

function action分支2_7(d, c, b, a) {
    if (status <= a++) {
        status = 0;
        cm.askMenu_Bottom("\r\nYO，我是骑士甘迪，\r\n为了守护新复古王国~负责帮助勇士开展修行。\r\n关于#b勇士修行#k，你有什么想问的吗？\r\n#L1#百人勇士修行介绍#k#l\r\n#L2#百人勇士修行方法#k#l\r\n#L3##r没什么想问的了#l", 132, 9062175, 3)
    }
}

function action分支3(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom("\r\n来和骑士甘迪一起，参加为守护新复古王国而开展的#b勇士修行#k吧！", 36, 9062175, false, true, 3)
    } else {
        if (status === a++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100273.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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