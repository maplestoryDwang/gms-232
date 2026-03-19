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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 272, 30);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3003350, "oid=1830674", 272, 100, 3, 222, 322, 1, true, false);
        cm.npc_SetSpecialAction("oid=1830674", "summon", 0, 0);
        cm.npc_ChangeController(3003351, "oid=1830675", 390, 100, 4, 340, 440, 1, true, false);
        cm.npc_SetSpecialAction("oid=1830675", 'summon', 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#来，到了~嗯，嗯，如风一般出现又如风一般消失乃人之常情~", 37, 3003302, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#不过不用担心~当你需要帮助时，我会随时出现的~", 37, 3003302, true, true);
            } else {
              if (status === V++) {
                cm.setNpcSpecialActionReset("oid=1830675");
                cm.npc_SetSpecialAction("oid=1830675", "wind3", 1920, 0);
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
                cm.inGameDirectionEvent_AskAnswerTime(1900);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField("oid=1830675");
                  cm.sendNormalTalk_Bottom("#face1#额，他居然走掉了……这家伙果然是让人捉摸不透。", 37, 3003301, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#没办法了，咳咳，接下来的自然生物看来得我们俩去找了……", 37, 3003301, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#……", 37, 3003301, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face4#……", 37, 3003301, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face5#啊，虽然草叶笛是回来了，可一切还是老样子。", 37, 3003301, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face7#呜呜，精灵之树，再稍微等一等，再稍微加把劲，我一定会让你恢复原貌的。", 37, 3003301, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#b(看着小不点精灵的心情似乎有点颓废，上前鼓舞。)#k", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#……", 37, 3003301, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#谢，谢谢，好吧，好的开始是成功的一半！加油加油，让我们一起努力！", 37, 3003301, true, true);
                                } else if (status === V++) {
                                  cm.dispose();
                                  cm.warp(450005000, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;