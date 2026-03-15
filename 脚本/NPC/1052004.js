var status = -1;
var faceType;
var ct = -1;
var card = 0;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(x, e, d) {
  if (x == 0) {
    cm.dispose();
    return;
  } else if (x == 1) {
    status++;
  } else {
    status--;
  }
  switch (status) {
    case 0:
      cm.askMenu("如果您有#b#t5152057##k的话，就把您的脸交给我，让我来为您整容吧。我一定会让您焕然一新的！\r\n#b#L1#整容（使用#b#t5152057#）#l");
      break;
    case 1:
      var L = cm.getPlayerStat("FACE");
      if (cm.getPlayer().getGender() == 0) {
        faceType = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012, 20014];
      } else {
        faceType = [21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21012, 21014];
      }
      for (var O = 0; O < faceType.length; O++) {
        faceType[O] = faceType[O] + L % 1000 - L % 100;
      }
      faceType = cm.filterValidFaces(faceType);
      cm.askAvatar("我能把您现在的脸变成全新的脸，您不想换张新的脸吗？只要有#b#t5152057##k的话，我就给您做整容手术。慢慢挑选您喜欢的脸吧！", faceType, 5152057);
      break;
    case 2:
      if (cm.setAvatar(5152057, faceType[d]) == 1) {
        cm.dispose();
        cm.sendOk("好了，您的朋友们一定认不出来您了！");
        card = 1;
      } else {
        if (cm.getPlayer().getCSPoints(1) >= 980) {
          ct = 1;
        }
        if (cm.getPlayer().getCSPoints(2) >= 980) {
          ct = 2;
        }
        if (ct != -1) {
          cm.getPlayer().modifyCSPoints(ct, -980);
          cm.gainItem(5152057, 1);
        } else {
          beauty = -1;
        }
        action(x, e, d);
      }
      break;
    case 3:
      if (card == 0) {
        if (cm.getPlayer().getCSPoints(1) >= 480) {
          if (cm.setRandomAvatar(faceType) == 1) {
            cm.getPlayer().modifyCSPoints(1, -480);
            if (beauty == 1) {
              cm.dispose();
              cm.sendOk("好了，让朋友们赞叹您的新发型吧！");
              card = 1;
            } else {
              cm.dispose();
              cm.sendOk("好了，让朋友们赞叹您的新发色吧！");
              card = 1;
            }
          }
        }
      }
      cm.dispose();
      break;
    default:
      cm.dispose();
      break;
  }
}