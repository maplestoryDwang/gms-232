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
      if (cm.getQuestStatus(39801) == 0 || cm.getQuestStatus(39803) > 0) {
        cm.dispose();
        return;
      }
      cm.npc_ChangeController(3004435, "oid=507736", -160, -125, 2, -210, -110, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=507736", "summon", 0, 0);
      cm.npc_ChangeController(3004431, "oid=507737", 118, -175, 3, 68, 168, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=507737", "summon", 0, 0);
      cm.npc_ChangeController(3004436, 'oid=507738', -250, -125, 2, -300, -200, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=507738', "summon", 0, 0);
      cm.npc_ChangeController(3004437, "oid=507739", 380, -125, 3, 330, 430, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=507739", "summon", 0, 0);
      cm.npc_ChangeController(3004437, 'oid=507740', 450, -125, 3, 400, 500, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=507740", "summon", 0, 0);
      cm.forceCompleteQuest(39802);
      cm.gainExp(25 * Math.pow(cm.getLevel(), 3));
      cm.updateInfoQuest(39800, "01=h0;02=h1;11=h1");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -5, -314);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2500);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayBGM("Bgm53/SanctuaryOfMitra", 0, 0);
          cm.inGameDirectionEvent_Monologue("很久以前，随着超越者的诞生，许多神因此销声匿迹。", 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("教团崩毁后，祭司们便四散各地。", 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("过往的荣耀已逝，世界充斥着战火，混沌和哀嚎。", 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("痛失至爱之人，怨憎世界之人，立誓雪仇之人。", 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("所有人殷切盼望着神能再次降临，他们怀着这样的愿望，齐聚塞尔提乌……", 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#我们到了。是圣地塞尔提乌。", 37, 3004433, false, true);
                          cm.effect_Voice("Voice5.img/CH2/Carlyle/9", 128);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, -5, -140);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#果然……配得上圣地的称呼。", 37, 3003675, false, true);
                                  cm.effect_Voice("Voice5.img/CH2/Checky/5", 128);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("这里的地貌好像有些奇怪……", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#你们说到点子上了。\r\n这是人为，不，是在神的作用下，形成的地形。", 37, 3004433, true, true);
                                      cm.effect_Voice("Voice5.img/CH2/Carlyle/10", 128);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#也就是说，有神的力量参与其中吗？", 37, 3004431, true, true);
                                        cm.effect_Voice("Voice5.img/CH2/Idea/10", 128);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#是的。这座瀑布被推测是#r古代战争#k留下的痕迹。\r\n据说是神的剑劈开大地造成的，所以也被称为大地之伤。", 37, 3004433, true, true);
                                          cm.effect_Voice("Voice5.img/CH2/Carlyle/11", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#嗯……果然……", 37, 3004431, true, true);
                                            cm.effect_Voice("Voice5.img/CH2/Idea/11", 128);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#所以这里才成了圣地呀？", 37, 3003675, true, true);
                                              cm.effect_Voice("Voice5.img/CH2/Checky/6", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#差不多，但事实稍有差别。\r\n圣地塞尔提乌意味着#r神之时代#k的终结。", 37, 3004433, true, true);
                                                cm.effect_Voice("Voice5.img/CH2/Carlyle/12", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#坚持抗战到最后一刻的最后一批#r古代神#k，在这里迎接了祂们的死亡。", 37, 3004433, true, true);
                                                  cm.effect_Voice("Voice5.img/CH2/Carlyle/13", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#从此古代神的时代告终，超越者的时代拉开了帷幕。", 37, 3004433, true, true);
                                                    cm.effect_Voice("Voice5.img/CH2/Carlyle/14", 128);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#嗯……看来在圣地有很多要学习的东西啊。", 37, 3004431, true, true);
                                                      cm.effect_Voice("Voice5.img/CH2/Idea/12", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("这里就是最后的古代神逝去的地方……", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#哈哈，当然，确切的地点肯定不是这里。\r\n身为不灭者的众神也不可能真的死掉。", 37, 3004433, true, true);
                                                          cm.effect_Voice("Voice5.img/CH2/Carlyle/15", 128);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#依我看，确切的地点应该在……", 37, 3004433, true, true);
                                                            cm.effect_Voice("Voice5.img/CH2/Carlyle/16", 128);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_ChangeController(3004437, 'oid=508307', 326, -125, 3, 276, 376, 1, true, 1500, false);
                                                              cm.npc_SetSpecialAction('oid=508307', "summon", 0, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#卡莱尔殿下！！有更多敌人涌过来了。", 37, 3004437, false, true);
                                                                cm.effect_Voice("Voice5.img/CH2/Knight/4", 128);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face1#可恶，都涌到这里来了？！", 37, 3004433, true, true);
                                                                  cm.effect_Voice("Voice5.img/CH2/Carlyle/17", 128);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
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
                                                                        } else if (status === V++) {
                                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                          cm.eventSKill(0);
                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                          cm.setStandAloneMode(false);
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