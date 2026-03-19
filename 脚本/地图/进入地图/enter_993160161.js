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
      cm.npc_ChangeController(3001697, "oid=430793", 223, 0, 7, 173, 273, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.npc_ChangeController(3001651, "oid=7870566", -400, -34, 5, -450, -350, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=7870566", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -219, -24);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 220, -24);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=7870566", 1, 240, 180);
              cm.inGameDirectionEvent_同时移动镜头和人(2, 240);
              cm.inGameDirectionEvent_AskAnswerTime(4000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#不行，身子太沉了……", 37, 3001697, false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#哎，哎哟喂，我的腰啊……", 37, 3001697, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#……看来好像是磁铁怪黏上了那个白外星人司令啊。", 37, 3001651, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#一般来说，正常情况不应该是让宿主变得更强吗？这家伙可真古怪……", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#例外总是存在的。", 37, 3001651, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#总之这一次也只要打倒那个叫白外星人司令的家伙，\r\n再回收怪物就可以了吧？", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#看样子你已经熟门熟路了嘛。", 37, 3001651, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face5#好，那就走咯！", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                      } else if (status === V++) {
                                        cm.warp(993161600, 0, false);
                                        cm.setStandAloneMode(false);
                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.playerMessage(5, "为了回收饕餮的魂魄，需要击退怪物。");
                                        cm.getTopMsgFont("为了回收饕餮的魂魄，必须击退怪物。", 3, 20, 4, 0, 0);
                                        cm.npc_LeaveField("oid=7870566");
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
}