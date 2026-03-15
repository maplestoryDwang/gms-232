var status = 0;
var result = Array();
var resultAll = Array();
var aaa = Array();
var em;
var em;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1) {
    cm.dispose();
  } else {
    if (status >= 0 && f == 0) {
      cm.dispose();
      return;
    }
    if (f == 1) {
      status++;
    } else {
      status--;
    }
    if (status == 0) {
      Q = cm.getEventManager("阿里安特竞技场");
      if (Q.getProperty("FriendlyTips") == "done" || cm.getPlayer().isGM()) {
        c = "#e<阿里安特竞技场>#n\r\n#d现在我来公布竞技场结果：\r\n\r\n#b";
        for (var V = 0; V < parseInt(Q.getProperty("PlayerCount")); V++) {
          result.push(Q.getPlayers().get(V).getName());
          result.push(Q.getKillCount(Q.getPlayers().get(V)));
          resultAll.push(result);
          result = Array();
        }
        for (var V = 0; V < resultAll.length; V++) {
          for (var w = 0; w < resultAll.length; w++) {
            var N;
            if (resultAll[V][1] > resultAll[w][1]) {
              N = resultAll[w];
              resultAll[w] = resultAll[V];
              resultAll[V] = N;
            }
          }
        }
        var u;
        for (var V = 0; V < resultAll.length; V++) {
          u = V + 1;
          c += '第' + u + '名：' + resultAll[V][0] + "  消灭怪物总数：" + resultAll[V][1] + "\r\n";
          aaa.push(resultAll[V][0]);
        }
        c += "#b#L99# 知道了排名，领取积分离开地图。";
        cm.askYesNo(c, 9);
      } else {
        if (cm.getMapId() == 980010100) {
          cm.openNpc(2101017, 1);
        } else if (cm.getMapId() == 980010101) {
          status = 1;
          cm.askMenu("阿里安特竞技场开始了，你想做什么呢？#b\r\n#L0# 我想离开这里放弃奖励!");
        }
      }
    } else {
      if (status == 1) {
        var Q = cm.getEventManager("阿里安特竞技场");
        if (cm.MissionStatus(cm.getPlayer().getId(), 105, 0, 4) == false) {
          cm.MissionMake(cm.getPlayer().getId(), 105, 0, 0, 0, 999999);
        }
        var m = Q.getKillCount(cm.getPlayer());
        cm.warp(910000000, 0);
        Q.setProperty("FriendlyTips", '0');
        cm.MissionAddMinNum(cm.getPlayer().getId(), 105, m);
        var c = "获得了竞技场\u3000" + m + "。\r\n你可以用征服币在小秘书(拍卖处)#b[竞技积分]#k处兑换礼品.";
        if (u != 1) {
          var u = 0;
          for (var V = 0; V < 1; V++) {
            u = V + 1;
            if (aaa[V] == cm.getPlayer().getName()) {
              c += "\r\n由于你排在第" + u + "名，额外获得了100竞技场积分。";
              cm.MissionAddMinNum(cm.getPlayer().getId(), 105, 100);
            }
          }
        }
        cm.sendOk(c);
        cm.worldMessage("[阿里安特竞技场] 截至现在" + cm.getPlayer().getName() + "  玩家共获得了" + cm.MissionGetMinNum(cm.getPlayer().getId(), 105, 999999) + "竞技场积分。");
        cm.dispose();
      } else if (status == 2) {
        if (U == 0) {
          cm.warp(910000000, 0);
          cm.sendOk("好吧！再见");
          cm.dispose();
        }
      }
    }
  }
}