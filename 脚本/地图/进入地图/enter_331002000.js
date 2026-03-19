function start() {
  cm.dispose();
  if (cm.isQuestActive(22831)) {
    cm.warp(331001400, 0, true);
    return;
  }
  if (cm.getQuestStatus(22726) > 0) {
    cm.onSetMapObjectCreateLayerMore("corridor", 2, "night", 1);
  }
  cm.effect_Text(["#fn黑体##fs26#一楼走廊\r\n#fs14#-私立英才学校-"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
}
var status = -1;