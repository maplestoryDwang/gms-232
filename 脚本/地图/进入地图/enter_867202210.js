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
  } else if (status === V++) {
    cm.spawnMobLimit(9402301, 1, -372, 105, 1);
    cm.spawnMobLimit(9402310, 1, -200, 105, 1);
    cm.playerMessage(-1, "消灭跟在侦察兵后边的暴走怪");
    cm.addPopupSay(9400582, 3000, "#face0#艾伊纳尔，不要慌！", '', 0);
    cm.addPopupSay(9400582, 3000, "#face0#只记住这两点！格挡！刺！", '', 0);
    cm.addPopupSay(9400602, 3000, "#face1#呃！哈啊… 没玩没了啊，如果攻击开始了… 肯定比现在还有更多怪物… ", '', 0);
    cm.addPopupSay(9400582, 3000, "#face0#… 这么快就累了？加把劲！", '', 0);
    cm.dispose();
    cm.forceJoinEvent("莫奈德_地图_Act3.11_最后的野战");
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;