var status = -1;
var selectionLog = [];
var open = true;
var PQname = ["副本_武陵道场"];
var PQLog = ["武陵道场"];
var startmap = 925020001;
var minLevel = [105];
var maxLevel = [999];
var maxenter = [1000];
var interval = [1000];
var status = -1;
var minPlayers = 1;
var maxPlayers = 6;
var moblevel = 255;
var 次数 = 3;
var chs = 0;

function start() {
    action(1, 0, 0)
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status === i++) {
            cm.askMenu("我们师傅是武林最强之人，你居然想挑战他？以后可不要后悔。\r\n#b#L0# 我要挑战武陵道场。#l\r\n#L1# 武陵道场是什么？#l\r\n#L2# 我想知道可以在武陵道场中获得的奖励。#l\r\n#L3# 我想知道今天剩余的挑战次数。#l\r\n#L4# 我想进入武陵身心修炼馆。#l", 0, 2091011)
        } else {
            var reactor = "action" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action0(f, e, d, c) {
    if (status <= c++) {
        cm.askAcceptDecline("进入武陵道场后，现在装备的\r\n#fs16##b#e所有增益效果将消除#k#fs12##n。\r\n\r\n真的确认挑战吗？", 0, 2091011)
    } else {
        if (status === c++) {
			if (cm.getPlayerLog("武陵道场") >= 次数) {
				cm.sendOk("#k挑战次数不足！！");
				cm.dispose();
				return;
			}
            var b = cm.getEventManager(PQname[chs]);
            if (b == null || open == false) {
                cm.sendOk("配置文件不存在,请联系管理员。")
            } else {
                if (cm.getPlayer().getLevel() < minLevel[chs]) {
                    cm.sendOk("你的等级也太低了，先提升到 " + minLevel[chs] + " 级再来挑战吧。")
                } else {
                    var g = b.getNumberProperty("state");
                    if (g == 0) {
                        b.startInstance(cm.getPlayer());
                        b.setProperty("PQLog", PQLog[chs]);
	              cm.addPlayerLog("武陵道场");
                        cm.forceStartQuest(7279, "1");
                        var a = new Date();
                        cm.updateInfoQuest(3847, "Time=0;enter=" + (a.getYear() - 100) + "/" + (a.getMonth() + 1) + "/" + a.getDate() + "/" + a.getHours() + "/" + a.getMinutes() + ";Floor=0;Result=start");
                        cm.updateInfoQuest(65197, "Hack10=0;Hack20=0;Hack30=0;Hack40=0;Hack50=0;Hack60=0")
                    } else {
                        cm.sendOk("好像已经有队伍在进行了，换其他频道尝试吧。")
                    }
                }
            }
            cm.dispose()
        }
    }
}

function action1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("我们师傅是武陵最强之人，\r\n师傅所建造的就是#b武陵道场#k。", 0, 2091011, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("武陵道场是拥有包含师傅那一层#b#e共计80层#n#k的建筑。\r\n越是有能力之人，就可以进入越高楼层。\r\n当然凭你的实力要进入最后一层肯定十分困难。", 0, 2091011, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("除师傅所在的那一层外，每一层都有#r冒险岛世界的怪物#k看守。详细的情况我也不清楚，\r\n只有师傅才知道。", 0, 2091011, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("进入后，从入门层开始，你所有的#r所有增益效果将全部消失#k，凭自己的力量战斗才公平，不是吗？", 0, 2091011, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("在入门层停留多久是你的自由，\r\n#r但计时器只会停止30秒#k，所以为了更好地纪录，你最好还是快点准备进入第1层为好。", 0, 2091011, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#e1~9层#n，#e11~19层#n中会出现#b一个首领怪物#k。\r\n要进入下一层只需要消灭一个怪物即可。", 0, 2091011, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#e21~29层#n中会出现#b一个首领怪物#k和#b5个手下#k。\r\n消灭所有的首领怪物和手下后即可进入下一层。", 0, 2091011, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#e31~39层#n中需要面对 #b两个以上的首领怪物#k。\r\n你还不会现在就开始害怕了吧？呵呵呵……", 0, 2091011, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#e41层#n开始会再次只出现#b一个首领怪物#k，不用担心。\r\n虽然不知道这到底是不是更简单了，呵呵呵呵……", 0, 2091011, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("除了师傅所在的第80层，到70层为止，以\r\n#e10层为一个单位#n将会出现#b冒险岛世界的命名怪物#k。\r\n这里每隔#r15秒#k可以使用一次药水。", 0, 2091011, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#e41层以后#n每隔#r15秒#k可以使用一次药水。为什么？这当然要你进去之后才知道。呵呵呵……", 0, 2091011, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("每一层都有什么人？这种事情你就自己上去看吧。\r\n你越是强大，知道的自然越多，不是吗？呵呵呵……", 0, 2091011, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("嗯，要我说一点的话…… \r\n#e74层 ～ 79层#n由#b师傅的弟子们#k看守。\r\n如果不自量力地冲上去，可是会吃苦的。", 0, 2091011, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("对了，武陵道场内部因为师傅的结界只能使用\r\n冒险岛世界中力量的#b10分之1#k。\r\n进入后不要慌乱。", 0, 2091011, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("听懂了就赶快进去吧，\r\n你难道不觉得手痒痒吗？", 0, 2091011, true, true)
                                                            } else {
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
            }
        }
    }
}

function action2(d, c, b, a) {
    if (status <= a++) {
        cm.askMenu("武陵道场中可获得的奖励有两种。\r\n成为各领域的 #r上位圈选手#k获得奖励，或者使用\r\n坚持参与武陵道场获得的#r积分#k进行物物交换。\r\n#b\r\n#L0#询问选手奖励。#l\r\n#L1#询问参与奖励（积分）。#l", 0, 2091011)
    } else {
        if (status === a++) {
            if (selectionLog[2] == 0) {
                cm.sendNormalTalk("师傅每周都会赐予#b上位圈选手#k奖励品。\r\n强大才是我们武陵道场的最大价值，所以当然要为此颁发奖励，不是吗？", 0, 2091011, false, true)
            } else {
                cm.sendNormalTalk("我们将根据你在武陵道场中的参与度而发放积分，\r\n将按照以下两种标准发放积分。\r\n\r\n- 发放每次挑战时#b突破的层数#k为基准的积分\r\n- 根据自身所属的等级范围#b上一周整体排名百分比#k发放积分\r\n\r\n", 0, 2091011, false, true)
            }
        } else {
            if (status === a++) {
                if (selectionLog[2] == 0) {
                    cm.sendNormalTalk("为了更公平的竞争，按照等级，排名范围有所不同。\r\n好好看一下你属于哪一个范围吧。\r\n\r\n#e- #b入门#k：105~200级\r\n- #r精通#k：201级以上#n", 0, 2091011, true, true)
                } else {
                    cm.sendNormalTalk("以层数为基准的积分指的是，每1层基本发放10点积分，每10层额外发放100点积分。", 0, 2091011, true, true)
                }
            } else {
                if (status === a++) {
                    if (selectionLog[2] == 0) {
                        cm.sendNormalTalk("当然，排名范围不同，奖励也不同。\r\n#b所有奖励将会根据你目前所属的排名范围发放#k。\r\n你该不会因为是上位圈选手就耍赖要领取其它范围的奖励吧？", 0, 2091011, true, true)
                    } else {
                        cm.sendNormalTalk("根据排名百分比发放的积分指的是，所属范围内的选手越强，或者获得的结果越好，发放的积分也就越多。", 0, 2091011, true, true)
                    }
                } else {
                    if (status === a++) {
                        if (selectionLog[2] == 0) {
                            cm.sendNormalTalk("关于奖励品类的详细内容可以通过\r\n#r武陵道场名次表帮助按钮#k确认。", 0, 2091011, true, true)
                        } else {
                            cm.sendNormalTalk("根据排名百分比发放的积分，将根据在各个等级范围中，进入\r\n#b一定百分比之内#k，才可以获得积分。\r\n所以要想获得积分就必须比别人更加强大，呵呵呵……\r\n\r\n#e- #b入门#k：前50%\r\n- #r灵通#k：前70%#n", 0, 2091011, true, true)
                        }
                    } else {
                        if (status === a++) {
                            if (selectionLog[2] == 0) {
                                cm.dispose()
                            } else {
                                cm.sendNormalTalk("啊，另外不可以持有超过最多#b50万积分#k，一定要习惯经常一点点使用。", 0, 2091011, true, true)
                            }
                        } else {
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function action3(e, c, b, a) {
    var f = 3;
    var d = f - cm.getPlayerLog("武陵道场");
    cm.sendNormalTalk("今天可在武陵道场参与" + d + "次，这种事你自己记着点。", 0, 2091011, false, true);
    cm.dispose()
}

function action4(e, h, k, d) {
    if (status <= d++) {
        cm.askYesNo("武陵决定向普通人开放身心修炼馆，\r\n只不过，只有强大或诚实的人才能够进入。去把拉奥大叔给的符咒拿来，我会根据符咒上所记载的时间放你进去的。\r\n\r\n你要入场吗？\r\n#b(身心修炼馆入场时，会根据角色的等级自动获得经验值。)", 0, 2091011)
    } else {
        if (status === d++) {
            if (e == 1) {
                var g = [4001851, 4001852, 4001853, 4001854, 4001862, 4001881, 4001882];
                var b = [30, 60, 3 * 60, 6 * 60, 12 * 60, 9 * 60, 24 * 60];
                var f = cm.getNumberFromQuestInfo(18766, "Time");
                for (var c = 0; c < g.length; c++) {
                    if (cm.haveItem(g[c])) {
                        f += b[c] * 60 * cm.getItemQuantity(g[c]);
                        cm.gainItem(g[c], -cm.getItemQuantity(g[c]))
                    }
                }
                if (f <= 0) {
                    cm.sendNormalTalk("嗯？你没有符咒啊，那样我没法让你进去。", 0, 2091011, false, true)
                } else {
                    cm.setNumberForQuestInfo(18766, "enterTime", new Date().getTime());
                    var a = cm.getEventManager("场景_武陵道场身心修炼馆");
                    a.startInstance(cm.getPlayer())
                }
            } else {
                cm.sendNormalTalk("嗯？我让你自己看着办吧。", 0, 2091011, false, true)
            }
            cm.dispose()
        }
    }
};