var status = 0;
function start() {
  status = -1;
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
  if (status == 0) {
    cm.askMenu("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请您选择您需要的功能:\r\n(#r请看好购买哦.点了就买啦!#k):\r\n#b#e#L0#双倍道具#l\t\t#L7#道具卷轴#l\r\n#b#L4#魔方 喇叭 其他等..#l");
  } else {
    if (status == 1) {
      switch (U) {
        case 0:
          cm.dispose();
          cm.openNpc(9900002, 11);
          break;
        case 4:
          cm.dispose();
          cm.openNpc(9900003, 10);
          break;
        case 5:
          cm.sendOk("请到鲁彪那去买吧，我这里都没货了~");
          cm.dispose();
          break;
        case 6:
          cm.dispose();
          cm.openNpc(9900002, 9);
          break;
        case 7:
          cm.dispose();
          cm.openNpc(9900002, 10);
          break;
        case 8:
          cm.sendOk("请到鲁彪那去买吧，我这里都没货了~");
          cm.dispose();
          break;
        case 9:
          cm.dispose();
          cm.openNpc(9900002, 25);
          break;
        case 10:
          cm.dispose();
          cm.openNpc(9900002, 100);
          break;
        case 11:
          cm.dispose();
          cm.openNpc(9900002, 1301);
          break;
      }
    }
  }
}