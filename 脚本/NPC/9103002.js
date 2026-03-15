var status = 0;
var prizeIdScroll = Array(2040601, 2040001, 2040504, 2040901, 2040401, 2040605, 2041027, 2041029, 2041029, 2040511, 2040905, 2040405, 2040602, 2041017, 2041023, 2041020, 2040002, 2040902, 2040402);
var prizeIdUse = Array(2000006, 2001000, 2022000, 2030009, 2030008, 2030009, 2001002, 2001001, 2000012, 2000005, 2020007, 2022018, 2020006, 2020008, 2020010);
var prizeQtyUse = Array(100, 50, 50, 20, 20, 20, 5, 5, 5, 1, 100, 50, 100, 20, 20);
var prizeIdEquip = Array(1302016, 1032013, 1442017, 1322025);
function getPrize(f) {
  var W = Math.random();
  var U;
  var V;
  var w = false;
  if (W < 0.2) {
    U = prizeIdScroll;
  } else {
    if (W < 0.1) {
      U = prizeIdEquip;
    } else {
      U = prizeIdUse;
      V = prizeQtyUse;
      w = true;
    }
  }
  var N = Math.floor(Math.random() * U.length);
  var u = 1;
  if (w) {
    u = V[N];
  }
  f.gainItem(U[N], u);
}
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 0) {
    cm.sendOk("If you wish to receive your rewards and return to Ludibrium, please let me know!");
    cm.dispose();
  } else {
    if (f == 1) {
      status++;
    } else {
      status--;
    }
    if (status == 0) {
      cm.askYesNo("Your party gave a stellar effort and gathered up at least 30 coupons. For that, i have a present for each and every one of you. After receiving the present, you will be sent back to Ludibrium. Now, would you like to receive the present right now?");
    } else if (status == 1) {
      cm.warp(809050017);
      getPrize(cm);
      cm.dispose();
    }
  }
}