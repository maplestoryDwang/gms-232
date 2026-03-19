function start() {
  if (cm.getQuestStatus(22726) > 0) {
    cm.onSetMapObjectCreateLayerMore('classroom', 2, "night", 1);
    cm.onSetMapObjectCreateLayerMore("class_dayObj", 2, "night", 1);
  }
  cm.effect_Text(["#fn黑体##fs26#2-1教室\r\n#fs14#-私立英才学校-"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
  cm.dispose();
}
var status = -1;