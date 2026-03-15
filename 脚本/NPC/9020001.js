var 第1阶段_答案 = [60, 100, 30, 70, 23, 50];
var 第1阶段_题库 = ["第一个问题：3转最低等级是多少？#b\r\n（打倒怪物，获取相应数量的奖券。）", "第一个问题：4转最低等级是多少？#b\r\n（打倒怪物，获取相应数量的奖券。）", "第一个问题：新手技能<团队治疗>持续多少秒？#b\r\n（打倒怪物，获取相应数量的奖券。）", "第一个问题：大巨变前冒险岛3转最低等级是多少？#b\r\n（打倒怪物，获取相应数量的奖券。）", "第一个问题：冒险岛于2004年7月__日在中国大陆正式上线？#b\r\n（打倒怪物，获取相应数量的奖券。）", "第一个问题：当前副本最低入场等级是多少？#b\r\n（打倒怪物，获取相应数量的奖券。）"];
var 第2阶段_坐标系 = [[0, 0, 1, 1], [0, 1, 1, 0], [1, 1, 0, 0], [1, 0, 1, 0], [1, 0, 0, 1], [0, 1, 0, 1]];
var 第3阶段_坐标系 = [[1, 1, 0, 0, 0], [1, 0, 1, 0, 0], [1, 0, 0, 1, 0], [1, 0, 0, 0, 1], [0, 1, 1, 0, 0], [0, 1, 0, 1, 0], [0, 1, 0, 0, 1], [0, 0, 1, 0, 1], [0, 0, 1, 1, 0], [0, 0, 0, 1, 1]];
var 奖励_卷轴 = [2040502, 2040505, 2040802, 2040002, 2040402, 2040602];
var 奖励_消耗品 = [2000001, 2000002, 2000003, 2000006, 2000004, 2022000, 2022003];
var 奖励_消耗品数量 = [80, 80, 80, 50, 5, 15, 15];
var 奖励_装备 = [1032004, 1032005, 1032009, 1032006, 1032007, 1032010, 1032002, 1002026, 1002089, 1002090];
var 奖励_其它 = [4010000, 4010001, 4010002, 4010003, 4010004, 4010005, 4010006, 4020000, 4020001, 4020002, 4020003, 4020004, 4020005, 4020006, 4020007, 4020008, 4003000];
var 奖励_其它数量 = [15, 15, 15, 15, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 3, 30];
var 地图编号;
var preamble;
var party;
var status = -1;
var selectionLog = [];
function start() {
  地图编号 = (cm.getMapId() - 910340000) / 100;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (cm.getzhizunvip() != 2) {
    cm.dispose();
    cm.playerMessage(-1, "该菜单是至尊版专享。");
    return;
  }
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  if (cm.getMapId() == 910340100) {
    action阶段1(f, W, U);
  } else {
    if (cm.getMapId() == 910340200 || cm.getMapId() == 910340300) {
      action阶段2阶段3(f, W, U);
    } else {
      if (cm.getMapId() == 910340400) {
        action阶段4(f, W, U);
      } else if (cm.getMapId() == 910340500) {
        action阶段5(f, W, U);
      } else {
        cm.dispose();
      }
    }
  }
}
function action阶段1(f, W, U) {
  if (cm.isLeader()) {
    if (status == 0) {
      party = em.getPlayers();
      preamble = em.getProperty("leader1stpreamble");
      if (preamble == null) {
        cm.sendNext("你好，欢迎来到第一个阶段，在这里你可能会看到很多凶狠的鳄鱼，跟我对话，我会给你们每一个人出一道题目，你们再打倒凶狠的鳄鱼获取相应数目的证书卡交给我，就行了。之后我会给你们一张通行证，你们把通行证全部交给组队长，组队长再和我讲话，就可以顺利通关了，那么祝你一切顺利！");
        em.setProperty("leader1stpreamble", 'done');
        cm.dispose();
      } else {
        var V = em.getProperty(地图编号.toString() + "stageclear");
        if (V != null) {
          cm.sendOk("现在赶紧去下一关吧，不快点的话小心门关闭了。");
          cm.dispose();
        } else {
          var w = party.size();
          if (!cm.haveItem(4001008, w)) {
            cm.sendNext("你有#b" + w + "#k个队员，需要#e#r" + w + "#k#n个#b#v4001008##z4001008##k才可以过关。");
            cm.dispose();
          } else {
            cm.getTopMsgFont("阶段完成！", 3, 20, 20, 0);
            clear(1, em, cm);
            cm.gainItem(4001008, -w);
            cm.dispose();
          }
        }
      }
    }
  } else {
    pstring = "member1stpreamble" + cm.getPlayer().getId().toString();
    preamble = em.getProperty(pstring);
    if (status == 0 && preamble == null) {
      var N = "member1st" + cm.getPlayer().getId().toString();
      var u = em.getProperty(N);
      if (u == null) {
        var Q = Math.floor(Math.random() * 第1阶段_题库.length);
        em.setProperty(N, Q.toString());
      }
      if (cm.getPlayer().isGM()) {
        cm.playerMessage(6, "[GM debug]：preamble=" + preamble + '');
      }
      cm.askYesNo("欢迎来到第一个考验！\r\n狩猎这里的怪物们，收集掉落的#b#v4001007##z4001007##k并符合正确数量，我会为你兑换成#b#v4001008##z4001008##k，把它交给#b所属组队长#k。\r\n什么是正确数量？接下来我会出题来考验你们，为了判断正确答案请#b仔细审阅题目#k。\r\n#r题目只能看一次，准备好了吗？#k");
    } else {
      if (status == 0) {
        var V = em.getProperty(地图编号.toString() + "stageclear");
        if (V != null) {
          cm.sendNext("传送口已经打开,快点进入下一个阶段吧!");
          cm.dispose();
        } else {
          var N = "member1st" + cm.getPlayer().getId().toString();
          var m = 第1阶段_答案[parseInt(em.getProperty(N))];
          var c = cm.haveItem(4001007, m + 1);
          var B = false;
          if (!c) {
            c = cm.haveItem(4001007, m);
            if (c) {
              cm.getTopMsgFont("回答正确！", 3, 20, 20, 0);
              cm.sendNext("回答正确！把通行证交给队长吧！");
              cm.gainItem(4001007, -m);
              cm.gainItem(4001008, 1);
              B = true;
            }
          }
          if (!B) {
            cm.sendNext("你身上的#b#v4001007##z4001007##k数量与答案不符，请在想想吧！");
          }
          cm.dispose();
        }
      } else {
        if (status == 1) {
          if (preamble == null) {
            var N = 'member1st' + cm.getPlayer().getId().toString();
            var u = parseInt(em.getProperty(N));
            cm.askAcceptDecline(第1阶段_题库[u]);
          } else {
            cm.dispose();
          }
        } else if (status == 2) {
          em.setProperty(pstring, 'done');
          cm.dispose();
        } else {
          em.setProperty(pstring, "done");
          cm.dispose();
        }
      }
    }
  }
}
function action阶段2阶段3(f, W, U) {
  cm.removeAll(4001007);
  cm.removeAll(4001008);
  if (地图编号 == 2) {
    var V = '2';
    var w = "ropes";
    var N = 'hang';
    var u = "hang on the ropes too low";
    var Q = 第2阶段_坐标系;
    var m = [0, 0, 0, 0];
  } else {
    if (地图编号 == 3) {
      var V = '3';
      var w = "platforms";
      var N = 'stand';
      var u = "stand too close to the edges";
      var Q = 第3阶段_坐标系;
      var m = [0, 0, 0, 0, 0];
    }
  }
  if (cm.isLeader()) {
    if (status == 0) {
      party = em.getPlayers();
      preamble = em.getProperty("leader" + V + 'preamble');
      if (preamble == null) {
        cm.sendNext("欢迎来到第 " + V + " 阶段。 第" + V + "阶段需要2位成员找出正确位置才能过关，抓紧时间吧。");
        em.setProperty("leader" + V + "preamble", 'done');
        var c = Math.floor(Math.random() * Q.length);
        em.setProperty("stage" + V + 'combo', c.toString());
        cm.dispose();
      } else {
        var B = em.getProperty(地图编号.toString() + 'stageclear');
        if (B != null) {
          var F = 地图编号.toString() + "stageclear";
          em.setProperty(F, "true");
          cm.getTopMsgFont('第' + V + "阶段通过！", 3, 20, 20, 0);
        } else {
          var e = 0;
          for (i = 0; i < m.length; i++) {
            var A = cm.getMap().getNumPlayersItemsInArea(i);
            if (A != 0) {
              m[i] = m[i] + 1;
              e = e + 1;
            }
          }
          if (e == 2) {
            var k = Q[parseInt(em.getProperty('stage' + V + 'combo'))];
            var Y = true;
            for (i = 0; i < m.length; i++) {
              if (k[i] != m[i]) {
                Y = false;
              }
            }
            if (Y) {
              clear(地图编号, em, cm);
              var T = Math.pow(2, 地图编号) * 50;
              cm.givePartyExp(T, party);
              cm.dispose();
            } else {
              cm.fieldEffect_ScreenMsg(true, "quest/party/wrong_kor");
              cm.fieldEffect_PlayFieldSound(true, "Party1/Failed");
              cm.dispose();
            }
          } else {
            cm.getTopMsgFont("不要着急，找出正确答案吧。", 3, 20, 4, 0, 0);
            cm.dispose();
          }
        }
      }
    } else {
      var B = em.getProperty(地图编号.toString() + 'stageclear');
      if (B != null) {
        var n = em.getMapInstance(910340100 + 地图编号 * 100);
        var h = n.getPortal('st00');
        cm.warp(n, h);
      }
      cm.dispose();
    }
  } else {
    if (status == 0) {
      var B = em.getProperty(地图编号.toString() + "stageclear");
      if (B != null) {
        cm.getTopMsgFont("传送门已经打开了，快去下个阶段吧！", 3, 20, 20, 0);
      } else {
        cm.getTopMsgFont("请让队长与我对话。", 3, 20, 4, 0, 0);
        cm.dispose();
      }
    } else {
      var B = em.getProperty(地图编号.toString() + 'stageclear');
      if (B != null) {
        var n = em.getMapInstance(910340100 + 地图编号 * 100);
        var h = n.getPortal("st00");
        cm.warp(n, h);
      }
      cm.dispose();
    }
  }
}
function action阶段4(f, W, U) {
  var V = em.getProperty("4stageclear");
  if (V == null) {
    if (cm.isLeader()) {
      var w = cm.getMap().getNumMonsters() <= 0;
      if (w) {
        cm.getTopMsgFont("恭喜通关第4阶段！", 3, 20, 20, 0);
        party = em.getPlayers();
        clear(4, em, cm);
        cm.removeAll(4001008);
        cm.givePartyExp(700, party);
        cm.dispose();
      } else {
        cm.getTopMsgFont('地图剩余怪物：' + cm.getMap().getNumMonsters() + '', 3, 20, 4, 0, 0);
      }
      cm.dispose();
    } else {
      cm.getTopMsgFont("地图剩余怪物：" + cm.getMap().getNumMonsters() + '', 3, 20, 4, 0, 0);
      cm.dispose();
    }
  } else {
    cm.getTopMsgFont("传送口已开，快点前进吧！", 3, 20, 20, 0);
    cm.dispose();
  }
}
function action阶段5(f, W, U) {
  var V = em.getProperty("5stageclear");
  if (V == null) {
    if (cm.isLeader()) {
      var w = cm.getMap().getNumMonsters() <= 0;
      if (w) {
        cm.getTopMsgFont("完美通关！", 3, 20, 20, 0);
        party = em.getPlayers();
        cm.removeAll(4001008);
        clear(5, em, cm);
        cm.dispose();
      } else {
        cm.getTopMsgFont("这是你们最后的考验了！", 3, 20, 4, 0, 0);
      }
      cm.dispose();
    } else {
      cm.getTopMsgFont("这是你们最后的考验了！", 3, 20, 4, 0, 0);
      cm.dispose();
    }
  } else {
    if (status == 0) {
      if (cm.isLeader()) {
        cm.askAcceptDecline("我为你们的能力感到骄傲！准备好接受奖励了吗？");
      } else {
        cm.getTopMsgFont("让队长来！", 3, 20, 4, 0, 0);
      }
    }
    if (status == 1) {
      启动通关奖励(em);
      cm.dispose();
    }
  }
}
function clear(f, W, U) {
  W.setProperty(f.toString() + "stageclear", 'true');
  U.fieldEffect_ScreenMsg(true, "quest/party/clear");
  U.fieldEffect_PlayFieldSound(true, "Party1/Clear");
  U.fieldEffect_SetObjectState(true, "gate");
  U.givePartyExp(2100, W.getPlayers());
  var V = W.getMapFactory();
  map = V.getMap(910340100 + f * 100);
  var w = W.getMapFactoryMap(910340100 + f * 100);
  var N = w.getPortal("next00");
  if (N != null) {
    N.setScriptName('kpq' + (f + 1).toString());
  }
}
function 启动通关奖励(f) {
  f.getPlayers().forEach(function (W) {
    var U = Math.random();
    var V;
    var w;
    var N = false;
    if (U < 0.3) {
      V = 奖励_卷轴;
    } else {
      if (U < 0.6) {
        V = 奖励_装备;
      } else if (U < 0.9) {
        V = 奖励_消耗品;
        w = 奖励_消耗品数量;
        N = true;
      } else {
        V = 奖励_其它;
        w = 奖励_其它数量;
        N = true;
      }
    }
    var u = Math.floor(Math.random() * V.length);
    var Q = 1;
    if (N) {
      Q = w[u];
    }
    W.getAPI().gainItem(V[u], Q);
    W.getAPI().gainItem(4001531, 1);
    W.getAPI().gainExp_PQ(70, 1.5);
    W.getAPI().removeAll(4001007);
    W.getAPI().removeAll(4001008);
    W.getAPI().endPartyQuest(1201);
    var m = ["领导力", '感性', '洞察力', '意志', '手技', '魅力'];
    var c = cm.rand(0, m.length - 1);
    W.getAPI().addTrait(m[c], 30);
    W.getAPI().playerMessage(5, '获得' + m[c] + " +30");
    W.getAPI().warp(910340600, 0);
    W.getAPI().addPopupSay(9020002, 5500, "恭喜你们通过考验！奖励已经发放，与<内拉>对话离开吧！");
  });
}
function randomNum(f, W) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * f + 1, 10);
    case 2:
      return parseInt(Math.random() * (W - f + 1) + f, 10);
    default:
      return 0;
  }
}