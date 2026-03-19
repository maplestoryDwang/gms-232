function start() {
  if (cm.isQuestActive(22726) || cm.isQuestFinished(22726)) {
    cm.onSetMapObjectCreateLayerMore('corridor', 2, "night", 1);
  }
  cm.effect_Text(["#fn黑体##fs26#二楼走廊\r\n#fs14#-私立英才学校-"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
  cm.dispose();
}
var status = -1;