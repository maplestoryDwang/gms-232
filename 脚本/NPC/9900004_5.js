var status = -1;
var typed = 0;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    if (status >= 0) {
      cm.dispose();
      return;
    }
    status--;
  }
  if (status == 0) {
    var V = "亲爱的#b#e#h ##n#k，欢迎来到点卷中介所，需要什么帮助吗？\r\n\r\n";
    V += "\t当前点卷余额：#r" + cm.getPlayer().getCSPoints(1) + "#k点\r\n";
    V += "\t当前#t4031997#数量：#r" + cm.getItemQuantity(4031997) + "#k个\r\n\r\n";
    V += "#b#L3#了解点卷中介说明#l\r\n";
    V += "#L1#兑换点卷#l\r\n";
    V += "#L2#兑换蘑菇金币#l\r\n";
    cm.askMenu(V);
  } else {
    if (status == 1) {
      typed = U;
      if (U == 3) {
        status = -1;
        cm.askMenu("1个#b#t4031997##k可以兑换#r800点卷#k，#r1000点卷#k可以兑换1个#b#t4031997##k。#b#t4031997##k可用于玩家之间的交易与贩售。");
      } else {
        if (U == 1) {
          var w = cm.getItemQuantity(4031997);
          cm.askNumber("#d#e<中介币兑换点卷>#n#k\r\n当前最多可以兑换#r" + w * 800 + "#k点卷，最多输入#r" + w + "#k。\r\n请输入兑换的#b#t" + 4031997 + "##k数量:\r\n兑换比例为 1 : 800\r\n", 1, 1, w);
        } else {
          if (U == 2) {
            var w = Math.floor(cm.getPlayer().getCSPoints(1) / 1000);
            if (w > 300) {
              w = 300;
            }
            cm.askNumber("#d#e<点卷兑换中介币>#n#k\r\n本次最多可以兑换#r" + w + "#k个#b#t" + 4031997 + "##k\r\n请输入兑换的#b#t" + 4031997 + "##k数量:\r\n兑换比例为 1000 : 1\r\n", 1, 1, w);
          }
        }
      }
    } else {
      if (status == 2) {
        var N = Math.floor(U);
        if (N <= 0) {
          cm.sendOk('Error');
          cm.dispose();
          return;
        }
        if (typed == 1) {
          if (cm.haveItem(4031997, N)) {
            status = -1;
            var u = 800 * N;
            cm.gainItem(4031997, -N);
            cm.getPlayer().modifyCSPoints(1, u);
            cm.askMenu("成功兑换了#r" + u + '#k点卷');
          } else {
            cm.sendOk("你好像没有那么多#b#t4031997##k哦！");
            cm.dispose();
          }
        } else {
          if (typed == 2) {
            if (cm.getSpace(4) < 1) {
              status = -1;
              cm.askMenu("您的背包空间不足，请整理背包中其他栏的空间。");
            } else {
              var Q = N * 1000;
              if (cm.getPlayer().getCSPoints(1) >= Q) {
                status = -1;
                cm.gainItem(4031997, N);
                cm.getPlayer().modifyCSPoints(1, -Q);
                cm.askMenu("成功兑换了#r" + N + "#k个中介币");
              } else {
                cm.sendOk("你好像没有那么多点卷哦！");
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}