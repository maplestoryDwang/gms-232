var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    cm.dispose();
    return;
  }
  if (status == 0) {
    cm.askMenu("你好，你来到这想要做什么？\r\n#b#L0#我要离婚#l\r\n#L1#删除戒指#l#k");
  } else {
    if (status == 1) {
      if (U == 0) {
        cm.askYesNo("离婚吗？你确定吗？你想离婚？确定想好要离婚了吗？");
      } else {
        var V = "删除戒指吗？让我看看你有什么...";
        var w = false;
        for (var N = 1112300; N < 1112312; N++) {
          if (cm.haveItem(N)) {
            w = true;
            V += "\r\n#L" + N + "##v" + N + "##t" + N + "##l";
          }
        }
        for (var N = 2240004; N < 2240016; N++) {
          if (cm.haveItem(N)) {
            w = true;
            V += "\r\n#L" + N + "##v" + N + '##t' + N + "##l";
          }
        }
        if (!w) {
          cm.sendOk("你没有可删除的戒指。");
          cm.dispose();
        } else {
          cm.askMenu(V);
        }
      }
    } else {
      if (status == 2) {
        if (U == -1) {
          if (cm.getPlayer().getMarriageId() <= 0) {
            cm.sendNext("我不清楚你是什么进来的，不过你好像还没有结婚？");
            cm.dispose();
          } else if (cm.getMeso() >= 1000000) {
            cm.handleDivorce();
            cm.gainMeso(-1000000);
          } else {
            cm.sendNext("离婚手续费需要100万金币,你没有足够的金币。");
            cm.dispose();
          }
        } else {
          if (U >= 1112300 && U < 1112312) {
            cm.gainItem(U, -1);
            cm.sendOk("已经将你的 #v" + U + "##t" + U + "##l 删除..");
          } else if (U >= 2240004 && U < 2240016) {
            cm.gainItem(U, -1);
            cm.sendOk("已经将你的 #v" + U + "##t" + U + "##l 删除..");
          }
        }
        cm.dispose();
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;