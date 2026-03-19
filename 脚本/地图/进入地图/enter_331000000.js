function start() {
  cm.dispose();
  if (cm.isQuestFinished(22734) && !cm.isQuestFinished(22860)) {
    cm.onSetMapObjectCreateLayer("sinkHole", 1, 255, 0);
    cm.onSetMapObjectCreateLayer("eastSub", 1, 0, 0);
    cm.onSetMapObjectCreateLayerMore("sinkHole", 2, 'night', 1);
  } else {
    cm.onSetMapObjectCreateLayer("sinkHole", 1, 0, 0);
  }
  if (cm.getQuestStatus(22726) > 0 && !cm.isQuestActive(22730)) {
    cm.fieldEffect_PlayBGM("Bgm43/Unknown Part Of City", 0, 0);
    cm.onSetMapObjectMove('city', 'night', [2, 1]);
    cm.onSetMapObjectCreateLayerMore('city', 2, "night", 1);
    cm.onSetMapObjectCreateLayerMore('car', 2, "day2night", 0);
    cm.onSetMapObjectCreateLayerMore("car", 3, "night", 1);
    cm.onSetMapObjectCreateLayer("car", 6, 0);
    cm.onSetMapObjectCreateLayerMore("eastSub", 2, 'night', 1);
    cm.effect_Text(["#fn黑体##fs26#大道 - 街心\r\n#fs14#-晚上-"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
  } else {
    cm.effect_Text(["#fn黑体##fs26#大道 - 街心\r\n#fs14#-白天-"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
  }
  if (cm.isQuestFinished(22728) && cm.getQuestStatus(22729) == 0) {
    cm.npc_ChangeController(1531010, 1170, 177, 1);
    cm.npc_SetSpecialAction(1531010, "summon");
  } else {
    if (cm.isQuestActive(22729)) {
      cm.setPartner(1, 1531003, 80001789, 0);
    } else if (cm.isQuestActive(22832)) {
      cm.npc_ChangeController(1531010, "oid=5566785", -674, 502, 231, -724, -624, 1, true, 1000, false);
      cm.npc_SetSpecialAction("oid=5566785", "summon", 0, 0);
    }
  }
}
var status = -1;