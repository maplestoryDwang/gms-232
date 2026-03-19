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
      cm.npc_ChangeController(2074100, "oid=1941956", 1486, 325, 554, 1436, 1536, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1941956", "summon", 0, 0);
      cm.npc_ChangeController(2074105, "oid=1941957", 1642, 325, 559, 1592, 1692, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1941957", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.sendNormalTalk_Bottom("这是怎么回事？\r\n难不成，又像从前一样……", 37, 2074105, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074136, "oid=1941960", 1428, 325, 552, 1378, 1478, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=1941960", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_setForceFlip("oid=1941956", -1);
          cm.inGameDirectionEvent_ForcedFlip(-1);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayBGM("Bgm43/Unexpected crisis", 0, 0);
            cm.sendNormalTalk_Bottom("哎哟喂，朴大爷，大事不好。\r\n和那时候一样。", 37, 2074136, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1941957"], [0, 0, 0, 1, 0, 1, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("不可以，不可以啊！可不能再重复发生那样的事情了。\r\n集中所有村民来后山。", 37, 2074105, false, true);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=1941956", 1);
                  cm.inGameDirectionEvent_ForcedFlip(1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("小可爱，你也赶紧来后山吧，\r\n得阻止火势蔓延才行！", 37, 2074105, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                      cm.updateInfoQuest(30449, "gExpCheck=1");
                      cm.forceStartQuest(30449, '');
                      cm.gainExp(198883);
                      cm.forceCompleteQuest(30449);
                      cm.inGameDirectionEvent_AskAnswerTime(400);
                      cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                    } else if (status === V++) {
                      cm.dispose();
                      cm.warp(224000091, 1, true);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;