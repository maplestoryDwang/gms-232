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
      cm.npc_ChangeController(3001204, "oid=257842", -1701, 26, 246, -1751, -1651, 0, false, false);
      cm.npc_ChangeController(3001212, 'oid=257843', -1550, -85, 51, -1600, -1500, 1, false, false);
      cm.npc_ChangeController(3001216, "oid=257844", 627, -49, 4, 577, 677, 1, false, false);
      cm.npc_ChangeController(3001217, 'oid=257845', 450, -36, 2, 400, 500, 1, false, false);
      cm.npc_ChangeController(3001227, "oid=257846", -1311, -136, 53, -1361, -1261, 1, false, false);
      cm.npc_ChangeController(3001228, 'oid=257847', -1474, 41, 247, -1524, -1424, 1, false, false);
      cm.npc_ChangeController(3001229, "oid=257848", -1159, -260, 64, -1209, -1130, 1, false, false);
      cm.npc_ChangeController(3001231, "oid=257849", -1603, 39, 246, -1653, -1553, 1, false, false);
      cm.npc_ChangeController(3001242, "oid=257850", -1469, -103, 52, -1519, -1419, 1, false, false);
      cm.npc_ChangeController(3004008, "oid=257851", -543, -801, 206, -593, -493, 5, true, false);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -517, -840);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_SetHideEffect(1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#嘟嘟囔囔……", 37, 3004008, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#归来的公司……行动的使者……", 37, 3004008, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#上边的老头们……是时候见面了吗……", 37, 3004008, true, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else if (status === V++) {
                    cm.dispose();
                    cm.warp(402000003, 0);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.setStandAloneMode(false);
                  }
                }
              }
            }
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