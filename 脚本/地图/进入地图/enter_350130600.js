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
      cm.updateInfoQuest(33996, "check7=1;check=0");
      cm.npc_ChangeController(1540881, "oid=305885618", 2166, -170, 3, 2116, 2216, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=305885618", "summon", 0, 0);
      cm.setNpcSpecialActionReset("oid=305885618");
      cm.updateInfoQuest(33996, "check3=1;check7=1;check=0");
      cm.showMapleHero();
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.Hidden_background("HofM_trap2", 1, 0, 2, 0);
      cm.Hidden_background('HofM_trap3', 1, 0, 2, 0);
      cm.Hidden_background("HofM_trap4", 1, 0, 2, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.Hidden_background("HofM_trap2", 1, 1, 1, 3000);
          cm.Hidden_background('HofM_trap3', 1, 1, 1, 1500);
          cm.Hidden_background("HofM_trap4", 1, 1, 1, 3000);
          cm.setAmbience("SoundEff.img/HofM/act3/laser", 100, 60);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.setAmbience("SoundEff.img/HofM/act3/laser2", 100, 60);
            cm.sendNormalTalk_Bottom("只要碰触到这个激光探测仪，就会拉响警报。", 37, 1540880, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("去操控#face13#右侧的#b供电装置#k，应该就可以关掉探测仪了。", 37, 1540805, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("而且其他安保装置应该也会失效吧？", 37, 1540880, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face13#是，没错，虽然应该配备有应急电源，很快就会再次打开，\r\n但这个时间应该足够让幻影和双弩精灵潜入展厅了。", 37, 1540805, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("好吧，开始。", 37, 1540880, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face13#拜托你了，夜光法师。", 37, 1540805, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face4#交给我吧。", 37, 1540880, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else if (status === V++) {
                          cm.setInGameDirectionMode(false, true, false);
                          cm.dispose();
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