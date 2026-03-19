var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (cm.isQuestActive(64110)) {
    cm.dispose();
    cm.warp(867202401, 0, true);
    return;
  } else {
    if (cm.isQuestActive(64119)) {
      cm.dispose();
      cm.warp(867202403, 0, true);
      return;
    } else {
      if (cm.isQuestActive(64120)) {
        cm.dispose();
        cm.warp(867202460, 0, true);
        return;
      } else {
        if (cm.isQuestActive(64127)) {
          cm.dispose();
          cm.warp(867202311, 0, true);
          return;
        } else {
          if (cm.isQuestActive(64129)) {
            cm.dispose();
            cm.warp(867202480, 0, true);
            return;
          } else {
            if (cm.isQuestActive(64135)) {
              cm.dispose();
              cm.warp(867202210, 0, true);
              return;
            } else {
              if (cm.isQuestFinished(64138)) {
                cm.dispose();
                return;
              }
            }
          }
        }
      }
    }
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(9400604, 'oid=204469', 1590, -508, 47, 1540, 1640, 5, true, false);
      cm.npc_ChangeController(9400604, 'oid=204470', 1673, -509, 48, 1623, 1723, 5, true, false);
      cm.npc_ChangeController(9400603, 'oid=204471', -1281, 101, 5, -1331, -1231, 4, true, false);
      cm.npc_ChangeController(9400603, "oid=204472", -1100, 101, 6, -1150, -1050, 4, true, false);
      cm.npc_ChangeController(9400570, "oid=204473", 1713, 17, 34, 1663, 1763, 1, false, false);
      cm.npc_ChangeController(9400584, 'oid=204474', 852, -542, 42, 802, 902, 5, true, false);
      cm.npc_ChangeController(9400593, 'oid=204475', 784, -542, 42, 734, 834, 4, true, false);
      cm.sendNewEffects(1, [0, 0, 0, 0, 0]);
    } else {
      if (status === V++) {
        if (cm.isQuestFinished(64129)) {
          cm.npc_ChangeController(9400602, "oid=7541371", -530, -70, 18, -580, -480, 0, true, false);
          cm.npc_SetSpecialAction("oid=7541371", 'summon', 0, 0);
          cm.npc_ChangeController(9400582, "oid=7541372", -400, -70, 18, -450, -350, 1, true, false);
          cm.npc_SetSpecialAction("oid=7541372", "summon", 0, 0);
          cm.npc_ChangeController(9400580, "oid=7541373", 0, -180, 35, -50, 50, 0, true, false);
          cm.npc_SetSpecialAction("oid=7541373", "summon", 0, 0);
          cm.npc_ChangeController(9400600, "oid=7541374", 110, -180, 36, 60, 160, 1, true, false);
          cm.npc_SetSpecialAction("oid=7541374", "summon", 0, 0);
          cm.npc_ChangeController(9400604, "oid=7541375", 185, -180, 36, 135, 235, 1, true, false);
          cm.npc_SetSpecialAction("oid=7541375", 'summon', 0, 0);
          cm.npc_ChangeController(9400583, "oid=7541376", 30, 60, 28, -20, 80, 0, true, false);
          cm.npc_SetSpecialAction("oid=7541376", "summon", 0, 0);
          cm.npc_ChangeController(9400620, "oid=7541377", 140, 50, 29, 90, 190, 0, true, false);
          cm.npc_SetSpecialAction("oid=7541377", "summon", 0, 0);
          cm.npc_ChangeController(9400621, "oid=7541378", 210, 50, 29, 160, 260, 1, true, false);
          cm.npc_SetSpecialAction("oid=7541378", "summon", 0, 0);
          cm.npc_SetSpecialAction("oid=7541377", "attack1", -1, 0);
          cm.npc_SetSpecialAction("oid=7541378", "attakc1", -1, 0);
          cm.npc_ChangeController(9400588, "oid=7541379", 1000, -40, 39, 950, 1050, 0, true, false);
          cm.npc_SetSpecialAction("oid=7541379", "summon", 0, 0);
          cm.npc_ChangeController(9400586, "oid=7541380", 1150, -40, 39, 1100, 1200, 1, true, false);
          cm.npc_SetSpecialAction("oid=7541380", 'summon', 0, 0);
          cm.npc_ChangeController(9400601, "oid=7541381", 1210, -40, 40, 1160, 1260, 1, true, false);
          cm.npc_SetSpecialAction("oid=7541381", 'summon', 0, 0);
          cm.npc_ChangeController(9400589, "oid=7541382", 380, 50, 31, 330, 430, 0, true, false);
          cm.npc_SetSpecialAction("oid=7541382", "summon", 0, 0);
          cm.npc_ChangeController(9400590, "oid=7541383", 500, 20, 31, 450, 550, 1, true, false);
          cm.npc_SetSpecialAction("oid=7541383", 'summon', 0, 0);
          cm.npc_ChangeController(9400636, "oid=7541384", 250, -190, 36, 200, 300, 0, true, false);
          cm.npc_SetSpecialAction("oid=7541384", "summon", 0, 0);
          cm.npc_ChangeController(9400596, "oid=7541385", 400, -190, 37, 350, 450, 1, true, false);
          cm.npc_SetSpecialAction("oid=7541385", "summon", 0, 0);
          cm.npc_ChangeController(9400597, "oid=7541386", 1400, 0, 33, 1350, 1450, 0, true, false);
          cm.npc_SetSpecialAction("oid=7541386", "summon", 0, 0);
          cm.npc_ChangeController(9400635, "oid=7541387", 1500, 0, 33, 1450, 1550, 1, true, false);
          cm.npc_SetSpecialAction("oid=7541387", 'summon', 0, 0);
          cm.npc_ChangeController(9400587, "oid=7541388", 680, -10, 32, 630, 730, 0, true, false);
          cm.npc_SetSpecialAction("oid=7541388", "summon", 0, 0);
          cm.npc_ChangeController(9400598, "oid=7541389", 720, -10, 33, 670, 770, 1, true, false);
          cm.npc_SetSpecialAction("oid=7541389", "summon", 0, 0);
          cm.npc_ChangeController(9400591, "oid=7541390", 770, -10, 33, 720, 820, 1, true, false);
          cm.npc_SetSpecialAction("oid=7541390", 'summon', 0, 0);
          cm.npc_ChangeController(9400638, "oid=7541391", -1510, -25, 13, -1560, -1460, 1, true, false);
          cm.npc_SetSpecialAction("oid=7541391", "summon", 0, 0);
          cm.npc_ChangeController(9400639, "oid=7541392", -1385, 80, 4, -1435, -1335, 1, true, false);
          cm.npc_SetSpecialAction("oid=7541392", "summon", 0, 0);
          cm.dispose();
          return;
        }
        cm.npc_ChangeController(9400589, "oid=7533765", -480, -80, 18, -530, -430, 1, true, false);
        cm.npc_SetSpecialAction("oid=7533765", 'summon', 0, 0);
        cm.npc_ChangeController(9400592, "oid=7533766", -580, -80, 18, -630, -530, 0, true, false);
        cm.npc_SetSpecialAction("oid=7533766", 'summon', 0, 0);
        cm.npc_SetSpecialAction("oid=7533765", "attack1", -1, 0);
        cm.npc_SetSpecialAction("oid=7533766", 'attack1', -1, 0);
        cm.npc_ChangeController(9400588, "oid=7533767", 10, 65, 28, -40, 60, 1, true, false);
        cm.npc_SetSpecialAction("oid=7533767", "summon", 0, 0);
        if (cm.isQuestFinished(64112)) {
          cm.npc_ChangeController(9400586, "oid=7533961", 1010, 0, 33, 660, 1010, 1, true, false);
          cm.npc_SetSpecialAction("oid=7533961", "summon", 0, 0);
          cm.npc_ChangeController(9400601, "oid=7533962", 1070, 0, 33, 720, 1070, 1, true, false);
          cm.npc_SetSpecialAction("oid=7533962", "summon", 0, 0);
        } else {
          cm.npc_ChangeController(9400586, "oid=7533768", 300, -180, 37, 250, 350, 1, true, false);
          cm.npc_SetSpecialAction("oid=7533768", "summon", 0, 0);
          cm.npc_ChangeController(9400601, "oid=7533769", 380, -180, 37, 330, 430, 1, true, false);
          cm.npc_SetSpecialAction("oid=7533769", "summon", 0, 0);
        }
        cm.npc_ChangeController(9400582, "oid=7533783", 1250, -520, 45, 1200, 1300, 0, true, false);
        cm.npc_SetSpecialAction("oid=7533783", "summon", 0, 0);
        cm.npc_ChangeController(9400580, "oid=7533784", 1300, -520, 45, 1250, 1350, 0, true, false);
        cm.npc_SetSpecialAction("oid=7533784", "summon", 0, 0);
        cm.npc_ChangeController(9400600, "oid=7533785", 1400, -520, 46, 1350, 1450, 1, true, false);
        cm.npc_SetSpecialAction("oid=7533785", "summon", 0, 0);
        cm.npc_ChangeController(9400604, "oid=7533786", 1500, -520, 47, 1450, 1550, 1, true, false);
        cm.npc_SetSpecialAction("oid=7533786", "summon", 0, 0);
        cm.npc_ChangeController(9400581, "oid=7533787", 380, 0, 31, 330, 430, 0, true, false);
        cm.npc_SetSpecialAction("oid=7533787", "summon", 0, 0);
        cm.npc_ChangeController(9400620, "oid=7533788", 500, 0, 31, 450, 550, 1, true, false);
        cm.npc_SetSpecialAction("oid=7533788", 'summon', 0, 0);
        cm.npc_ChangeController(9400621, "oid=7533789", 550, 0, 31, 500, 600, 1, true, false);
        cm.npc_SetSpecialAction("oid=7533789", "summon", 0, 0);
        cm.npc_ChangeController(9400622, "oid=7533790", 600, 0, 32, 550, 650, 1, true, false);
        cm.npc_SetSpecialAction("oid=7533790", "summon", 0, 0);
        cm.npc_ChangeController(9400597, "oid=7533791", 1480, -30, 40, 1430, 1530, 0, true, false);
        cm.npc_SetSpecialAction("oid=7533791", "summon", 0, 0);
        cm.npc_ChangeController(9400598, "oid=7533792", 1550, 10, 33, 1500, 1600, 1, true, false);
        cm.npc_SetSpecialAction("oid=7533792", 'summon', 0, 0);
        cm.npc_ChangeController(9400599, "oid=7533793", 1600, 10, 34, 1550, 1650, 1, true, false);
        cm.npc_SetSpecialAction("oid=7533793", 'summon', 0, 0);
        cm.npc_ChangeController(9400583, "oid=7533794", -270, -180, 22, -320, -220, 1, true, false);
        cm.npc_SetSpecialAction("oid=7533794", "summon", 0, 0);
        cm.npc_ChangeController(9400623, "oid=7533795", -310, -70, 18, -360, -260, 0, true, false);
        cm.npc_SetSpecialAction("oid=7533795", 'summon', 0, 0);
        cm.npc_ChangeController(9400585, "oid=7533796", -220, -70, 18, -270, -170, 1, true, false);
        cm.npc_SetSpecialAction("oid=7533796", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=7533795", 'attack1', -1, 0);
        cm.npc_SetSpecialAction("oid=7533796", "attack1", -1, 0);
        if (cm.isQuestFinished(64111)) {
          cm.dispose();
          return;
        }
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -362, 52);
        cm.sendNewEffects(12, [1000, 20, -35, 0, 0]);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#b(……怎么郁兰看起来没什么精神……) ", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#b(现在想来……和莎娜安聊到一半跑出去之后，貌似还是头一次见到)", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNewEffects(19, [1000]);
            } else if (status === V++) {
              cm.dispose();
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