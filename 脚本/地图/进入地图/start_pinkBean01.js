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
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.updateInfoQuest(25980, "normal=#");
      cm.updateInfoQuest(25980, "normal=#;hard=#");
      cm.teachSkill(131001024, 1, 0);
      cm.teachSkill(131000016, 1, 0);
      cm.teachSkill(131001005, 1, 0);
      cm.teachSkill(131001004, 1, 0);
      cm.teachSkill(131001000, 1, 0);
      cm.gainExp(15);
      cm.gainExp(34);
      cm.gainExp(57);
      cm.gainExp(92);
      cm.gainExp(135);
      cm.gainExp(372);
      cm.gainExp(560);
      cm.gainExp(840);
      cm.updateInfoQuest(39391, "level=1");
      cm.gainExp(1242);
      cm.updateInfoQuest(100562, 'skinId=0');
      cm.updateInfoQuest(100562, "itemId=0;skinId=0");
      cm.forceStartQuest(7291, '28');
      cm.npc_ChangeController(9072302, "oid=630972", 3995, 115, 34, 3945, 4045, 1, false, 0, false);
      cm.npc_SetSpecialAction('oid=630972', "summon", 0, 0);
      cm.npc_ChangeController(9072304, "oid=630973", 3700, 115, 15, 3650, 3750, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=630973", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(5000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.forceStartQuest(62458, '');
        cm.forceStartQuest(62462, '');
        cm.forceStartQuest(62464, '');
        cm.npc_SetSpecialAction("oid=630972", "expectation2", -1, 1);
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/expectation", 100);
        cm.inGameDirectionEvent_AskAnswerTime(5000);
      } else {
        if (status === V++) {
          cm.effect_NormalSpeechBalloon("#fnNanumGothic ExtraBold##fs18#我第一次见到这个地方! 好神奇! 那个爷爷也是第一次见到呢! ", 0, 0, 0, 1500, 1, 0, 0, 0, 4, 9072302, null, cm.getPlayer().getId());
          cm.npc_SetSpecialAction("oid=630972", "worry", -1, 1);
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/worry", 100);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.effect_NormalSpeechBalloon("#fnNanumGothic ExtraBold##fs15#哎, 不过我好像变弱了很多呢. 可这里的等级比我平时去的地方要低啊! ", 1, 0, 1, 1500, 1, 0, 0, 0, 4, 9072302, null, cm.getPlayer().getId());
            cm.npc_SetSpecialAction("oid=630973", 'say', -1, 1);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.effect_NormalSpeechBalloon("#fnNanumGothic ExtraBold##fs15#你这么好奇地看啥呢? 现在的冒险家怎么这么不懂事啊! ", 0, 0, 0, 1500, 1, 0, 0, 0, 4, 9072304, null, cm.getPlayer().getId());
              cm.setNpcSpecialActionReset('oid=630973');
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=630972", "worry", -1, 1);
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/worry", 100);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.effect_NormalSpeechBalloon("#fnNanumGothic ExtraBold##fs15#你觉得我像冒险家……? ", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072302, null, cm.getPlayer().getId());
                  cm.npc_SetSpecialAction('oid=630973', "say", -1, 1);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.effect_NormalSpeechBalloon("#fnNanumGothic ExtraBold##fs15#你是不是吃错药啦? 你看起来当然是个冒险家啦. 难不成还是个花蘑菇? ", 0, 0, 0, 1500, 1, 0, 0, 0, 4, 9072304, null, cm.getPlayer().getId());
                    cm.setNpcSpecialActionReset("oid=630973");
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=630972", "expectation2", -1, 1);
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/expectation", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                    } else {
                      if (status === V++) {
                        cm.effect_NormalSpeechBalloon("#fnNanumGothic ExtraBold##fs15#虽然不知道什么原因, 我看上去好像是个冒险家! ", 1, 0, 1, 1500, 1, 0, 0, 0, 4, 9072302, null, cm.getPlayer().getId());
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/expectation", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                      } else {
                        if (status === V++) {
                          cm.effect_NormalSpeechBalloon("#fnNanumGothic ExtraBold##fs15#虽然变弱了很多, 但好歹能装成冒险家的模样, 好好地玩乐一番! ", 1, 0, 1, 1500, 1, 0, 0, 0, 4, 9072302, null, cm.getPlayer().getId());
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/expectation", 100);
                          cm.npc_SetSpecialAction("oid=630973", 'say', -1, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.effect_NormalSpeechBalloon("#fnNanumGothic ExtraBold##fs15#现在的年轻人真是, 啧啧啧……", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072304, null, cm.getPlayer().getId());
                            cm.setNpcSpecialActionReset("oid=630973");
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else if (status === V++) {
                            cm.npc_LeaveField('oid=630972');
                            cm.inGameDirectionEvent_SetHideEffect(0);
                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                            cm.setInGameDirectionMode(false, true, false);
                            cm.npc_LeaveField("oid=630973");
                            cm.dispose();
                            cm.warp(100000000, 4, true);
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