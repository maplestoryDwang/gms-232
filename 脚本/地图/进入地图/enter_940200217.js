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
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 910, -230);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3003350, "oid=1830666", 1040, -210, 8, 990, 1090, 1, true, false);
        cm.npc_SetSpecialAction("oid=1830666", "summon", 0, 0);
        cm.npc_ChangeController(3003351, "oid=1830667", 1100, -210, 8, 1050, 1150, 1, true, false);
        cm.npc_SetSpecialAction("oid=1830667", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.sendNormalTalk_Bottom("#face1#种下了种子后，草叶笛可千万要在月光的照耀下活过来才行……拜托了……", 37, 3003301, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 910, -230);
          } else {
            if (status === V++) {
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
                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 910, -230);
                  } else {
                    if (status === V++) {
                      cm.npc_ChangeController(3003364, "oid=1830668", 910, -210, 4, 860, 960, 1, false, false);
                      cm.npc_SetSpecialAction("oid=1830668", "summon", 0, 0);
                      cm.setNpcSpecialActionReset("oid=1830668");
                      cm.npc_SetSpecialAction("oid=1830668", "revive", 1530, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1530);
                    } else {
                      if (status === V++) {
                        cm.setNpcSpecialActionReset("oid=1830668");
                        cm.npc_SetSpecialAction("oid=1830668", 'normal', -1, 0);
                        cm.sendNormalTalk_Bottom("#face0#……", 37, 3003301, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face4#嘿，嘿嘿，草叶笛，草叶笛它……", 37, 3003301, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face4#重新复活了，它找回了原有的生命力！看来之前确实是需要月光！", 37, 3003301, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#靠月光~复活的草叶笛~即不是阳光，也不是星光，耶~", 37, 3003302, true, true);
                            } else {
                              if (status === V++) {
                                cm.setNpcSpecialActionReset("oid=1830668");
                                cm.npc_SetSpecialAction("oid=1830668", "normal_ani", -1, 0);
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/leaf", 200);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face4#这动听的声音，实在是万幸啊……万幸……我们还有希望……", 37, 3003301, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3#嘻嘻，我总觉得我们应该能够回到从前了！", 37, 3003301, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3#嘿嘿嘿，额，对了，难道精灵之树也有改变吗？好想赶紧去看一看！风精灵！带我们去精灵之树吧！", 37, 3003301, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#哟呼，好吧~！比风更快，比风更轻~！咻，让我们飞起来~", 37, 3003302, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.setNpcSpecialActionReset("oid=1830667");
                                          cm.npc_SetSpecialAction("oid=1830667", "wind", 1920, 0);
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/arcana/windOn", "oid=1830666"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/arcana/windOn"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/arcana/windOn", "oid=1830666"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/arcana/windOn"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                            cm.setNpcSpecialActionReset("oid=1830667");
                                            cm.npc_SetSpecialAction("oid=1830667", "wind3", 1920, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1900);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_LeaveField("oid=1830667");
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/arcana/windOn", "oid=1830666"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/arcana/windOn"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else if (status === V++) {
                                              cm.dispose();
                                              cm.warp(940200207, 0, true);
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