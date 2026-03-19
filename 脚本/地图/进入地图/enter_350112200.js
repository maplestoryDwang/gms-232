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
      cm.showMapleHero();
      cm.updateInfoQuest(33906, "count1=1;count2=1;count4=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_ChangeController(1540818, "oid=288156681", 0, 0, 4, -50, 50, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=288156681", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=288156681", "appear_top", 0, 0);
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/waddler/appear", 100);
        cm.userSetFieldFloating(350112200, 0, 3, 1);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.userSetFieldFloating(350112200, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1100);
        } else {
          if (status === V++) {
            cm.setNpcSpecialActionReset("oid=288156681");
            cm.npc_SetSpecialAction("oid=288156681", "stand2", -1, 0);
            cm.sendNormalTalk_Bottom("#face1#啊，那个蜘蛛又出现了，主人！", 37, 1540807, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face3#那家伙一直贴在顶上，真叫人头痛！", 37, 1540805, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#听到了吗？说是贴在顶上呢。", 37, 1540802, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("没问题。", 37, 1540806, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_OneTimeAction(958, 0);
                    cm.fieldEffect_PlayFieldSound("Sound/Skill.img/25101003/Use", 100);
                    cm.fieldEffect_PlayFieldSound("Sound/Skill.img/25101003/Hit", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(600);
                    cm.effect_LastingEff("Effect/CharacterEff.img/HofM/skill", 1, 800, 0);
                  } else {
                    if (status === V++) {
                      cm.setNpcSpecialActionReset("oid=288156681");
                      cm.npc_SetSpecialAction("oid=288156681", "fall", 0, 0);
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/waddler/fall", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.setNpcSpecialActionReset("oid=288156681");
                        cm.npc_SetSpecialAction("oid=288156681", "groggy", -1, 0);
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/waddler/groggy", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.setNpcSpecialActionReset("oid=288156681");
                          cm.npc_SetSpecialAction("oid=288156681", "groggy_attack", 0, 0);
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/waddler/groggy_attack", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else if (status === V++) {
                          cm.setNpcSpecialActionReset("oid=288156681");
                          cm.npc_SetSpecialAction("oid=288156681", "jump", 500, 0);
                          cm.setNpcSpecialActionReset("oid=288156681");
                          cm.npc_SetSpecialAction("oid=288156681", "stand2", -1, 0);
                          cm.npc_LeaveField("oid=288156681");
                          cm.npc_LeaveField("oid=288156681");
                          cm.setInGameDirectionMode(false, true, false);
                          cm.addPopupSay(1540802, 2000, "#face0#可以对付吗，隐月？", '', 0);
                          cm.addPopupSay(1540806, 3000, "我差不多知道了，\r\n不过很难在那家伙发起攻击的时候将它拽到地面来。", '', 0);
                          cm.addPopupSay(1540802, 2000, "#face0#只要避开它的攻击，再尽量将其拽到地面就可以了。", '', 0);
                          cm.spawnMobLimit(8240150, 1, 246, 1026, 100);
                          cm.getTopMsgFont("只有用隐月的粉碎铁爪拽下来才能攻击。", 3, 20, 20, 0);
                          cm.getTopMsgFont("只能在蜘蛛移动的时候拽下来。", 3, 20, 20, 0);
                          cm.addPopupSay(1540802, 3000, "竟然逃到上面去了。体力好像下降了不少，再次把他拽下来吧。", '', 0);
                          cm.addPopupSay(1540802, 3000, "还挺顽固的？再加把劲，隐月！", '', 0);
                          cm.dispose();
                          cm.scheduleWarpTask(180, 350112250, false);
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