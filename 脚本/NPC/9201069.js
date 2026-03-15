var status = -1;
var faceType;
function action(q, B, V) {
  if (q == 0) {
    cm.dispose();
    return;
  } else if (q == 1) {
    status++;
  } else {
    status--;
  }
  switch (status) {
    case 0:
      cm.askMenu("如果您有#b#t5152057##k的话，就把您的脸交给我，让我来为您整容吧。我一定会让您焕然一新的！\r\n#b#L1#整容（使用#b#t5152057#）#l");
      break;
    case 1:
      var T = cm.getPlayerStat('FACE');
      if (cm.getPlayer().getGender() == 0) {
        faceType = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012];
      } else {
        faceType = [21001, 21002, 21003, 21004, 21005, 21006, 21008, 21012, 21014, 21016];
      }
      for (var r = 0; r < faceType.length; r++) {
        faceType[r] = faceType[r] + T % 1000 - T % 100;
      }
      faceType = cm.filterValidFaces(faceType);
      cm.askAvatar("我能把您现在的脸变成全新的脸，您不想换张新的脸吗？只要有#b#t5152057##k的话，我就给您做整容手术。慢慢挑选您喜欢的脸吧！", faceType, 5152057);
      break;
    case 2:
      if (cm.setAvatar(5152057, faceType[V]) == 1) {
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