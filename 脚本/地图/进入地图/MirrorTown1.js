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
      var O = ["mirrorD_321_0_", "mirrorD_321_1_", "mirrorD_321_2_", "mirrorD_321_3_"];
      var b = [0, 0, 0, 0];
      var w = ["看似美丽，但其实栖息着凶恶怪物的米纳尔西部森林。", "森林支配者半人马王所支配的米纳尔东部森林。", "被西下的太阳染红的黄昏森林。", "飞龙在险峻的岩石之间筑巢的飞龙峡谷。"];
      var L = new Array();
      var S = 41800 + parseInt((cm.getMapId() - 320000000) / 1000000) * 4 - 4;
      for (var V = 0; V < w.length; V++) {
        if (cm.getNumberFromQuestInfo(S + V, "count") > 0) {
          L.push(w[V] + "\n\n通关次数:" + cm.getNumberFromQuestInfo(S + V, "count") + "\r\n最短纪录:" + cm.getNumberFromQuestInfo(S + V, "min") + "分 " + cm.getNumberFromQuestInfo(S + V, "sec") + '秒');
        } else {
          L.push(w[V] + "\n\n通关次数:- \r\n最短纪录:-分 -秒");
        }
      }
      if (cm.isQuestActive(40053)) {
        O.push("map321190200");
        b.push(0);
        L.push("贤明的玛瑙龙阿弗利埃的巢穴。");
      }
      if (cm.isQuestFinished(40054) && cm.getQuestStatus(40061) == 0) {
        O.push("map321190300");
        b.push(0);
        L.push("可以见到暗黑龙王的发光洞穴");
      }
      cm.setMirrorDungeonInfo(O, b, L);
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;