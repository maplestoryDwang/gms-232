var status = -1;
var selectionLog = [];
function action(f, E, e) {
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
      cm.sendNormalTalk_Bottom("#face0##h0#？", 37, 9400582, false, true);
      cm.spawnMobLimit(9402301, 1, 1250, 105, 1);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#你干嘛总跟着我啊，如果喜欢我，那就直说啊！", 37, 9400582, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#b……我只是因为艾丽卡拜托了我才来的。", 57, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#还害羞个什么啊-", 37, 9400582, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#我已经找到很多了……我们各自再找30个应该就够了！", 37, 9400582, true, true);
            } else if (status === V++) {
              cm.playerMessage(-1, "寻找小白雪鬼结晶吧。");
              cm.dispose();
              cm.forceJoinEvent("莫奈德_地图_Act2.5_收集小白结晶");
            }
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;