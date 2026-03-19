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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 100, 325);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074127, "oid=2602501", 180, 288, 118, 130, 230, 1, false, 500, false);
        cm.npc_SetSpecialAction("oid=2602501", 'summon', 0, 0);
        cm.npc_ChangeController(2074100, "oid=2602502", 4, 288, 115, -46, 54, 0, true, 500, false);
        cm.npc_SetSpecialAction("oid=2602502", 'summon', 0, 0);
        cm.sendNormalTalk_Bottom("一二三……这些应该就可以做一件素装了。\r\n来，稍等一下。", 37, 2074127, false, true);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_ChangeEquipment([1052857]);
            cm.inGameDirectionEvent_ChangeEquipment([1302132]);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("手上拿根树枝要来取代武器……\r\n来，怎么样？", 37, 2074127, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#哇，你的手艺可这不错呢？\r\n不过这个样子好像还算不上是个鬼……", 37, 2074100, true, true);
                } else {
                  if (status === V++) {
                    cm.gainExp(710299);
                    cm.updateInfoQuest(30432, "gExpCheck=1");
                    cm.forceCompleteQuest(30432);
                    cm.inGameDirectionEvent_AskAnswerTime(400);
                    cm.gainItem(4034650, -15);
                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                  } else if (status === V++) {
                    cm.dispose();
                    cm.warp(224000102, 3, true);
                    cm.setInGameDirectionMode(false, true, false);
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