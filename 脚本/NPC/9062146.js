var status = -1;
var selectionLog = [];
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f === 0) {
    status--;
  } else {
    status++;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.askMenu("你想参加#b#e冒险岛强手棋#n#k吗？\r\n\r\n#L0#我想参加冒险岛强手棋。#l\r\n#L1#我想听听冒险岛强手棋的说明。#l\r\n", 9062156);
  } else if (selectionLog[1] == 0) {
    cm.sendOk("#b#e冒险岛强手棋#k#n正在抢修中，请关注我们的最新动态，YO！", 9062156);
    cm.dispose();
  } else {
    actionIntro(f, W, U, V);
  }
}
function actionIntro(f, W, U, V) {
  if (status == V++) {
    cm.sendNext("进入#b#e冒险岛强手棋#k#n时，可以消耗自己拥有的#r红心(?)#k，\r\n驯养中立怪物或引诱对方的怪物。此外，还可以对自己拥有的怪物进行强化。\r\n\r\n#r红心#k在游戏中起到#b和货币类似的作用#k。\r\n#r红心为0时，游戏结束#k！", 9062156);
  } else {
    if (status === V++) {
      cm.sendNextPrev("#e驯养中立怪物：#n消耗与怪物攻击力相等的#r红心#k\r\n#e强化自己的怪物：#n消耗各阶段强化费用对应的#r红心#k\r\n#e诱惑怪物：#n向主人支付怪物攻击力2倍的#r红心#k\r\n\r\n（参考：自己的怪物最高可以强化到3阶段，\r\n强化到3阶段的怪物无法诱惑）", 9062156);
    } else {
      if (status === V++) {
        cm.sendNextPrev("游戏顺序由棋盘上显示的枫叶点数决定。枫叶点数由当前#r自己拥有的#r红心#k + #r驯养宠物点数#k决定。", 9062156);
      } else if (status === V++) {
        cm.sendOk("游戏结束后，会根据排名发放不同的奖励。\r\n\r\n但如果中途放弃游戏或者在入场后没有努力参加游戏，就无法获得奖励。", 9062156);
      } else {
        cm.dispose();
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;