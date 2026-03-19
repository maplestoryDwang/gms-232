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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_同时移动镜头和人(2, 1000);
      cm.sendNewEffects(13, [3000, 2000, 0]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face8##b不要……不要啊！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face6##b为什么总是在我不在的时候……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face8##b千万别出什么事！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.onTeleport(0, 3, cm.getPlayer().getId(), -380, -88);
                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                  cm.sendNewEffects(17, [0, 1000, 2000, -380, 0]);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_ForcedFlip(-1);
                        cm.inGameDirectionEvent_AskAnswerTime(600);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_ForcedFlip(1);
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_ForcedFlip(-1);
                            cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
                            cm.sendNormalTalk_Bottom("#face8##b素笑！！！！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face8##b师兄！师姐！！！！！！！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face5##b……为、为什么又这么安静……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/scream", 100);
                                    cm.sendNormalTalk_Bottom("呃啊啊啊啊！！！！！！", 37, 9401305, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_ForcedFlip(1);
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face3##b!!!", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face3##b是后山！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.forceStartQuest(65971, '');
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(900);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNewEffects(14, [0, 2000, 1000]);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNewEffects(19, [0]);
                                                } else if (status === V++) {
                                                  cm.dispose();
                                                  cm.warp(875005200, 0, false);
                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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