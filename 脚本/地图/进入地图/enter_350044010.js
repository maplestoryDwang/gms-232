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
      cm.setAmbience("Ambience.img/gravity", 100, 60);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1200, 0, 0, -100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(200);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("你们肯定以为自己已经取得了胜利吧？", 37, 1540470, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("你们现在可以尽情享受喜悦。\r\n不过，你们到底还能笑到什么时候呢？", 37, 1540470, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(6000, 1200, 6000, 0, -50);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("欢迎来到我的要塞，诸位。", 37, 1540470, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("好了……快来吧。#r黑色天堂已经准备好了。#k", 37, 1540470, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("嘿嘿嘿嘿……#fs20#咦嘿嘿嘿嘿！！", 37, 1540470, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(3500, 1400, 3500, 0, 10);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/tilt", 100);
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n\r\n#fs40#   Act 4.反击之信号弹\r\n\r\n                    完结。\r\n\r\n#fs20#(与联盟会场的摩柯搭话，即可以开始下一个Act。)", 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(4000);
                                        } else if (status === V++) {
                                          cm.updateInfoQuest(33315, "chapter1=1;chapter2=1");
                                          cm.dispose();
                                          cm.warp(913050010, 0, true);
                                          cm.inGameDirectionEvent_SetHideEffect(0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;