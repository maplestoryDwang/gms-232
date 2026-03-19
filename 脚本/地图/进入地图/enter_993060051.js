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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -390, 320);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.forceStartQuest(35157, '');
        cm.Hidden_background("eye", 1, 0, 0, 0);
        cm.Hidden_background('c0', 1, 1, 0, 0);
        cm.Hidden_background('c1', 1, 1, 0, 0);
        cm.Hidden_background('c2', 1, 1, 0, 0);
        cm.Hidden_background('c3', 1, 1, 0, 0);
        cm.Hidden_background('c4', 1, 1, 0, 0);
        cm.Hidden_background('c5', 1, 1, 0, 0);
        cm.Hidden_background('c6', 1, 1, 0, 0);
        cm.Hidden_background('c7', 1, 1, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.userSetFieldFloating(993060051, 3, 3, 10);
          cm.sendNormalTalk_Bottom("#face0#呃……呃……无数双眼睛……无数条锁链……", 37, 3003617, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(2, 550);
            cm.userSetFieldFloating(993060051, 0, 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 50, 320);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.userSetFieldFloating(993060051, 3, 3, 10);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("（这就是缠住船的锁链。必须尽快把它斩断，才能救出所有人。）", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_QTE(0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_OneTimeAction(7, 0);
                        cm.userSetFieldFloating(993060051, 10, 10, 10);
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Falldown", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.userSetFieldFloating(993060051, 3, 3, 10);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/bm3", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("（成功了。锁链碎裂，只留下了残骸。\r\n但是无数的锁链……无数双眼睛，到底是……）", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.forceForfeitQuest(35157);
                                    cm.forceForfeitQuest(35157);
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
                                          cm.dispose();
                                          cm.warp(993060052, 0, false);
                                          cm.setStandAloneMode(false);
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