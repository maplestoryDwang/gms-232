function start() {
  if (cm.getMapId() == 211042402) {
    cm.dispose();
    cm.openNpc(2030013, "BOSS_简单扎昆入场");
  } else {
    if (cm.getMapId() == 211042400) {
      cm.dispose();
      cm.openNpc(2030013, "BOSS_普通扎昆入场");
    } else if (cm.getMapId() == 211042401) {
      cm.dispose();
      cm.openNpc(2030013, "BOSS_困难扎昆入场");
    } else {
      cm.dispose();
    }
  }
}