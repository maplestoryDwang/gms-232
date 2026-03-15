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
  f == 1 ? status++ : status--;
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++)
    cm.dispose();
  else if (status === V++)
    cm.sendNormalTalk('你好！我会迅速！安全地！将你送达黄昏勇士部落周围的#r危险地区#k。#b价格#k会按照目的地的距离合理收取~', 4, 2142113, false, true);
  else if (status === V++)
    cm.askMenu('你要乘坐危险地区快速出租车去哪里呢？\r\n#L0##b#m273030300# <50，000金币>#l\r\n#L1##m273020400#  <50，000金币>#l\r\n#L2##m273050000#  <60，000金币>#l\r\n#L3##m273040300#  <80，000金币>#l\r\n#L4##m273060300#  <100，000金币>#l', 4, 2142113);
  else if (status === V++) {
    var w = [
      50000,
      50000,
      60000,
      80000,
      100000
    ];
    if (cm.getMeso() < w[U])
      cm.sendOk('你的钱不够啊。');
    else {
      cm.gainMeso(-w[U]);
      switch (U) {
      case 0:
        cm.warp(273030300, 0);
        break;
      case 1:
        cm.warp(273020400, 0);
        break;
      case 2:
        cm.warp(273050000, 0);
        break;
      case 3:
        cm.warp(273040300, 0);
        break;
      case 4:
        cm.warp(273060300, 0);
        break;
      }
    }
    cm.dispose();
  }
}