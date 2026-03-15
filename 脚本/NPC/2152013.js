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
      if (!cm.haveItem(4000596)) {
        cm.askYesNo("啊……你正在搜集废电池啊？我也有几个。嗯……对了！如果你能给我一支#b#v4000596##z4000596##k，我就把电池送给你。怎么样？", 0, 2152013);
        cm.dispose();
        return;
      }
      cm.sendNormalTalk("拿到了气球，心情很不错。呵呵呵。如果我再领到一个，我会分给你的……嗯？你不需要气球？那你需要什么？", 0, 2152013, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("重新利用资源，是件很开心的事吧？", 0, 2152013, false, true);
      } else if (status === V++) {
        cm.gainItem(4000596, -1);
        cm.gainItem(4032750, 1);
        cm.dispose();
      }
    }
  }
}