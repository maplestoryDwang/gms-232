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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(3500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face3#该隐那家伙……谁能想到都那样了居然还能耍小聪明……", 36, 3004904, false, true, 1);
        cm.effect_Voice("Voice6.img/kain/12/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/1', 100);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#现在可不能傻愣着，搞不好连我们都会被除掉。", 36, 3004911, true, true, 1);
          cm.effect_Voice("Voice6.img/kain/12/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#老大一定是看出来了，刚刚那就是警告。", 36, 3004910, true, true, 1);
            cm.effect_Voice("Voice6.img/kain/12/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#泄露手册的家伙怎么样了？", 36, 3004904, true, true, 1);
              cm.effect_Voice("Voice6.img/kain/12/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#你大可以放心，那家伙已经解决了。", 36, 3004911, true, true, 1);
                cm.effect_Voice("Voice6.img/kain/12/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#你以为这就是能让人放心的理由了？那些家伙就算没有证据，也可以随时了断了我们，打从一开始这就不是一场势均力敌的比试。", 36, 3004910, true, true, 1);
                  cm.effect_Voice("Voice6.img/kain/12/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('#face2#……', 36, 3004904, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#不、不会的，因为……", 36, 3004904, true, true, 1);
                      cm.effect_Voice("Voice6.img/kain/12/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#毕竟老大终究也和我们处境相同。", 36, 3004904, false, true, 1);
                          cm.effect_Voice("Voice6.img/kain/12/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/8', 100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#什么？", 36, 3004910, false, true, 1);
                              cm.effect_Voice("Voice6.img/kain/12/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/9', 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#老大刚刚挥剑的时候，我可看得很清楚，\r\n在老大脖子上的那个……", 36, 3004904, true, true, 1);
                                cm.effect_Voice("Voice6.img/kain/12/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/10", 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/kain/illust/6/2", 'cc'], [1, 0, 0, 0, 1500, -1, 0, 0, -1]);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face4#那个项圈。", 36, 3004904, false, true, 1);
                                      cm.effect_Voice("Voice6.img/kain/12/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/11', 100);
                                    } else if (status === V++) {
                                      cm.dispose();
                                      cm.warp(993164016, 0, true);
                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.setStandAloneMode(false);
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