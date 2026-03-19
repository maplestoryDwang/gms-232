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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(600);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(3001300, "oid=939218", -1950, 50, 22, -2000, -1900, 1, true, 0, false);
        cm.npc_SetSpecialAction('oid=939218', "summon", 0, 0);
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.inGameDirectionEvent_PushMoveInfo(0, 0, -3000, -600);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3000);
            cm.effect_Text(["#fn黑体##fs18#隐藏的平民翼人村,阿叙隆", ''], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(0, 100, -1950, 50);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(6000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#后来平民翼人……", 37, 3001300, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#平民翼人消除了阶级文化,分为了地位平等的三个领域吧？", 37, 3001351, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#嗯,天生没有魔法能力的人通过使用水晶以外的矿石,增强技术……", 37, 3001300, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face4#好。知道了,这样应该就足够了……", 37, 3001351, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#说到‘平民翼人最后一战’,就要追溯到几十年以前……", 37, 3001300, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(600);
                            } else {
                              if (status === V++) {
                                cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 1000, 1, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                cm.sendNormalTalk_Bottom("#face0#利奥……", 37, 3001351, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(600);
                                } else {
                                  if (status === V++) {
                                    cm.effect_NormalSpeechBalloon('?', 1, 0, 0, 1000, 1, 0, -10, 0, 4, 3001300, null, cm.getPlayer().getId());
                                    cm.sendNormalTalk_Bottom("#face0#是,主人。", 37, 3001300, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#你是想说……被打败的平民翼人幸存者利用水晶门悄悄生活在这里吧？这我知道啊。", 37, 3001351, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face4#那个……我们平民翼人为什么要隐居,除了这种不痛不痒的问题,你不觉得太敷衍了吗？", 37, 3001351, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#为了了解得更透彻,我们有必要以史实为根据……", 37, 3001300, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_ForcedFlip(-1);
                                            cm.inGameDirectionEvent_同时移动镜头和人(1, 150);
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_ForcedFlip(1);
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#来,快去找配件吧！不能继续待在这傻等了～", 37, 3001351, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#是,主人。", 37, 3001300, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                                    cm.npc_SetForceMove('oid=939218', -1, 350, 200);
                                                    cm.inGameDirectionEvent_同时移动镜头和人(1, 1000);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_LeaveField('oid=939218');
                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                      } else if (status === V++) {
                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                        cm.dispose();
                                                        cm.warp(940202009, 0, true);
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
  }
}