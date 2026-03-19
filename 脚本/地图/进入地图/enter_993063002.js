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
  } else {
    if (status === V++) {
      cm.teachSkill(80001037, -1, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onSetBackEffect("gratewall", 1, 0, 0, 0);
      cm.npc_ChangeController(3003758, "oid=2305825", -550, 200, 24, -600, -500, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2305825", "summon", 0, 0);
      cm.npc_ChangeController(3003761, "oid=2305826", -600, 200, 24, -650, -550, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2305826", "summon", 0, 0);
      cm.npc_ChangeController(3003758, "oid=2305827", -650, 200, 11, -700, -600, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2305827", "summon", 0, 0);
      cm.npc_ChangeController(3003758, "oid=2305828", -700, 200, 11, -750, -650, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2305828", 'summon', 0, 0);
      cm.npc_ChangeController(3003760, "oid=2305829", -750, 200, 19, -800, -700, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2305829", "summon", 0, 0);
      cm.npc_ChangeController(3003759, "oid=2305830", -800, 200, 19, -850, -750, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2305830", "summon", 0, 0);
      cm.npc_ChangeController(3003759, "oid=2305831", -850, 200, 21, -900, -800, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2305831", 'summon', 0, 0);
      cm.npc_ChangeController(3003759, "oid=2305832", -250, 200, 12, -300, -200, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2305832", 'summon', 0, 0);
      cm.npc_ChangeController(3003760, "oid=2305833", -200, 200, 12, -250, -150, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2305833", "summon", 0, 0);
      cm.npc_ChangeController(3003758, "oid=2305834", -150, 200, 17, -200, -100, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2305834", "summon", 0, 0);
      cm.npc_ChangeController(3003760, "oid=2305835", -100, 200, 17, -150, -50, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2305835", 'summon', 0, 0);
      cm.npc_ChangeController(3003760, "oid=2305836", -50, 200, 16, -100, 0, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2305836", 'summon', 0, 0);
      cm.npc_ChangeController(3003761, "oid=2305837", 0, 200, 16, -50, 50, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2305837", "summon", 0, 0);
      cm.npc_ChangeController(3003759, "oid=2305838", 50, 200, 10, 0, 100, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2305838", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=2305825", 'stand', -1, 1);
      cm.npc_SetSpecialAction("oid=2305826", "stand", -1, 1);
      cm.npc_SetSpecialAction("oid=2305827", "stand", -1, 1);
      cm.npc_SetSpecialAction("oid=2305828", "stand", -1, 1);
      cm.npc_SetSpecialAction("oid=2305829", "stand", -1, 1);
      cm.npc_SetSpecialAction("oid=2305830", 'stand', -1, 1);
      cm.npc_SetSpecialAction("oid=2305831", "stand", -1, 1);
      cm.npc_SetSpecialAction("oid=2305832", "stand", -1, 1);
      cm.npc_SetSpecialAction("oid=2305833", "stand", -1, 1);
      cm.npc_SetSpecialAction("oid=2305834", "stand", -1, 1);
      cm.npc_SetSpecialAction("oid=2305835", "stand", -1, 1);
      cm.npc_SetSpecialAction("oid=2305836", "stand", -1, 1);
      cm.npc_SetSpecialAction("oid=2305837", 'stand', -1, 1);
      cm.npc_SetSpecialAction("oid=2305838", "stand", -1, 1);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#请小心，这看上去挺高的。", 37, 3003761, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                  } else if (status === V++) {
                    cm.setStandAloneMode(false);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.dispose();
                    cm.playerMessage(-1, '爬上去看看！');
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