var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#哇！这样用来扔风筝的鞋子应该够了吧？", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face6#哈哈，你看这个！鞋子超宽松的！", 36, 3005100, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#说真的，不过是一些微不足道的东西，你也能这么开心呢。", 36, 3005102, true, true, 1);
        } else if (status === v++) {
          cm.forceStartQuest(36206, '');
          cm.dispose();
          cm.dispose();
        }
      }
    }
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 730, 200);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 730, 200);
    } else {
      if (status === v++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === v++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === v++) {
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === v++) {
              cm.inGameDirectionEvent_QTE(2);
            } else {
              if (status === v++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === v++) {
                  cm.inGameDirectionEvent_OneTimeAction(7, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === v++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/hoyoung/do_hit", "oid=0"], [0, 800, -15, 1, 10000, 1, 1, 0, 0]);
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/urus/hardHit", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#哎呀，好像纹丝不动呢。", 36, 3005100, false, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#没事的！重新试试看吧！", 36, 3005100, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.inGameDirectionEvent_PushScaleInfo(800, 0, 2000, 800, 765, 150);
                        } else {
                          if (status === v++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === v++) {
                              cm.inGameDirectionEvent_QTE(2);
                            } else {
                              if (status === v++) {
                                cm.inGameDirectionEvent_AskAnswerTime(600);
                              } else {
                                if (status === v++) {
                                  cm.inGameDirectionEvent_OneTimeAction(7, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === v++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/hoyoung/do_hit", "oid=0"], [0, 800, -45, 1, 10000, 1, 1, 0, 0]);
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/urus/hardHit", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === v++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/hoyoung/do_hit", 'oid=0'], [0, 770, -10, 1, 10000, 1, 1, 0, 0]);
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/urus/userHit", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === v++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/hoyoung/do_hit", 'oid=0'], [0, 830, 5, 1, 10000, 1, 1, 0, 0]);
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/urus/midHit", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk_Bottom("#face0#我怎么说的来着？都缠成这样了，要是不直接爬上去，是很难将风筝解开的。", 36, 3005102, false, true, 1);
                                        } else {
                                          if (status === v++) {
                                            cm.sendNormalTalk_Bottom("#face1#呜……呜呜……", 36, 3005115, true, true, 1);
                                          } else {
                                            if (status === v++) {
                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                            } else {
                                              if (status === v++) {
                                                cm.inGameDirectionEvent_Unknown9(1000);
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else if (status === v++) {
                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.setStandAloneMode(false);
                                                cm.forceCompleteQuest(36206);
                                                cm.gainExp(376);
                                                cm.gainExp(1243);
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
      }
    }
  }
}