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
      var O = ["mirrorD_329_0_", "mirrorD_329_1_"];
      var b = [0, 0];
      var w = ["克里蒂亚斯外围地区是#c非常危险#的地方，最好不要去。", "克里蒂亚斯外围地区是#c非常危险#的地方，最好不要去。"];
      var L = new Array();
      var S = 41800 + parseInt((cm.getMapId() - 320000000) / 1000000) * 4 - 4;
      for (var V = 0; V < w.length; V++) {
        if (cm.getNumberFromQuestInfo(S + V, "count") > 0) {
          L.push(w[V] + "\n\n通关次数:" + cm.getNumberFromQuestInfo(S + V, "count") + "\r\n最短纪录:" + cm.getNumberFromQuestInfo(S + V, "min") + "分 " + cm.getNumberFromQuestInfo(S + V, 'sec') + '秒');
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