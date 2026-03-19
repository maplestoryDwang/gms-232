var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.spawnMobLimit(2700306, 1, 400, 57, 1);
    cm.spawnMobLimit(2700307, 1, 425, 57, 1);
    cm.spawnMobLimit(2700308, 1, 450, 57, 1);
    cm.updateInfoQuest(22700, "V01=1;V02=1;q21end=0;coNight=0;kinePro=0;kinetuto=1;kinetuto2=1;E1=1;blackCat=0;E2=1;E3=1");
    cm.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/wink", 100);
    cm.cameraSwitch_PushSwitchMoveInfo("pt_DP", 1000);
    cm.addPopupSay(1531001, 2000, "#face10#凯内西斯,  那个家伙特别强大！你得先发制人！", '', 0);
    cm.dispose();
  }
}