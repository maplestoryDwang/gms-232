var status = 0;
var GP = Array(500, 10000, 8000, 6000, 4000, 2000);
var rewarditem = Array(Array(1, 5062024, 30), Array(1, 5062503, 30), Array(1, 2430683, 5), Array(2, 5062024, 20), Array(2, 5062503, 20), Array(2, 2430683, 3), Array(3, 5062024, 15), Array(3, 5062503, 15), Array(3, 2430683, 2), Array(4, 5062024, 10), Array(4, 5062503, 10), Array(4, 2430683, 1), Array(5, 5062024, 8), Array(5, 5062503, 8));
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (cm.getMapId() == 180000001) {
    cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.");
    cm.dispose();
  } else {
    if (status == 0) {
      var V = "#e           欢迎来到跑旗活动中心 \r\n";
      V += "#b此次活动排名:#k\r\n";
      for (var w = 1; w < 6; w++) {
        V += "第 " + w + " 名玩家：#r" + em.getProperty("rank" + w) + "#k\r\n\r\n";
      }
      for (var N = 1; N < 6; N++) {
        if (em.getProperty("rank" + N) == '' + cm.getName()) {
          V += "#r#L0#领取奖励#l\r\n";
          break;
        }
      }
      V += "#r#L1#查看奖励#l\r\n";
      V += "#r#L2#退出#l\r\n";
      cm.askMenu(V);
    } else {
      if (status == 1) {
        if (U == 0) {
          for (var u = 1; u < 6; u++) {
            if (em.getProperty('rank' + u) == cm.getName()) {
              for (var Q = 0; Q < rewarditem.length; Q++) {
                if (rewarditem[Q][0] == u) {
                  cm.gainItem(rewarditem[Q][1], rewarditem[Q][2]);
                }
              }
              break;
            }
          }
          em.setProperty("rank" + u, '0');
          em.setProperty("Round" + cm.getName(), '0');
          cm.warp(910000000, 0);
          cm.dispose();
        }
        if (U == 1) {
          var m = "\t\t              #r奖励中心#k\r\n";
          for (var w = 1; w < 6; w++) {
            m += '#L' + w + '#查看#r第' + w + "名#k的物品奖励\r\n\r\n";
          }
          cm.askMenu(m);
        }
        if (U == 2) {
          em.setProperty('rank' + u, '0');
          em.setProperty('Round' + cm.getName(), '0');
          cm.warp(910000000, 0);
          cm.dispose();
        }
      } else {
        if (status == 2) {
          var c = "\t\t\t\t\t\t#b奖励如下#k\r\n\r\n";
          for (var B = 0; B < rewarditem.length; B++) {
            if (rewarditem[B][0] == U) {
              c += '物品:#v' + rewarditem[B][1] + "# 数量：#r" + rewarditem[B][2] + "#k\r\n\r\n";
            }
          }
          cm.askMenu(c);
          cm.dispose();
        }
      }
    }
  }
}