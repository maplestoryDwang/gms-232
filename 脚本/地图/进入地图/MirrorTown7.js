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
      var O = ["mirrorD_327_0_", "mirrorD_327_1_", "mirrorD_327_2_", "mirrorD_327_3_"];
      var b = [0, 0, 0, 0];
      var w = ["为制作暴走的订单，不停地在赶工的玩具工厂。", "将玩具城停滞的时间禁锢着的时间塔内部。", "堆满了玩具工厂库存的时间塔最下层。", "据说可以将玩具城被封印的时间解除掉的时间塔最下层。"];
      var L = new Array();
      var S = 41801 + parseInt((cm.getMapId() - 320000000) / 1000000) * 4 - 4;
      for (var V = 0; V < w.length; V++) {
        if (cm.getNumberFromQuestInfo(S + V, 'count') > 0) {
          L.push(w[V] + "\n\n通关次数:" + cm.getNumberFromQuestInfo(S + V, "count") + "\r\n最短纪录:" + cm.getNumberFromQuestInfo(S + V, "min") + "分 " + cm.getNumberFromQuestInfo(S + V, "sec") + '秒');
        } else {
          L.push(w[V] + "\n\n通关次数:- \r\n最短纪录:-分 -秒");
        }
      }
      cm.setMirrorDungeonInfo(O, b, L);
      cm.dispose();
      if (cm.isQuestActive(40960) && cm.isQuestFinished(40600)) {
        cm.forceCompleteQuest(40960);
      }
      if (cm.isQuestActive(40961) && cm.isQuestFinished(40601)) {
        cm.forceCompleteQuest(40961);
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;