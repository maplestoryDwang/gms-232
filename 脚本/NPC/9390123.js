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
    if (cm.getMapId() == 863010600) {
      cm.askYesNo("哇哇哇!!!你既然成功平息了贝勒德的愤怒,请让我为勇士颁发奖励吧!!!");
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
          var N = new Array(1113072, 1032220, 1122264, 1132243);
          V = cm.gainGachaponItem(N[Math.floor(Math.random() * N.length)], 1, "贝勒德", 3);
        } else {
          if (w >= 441 && w <= 470) {
            var N = new Array(1113073, 1032221, 1122265, 1132244);
            V = cm.gainGachaponItem(N[Math.floor(Math.random() * N.length)], 1, '贝勒德', 3);
          } else {
            if (w >= 471 && w <= 490) {
              var N = new Array(1113074, 1032222, 1122266, 1132245);
              V = cm.gainGachaponItem(N[Math.floor(Math.random() * N.length)], 1, "贝勒德", 3);
            } else {
              var N = new Array(1113075, 1032223, 1122267, 1132246);
              V = cm.gainGachaponItem(N[Math.floor(Math.random() * N.length)], 1, "贝勒德", 3);
            }
          }
        }
        if (V != -1) {
          cm.warp(863000100);
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