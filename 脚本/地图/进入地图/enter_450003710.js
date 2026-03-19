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
      cm.npc_ChangeController(3003105, "oid=48441", 38, 51, 49, -12, 88, 1, false, false);
      cm.npc_ChangeController(3003106, 'oid=48442', -109, 52, 50, -159, -59, 0, false, false);
      cm.npc_ChangeController(3003202, "oid=48443", 501, 78, 85, 451, 536, 0, false, false);
      cm.npc_ChangeController(3003225, "oid=48444", 1300, 78, 80, 1250, 1331, 1, false, false);
      cm.npc_ChangeController(3003226, "oid=48445", 1201, 78, 80, 1151, 1251, 1, false, false);
      cm.npc_ChangeController(3003227, 'oid=48446', 610, 78, 73, 576, 660, 1, false, false);
      cm.npc_ChangeController(3003285, "oid=48447", 1253, -209, 17, 1203, 1303, 1, false, false);
      cm.npc_ChangeController(3003286, 'oid=48448', 2256, -343, 31, 2232, 2306, 1, false, false);
      cm.npc_ChangeController(3003287, "oid=48449", 65, -344, 61, 15, 115, 1, false, false);
      cm.npc_ChangeController(3003288, "oid=48450", -597, -335, 23, -647, -591, 1, false, false);
      cm.npc_ChangeController(3003290, 'oid=48451', 1831, 78, 83, 1781, 1851, 1, false, false);
      cm.npc_ChangeController(3003228, 'oid=48452', 1698, 78, 83, 1648, 1748, 1, false, false);
      cm.npc_ChangeController(3003229, "oid=48453", 1564, 78, 86, 1514, 1591, 0, false, false);
      cm.npc_ChangeController(9000123, "oid=48454", 838, -338, 9, 788, 888, 1, false, false);
      cm.npc_ChangeController(9010022, "oid=48455", 3229, 78, 94, 3206, 3279, 1, false, false);
      cm.npc_ChangeController(9000124, "oid=48456", 852, -328, 9, 802, 902, 1, false, false);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3003257, "oid=1752607", 402, 70, 85, 352, 452, 1, true, false);
          cm.npc_SetSpecialAction("oid=1752607", "summon", 0, 0);
          cm.npc_ChangeController(3003257, "oid=1752608", 202, 70, 81, 152, 252, 0, true, false);
          cm.npc_SetSpecialAction("oid=1752608", 'summon', 0, 0);
          cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 402, 70, 1, 0, 1, 1, 0]);
          cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 202, 70, 1, 0, 1, 1, 0]);
          cm.fieldEffect_PlayFieldSound("summon/0", 100);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom('你…和我们一起走……', 37, 3003257, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("(该死，瞬间就被压制了！)", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else if (status === V++) {
                cm.dispose();
                cm.warp(450003711, 0, true);
                cm.setInGameDirectionMode(false, true, false);
              } else {
                cm.dispose();
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