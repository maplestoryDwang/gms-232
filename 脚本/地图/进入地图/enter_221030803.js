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
      cm.Hidden_background("omega1", 1, 1, 0, 0);
      cm.Hidden_background("omega2", 1, 0, 0, 0);
      cm.Hidden_background("omega3", 1, 1, 0, 0);
      cm.setAmbience("SoundEff.img/blackHeaven/crusherStay", 30, 60);
      cm.userSetFieldFloating(221030803, 5, 5, 10);
      cm.fieldEffect_ScreenMsg("Map/Effect3.img/omegaSector/pink/0");
      cm.sendNormalTalk_Bottom("#face3##fs20##face3##fs20#只有这样……才能保护好#fs23#同伴#fs23#！", 37, 2052027, false, true);
      cm.curNodeEventEnd(true);
      cm.effect_PlayMusic("SoundEff.img/blackHeaven/explosion5");
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0##fs18#终于想起来了啊！！不，不是，不是这个。", 37, 2052010, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face3#挡，挡住了？！！这小家伙哪儿来那么大的力气？！！", 37, 2052008, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("可是即便如此！卡雄！！！碾压他们！！", 37, 2052008, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#阿琳！加油！！！不要退却！", 37, 2052010, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3##fs20#额！！我是绝对不会退却的啊啊啊啊！！！", 37, 2052027, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#呵呵，你这是在以卵击石，小丫头！", 37, 2052008, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#阿琳！不行！快躲开！", 37, 2052009, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3##fs25#额啊啊啊啊啊啊啊啊啊啊啊啊！", 37, 2052027, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#这怎么可能！冒险能量正在惊人地飙升中！", 37, 2052013, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3##fs25#无敌的冒险勇士来了！！！", 37, 2052027, true, true);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 300, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.Hidden_background("omega1", 1, 0, 0, 0);
                              cm.Hidden_background("omega2", 1, 1, 0, 0);
                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                              cm.sendNormalTalk_Bottom("#face1#阿琳！变身！！", 37, 2052009, false, true);
                              cm.effect_Voice("SoundEff.img/blackHeaven/explosion5", 100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/ACT1_bye/whiteback2/skeleton", "animation", '', ''], [1, 0, 1, 0, 0, 0, 0, 0]);
                                  cm.sendNormalTalk_Bottom("#face3#这不可能！", 37, 2052008, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    cm.effect_Voice("SoundEff.img/blackHeaven/cannonDie", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 5000, 0);
                                      cm.sendNormalTalk_Bottom("#face3#卡，卡雄已经过热了！再这样下去会爆的！！", 37, 2052008, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                        cm.effect_Voice("SoundEff.img/blackHeaven/explosion6", 100);
                                      } else if (status === V++) {
                                        cm.dispose();
                                        cm.warp(221030804, 0);
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