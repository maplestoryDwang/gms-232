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
      cm.npc_ChangeController(1540657, "oid=290500871", 988, -145, 35, 938, 1038, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=290500871", "summon", 0, 0);
      cm.npc_ChangeController(1540659, "oid=290500872", 1088, -145, 35, 1038, 1138, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=290500872", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(4000, 1000, 4000, 1038, -317);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(4000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 1038, -117);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#你瞧，今天的智能机器人也超级多，不是吗？\r\n我们在这场战争中根本没必要出头。赢是迟早的事情。", 45, 1540657, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#这么多东西要怎么检查啊？\r\n实际上，就算有几个次品应该也没有关系吧？", 37, 1540659, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#管他有没有问题。\r\n反正摧毁后只要重新组装就行了。", 45, 1540657, true, true);
                } else {
                  if (status === V++) {
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), 626, -204);
                    cm.inGameDirectionEvent_SetHideEffect(0);
                    cm.inGameDirectionEvent_ChangeEquipment([1004392]);
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, 1388, -117);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#不过，那家伙是不是有些奇怪？\r\n身上好像挂满了东西啊？", 37, 1540659, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#算了，别管了。\r\n随意组装的时候，难免会出现那种情况。", 45, 1540657, true, true);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else if (status === V++) {
                            cm.inGameDirectionEvent_ChangeEquipment([0]);
                            cm.dispose();
                            cm.warp(350042001, 0, true);
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
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;