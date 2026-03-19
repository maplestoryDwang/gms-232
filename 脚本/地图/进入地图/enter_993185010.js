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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3004851, "oid=680066", -370, 519, 8, -420, -320, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=680066", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -631, 550);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -512, 635);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3#我下定决心了。", 36, 3004851, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("嗯？什么？", 56, 0, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#在黑色天堂的时候，我看见#h0#你站在女皇陛下身边，\r\n就暗暗下决心，将来一定要和#h0#你并肩战斗。", 36, 3004851, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("额，是吗？", 56, 0, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3#嗯，同僚们知道这事后，把我狠狠嘲笑了一番。\r\n我哪有机会和勇士说上话哦。", 36, 3004851, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("……。", 56, 0, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#但后来经过我不懈的努力，直到被提拔加入#b神秘河先遣队#k，\r\n才终于得到了大家的认可。", 36, 3004851, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#只要认真对待这次作战，相信休麦也会对我改观的。", 36, 3004851, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("态度不错。", 56, 0, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#我会让他亲口把那些烦恼全都说出来的。\r\n等着瞧吧。", 36, 3004851, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("……。", 56, 0, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("(是不是有点歪了……)", 56, 0, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#啊，#h0#！这个，是不是休麦说的电池？", 36, 3004851, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#我试着掏出来。\r\n等等，奇怪……怎么感觉很烫……", 36, 3004851, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#千万小心！", 36, 3004851, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1", "oid=0"], [0, -395, 549, 1, 0, 1, 1, 0, 0]);
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion5", 100);
                                          cm.userSetFieldFloating(993185010, 1, 1, 3);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.userSetFieldFloating(993185010, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#……。", 36, 3004851, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("……。", 56, 0, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#快，快点回去吧。", 36, 3004851, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#乌贼们看到光，开始聚拢过来了。", 36, 3004851, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("……。", 56, 0, true, true, 1);
                                                        } else if (status === V++) {
                                                          cm.npc_LeaveField("oid=680066");
                                                          cm.dispose();
                                                          cm.warp(993185011, 0, false);
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