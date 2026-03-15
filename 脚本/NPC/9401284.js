var status = -1;
var selectionLog = [];
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
      cm.askMenu("陪林达尔玩\r\n#L0# 摸脸 #l\r\n#L1# 摸肚子 #l\r\n#L2# 摸尾巴 #l\r\n#L3# 抓手 #l\r\n", 4, 9401292);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=206748", "threat", 0, 0);
        switch (U) {
          case 0:
            cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/rindal4", 100);
            break;
          case 1:
            cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/rindal2", 100);
            break;
          case 2:
            cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/rindal5", 100);
            break;
          case 3:
            cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/rindal3", 100);
            break;
        }
        cm.dispose();
      }
    }
  }
}