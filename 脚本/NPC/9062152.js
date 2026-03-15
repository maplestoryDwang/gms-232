var status = -1;
function action(f, W, U) {
  if (f === 0) {
    status--;
  } else {
    status++;
  }
  var V = cm.getMapId();
  var w = -1;
  if (status <= w++) {
    cm.dispose();
  } else {
    if (status === w++) {
      if (V == 993080500) {
        cm.askYesNo("看到你努力练习的样子，我很欣慰！\r\n你想现在退出吗？", 9062152);
      } else {
        if (V == 993080200) {
          cm.askYesNo("还有时间！\r\n你想就这样退出吗？", 9062152);
        } else {
          var N = parseInt(cm.getInfoQuest(100188).substr(6));
          if (N == 0) {
            cm.sendOk("……怎么，#b一个稻草人#k都没能消灭掉吗？要多加努力啊！", 9062152);
          } else {
            cm.sendOk("你消灭掉了#e#b" + N + "个#k#n稻草人！\r\n可以领取#e#b" + Math.ceil(N / 4) + "个大冒险币#k#n。\r\n\r\n怎么样，感受到狩猎的气息了吗？", 9062152);
            cm.addNumberForQuestInfo(100161, "point", Math.ceil(N / 4));
            cm.updateInfoQuest(100188, "start;0");
          }
        }
      }
    } else if (status == w++) {
      if (V == 993080200) {
        cm.warp(993080400);
      } else {
        cm.warp(993080000, 15);
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