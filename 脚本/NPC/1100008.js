var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.sendNext("不去的话就算了。");
      cm.dispose();
    }
    status--;
  }
  if (status == 0) {
    cm.askYesNo("你想离开天空之城，到其他地区去吗？这艘船预定开往#b圣地#k。洒满阳光的树叶和微风吹拂的湖水非常美丽。那里是神兽和女皇希纳斯居住的岛。如果你对骑士感兴趣，可以去那里看看……怎么样？你想到圣地去吗？\r\n\r\n移动时间大约是#b1分钟#k，费用是#b1000#k金币。");
  } else if (status == 1) {
    if (cm.getMeso() < 1000) {
      cm.sendNext("你明明没有钱嘛……必须有#b1000#k金币才可以去。");
    } else {
      cm.gainMeso(-1000);
      cm.warp(200090020, 0);
      cm.scheduleWarpTask(60, 130000210);
    }
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;