var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1) {
    cm.dispose();
  } else {
    if (f == 1) {
      status++;
    } else {
      status--;
    }
    if (status == 0) {
      if (cm.isQuestActive(22007)) {
        cm.sendNext("#b(你得到了一个鸡蛋。把它送到尤塔吧.)#k");
        cm.gainItem(4032451, 1);
      } else {
        cm.sendOk("#b你现在不需要吃鸡蛋了.#k");
      }
      cm.dispose();
    }
  }
}