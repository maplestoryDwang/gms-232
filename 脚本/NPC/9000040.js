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
      cm.askMenu("你想查看哪个勋章的排名呢？#b\n\r\n#L0#传说中的猎人#l\r\n#L1#冒险岛偶像明星#l\r\n#L2#黑暗龙王杀手#l\r\n#L3#品克缤杀手#l\r\n#L4#村庄爱心使者#l", 0, 9000040);
    } else if (status === V++) {
      cm.sendNormalTalk("排名没什么好说的。大家都处于同一起跑线……你也可能获得第一。", 0, 9000040, false, true);
      cm.dispose();
    }
  }
}