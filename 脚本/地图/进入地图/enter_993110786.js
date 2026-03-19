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
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -914, 169);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.npc_ChangeController(3004112, "oid=2425600", -672, 146, 11, -722, -622, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2425600", 'summon', 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1500, 4000, -540, 169);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(4000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("是啊，我们真的一同经历了许许多多呢。", 2, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("今后也不会停下脚步的。", 2, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1800);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("谢谢……还有，我一直都会在这里，等你归来。", 4, 3004112, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("很期待日后你会带来怎样的故事。", 4, 3004112, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("下次见面时，我们也在这里集合吧？", 4, 3004112, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("是啊，这里……", 2, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("在这枫树下……", 2, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -540, 169);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1500, 5000, -540, -380);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        var O = cm.getJob();
                                        if (Math.floor(O / 10) == 43) {
                                          cm.dispose();
                                          cm.warp(993110768, 0, false);
                                          cm.setInGameDirectionMode(false, true, false);
                                          cm.npc_LeaveField("oid=2425600");
                                          cm.npc_LeaveField("oid=2425600");
                                        } else {
                                          if (Math.floor(O / 10) == 33) {
                                            cm.dispose();
                                            cm.warp(993110769, 0, false);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.npc_LeaveField("oid=2425600");
                                            cm.npc_LeaveField("oid=2425600");
                                          } else if (Math.floor(O / 10) == 51 || Math.floor(O / 10) == 52 || Math.floor(O / 10) == 53) {
                                            cm.dispose();
                                            cm.warp(993110766, 0, false);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.npc_LeaveField("oid=2425600");
                                            cm.npc_LeaveField("oid=2425600");
                                          } else {
                                            cm.fieldEffect_Hero9(0, 3000);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          }
                                        }
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("喳喳！！", 4, 3004150, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("嗯？摩柯？又有什么事？", 2, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("(摩柯递过来一封信。)", 4, 3004150, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("啊！发件人是女皇陛下。", 2, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                  cm.sendNormalTalk("亲爱的#h0#，\r\n\r\n不知你近来过得可好，在历经数百年的战争消弭之后，我和我的骑士团正过着平静又繁忙的日子。\r\n\r\n（……中间省略）\r\n\r\n还请你谅解，事关重大，我没办法在信中详述，希望能尽快在#r前哨基地#k见一面。\r\n\r\n\t\t\t\t\t\t\t\t\t女皇#b希纳斯#k敬上。", 4, 3003916, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("该不会是出了什么事吧？赶紧过去看看吧。", 2, 0, true, true);
                                                  } else if (status === V++) {
                                                    cm.forceStartQuest(39701, '');
                                                    cm.dispose();
                                                    cm.warp(993120000, 5, false);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.npc_LeaveField("oid=519285");
                                                    cm.npc_LeaveField('oid=519285');
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