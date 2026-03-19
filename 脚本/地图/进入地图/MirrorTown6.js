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
      var O = ["mirrorD_326_0_", "mirrorD_326_1_", "mirrorD_326_2_", "mirrorD_326_3_"];
      var b = [0, 0, 0, 0];
      var w = ["追求生命炼金术的蒙特鸠炼金学派的实验室A。", "追求生命和机械结合的卡帕莱特炼金学派的实验室A。", "从不向外界公开的蒙特鸠实验室B。", "组合生命和机械创造实验体的卡帕莱特的实验室B。"];
      var L = new Array();
      var S = 41801 + parseInt((cm.getMapId() - 320000000) / 1000000) * 4 - 4;
      for (var V = 0; V < w.length; V++) {
        if (cm.getNumberFromQuestInfo(S + V, "count") > 0) {
          L.push(w[V] + "\n\n通关次数:" + cm.getNumberFromQuestInfo(S + V, 'count') + "\r\n最短纪录:" + cm.getNumberFromQuestInfo(S + V, 'min') + "分 " + cm.getNumberFromQuestInfo(S + V, "sec") + '秒');
        } else {
          L.push(w[V] + "\n\n通关次数:- \r\n最短纪录:-分 -秒");
        }
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