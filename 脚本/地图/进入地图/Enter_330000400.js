var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestActive(32807)) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("汪汪！你又在做什么有趣的事儿呢？", 37, 1530030, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("什么，搜集病毒？\r\n啊哈哈，这可真有趣啊！你搜集到的话也拿给我看看吧。", 37, 1530030, true, true);
      } else if (status === V++) {
        cm.sendNormalTalk_Bottom("这个医务室里好像什么稀奇古怪的东西都有，所以如果你把医务室的尘土怪消灭之后，应该就能找到你想要的东西吧？#b（进入尘土地带寻找感冒病毒吧。）#k", 37, 1530030, true, true);
      } else {
        cm.dispose();
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;