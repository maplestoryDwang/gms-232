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
      cm.sendNormalTalk("您好，这里是#m105000000#旅馆。我们酒店会竭诚为您提供最优质的服务。如果您打猎累了的话，可以在我们酒店休息。", 0, 1061100, false, true);
    } else {
      if (status === V++) {
        cm.askMenu("我们旅馆有2种房间。请选择您想使用哪种服务。\r\n#L1##b高级桑拿房(1次999金币)#k#l", 0, 1061100);
      } else {
        if (status === V++) {
          cm.askYesNo("你选了高级桑拿房。比普通桑拿房更快恢复生命值和魔法力，而且在里面可以购买特别的物品，你要使用吗？", 0, 1061100);
        } else if (status === V++) {
          cm.dispose();
          cm.warp(105000012, 2);
        }
      }
    }
  }
}