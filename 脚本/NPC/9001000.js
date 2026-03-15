var points;
var status = -1;
var sel;
var select;
var items = [[[1302081, 120000], [1312037, 120000], [1322060, 120000], [1332073, 120000], [1332074, 120000], [1342011, 120000], [1362016, 120000], [1372044, 120000], [1382057, 120000], [1402046, 120000], [1412033, 120000], [1422037, 120000], [1432047, 120000], [1442063, 120000], [1452057, 120000], [1462050, 120000], [1472068, 120000], [1482023, 120000], [1492023, 120000], [1522015, 120000], [1532015, 120000]], [[2070018, 60000], [2070016, 50000], [2070006, 5000], [2070005, 2500], [2330005, 5000]], [[1122017, 50000], [2340000, 400000], [2530000, 200000], [2531000, 500000], [3993002, 10000]], [[1003280, 120000], [1003281, 120000], [1003282, 120000], [1003283, 120000], [1003284, 120000], [1052374, 120000], [1052375, 120000], [1052376, 120000], [1052377, 120000], [1052378, 120000], [1072544, 160000], [1072545, 160000], [1072546, 160000], [1072547, 160000], [1072548, 160000], [1082328, 160000], [1082329, 160000], [1082330, 160000], [1082331, 160000], [1082332, 160000], [1942004, 60000], [1952004, 60000], [1962004, 60000], [1972004, 60000]], [[1302173, 200000], [1312072, 200000], [1322107, 200000], [1332148, 200000], [1332149, 200000], [1342040, 200000], [1362022, 200000], [1372100, 200000], [1382124, 200000], [1402111, 200000], [1412071, 200000], [1422073, 200000], [1432099, 200000], [1442136, 200000], [1452129, 200000], [1462118, 200000], [1472141, 200000], [1482102, 200000], [1492101, 200000], [1522020, 200000], [1532037, 150000]], [[1003285, 150000], [1003286, 150000], [1003287, 150000], [1003288, 150000], [1003289, 150000], [1052379, 150000], [1052380, 150000], [1052381, 150000], [1052382, 150000], [1052383, 150000], [1072549, 200000], [1072550, 200000], [1072551, 200000], [1072552, 200000], [1072553, 200000], [1082333, 200000], [1082334, 200000], [1082335, 200000], [1082336, 200000], [1082337, 200000], [1102311, 150000], [1032108, 400000], [1122148, 240000], [1092092, 150000], [1092093, 150000], [1092094, 150000]], [[1302174, 240000], [1312073, 240000], [1322108, 240000], [1332150, 240000], [1332151, 240000], [1342041, 240000], [1362023, 240000], [1372101, 240000], [1382125, 240000], [1402112, 240000], [1412072, 240000], [1422074, 240000], [1432100, 240000], [1442137, 240000], [1452130, 240000], [1462119, 240000], [1472142, 240000], [1482103, 240000], [1492102, 240000], [1522021, 240000], [1532038, 240000]]];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  var V = cm.getQuestRecord(150001);
  var w = parseInt(points);
  if (f == 0 || f == -1 && status == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    points = V.getCustomData() == null ? '0' : V.getCustomData();
    cm.askMenu("You currently have " + points + " Boss Party Quest points.\r\n\r\n #b#L0#Warp to Lobby#l  \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#L2#Trade Bamboo Luck Sack for points(10000)#l\r\n#L3#Timeless Weapons#l\r\n#L4#Projectiles#l\r\n#L5#Other#l\r\n#L6#Abyss Armors#l\r\n#L7#Abyss Weapons#l\r\n#L8#Fearless Armors#l\r\n#L9#Fearless Weapons#l");
  } else {
    if (status == 1) {
      select = U;
      switch (U) {
        case 0:
          cm.warp(682020000);
          cm.dispose();
          break;
        case 1:
        case 2:
          cm.askNumber("How many " + (U == 1 ? "Enchanted Scrolls" : "Bamboo Luck Sacks") + " would you like to trade?\r\n", cm.getItemQuantity(U == 1 ? 5221001 : 3993002), 1, 100);
          break;
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          chooseItem(U - 3);
          break;
      }
    } else {
      if (status == 2) {
        sel = U;
        var N = select == 1 ? 5221001 : 3993002;
        var u = select == 1 ? 1000 : 10000;
        if (select == 1 || select == 2) {
          if (cm.haveItem(N, U)) {
            w += u * cm.getItemQuantity(N);
            V.setCustomData('' + w + '');
            cm.gainItem(N, -U);
            cm.sendOk("Enjoy your rewards :P");
          } else {
            cm.sendOk("Please check if you have sufficient item, or inventory slot for it.");
          }
        } else if (select >= 3 && select <= 9) {
          gainReward(w, V, select - 3);
        }
        cm.dispose();
      }
    }
  }
}
function chooseItem(f) {
  var W = "Choose from any of the items below:#b";
  for (var U = 0; U < items[f].length; U++) {
    W += "\r\n#L" + U + "##i" + items[f][U][0] + "# Trade " + items[f][U][1] + " points (#z" + items[f][U][0] + '#)#l';
  }
  W += "\r\n ";
  cm.askMenu(W);
}
function gainReward(f, W, U) {
  if (f >= items[U][sel][1] && cm.canHold(items[U][sel][0])) {
    f -= items[U][sel][1];
    W.setCustomData('' + f + '');
    cm.gainItem(items[U][sel][0], isProjectitle(items[U][sel][0]) ? items[U][sel][0] / 10000 == 233 ? 3000 : 1000 : 1);
    cm.sendOk("Enjoy your rewards :P");
  } else {
    cm.sendOk("Please check if you have sufficient points, or inventory slot for it. #bCurrent Points : " + points);
  }
}
function isProjectitle(f) {
  switch (f / 10000) {
    case 207:
    case 233:
      return true;
    default:
      return false;
  }
}
function isBullet(f) {
  return f / 10000 == 233;
}