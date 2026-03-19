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
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -2294, -20);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074143, "oid=2597514", -2318, -74, 132, -2368, -2268, 1, false, 500, false);
        cm.npc_SetSpecialAction("oid=2597514", 'summon', 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(5000);
        cm.effect_Text(["#fn黑体##fs18#另一边, 同一时刻#fs15##fn黑体#小荳的家"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("哎哟……好烦啊……", 37, 2074143, false, true);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(2074146, "oid=2597524", -2201, -74, 134, -2251, -2151, 1, true, 500, false);
            cm.npc_SetSpecialAction("oid=2597524", "summon", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.npc_setForceFlip("oid=2597514", 1);
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2597514"], [0, 0, 0, 1, 0, 1, 0, 0]);
              cm.sendNormalTalk_Bottom("哎哟，这个点有什么事情吗……\r\n哦，天啊，郡守大人，您有什么事情吗？", 37, 2074143, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("就我们两个人的时候，你就说话随便点吧……\r\n哎哟，不过你现在还这样呢？\r\n你也去外面，找点活做做啊。", 37, 2074146, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("哼，要你管，我嫌烦……\r\n不过你突然这是怎么了？有什么事情吗？", 37, 2074143, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("……其实，我是有话要说。", 37, 2074146, true, true);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -3371, 46);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(2074144, "oid=2597560", -3452, 17, 256, -3502, -3402, 0, false, 500, false);
                          cm.npc_SetSpecialAction("oid=2597560", "summon", 0, 0);
                          cm.npc_ChangeController(2074145, "oid=2597561", -3526, 17, 260, -3576, -3476, 0, false, 500, false);
                          cm.npc_SetSpecialAction("oid=2597561", "summon", 0, 0);
                          cm.npc_ChangeController(2074100, "oid=2597562", -3378, 17, 233, -3428, -3328, 1, true, 500, false);
                          cm.npc_SetSpecialAction("oid=2597562", "summon", 0, 0);
                          cm.inGameDirectionEvent_ForcedFlip(-1);
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=2597562", 1);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#嗯……在我看来，能够让小荳改变的关键还是郡守！\r\n不过我还不知道具体要怎么做……\r\n我们还是先去观察一下小荳吧？", 37, 2074100, false, true);
                              } else if (status === V++) {
                                cm.dispose();
                                cm.warp(224000000, 15, true);
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