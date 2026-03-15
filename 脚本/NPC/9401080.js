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
      if (cm.isQuestFinished(64932)) {
        cm.sendNormalTalk_Bottom("#face1#我很庆幸，自己有能做的事情。", 36, 9401080, 0, 0);
      } else {
        switch (cm.rand(1, 2)) {
          case 1:
            cm.sendNormalTalk_Bottom("#h0#，很高兴再次见到你。\r\n匹比也很想念你。但他是绝对不会说出口的。", 36, 9401080, 0, 1);
            break;
          case 2:
            cm.sendNormalTalk_Bottom("我很喜欢做料理。但不知道为什么，对方吃东西的时候总会面部扭曲？\r\n我现在还不太懂人类的世界。", 36, 9401080, 0, 1);
            break;
        }
      }
    } else {
      cm.dispose();
    }
  }
}