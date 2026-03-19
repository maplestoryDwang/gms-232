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
      cm.npc_ChangeController(3002111, "oid=258434", 758, -53, 160, 708, 808, 1, false, false);
      cm.npc_ChangeController(3002112, 'oid=258435', 673, 6, 290, 623, 723, 0, false, false);
      cm.npc_ChangeController(3002113, "oid=258436", 841, -8, 289, 791, 891, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(10000, 1000, 10000, 762, -28);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("格兰蒂斯竟然有这种地方。", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("是村民们吗？", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#昨天向#b狐神#k祈祷的时候……\r\n突然听到了#b狐神的声音#k吧！吓了我一大跳！", 37, 3002112, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#天哪，天哪！狐神给我们启示了！", 37, 3002113, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#但是那个声音，莫名其妙地……让我跳#b狐狸舞#k！", 37, 3002112, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#那是真的吗？突然让你跳#b狐狸舞#k……", 37, 3002111, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#我觉得很奇怪，一边流着汗，一边跳舞……\r\n就在这时，突然听到了#b嘻嘻嘻的声音#k！", 37, 3002112, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(2000, 1500, 2000, 762, 40);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#这时我才发现，原来又是#b玛鲁搞的恶作剧#k！\r\n他说这是尖耳守备队的#b特别体力训练#k！", 37, 3002112, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0##b玛鲁那家伙！#k这都第几次了！\r\n也搞不清那家伙#b到底是守备队，还是惹祸精#k。要是能消停一下就好了！", 37, 3002111, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#别提了！\r\n上次他说是#b胆量训练#k，背着我家孩子到处乱跑！", 37, 3002113, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#天哪，你没揍他一顿吗？", 37, 3002111, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#每次这种时候，他就会一溜烟地#b逃到#k#b狐狸树#k上去！气死我了。", 37, 3002113, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#那家伙没事干的时候，经常会爬到#b神圣的狐狸树#k上去！\r\n要是惹怒了狐神，该怎么办？唉……", 37, 3002112, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#唉，玛鲁真是#b让人头疼#k。", 37, 3002113, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("那个叫#b玛鲁#k的家伙，好像是个惹祸精……", 57, 0, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("看来要想见到他，应该去#b狐狸树#k那边看看。", 57, 0, true, true);
                                                    } else if (status === V++) {
                                                      cm.dispose();
                                                      cm.warp(410000100, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;