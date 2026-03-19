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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.setAmbience("Ambience.img/secretmissionbase", 100, 60);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("咳咳……我居然会被那个毛孩子给欺负！", 37, 1540928, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("哎哟，你还活着啊？", 37, 1540929, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("幸好我提前将生命力转移到了这里。\r\n谁能想到那个家伙能把我逼到如此窘境……！", 37, 1540928, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("别担心，就算没有你，一切也会顺利进行的。", 37, 1540929, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("！！你这是什么意思？难道你们在进行着什么我所不知道的事情吗？", 37, 1540928, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("你以为那个伟大的人难道还看不出你的心思吗？\r\n你就当是这段时间你因嫉妒而蒙蔽了双眼所遭受的惩罚吧。", 37, 1540929, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('……！', 37, 1540928, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("伟大的人啊，现在一切结果都已经如你所愿了。", 37, 1540929, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("时间超越者支离破碎，生命超越者分散到了世界各地，现在请下达下一个命令吧。", 37, 1540929, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                            cm.effect_Text(["#r#fn黑体##fs26#时候到了。"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                              cm.effect_Voice("SoundEff.img/HofM/act4/bm", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("！！这就表示……？！", 37, 1540929, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  cm.effect_Text(["#r#fn黑体##fs26#允许他们来我这里。"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(4500);
                                    cm.effect_Voice("SoundEff.img/HofM/act4/bm2", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.playVideoByScript("BlackMage.avi");
                                    } else if (status === V++) {
                                      cm.dispose();
                                      cm.onActionBarResult(6, -1);
                                      cm.mapleHeroBecomeNpc(-1, 1);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;