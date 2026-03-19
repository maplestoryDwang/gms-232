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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3003200, "oid=1754753", -20, -100, 1, -70, 30, 1, true, false);
      cm.npc_SetSpecialAction("oid=1754753", "summon", 0, 0);
      cm.npc_ChangeController(3003257, "oid=1754754", -150, -110, 1, -200, -100, 0, true, false);
      cm.npc_SetSpecialAction("oid=1754754", 'summon', 0, 0);
      cm.inGameDirectionEvent_同时移动镜头和人(1, 20);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
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
              cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 80, -110);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(10);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(4000, 1000, 4000, 0, -110);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#我本来就忙，那个家伙还来添麻烦。是不是？", 37, 3003250, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("觉悟之人……非常强大……我们远不如他……请发发慈悲…", 37, 3003257, true, true);
                      } else {
                        if (status === V++) {
                          cm.setNpcSpecialActionReset("oid=1754754");
                          cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/Lacheln/pung", "oid=1754754"], [0, 0, -50, 1, 0, 1, 0, 0]);
                          cm.effect_Voice("Skill.img/1201005/Use", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1300);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8643000/Die", 200);
                            cm.npc_SetSpecialAction("oid=1754754", "die", -1, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else {
                            if (status === V++) {
                              cm.npc_LeaveField("oid=1754754");
                              cm.sendNormalTalk_Bottom("#face0#真不愧是伟大的他所选中的人。", 37, 3003250, false, true);
                              cm.effect_Voice("Voice3.img/Lucid/Q2/0", 128);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=1754753", 1, 150, 100);
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
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, 70);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(10);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(4000, 2000, 4000, 190, 70);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face2#或者……难道是你？但是即便如此，也不会发生任何改变。", 37, 3003250, false, true);
                                              cm.effect_Voice("Voice3.img/Lucid/Q2/1", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#所以，请努力挣扎吧。\r\n在虚幻的希望中努力挣扎吧。\r\n就像之前我在寒冷的冰块中那样。\r\n就像我在无尽的睡梦中那样……", 37, 3003250, true, true);
                                                cm.effect_Voice("Voice3.img/Lucid/Q2/2", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                } else if (status === V++) {
                                                  cm.dispose();
                                                  cm.warp(450003100, 0, true);
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