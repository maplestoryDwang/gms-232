var status = -1;
function action(f, E, e) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    cm.sendNextSNoESC("……这里是枫树？");
  } else {
    if (status == 1) {
      cm.sendNextSNoESC("先到下面去看看吧。");
    } else if (status == 2) {
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/tuto/key/2"], [3000000, -520, -740, 1, 0, 1, 1, 0]);
      cm.topMsg("同时按下[↓]键与 [Alt] 或 [Space] (选择型设定)键可以往下降");
      cm.forceStartQuest(32202);
      cm.setInGameDirectionMode(false);
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;