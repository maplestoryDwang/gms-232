var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(n, O, A) {
  if (status == 0 && n == 0) {
    cm.dispose();
    return;
  }
  if (n == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = A;
  var W = -1;
  if (status <= W++) {
    cm.dispose();
  } else {
    if (status === W++) {
      cm.askMenu("哦哟~视野也变得模糊，全身都疼啊。你哪里疼啊？什么？要换脸？呵呵，你找对地方了。\r\n#L0##b 整容(使用#b#t5152056#）#l");
    } else {
      if (status === W++) {
        var R = cm.getPlayerStat('FACE');
        if (cm.getPlayer().getGender() == 0) {
          faceType = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012, 20014];
        } else {
          faceType = [21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21012, 21014];
        }
        for (var W = 0; W < faceType.length; W++) {
          faceType[W] = faceType[W] + R % 1000 - R % 100;
        }
        faceType = cm.filterValidFaces(faceType);
        cm.askYesNo("使用普通整容券可以随机更换脸型……您确定要使用#b#t5152056##k更换脸型吗？");
      } else {
        if (status === W++) {
          if (cm.setRandomAvatar(5152056, faceType) == 1) {
            cm.sendOk("好了，您的朋友们一定认不出您了！");
            cm.dispose();
          } else {
            cm.askYesNo("嗯……您好像没有#b#t5152056##k啊？要消费480点券，直接进行整形手术吗？");
          }
        } else if (status === W++) {
          if (cm.getPlayer().getCSPoints(1) >= 480) {
            if (cm.setRandomAvatar(faceType) == 1) {
              cm.getPlayer().modifyCSPoints(1, -480);
              cm.sendOk("好了，您的朋友们一定认不出您了！");
            }
          } else {
            cm.sendOk("点券不够哦，需要480点券才行。");
          }
          cm.dispose();
        }
      }
    }
  }
}