function action(f, E, e) {
  cm.npc_ChangeController(2159328, 'oid=242759', 141, 95, 1);
  cm.npc_ChangeController(2159329, "oid=242760", 512, 95, 1);
  cm.npc_ChangeController(2159330, "oid=242761", 372, 95, 1);
  cm.setInGameDirectionMode(false, true, false);
  cm.updateInfoQuest(23200, 'click=0');
  cm.updateInfoQuest(23201, 'click=0');
  cm.updateInfoQuest(23202, "click=0");
  cm.updateInfoQuest(23200, "click=1");
  cm.effect_OnUserEff("Effect/OnUserEff.img/normalEffect/demonSlayer/chatBalloon1");
  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;