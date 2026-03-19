var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      switch (cm.getMapId()) {
        case 922010100:
          cm.getMap().startSimpleMapEffect("打败周围的次元玩具鼠，并收集20个次元的通行证。", 5120018);
          break;
        case 922010200:
          cm.getMap().startSimpleMapEffect("帮忙打扫废弃的塔，并收集20个次元的通行证。", 5120018);
          break;
        case 922010300:
          cm.getMap().startSimpleMapEffect("帮忙打扫废弃的塔，并收集32个次元的通行证。", 5120018);
          break;
        case 922010400:
          cm.getMap().startSimpleMapEffect("消灭暗黑塔里的怪物，并搜集14个次元的通行证。", 5120018);
          break;
        case 922010401:
          cm.getMap().startSimpleMapEffect("[暗黑塔1] 消灭怪物，收集次元的通行证。", 5120018);
          break;
        case 922010402:
          cm.getMap().startSimpleMapEffect("[暗黑塔2] 消灭怪物，收集次元的通行证。", 5120018);
          break;
        case 922010403:
          cm.getMap().startSimpleMapEffect("[暗黑塔3] 消灭怪物，收集次元的通行证。", 5120018);
          break;
        case 922010404:
          cm.getMap().startSimpleMapEffect("[暗黑塔4] 消灭怪物，收集次元的通行证。", 5120018);
          break;
        case 922010405:
          cm.getMap().startSimpleMapEffect("[暗黑塔5] 消灭怪物，收集次元的通行证。", 5120018);
          break;
        case 922010500:
          cm.getMap().startSimpleMapEffect("从每个房间中收集总共24个次元的通行证，向我展示你们的智慧吧。", 5120018);
          break;
        case 922010600:
          cm.showMapEffect(true, 5120018, "解开隐藏的箱子的密码，爬到顶部。", 15, false);
          break;
        case 922010700:
          cm.showMapEffect(true, 5120018, "消灭这里所有的战甲吹泡泡鱼，收集4个次元的通行证。", 15, false);
          break;
        case 922010800:
          cm.showMapEffect(true, 5120018, "听问题，爬到正确答案对应的箱子上去！", 15, false);
          break;
        case 922010900:
          cm.showMapEffect(true, 5120018, "消灭阿丽莎乐，归还次元的钥匙。", 15, false);
          break;
      }
      cm.dispose();
    }
  }
}