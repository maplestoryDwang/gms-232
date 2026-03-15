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
      if (cm.isQuestFinished(33530)) {
        cm.sendNormalTalk_Bottom("这里经常传来孩子的哭声，我猜想那声音应该是猫叫声，于是前往声音传来的地方进行查看，真的是猫在叫。", 37, 1530190, false, false);
        cm.dispose();
      } else {
        cm.sendNormalTalk_Bottom("你有没有看到一个穿着卫衣的学生啊？", 56, 1530193, false, true);
      }
    } else if (status === V++) {
      cm.sendNormalTalk_Bottom("这个么……穿着卫衣的学生好像到建筑物里面去了。不过我刚刚眯了一会儿，嘿嘿……不会是在做梦吧？", 37, 1530190, true, false);
    } else {
      cm.dispose();
    }
  }
}