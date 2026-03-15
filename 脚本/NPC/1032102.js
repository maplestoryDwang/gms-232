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
      if (cm.haveItem(4070000) || cm.haveItem(5180000)) {
        cm.askPet("你想将什么宠物恢复到原来状态呢？请选择想要复原的宠物……", 1032102);
      } else {
        cm.sendOk("想要给变成娃娃的宠物重新注入活力吗？如果你拥有#b#i5180000##z5180000##k，我就可以帮你哦。");
      }
    } else if (status === V++) {
      if (U > 0) {
        cm.revivePet(U, 90);
        cm.playerMessage(5, "由于专属生命水的神奇力量，宠物又恢复了生机。");
        if (cm.haveItem(4070000)) {
          cm.gainItem(4070000, -1);
        } else {
          cm.gainItem(5180000, -1);
        }
      }
      cm.dispose();
    }
  }
}