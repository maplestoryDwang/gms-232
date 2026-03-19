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
      var O = ["mirrorD_323_0_", "mirrorD_323_1_", "mirrorD_323_2_", "mirrorD_323_3_"];
      var b = [0, 0, 0, 0];
      var w = ["生产射手村特产品蘑菇的蘑菇山丘。", "全身由石头组成的石头人的领地。", "能一眼看到蓝天碧海的金色海滩。", "树影之间躲藏着凶恶青龙的沉睡森林之底。"];
      var L = new Array();
      var S = 41800 + parseInt((cm.getMapId() - 320000000) / 1000000) * 4 - 4;
      for (var V = 0; V < w.length; V++) {
        if (cm.getNumberFromQuestInfo(S + V, "count") > 0) {
          L.push(w[V] + "\n\n通关次数:" + cm.getNumberFromQuestInfo(S + V, "count") + "\r\n最短纪录:" + cm.getNumberFromQuestInfo(S + V, "min") + "分 " + cm.getNumberFromQuestInfo(S + V, "sec") + '秒');
        } else {
          L.push(w[V] + "\n\n通关次数:- \r\n最短纪录:-分 -秒");
        }
      }
      if (cm.getQuestStatus(40202) > 0) {
        O.push("map323090100");
        b.push(0);
        L.push("可以和龙神安静聊天的射手村三岔路。");
      }
      if (cm.getQuestStatus(40923) > 0) {
        O.push("map323090200");
        b.push(0);
        L.push("关着拉尔汉的洞穴所在的北部林间路。");
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