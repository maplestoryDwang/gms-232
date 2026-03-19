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
      cm.npc_ChangeController(1540446, "oid=34868", -413, 120, 7, -420, -363, 1, false, 0, false);
      cm.updateInfoQuest(33128, "act1=350013000;act2=350024100");
      cm.setAmbience("Ambience.img/flyingdeck", 50, 60);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(1540452, "oid=22709239", 100, 100, 1, 50, 150, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22709239", "summon", 0, 0);
      cm.npc_ChangeController(1540453, "oid=22709240", -130, 100, 2, -180, -80, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22709240", "summon", 0, 0);
      cm.npc_ChangeController(1540450, "oid=22709241", -190, 100, 7, -240, -140, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22709241", "summon", 0, 0);
      cm.npc_ChangeController(1540451, "oid=22709242", -250, 100, 7, -300, -200, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22709242", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 111, 108);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.sendNormalTalk_Bottom("如此轻率的作战……\r\n我们难道不应该制定更严密的战略吗？", 37, 1540452, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("这是因为我们的情报太少。\r\n黑色之翼在制作出那种怪物来时，你们反抗者究竟在做什么？", 37, 1540451, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("什么？\r\n你也不想想阻止黑色之翼实力扩张的人究竟是谁！", 37, 1540452, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("现在不是争吵的时候。\r\n我们都没有想到那个所谓的#e小飞船#n竟然这么大……", 37, 1540453, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#突破口肯定存在。\r\n在太阳升起之前，我们还有些时间，我们先召开紧急会议吧。", 37, 1540450, true, true);
                  } else {
                    if (status === V++) {
                      cm.npc_ChangeController(1540468, "oid=22709852", 380, 100, 6, 330, 430, 0, true, 0, false);
                      cm.npc_SetSpecialAction("oid=22709852", "summon", 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                        cm.effect_NormalSpeechBalloon('嘻嘻', 1, 0, 0, 1500, 0, 0, 0, 0, 4, 1540468, cm.getPlayer().getId());
                      } else {
                        if (status === V++) {
                          cm.npc_LeaveField("oid=22709852");
                          cm.npc_LeaveField("oid=22709852");
                          cm.inGameDirectionEvent_ForcedFlip(1);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                          cm.effect_NormalSpeechBalloon(" ?", 1, 0, 1, 1000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
                        } else if (status === V++) {
                          cm.setInGameDirectionMode(false, true, false);
                          cm.effect_NormalSpeechBalloon("这是什么声音?到外面去看看吧. ", 1, 0, 1, 4000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
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
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;