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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 144, 122);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(3004125, "oid=2540696", 250, 85, 10, 200, 300, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=2540696", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
        cm.effect_Text(["#fn黑体##fs18#几天前，尤兰斯的棚屋"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
            cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1600);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("你说得没错。", 56, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("就算没有我在，迪奥也过得很好呢……", 56, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("看来她已经不再是从前那个爱哭鬼了呢。", 56, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#这个嘛……应该是吧。", 36, 3004125, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("那就……下次再见了，爆莉萌天使。", 56, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#你，你打算就这么走了吗？再稍微等一会儿，迪奥就会来了吧？", 37, 3004125, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("既然已经确认你过得很好，现在我也可以放心离开了。", 56, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_同时移动镜头和人(1, 200);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("得放下心才好……", 57, 0, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("但为什么会感到如此孤单……", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else if (status === V++) {
                                      cm.warp(993110772, 0, false);
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.npc_LeaveField("oid=2540696");
                                      cm.npc_LeaveField("oid=2540696");
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
          }
        }
      }
    }
  }
}