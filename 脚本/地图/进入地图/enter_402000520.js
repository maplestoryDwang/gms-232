var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  if (cm.getInfoQuest(34801) == "019=1;hunt1=1;020=1;021=1;exp=1") {
    action34801(f, E, e);
  } else {
    cm.dispose();
  }
}
function action34801(f, E, e) {
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
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 2100, -285);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(3001300, "oid=912544", 657, -4, 14, 607, 707, 1, true, 0, false);
            cm.npc_SetSpecialAction('oid=912544', 'summon', 0, 0);
            cm.npc_setForceFlip("oid=912544", 1);
            cm.inGameDirectionEvent_AskAnswerTime(100);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_PushScaleInfo(6000, 0, 1500, 6000, 850, 65);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.effect_REPEAT("Effect/Direction14.img/illium/text/3", 1, 1, 1, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                  } else {
                    if (status === V++) {
                      cm.effect_REPEAT("Effect/Direction14.img/illium/text/3", 1, 0, 0, 0, 0);
                      cm.sendNormalTalk_Bottom("#face3#利奥……我好紧张啊……", 37, 3001351, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3##b水晶学院……#k我能适应那里吗？", 37, 3001351, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0##b工程师出身,魔法能力平平#k,再加上#b社交能力不高#k,综合来看,前景不太乐观啊。", 37, 3001300, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face4#……我怎么会想到问你啊。谢啦,谢谢你啊……呃啊……", 37, 3001351, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#伊利温,你来了。", 37, 3001301, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, 1220, 65);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.npc_ChangeController(3001301, "oid=912546", 1381, 27, 36, 1331, 1431, 1, true, 0, false);
                                    cm.npc_SetSpecialAction("oid=912546", 'summon', 0, 0);
                                    cm.fieldEffect_PlayFieldSound("Sound/Skill.img/152001004/Use", 100);
                                    cm.npc_SetSpecialAction("oid=912546", "appear", 0, 1);
                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 350);
                                    cm.npc_SetForceMove('oid=912544', 1, 350, 150);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#欢迎你来到水晶学院。先进入校园吧。", 37, 3001301, false, true, 1);
                                    } else if (status === V++) {
                                      cm.updateInfoQuest(34801, "019=1;hunt1=1;gate=1;020=1;021=1;exp=1");
                                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                      cm.npc_LeaveField("oid=912546");
                                      cm.npc_LeaveField("oid=912544");
                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                      cm.setStandAloneMode(false);
                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
                }
              }
            }
          }
        }
      }
    }
  }
}