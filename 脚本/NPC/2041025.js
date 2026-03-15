var status = -1;
function start() {
  action(1, 0, 0);
}
function action(r, d, M) {
  if (r == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    cm.askYesNo("哔哩哔哩~通过我可以进入安全地区哦。哔哩哔哩~你就这么离开吗？", 0, 2041025);
  } else if (status == 1) {
    cm.warp(220080000, 3);
    if (cm.getPlayerCount(220080001) == 0) {
      cm.getMap(220080000).resetReactors();
    }
    cm.dispose();
  } else {
    cm.dispose();
  }
}