var status = -1;
var selectionLog = [];
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
      cm.npc_ChangeController(2074102, "oid=1943191", 269, -11, 17, 219, 319, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1943191", 'summon', 0, 0);
      cm.npc_ChangeController(2074100, "oid=1943192", 147, -11, 15, 97, 197, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1943192", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 178, 82);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#威兹大叔？\r\n大叔！", 37, 2074100, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1943191"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("啊，哪里！哪里！哪儿来的少女？", 37, 2074102, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=1943191", 1, 150, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#大叔，你去哪儿？\r\n我在这里！", 37, 2074100, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 2000, 400, 82);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_ProcessOnOffLayer('back', "Map/Effect2.img/downtown2015/illust/19", 0, 1000, 0, 0, 9, 4, 1);
                            cm.sendNormalTalk_Bottom("#face2#那，那个……\r\n我？", 37, 2074100, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("这孩子？嗯……第一次见嘛，\r\n小朋友，小朋友！振作点哦。", 37, 2074102, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face3#额，啊……突然脑子里幻听了……", 37, 2074100, true, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=1943192", "pain2", -1, 1);
                                  cm.sendNormalTalk_Bottom("#b(就算人类说你是妖怪，对你感到害怕……\r\n你也不要太恨人类……)", 37, 2074042, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#b(啊！是妖怪！妖怪！)", 37, 2074043, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#b(额啊！还不给我滚开，是妖怪九尾狐！)", 37, 2074044, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#b(妖，妖怪九尾狐！)", 37, 2074045, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#……妖怪九尾狐……？", 37, 2074100, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face8#……妖……", 37, 2074100, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("嗯？你说什么？", 37, 2074102, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face8#……小……可爱……", 37, 2074100, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("小可爱？那是你的名字吗？", 37, 2074102, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("孩子，孩子，你清醒点！\r\n该死……看来得先带回去了。", 37, 2074102, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_ProcessOnOffLayer("back", '', 2, 1000, 0, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#……小可爱，\r\n妖怪……九尾狐……", 37, 2074100, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face2#我，难道？……", 37, 2074100, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 300, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else if (status === V++) {
                                                                cm.dispose();
                                                                cm.warp(224000079, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;