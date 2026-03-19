function start() {
  if (cm.isQuestActive(22726) || cm.isQuestFinished(22726)) {
    cm.spawnMobLimit(2700303, 1, 0, 177, 15);
    cm.spawnMobLimit(2700303, 1, 0, 177, 15);
    cm.spawnMobLimit(2700303, 1, 0, 177, 15);
    cm.spawnMobLimit(2700303, 1, 0, 177, 15);
    cm.spawnMobLimit(2700303, 1, 0, 177, 15);
    cm.spawnMobLimit(2700304, 1, 0, 177, 15);
    cm.spawnMobLimit(2700304, 1, 0, 177, 15);
    cm.spawnMobLimit(2700304, 1, 0, 177, 15);
    cm.spawnMobLimit(2700304, 1, 0, 177, 15);
    cm.spawnMobLimit(2700304, 1, 0, 177, 15);
    cm.spawnMobLimit(2700305, 1, 0, 177, 15);
    cm.spawnMobLimit(2700305, 1, 0, 177, 15);
    cm.spawnMobLimit(2700305, 1, 0, 177, 15);
    cm.spawnMobLimit(2700305, 1, 0, 177, 15);
    cm.spawnMobLimit(2700305, 1, 0, 177, 15);
    cm.onSetMapObjectCreateLayerMore("classroom", 2, "night", 1);
    cm.onSetMapObjectCreateLayerMore("class_dayObj", 2, "night", 1);
    cm.effect_Text(["#fn黑体##fs26#1-1教室\r\n#fs14#-私立英才学校-"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
    cm.dispose();
  } else {
    cm.effect_Text(["#fn黑体##fs26#1-1教室\r\n#fs14#-私立英才学校-"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
    cm.dispose();
  }
}
var status = -1;