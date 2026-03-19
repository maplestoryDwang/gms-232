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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 700, 0, 385, -130);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1000, 5000, 385, -50);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 50, 0, 0, 0, 1300, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#在制作你之前,我还是小孩子的时候……每年都会去看那束神秘的光。", 37, 3001351, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#天神祭的造型物不过是以水晶魔力为光源的光之集合体。\r\n你别夸大其词。", 37, 3001300, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#嗯……\r\n其实以前天神祭对我而言,不过是一场绚丽的表演。", 37, 3001351, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#平民翼人的生活……有点苦闷,也不会找什么乐子……", 37, 3001351, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#可阿加特大人、教授、士兵,甚至是年幼的学生们……", 37, 3001351, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#我终于知道,原来有这么多人为了延续平民翼人的命脉而努力。", 37, 3001351, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(7000, 0, 1000, 7000, 385, -300);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#如果真像教授所说……天神祭的光可以触碰到平民翼人之神……？", 37, 3001351, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#如果我的光可以给平民翼人的生活带来转机……？\r\n我甚至曾这么想过……", 37, 3001351, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#分析结果显示,平民翼人之神存在的可能性和其感受到天神祭之光的可能性微乎其微。", 37, 3001300, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3#喂……利奥……我正说正事呢……真是的……", 37, 3001351, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_SetHideEffect(0);
                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                    } else if (status === V++) {
                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.dispose();
                                      cm.warp(402000529, 1, true);
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