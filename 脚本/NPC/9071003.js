var m;
function start() {
  if (cm.getMapId() == 951000000) {
    cm.askYesNo("你好。怪物公园客车竭诚为大家提供最好的服务。你想回到原来的村里去吗？");
    m = 1;
    return;
  }
  cm.askYesNo("亲爱的顾客，你想到充满了欢乐的休彼德蔓的怪物公园去吗？");
}
function action(f, W, U) {
  if (f == 1) {
    if (m == 1) {
      var V = parseInt(cm.getInfoQuest(cm.getMapId()));
      if (isNaN(V) || V < 1) {
        V = 100000000;
      }
      cm.warp(V, 0);
    } else {
      cm.updateInfoQuest(951000000, cm.getMapId());
      cm.warp(951000000, 0);
    }
  }
  cm.dispose();
}