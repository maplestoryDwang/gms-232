var status = -1;
var selectionLog = [];
function start() {
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
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askMenu("啊，你来啦，主人。如果你想离开这里，去别的地区的话，请告诉我你想去的地区。我会立刻将你送过去。#b\r\n\r\n#L0#金银岛升降场#l #l\r\n#L1#圣地天渡#l \r\n#L2#天空之城码头#l\r\n#L3#玩具城码头#l\r\n#L4#阿里安特码头#l\r\n#L5#神木村码头#l \r\n#L6#克里蒂亚斯码头#l\r\n#L7##r埃德尔斯坦#k#l#k", 0, 1400003);
    } else {
      if (status === V++) {
        var w = [104020100, 130000210, 200000100, 220000100, 260000100, 240000100, 241000000, 310000010];
        cm.sendOk("水晶花园已经移动到了#b#m" + w[U] + "##k。从飞船前方的传送点下去就能到达了。");
        cm.setQuestCustomData(25010, w[U]);
      } else if (status === V++) {
        cm.dispose();
      }
    }
  }
}