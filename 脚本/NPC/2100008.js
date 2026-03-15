var status = -1;
var faceType;
function action(z, B, C) {
  if (z == 0) {
    cm.dispose();
    return;
  } else if (z == 1) {
    status++;
  } else {
    status--;
  }
  switch (status) {
    case 0:
      cm.askMenu("如果你有#b整容院会员卡#k的话，就把你的脸交给我，让我来为你整容吧。我一定会让你焕然一新的。", 0, 2100008);
      break;
    case 1:
      var Y = cm.getPlayerStat('FACE');
      if (cm.getPlayer().getGender() == 0) {
        faceType = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012, 20014];
      } else {
        faceType = [21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21012, 21014];
      }
      for (var O = 0; O < faceType.length; O++) {
        faceType[O] = faceType[O] + Y % 1000 - Y % 100;
      }
      faceType = cm.filterValidFaces(faceType);
      cm.askAvatar("我能把您现在的脸变成全新的脸，您不想换张新的脸吗？只要有#b#t5152057##k的话，我就给您做整容手术。慢慢挑选您喜欢的脸吧！", faceType, 5152057);
      break;
    case 2:
      if (cm.setAvatar(5152057, faceType[C]) == 1) {
        cm.sendOk("好了，您的朋友们一定认不出来您了！");
      } else {
        cm.sendOk("嗯……您好像没有#b#t5152057##k啊？不好意思，没有会员卡的话，我不能帮您做整形手术。");
      }
      cm.dispose();
      break;
    default:
      cm.dispose();
      break;
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;