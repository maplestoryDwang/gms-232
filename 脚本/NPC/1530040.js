var status = 0;
var choice;
var display;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1) {
    cm.dispose();
  } else {
    if (f == 0) {
      cm.dispose();
      return;
    }
    if (f == 1) {
      status++;
    }
    if (status == 0) {
      var V = "#d你好，你需要进行装备品质提升吗?#k \r\n#g===================#k#d品质说明#k#g===================#k\r\n#b初级效果:\t\t\t\t满级效果:#b     \r\n#r☆☆劣质☆☆\t\t\t★★劣质★★#b\r\n#r☆☆普通☆☆\t\t\t★★普通★★#b\r\n#r☆☆优秀☆☆\t\t\t★★优秀★★#b\r\n#r☆☆精良☆☆\t\t\t★★精良★★#b\r\n#r☆☆极品☆☆\t\t\t★★极品★★#b\r\n#r☆☆史诗☆☆\t\t\t★★史诗★★#b\r\n#r☆☆传说☆☆\t\t\t★★传说★★#b\r\n#r☆☆神器☆☆\t\t\t★★神器★★#b\r\n#r☆☆魔王☆☆\t\t\t★★魔王★★#b\r\n#r☆☆战神☆☆\t\t\t★★战神★★#b\r\n#r☆☆至尊☆☆\t\t\t★★至尊★★#b\r\n#r☆☆魔神☆☆\t\t\t★★魔神★★#b\r\n#r☆☆耀世☆☆\t\t\t★★耀世★★#b\r\n#r☆☆不朽☆☆\t\t\t★★不朽★★#b\r\n#r☆☆永恒☆☆\t\t\t★★永恒★★#b\r\n#r☆☆太上☆☆\t\t\t★★太上★★#b\r\n#r☆☆混沌☆☆\t\t\t★★混沌★★#b\r\n#r☆☆无极☆☆\t\t\t★★无极★★#b\r\n#g===================#k#d强品要求#k#g===================#k\r\n#r        不同类型的装备 强品后效果不同#b\r\n#g==============================================#k\r\n";
      V += "#b#L1#我要提升(装备)品质#l\r\n\r\n\r\n";
      V += "#g==============================================#k\r\n";
      cm.askMenu(V);
    } else {
      if (status == 1) {
        var w = cm.getInventory(1).getItem(1);
        if (w == null) {
          cm.sendOk("\r\n抱歉你装备栏第一格没有道具");
          cm.dispose();
          return;
        }
        if (cm.isCash(w.getItemId())) {
          cm.sendOk("\r\n抱歉现金道具不能进行升品");
          cm.dispose();
          return;
        }
        switch (U) {
          case 1:
            var w = cm.getInventory(1).getItem(1).getItemId();
            var W = Math.floor(w / 10000);
            var N = Math.floor(W / 10);
            if (N == 12 || N == 13 || N == 14 || N == 15) {
              cm.dispose();
              cm.openNpc(1530040, 1);
              return;
            }
            if (W == 100 || W == 104 || W == 105 || W == 106 || W == 107 || W == 108 || W == 110 || W == 115) {
              cm.dispose();
              cm.openNpc(1530040, 2);
              return;
            }
            if (W == 111 || W == 112 || W == 113 || W == 103 || W == 101 || W == 102 || W == 119 || W == 114 || W == 116) {
              cm.dispose();
              cm.openNpc(1530040, 3);
              return;
            }
            cm.askMenuS(V);
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;