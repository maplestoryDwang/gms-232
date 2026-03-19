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
      var O = ["mirrorD_324_0_", "mirrorD_324_1_", "mirrorD_324_2_", "mirrorD_324_3_", "mirrorD_324_4_"];
      var b = [0, 0, 0, 0, 0];
      var w = ["这里是想要成为仙人，就必须要通过的仙人修炼场。", "喜欢蟠桃的淘气鬼猿公们栖息的天空森林。", "修炼时走火入魔的肯德熊藏身的地区。", "栽培着武陵代表性特产“桔梗”的药草田。", "将武陵弄得乱作一团的海盗团的巢穴。"];
      var L = new Array();
      var S = 41800 + parseInt((cm.getMapId() - 320000000) / 1000000) * 4 - 4;
      for (var V = 0; V < w.length; V++) {
        if (cm.getNumberFromQuestInfo(S + V, "count") > 0) {
          L.push(w[V] + "\n\n通关次数:" + cm.getNumberFromQuestInfo(S + V, "count") + "\r\n最短纪录:" + cm.getNumberFromQuestInfo(S + V, "min") + "分 " + cm.getNumberFromQuestInfo(S + V, "sec") + '秒');
        } else {
          L.push(w[V] + "\n\n通关次数:- \r\n最短纪录:-分 -秒");
        }
      }
      if (cm.isQuestActive(40932)) {
        O.push("map324090210");
        b.push(0);
        L.push("伍龚和韩太守被绑架的浓浓迷雾的森林。");
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