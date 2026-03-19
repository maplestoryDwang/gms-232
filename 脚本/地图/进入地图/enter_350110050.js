var status = -1;
var selectionLog = [];
function action(N, m, F) {
  if (status == 0 && N == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = F;
  var j = -1;
  if (status <= j++) {
    cm.dispose();
  } else {
    if (status === j++) {
      cm.spawnMobLimit(8240132, 1, 471, 399, 100);
      cm.spawnMobLimit(8240132, 1, 225, 195, 100);
      cm.spawnMobLimit(8240132, 1, 312, 399, 100);
      cm.spawnMobLimit(8240132, 1, 330, 195, 100);
      cm.spawnMobLimit(8240132, 1, -709, 104, 100);
      cm.spawnMobLimit(8240132, 1, -707, 267, 100);
      cm.spawnMobLimit(8240132, 1, -135, 67, 100);
      cm.spawnMobLimit(8240132, 1, -593, 267, 100);
      cm.spawnMobLimit(8240132, 1, -644, 104, 100);
      cm.spawnMobLimit(8240132, 1, 183, 399, 100);
      cm.spawnMobLimit(8240132, 1, 175, 67, 100);
      cm.spawnMobLimit(8240132, 1, 53, 399, 100);
      cm.spawnMobLimit(8240132, 1, -106, 399, 100);
      cm.spawnMobLimit(8240132, 1, 136, 195, 100);
      cm.spawnMobLimit(8240132, 1, -307, 194, 100);
      cm.spawnMobLimit(8240132, 1, -21, 67, 100);
      cm.spawnMobLimit(8240132, 1, -206, 67, 100);
      cm.spawnMobLimit(8240132, 1, -809, 267, 100);
      cm.spawnMobLimit(8240132, 1, -804, 104, 100);
      cm.showMapleHero();
      cm.fieldEffect_复合图片动画(["Map/Effect2.img/Blizzard/skeleton", "normal", '', ''], [1, 1, 0, 18000, 0, 0, 0, 0]);
      cm.setAmbience("Ambience.img/blizzard_soft", 80, 60);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -1134, 365);
      cm.curNodeEventEnd(true);
    } else {
      if (status === j++) {
        cm.inGameDirectionEvent_MoveAction(2);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === j++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.sendNormalTalk_Bottom("#face1#啊，是暴风雪！小心点！", 37, 1540807, false, true, 1, 2000);
        } else {
          if (status === j++) {
            cm.inGameDirectionEvent_MoveAction(4);
            cm.fieldEffect_复合图片动画(["Map/Effect2.img/Blizzard/skeleton", "normal2", '', ''], [1, 1, 0, 2000, 0, 0, 0, 0]);
            cm.playSoundEffDirectly("Ambience.img/blizzard_soft");
            cm.fieldEffect_PlayFieldSound("Sound/Ambience.img/blizzard_strong", 100);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === j++) {
              cm.inGameDirectionEvent_MoveAction(0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === j++) {
                cm.setAmbience("Ambience.img/blizzard_soft", 80, 60);
                cm.sendNormalTalk_Bottom("主人，暴风雪来袭之前，#b似乎雪会暂停一会儿！#k \r\n我们看准时机，#b趴下#k藏好，就能避免冰冻！", 37, 1540807, false, true, 1, 3000);
              } else {
                if (status === j++) {
                  cm.sendNormalTalk_Bottom("等暴风雪来袭，怪物都会被冻住，这样打猎也会更方便。", 37, 1540807, true, true, 1, 3000);
                } else {
                  if (status === j++) {
                    cm.sendNormalTalk_Bottom("别忘了，当我在飞龙穿梭#b(S)#k的时候，如果主人能够使用\r\n狂风穿梭#b(A)#k，\r\n就能够触发#b融合技能#k哦，主人。", 37, 1540807, true, true, 1, 4500);
                  } else {
                    if (status === j++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === j++) {
                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                      } else {
                        if (status === j++) {
                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                        } else {
                          if (status === j++) {
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === j++) {
                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                              cm.playSoundEffDirectly("Ambience.img/blizzard_soft");
                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                            } else if (status === j++) {
                              cm.setInGameDirectionMode(false, true, false);
                              cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
                              cm.fieldEffect_ScreenMsg("aswan/stageEff/number/1");
                              cm.getTopMsgFont("只有将区域内的所有怪物全都消灭掉才能够前往下一地区。", 3, 20, 20, 0);
                              cm.spawnMobLimit(8240132, 1, 641, 282, 100);
                              cm.spawnMobLimit(8240132, 1, 764, 399, 100);
                              cm.spawnMobLimit(8240132, 1, 779, 282, 100);
                              cm.spawnMobLimit(8240132, 1, 703, 66, 100);
                              cm.spawnMobLimit(8240132, 1, 750, 66, 100);
                              cm.spawnMobLimit(8240132, 1, 1231, 399, 100);
                              cm.addPopupSay(1540805, 1000, "#face3#呆呆雪精灵！看看额头上的图案！", '', 0);
                              cm.addPopupSay(1540807, 1000, "看样子像是被什么人洗脑了吧。", '', 0);
                              cm.addPopupSay(1540805, 1000, "#face2#视线变得越来越糟糕了……", '', 0);
                              cm.dispose();
                              cm.snowStormRepeat();
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