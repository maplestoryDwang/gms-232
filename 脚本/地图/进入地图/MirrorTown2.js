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
      var O = ["mirrorD_322_0_", "mirrorD_322_1_", "mirrorD_322_2_", "mirrorD_322_3_"];
      var b = [0, 0, 0, 0];
      var w = ["能够望见牢牢竖在滚烫沙漠上的仙人掌的阿里安特西门外。", "能在炙热沙地上啪嗒啪嗒跑动的蜥蜴所栖息的阿里安特东门外。", "阿里安特北门外，聚集着专门打劫阿里安特商团的入侵者们。", "由木乃伊把守的古代阿里安特王国的金字塔。"];
      var L = new Array();
      var S = 41800 + parseInt((cm.getMapId() - 320000000) / 1000000) * 4 - 4;
      for (var V = 0; V < w.length; V++) {
        if (cm.getNumberFromQuestInfo(S + V, "count") > 0) {
          L.push(w[V] + "\n\n通关次数:" + cm.getNumberFromQuestInfo(S + V, "count") + "\r\n最短纪录:" + cm.getNumberFromQuestInfo(S + V, "min") + "分 " + cm.getNumberFromQuestInfo(S + V, 'sec') + '秒');
        } else {
          L.push(w[V] + "\n\n通关次数:- \r\n最短纪录:-分 -秒");
        }
      }
      if (cm.isQuestActive(40104)) {
        O.push("map322090110");
        b.push(0);
        L.push("怪盗幻影的据点所在的南部沙漠。");
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