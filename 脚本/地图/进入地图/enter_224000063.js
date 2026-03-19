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
      cm.npc_ChangeController(2074151, "oid=1942252", -990, -137, 115, -1040, -940, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1942252", 'summon', 0, 0);
      cm.npc_ChangeController(2074100, "oid=1942253", -795, -68, 110, -845, -745, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1942253", 'summon', 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNormalTalk_Bottom("#face3#九尾狐这家伙，不应该就这么被人厌恶的。", 37, 2074151, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face4#它喜欢人类，真的非常善良，要是它没有认识朴大爷……", 37, 2074151, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face2#朴大爷到底做了什么……", 37, 2074100, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("小可爱啊！发生什么事情了！", 37, 2074105, true, true);
          } else {
            if (status === V++) {
              cm.npc_setForceFlip("oid=1942253", 1);
              cm.inGameDirectionEvent_ForcedFlip(1);
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.npc_ChangeController(2074105, "oid=1942264", -657, -64, 107, -707, -607, 1, false, 0, false);
                cm.npc_SetSpecialAction("oid=1942264", "summon", 0, 0);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1942253"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1942252"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.updateInfoQuest(30451, "gExpCheck=1");
                  cm.gainExp(369355);
                  cm.forceStartQuest(30451, '');
                  cm.forceCompleteQuest(30451);
                  cm.inGameDirectionEvent_AskAnswerTime(400);
                  cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                } else if (status === V++) {
                  cm.dispose();
                  cm.warp(224000092, 1, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;