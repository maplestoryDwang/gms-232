var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askAcceptDecline("#b#h ##k，有件紧急的事情需要你的帮忙。是与前阵子出现的世界树有关。", 1101002);
    } else {
      if (status === V++) {
        cm.sendNextNoESC("我们最近得到情报，据说在冒险岛世界的北部，在被称为世界尽头的地方发现了可疑的建筑。此外还发现了生命超越者——世界树阿丽莎的古老的思念体。", 1101002);
      } else {
        if (status === V++) {
          cm.sendNextNoESC("现在迫切需要人手对塔进行调查。我们相信你是适合的人选。", 1101002);
        } else {
          if (status === V++) {
            cm.sendNextSNoESC("没问题。什么时候出发？");
          } else {
            if (status === V++) {
              cm.sendNextNoESC("#b#h ##k，我会用神兽的力量立刻把你传送到目的地。祝你好运。", 1101002);
            } else if (status === V++) {
              cm.forceStartQuest();
              cm.warp(992000010, 0);
              cm.dispose();
            } else {
              cm.dispose();
            }
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;