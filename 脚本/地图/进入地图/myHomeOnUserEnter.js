var status = -1;
var selectionLog = [];
var npcs = [9400920, 9400921, 9401160];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = cm.getNumberFromQuestInfo(500773, "manager");
  var O = npcs[V];
  var b = -1;
  if (status <= b++) {
    cm.dispose();
  } else {
    cm.fieldEffect_PlayBGM("BgmWz2.img/myHome_room", 0, 0);
    cm.dispose();
    if (!cm.isInMyHome()) {
      cm.hideNpc(9400920);
      cm.hideNpc(9400921);
      cm.hideNpc(9400930);
    } else {
      if (cm.isQuestFinished(64601) && !cm.isQuestFinished(64604)) {
        cm.npc_ChangeController(9400923, "oid=11112418", -160, 100, 0);
        cm.npc_SetSpecialAction("oid=11112418", "summon", 0, 0);
        cm.npc_ChangeController(9400922, "oid=11112419", -60, 100, 1);
        cm.npc_SetSpecialAction("oid=11112419", "summon", 0, 0);
        cm.npc_ChangeController(9400924, "oid=11112420", -10, 100, 1);
        cm.npc_SetSpecialAction("oid=11112420", "summon", 0, 0);
        cm.npc_ChangeController(9400935, "oid=11112421", 40, 100, 1);
        cm.npc_SetSpecialAction("oid=11112421", 'summon', 0, 0);
      } else {
        if (cm.isQuestFinished(64606)) {
          var w = cm.getNumberFromQuestInfo(500767, "managerXpos");
          var L = cm.getNumberFromQuestInfo(500767, "managerYpos");
          var S = cm.getNumberFromQuestInfo(500767, 'facing');
          cm.npc_ChangeController(9400930, "manager", w, L, S, false, true);
          cm.npc_SetSpecialAction("manager", "summon", 0, 0);
          if (cm.isQuestFinished(64610)) {
            var V = cm.getNumberFromQuestInfo(500773, "manager");
            if (V == 0) {
              cm.sendNormalTalk_Bottom("#face0#你去哪里了啊！我一个人可无聊了呢！", 37, O, false, true);
            } else if (V == 1) {
              cm.sendNormalTalk_Bottom("#face1#你喜欢外出吗？看来还是家里最棒了吧？", 37, O, false, true);
            } else {
              cm.sendNormalTalk_Bottom("#face1#回来啦？你今天过的怎么样？", 37, O, false, true);
            }
          } else {
            cm.hideNpc(9400920);
            cm.hideNpc(9400921);
            cm.npc_ChangeController(9400920, "oid=10082653", 263, 106, 3, 213, 313, 1, true, 0, true);
            cm.npc_ChangeController(9400921, "oid=10082654", -243, 106, 3, -293, -193, 0, true, 0, true);
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;