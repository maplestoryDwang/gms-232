var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.getMapId() == 103020000) {
        cm.askMenu("你好，请问是要买地铁票么？\r\n#b#L0#克拉齐亚的新叶都市#l#k", 0, 9201057);
      } else {
        cm.askMenu("你好，请问是要买地铁票么？\r\n#b#L0#金银岛的废弃都市#l#k", 0, 9201057);
      }
    } else {
      if (status === V++) {
        if (cm.getMapId() == 103020000) {
          cm.askYesNo("前往克拉齐亚新叶都市的列车从整点开始每 10 分钟一列，车票价格为#b5000 金币#k。确定要购买#b#t4031711##k么？", 0, 9201057);
        } else {
          cm.askYesNo("前往金银岛废弃都市的列车从整点开始每 10 分钟一列，车票价格为 #b5000 金币#k。确定要购买#b#t4031713##k么？", 0, 9201057);
        }
      } else if (status === V++) {
        if (cm.getMapId() == 103020000) {
          if (cm.getMeso() >= 5000) {
            cm.gainItem(4031711, 1);
            cm.gainMeso(-5000);
          } else {
            cm.sendOk("前往克拉齐亚新叶都市的车票价格为#b5000 金币#k。请确保有足够的金钱。");
          }
        } else if (cm.getMeso() >= 5000) {
          cm.gainMeso(-5000);
          cm.gainItem(4031713, 1);
        } else {
          cm.sendOk("前往金银岛废弃都市的车票价格为#b5000 金币#k。请确保有足够的金钱。");
        }
        cm.dispose();
      }
    }
  }
}