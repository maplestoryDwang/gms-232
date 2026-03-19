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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(3004114, "oid=3626796", 13, 45, 1, -37, 63, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3626796", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(4000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.effect_Text(["#fn黑体##fs18#几日后，诺特勒斯号"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
        cm.npc_SetForceMove("oid=3626796", 1, 10, 100);
        cm.sendNormalTalk_Bottom("#face0#来了啊，#h0#。", 37, 3003673, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#看到你，就让我想起首次航海的时候。", 37, 3003673, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#当时航海技术还不算发达，\r\n我曾在那时候就下定决心，无论如何都要出海。", 37, 3003673, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#然后抓住眼前桅杆的那一刻第一次感觉到了。", 37, 3003673, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#那就是真正的自由。", 37, 3003673, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#从那时起我便下定决心，只要是为了自由，我便愿意献出一切。", 37, 3003673, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#我们海盗是不会停止航海的。", 37, 3003673, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#好了，去下一个港口吧。", 37, 3003673, false, true);
                        } else {
                          if (status === V++) {
                            var O = cm.getJob();
                            if (Math.floor(O / 10) == 57) {
                              cm.sendNormalTalk_Bottom("从始至终都能视我这异乡人为手足，此间种种，我铭感五内。凯琳。", 57, 0, true, true);
                            } else {
                              cm.sendNormalTalk_Bottom("#face0#唧唧……唧唧……！", 37, 3004115, true, true);
                            }
                          } else {
                            if (status === V++) {
                              var O = cm.getJob();
                              if (Math.floor(O / 10) == 57) {
                                cm.sendNormalTalk_Bottom("用我们家乡的话来说，日后也要同舟共济了。", 57, 0, true, true);
                              } else {
                                cm.sendNormalTalk_Bottom("#face0#（似是很期待地鼓掌。） ", 37, 3004115, true, true);
                              }
                            } else {
                              if (status === V++) {
                                var O = cm.getJob();
                                if (Math.floor(O / 10) == 57) {
                                  cm.dispose();
                                  cm.warp(867140600, 0, false);
                                  cm.setInGameDirectionMode(false, true, false);
                                  cm.npc_LeaveField("oid=3626796");
                                  cm.npc_LeaveField("oid=3626796");
                                } else {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                }
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_Hero9(0, 3000);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                                              cm.eventSKill(0);
                                              cm.dispose();
                                              cm.warp(993120000, 5, false);
                                              cm.setInGameDirectionMode(false, true, false);
                                              cm.npc_LeaveField("oid=3626796");
                                              cm.npc_LeaveField("oid=3626796");
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