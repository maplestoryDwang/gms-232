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
      cm.gainSkillBuff(80002228);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -180, -4888);
        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
              cm.fieldEffect_复合图片动画(["Map/Effect3.img/morass/spine/fish/skeleton", 'animation', '', "fish"], [0, 1, 1, 90000, 0, 0, 0, 1]);
              cm.inGameDirectionEvent_AskAnswerTime(7000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
              } else {
                if (status === V++) {
                  cm.fieldEffect_取消复合图片动画("fish", 1, 1000);
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                  } else if (status === V++) {
                    cm.updateInfoQuest(34250, "start=1");
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), 0, -3925);
                    cm.addPopupSay(0, 2500, "#face0#终于能喘口气了……行动也没什么异常……", '', 0);
                    cm.addPopupSay(0, 2500, "#face0#这又是什么地方？", '', 0);
                    cm.addPopupSay(3003409, 2500, "#face0#这是神秘河的尽头了。", '', 0);
                    cm.addPopupSay(0, 2500, "#face0#唔哇！", '', 0);
                    cm.inGameDirectionEvent_SetHideEffect(0);
                    cm.setStandAloneMode(false);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.dispose();
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