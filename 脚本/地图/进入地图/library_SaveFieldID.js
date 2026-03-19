var status = -1;
var selectionLog = [];
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
  } else {
    if (status === V++) {
      cm.onClearGun();
      cm.eventSKill(0);
      cm.inGameDirectionEvent_SetHideEffect(0);
      cm.setInGameDirectionMode(false, true, false);
      if (cm.getMapId() == 302010000) {
        cm.npc_ChangeController(2510001, "oid=20657", 795, 245, 11, 745, 845, 0, false, false);
        cm.npc_ChangeController(2500001, "oid=20658", 469, 245, 19, 419, 519, 1, false, false);
        cm.updateInfoQuest(32603, "ep1=302010000;ep4=306000000;ep5=307000100");
      } else {
        if (cm.getMapId() == 302010400) {
          cm.npc_ChangeController(2103000, "oid=20675", -100, 230, 32, -150, -50, 1, false, false);
          cm.npc_ChangeController(2500001, "oid=20676", -595, 275, 3, -645, -545, 1, false, false);
          cm.npc_ChangeController(2510001, 'oid=20677', -28, 237, 34, -78, 22, 1, false, false);
          cm.updateInfoQuest(32603, "ep1=302010400;ep4=306000000;ep5=307000100");
        } else {
          if (cm.getMapId() == 302030000) {
            cm.npc_ChangeController(2500001, "oid=20707", -716, 185, 16, -766, -666, 1, false, false);
            cm.npc_ChangeController(2510003, "oid=20708", 106, 185, 9, 56, 156, 1, false, false);
            cm.updateInfoQuest(32603, "ep1=302030000;ep4=306000000;ep5=307000100");
          } else {
            if (cm.getMapId() == 302030100) {
              cm.npc_ChangeController(2500001, "oid=20714", -675, 185, 16, -725, -625, 1, false, false);
              cm.updateInfoQuest(32603, "ep1=302030100;ep4=306000000;ep5=307000100");
            } else if (cm.getMapId() == 302050400) {
              cm.updateInfoQuest(32628, "anger=1;check1=clear;nothere =1;arin=1;bang1=1;guard1=1");
            }
          }
        }
      }
      if (cm.getMapId() <= 303000000) {
        var O = 1;
      } else {
        if (cm.getMapId() <= 304000000) {
          var O = 2;
        } else {
          if (cm.getMapId() <= 306000000) {
            var O = 3;
          } else {
            if (cm.getMapId() <= 308000000) {
              var O = 4;
            } else {
              if (cm.getMapId() <= 309000000) {
                var O = 5;
              } else {
                var O = 6;
              }
            }
          }
        }
      }
      cm.setNumberForQuestInfo(32990, 'ep' + O, cm.getMapId());
      cm.enableActions();
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;