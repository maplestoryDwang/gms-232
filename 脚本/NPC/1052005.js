var status = -1;
var card = 0;
var faceType;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(j, k, m) {
  if (j == 0) {
    cm.dispose();
    return;
  } else if (j == 1) {
    status++;
  } else {
    status--;
  }
  switch (status) {
    case 0:
      cm.askMenu("您是想换脸型吗？是想换个新样子啊？好，我就帮您变成您想要的样子。\r\n#L0##b 整容(使用#b#t5152056#）#l");
      break;
    case 1:
      var x = cm.getPlayerStat("FACE");
      if (cm.getPlayer().getGender() == 0) {
        faceType = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012, 20014];
      } else {
        faceType = [21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21012, 21014];
      }
      for (var G = 0; G < faceType.length; G++) {
        faceType[G] = faceType[G] + x % 1000 - x % 100;
      }
      faceType = cm.filterValidFaces(faceType);
      cm.askYesNo("使用普通整容券可以随机更换脸型……您确定要使用#b#t5152056##k更换脸型吗？");
      break;
    case 2:
      if (cm.setRandomAvatar(5152056, faceType) == 1) {
        cm.dispose();
        cm.sendOk("好了，您的朋友们一定认不出您了！");
        card = 1;
      } else {
        cm.askYesNo("嗯……您好像没有#b#t5152056##k啊？要消费480点券，直接进行整形手术吗？");
      }
      break;
    case 3:
      if (card == 0) {
        if (cm.getPlayer().getCSPoints(1) >= 480) {
          if (cm.setRandomAvatar(faceType) == 1) {
            cm.getPlayer().modifyCSPoints(1, -480);
            cm.dispose();
            cm.sendOk("好了，您的朋友们一定认不出您了！");
          }
        } else {
          cm.dispose();
          cm.sendOk("你好像没有足够的点卷/抵用卷!");
          card = 1;
        }
      }
      cm.dispose();
      break;
    default:
      cm.dispose();
  }
}