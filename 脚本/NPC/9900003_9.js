var a = 0;
function start() {
  a = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1) {
    cm.dispose();
  } else {
    if (f == 1) {
      a++;
    } else {
      a--;
    }
    if (a == -1) {
      cm.dispose();
    } else {
      if (a == 0) {
        cm.askMenu("欢迎来到整形医院，请问你想要做什么？\r\n#b#L1# 皇家美发#l  #L3# 皇家整形#l  #L2# 护肤中心#l");
      } else {
        if (a == 1) {
          if (U == 1) {
            cm.dispose();
            cm.openNpc(9900003, 901);
          } else {
            if (U == 2) {
              cm.dispose();
              cm.openNpc(9900003, 902);
            } else if (U == 3) {
              cm.dispose();
              cm.openNpc(9900003, 903);
            }
          }
        }
      }
    }
  }
}
var status = -1;