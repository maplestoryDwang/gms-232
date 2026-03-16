var status = -1;
var selectionLog = [];
var select = -1;

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
      if (cm.isQuestActive(32248)) {
        cm.sendNormalTalk("哎……哎？干嘛。没啥事就不要吵醒我……呼呼", 0, 1040000, false, true);
      } else {
        cm.dispose();
        return;
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk("请问，你有没有看到周围掉落有一顶帽子？", 16, 1040000, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("帽子？啊……你掉了帽子？我的确捡到了。给，拿去。", 0, 1040000, true, true);
        } else {
          if (status === V++) {
            cm.askMenu("...........哎，到底哪个是我要找的帽子呢？\r\n\r\n #b #L4033881##i4033881#红色星星头巾#l\r\n" +
                                                                      "#L4033882##i4033882#冒险勇士绿头盔#l\r\n" +
                                                                      "#L4033883##i4033883#狗皮帽#l", 0, 1040000);
          } else {
            if (status === V++) {
              cm.gainItem(U, 1);
              cm.OnStartNavigation(910400200, 1, "1520001", 32248);
              cm.sendNormalTalk("那么……别再弄丢了……呼呼", 0, 1040000, false, true);
            } else if (status === V++) {
              cm.dispose();
            }
          }
        }
      }
    }
  }
}