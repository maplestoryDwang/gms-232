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
      cm.npc_ChangeController(3004006, "oid=257797", 837, 33, 71, 787, 887, 1, false, false);
      cm.npc_ChangeController(3004016, "oid=257798", 659, 45, 70, 659, 709, 4, true, false);
      cm.npc_ChangeController(3004017, "oid=257799", 330, 45, 68, 280, 380, 4, true, false);
      cm.npc_ChangeController(3004017, 'oid=257800', 110, 45, 68, 60, 160, 4, true, false);
      cm.npc_ChangeController(3004017, "oid=257801", 400, 45, 68, 350, 450, 4, true, false);
      cm.npc_ChangeController(3004017, "oid=257802", 463, 45, 68, 413, 513, 4, true, false);
      cm.npc_ChangeController(3004017, "oid=257803", 259, 45, 68, 209, 309, 4, true, false);
      cm.npc_ChangeController(3004017, "oid=257804", 181, 45, 68, 131, 231, 4, true, false);
      cm.npc_ChangeController(3004017, 'oid=257805', 526, 45, 68, 476, 576, 4, true, false);
      cm.npc_ChangeController(3004017, 'oid=257806', 41, 45, 68, -9, 91, 4, true, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#嗯，你说那是安哥拉公司的东西？", 37, 3004016, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#你疯了吧，马罗尼。你竟敢闯入商人区？", 37, 3004006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#我可不管。反正这地方最后也会变成我的地盘。", 37, 3004016, true, true);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else if (status === V++) {
                cm.dispose();
                cm.warp(402000200, 2);
                cm.setInGameDirectionMode(false, true, false);
                cm.setStandAloneMode(false);
                cm.forceStartQuest(37112, '');
                cm.updateInfoQuest(37100, "40=h0;31=h0;50=h1;32=h0;51=h1;33=h1;52=h1;dir=off;35=h1;36=h1;37=h1;47=h1;38=h0;39=h1");
                cm.updateInfoQuest(37100, "40=h0;31=h0;50=h1;32=h0;51=h1;33=h1;52=h1;dir=off;35=h1;36=h1;37=h1;47=h1;38=h1;39=h1");
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