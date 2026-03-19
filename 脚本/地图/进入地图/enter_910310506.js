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
      cm.updateInfoQuest(34437, "c0=1;c1=1;c2=1;c3=1;c4=1;c5=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 0, 0);
      cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction5.img/effect/Kerning/dia/0", 0, 0, 0, -90, 12, 4, 0);
      cm.npc_ChangeController(1052230, "oid=6300918", 100, 100, 1, 50, 150, 1, true, false);
      cm.npc_SetSpecialAction("oid=6300918", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face1#梦想受挫的那一天……我并没有哭，因为我已经有无数次经历，也早已经历过了无数次失败。", 37, 1052230, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face1#可能只是我的努力还不够吧，我的梦想还不够迫切吧……我一直都是这么想的。", 37, 1052230, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#可是……我和#b#ho##k一起见证了这一切之后感受到，我依然没有放弃梦想！", 37, 1052230, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#我，真的会很努力的，虽然有无数的机会从我身边擦肩而过，但这一次！", 37, 1052230, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#这一次我绝对不能错失，我不想再放弃自己的梦想了！", 37, 1052230, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else if (status === V++) {
                      cm.dispose();
                      cm.warp(910310507, 0);
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