var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.dispose();
    }
    status--;
  }
  if (status == 0) {
    if (cm.getMapId() == 706041715) {
      cm.askYesNo("果然长江后浪推前浪，世上新人赶旧人。请让我为少年颁发奖励吧!!!");
    } else {
      cm.sendOk("哼！旁边的老头抢了我的货物，我非常气愤。");
      cm.dispose();
    }
  } else {
    if (status == 1) {
      if (cm.getSpace(1) > 1 || cm.getSpace(2) > 1 || cm.getSpace(3) > 1 || cm.getSpace(4) > 1) {
        var V;
        var w = Math.floor(Math.random() * 500);
        if (w >= 0 && w <= 440) {
          var N = new Array(2049116, 2049122, 2049323, 5062010, 5062500, 5062002, 5062009);
          V = cm.gainGachaponItem(N[Math.floor(Math.random() * N.length)], 1, "卧虎藏龙", 3);
        } else {
          if (w >= 441 && w <= 450) {
            var N = new Array(2431994, 1122265, 1142745, 1142746, 1132244);
            V = cm.gainGachaponItem(N[Math.floor(Math.random() * N.length)], 1, "卧虎藏龙", 3);
          } else {
            if (w >= 471 && w <= 480) {
              var N = new Array(2432669, 2431989, 2431992, 1113074, 1032222, 1122266, 2431988, 1132245);
              V = cm.gainGachaponItem(N[Math.floor(Math.random() * N.length)], 1, "卧虎藏龙", 3);
            } else {
              var N = new Array(2431991, 2431938, 1113075, 1032223, 1122267, 1132246);
              V = cm.gainGachaponItem(N[Math.floor(Math.random() * N.length)], 1, "卧虎藏龙", 3);
            }
          }
        }
        if (V != -1) {
          cm.warp(910000000);
          cm.dispose();
        } else {
          cm.sendOk("请你确认在背包的装备,消耗,其他窗口中是否有一格以上的空间?");
        }
      } else {
        cm.sendOk("xx错误");
      }
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;