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
      var O = ["mirrorD_325_0_", "mirrorD_325_1_", "mirrorD_325_2_", "mirrorD_325_3_"];
      var b = [0, 0, 0, 0];
      var w = ["为强化埃德尔斯坦的治安所安排了巡逻机器人和警卫机器人的路灯街头。", "因山崩危险需要小心通过的岩山。", "只有在埃德尔斯坦才能挖掘到神秘镥矿石的矿山深处。", "一般人禁止入内的矿山警备区域。"];
      var L = new Array();
      var S = 41801 + parseInt((cm.getMapId() - 320000000) / 1000000) * 4 - 4;
      for (var V = 0; V < w.length; V++) {
        if (cm.getNumberFromQuestInfo(S + V, 'count') > 0) {
          L.push(w[V] + "\n\n通关次数:" + cm.getNumberFromQuestInfo(S + V, "count") + "\r\n最短纪录:" + cm.getNumberFromQuestInfo(S + V, "min") + "分 " + cm.getNumberFromQuestInfo(S + V, "sec") + '秒');
        } else {
          L.push(w[V] + "\n\n通关次数:- \r\n最短纪录:-分 -秒");
        }
      }
      if (cm.isQuestActive(40401)) {
        O.push("map325090030");
        b.push(0);
        L.push("和瓦尼约定见面的路灯街头。");
      }
      if (cm.isQuestActive(40943)) {
        O.push("map325090310");
        b.push(0);
        L.push("阿尔杉走过来的岩石道路。");
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