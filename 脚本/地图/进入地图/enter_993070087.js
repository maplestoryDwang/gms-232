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
      cm.teachSkill(80001037, 1, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 900, -450);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.teachSkill(80002624, 0, -1);
        cm.teachSkill(80002624, 1, 0);
        cm.gainSkillBuff(80002624);
        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#崇高的牺牲……不知道这苍白的一句话，能否安慰逝去的人。", 37, 3003751, false, true);
          cm.effect_Voice("Voice4.img/BM3/nine/59", 128);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#……", 37, 3003750, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#等等……等一下。好像有点奇怪。", 37, 3003672, true, true);
              cm.effect_Voice("Voice4.img/BM3/zig/23", 128);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#刚才好像有什么东西从巨人心脏中出来了……？！", 37, 3003672, true, true);
                cm.effect_Voice("Voice4.img/BM3/zig/24", 128);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_ForcedFlip(1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.userSetFieldFloating(993070087, 10, 10, 10);
                    cm.setAmbience("Ambience.img/verdel_wind1", 100, 50);
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayBGM("Bgm49/FerociousBattlefield_ShortEdit", 0, 0);
                        cm.sendNormalTalk_Bottom("#face0##h0#……？！！", 37, 3003750, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#快用炮击支援！！", 37, 3003751, false, true);
                            cm.effect_Voice("Voice4.img/BM3/nine/60", 128);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#全体舰队开火！！！", 37, 3003750, true, true);
                              cm.effect_Voice("Voice4.img/BM3/sig/26", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#战舰发射！！", 37, 3003672, true, true);
                                cm.effect_Voice("Voice4.img/BM3/zig/26", 128);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/cannon", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/cannon", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/cannon", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/cannon", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/cannon", 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/cannon", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("趁现在！！回大伙儿身边去吧！！", 57, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('#face0#嗯！！', 37, 3003409, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else if (status === V++) {
                                                    cm.dispose();
                                                    cm.warp(993070088, 0, false);
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
}