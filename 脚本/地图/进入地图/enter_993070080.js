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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 900, -450);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.userSetFieldFloating(993070080, 10, 10, 10);
          cm.setAmbience("Ambience.img/verdel_wind1", 100, 50);
          cm.teachSkill(80002626, 0, -1);
          cm.teachSkill(80002626, 1, 0);
          cm.gainSkillBuff(80002626);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.userSetFieldFloating(993070080, 10, 10, 1);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.setAmbience("SoundEff.img/BM3/boomb", 100, 60);
                cm.teachSkill(80002627, 0, -1);
                cm.teachSkill(80002627, 1, 0);
                cm.gainSkillBuff(80002627);
                cm.sendNormalTalk_Bottom("呃……这样下去的话……", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#别放弃！", 37, 3003409, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("飞鱼？？！！！！", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1300);
                    } else {
                      if (status === V++) {
                        cm.playSoundEffDirectly("SoundEff.img/BM3/boomb");
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/10"], [0, 894, -400, 1, 0, 1, 1, 0]);
                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1000, 0);
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion10", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.teachSkill(80002624, 0, -1);
                          cm.teachSkill(80002624, 1, 0);
                          cm.gainSkillBuff(80002624);
                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('飞鱼！！', 57, 0, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#抓紧了！！好，出发！！", 37, 3003409, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.teachSkill(80002624, -1, 0);
                                      cm.teachSkill(80002626, -1, 0);
                                      cm.teachSkill(80002627, -1, 0);
                                      cm.userSetFieldFloating(993070080, 0, 0, 0);
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
                                              cm.setInGameDirectionMode(false, true, false);
                                              cm.dispose();
                                              cm.warp(993070081, 0, true);
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