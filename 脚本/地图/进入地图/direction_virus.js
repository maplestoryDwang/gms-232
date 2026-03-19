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
      cm.npc_ChangeController(1530070, "oid=37421793", -200, 178, 3, -250, -150, 0, true, false);
      cm.npc_SetSpecialAction("oid=37421793", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
      cm.forceCompleteQuest(32808);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("喝下感冒病毒的话，现在应该已经逐渐起反应了。正好，两位老师在朝这边走来。嘘，我们装作什么也不知道，看看他们的情况吧。", 37, 1530070, false, true);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(1530150, "oid=37423036", 954, 178, 35, 904, 1004, 0, true, false);
          cm.npc_SetSpecialAction("oid=37423036", "summon", 0, 0);
          cm.npc_ChangeController(1530160, "oid=37423037", 2108, 178, 36, 2058, 2158, 1, true, false);
          cm.npc_SetSpecialAction("oid=37423037", 'summon', 0, 0);
          cm.npc_SetForceMove("oid=37423036", 1, 600, 120);
          cm.npc_SetForceMove("oid=37423037", 1, 600, 120);
          cm.fieldEffect_PlayBGM("Bgm38.img/LifeIsComedy", 0, 0);
          cm.inGameDirectionEvent_PushMoveInfo(0, 300, 1590, 280);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(6630);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(3000);
              cm.effect_NormalSpeechBalloon("阿……阿嚏. ", 1, 0, 0, 2000, 1530150, cm.getPlayer().getId());
              cm.effect_NormalSpeechBalloon("咳咳……咳咳……", 1, 0, 0, 2000, 1530160, cm.getPlayer().getId());
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(0, 300, -400, 280);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(8130);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("成功了。现在加上校园里贴着的照片，传闻一定会越来越厉害的。", 37, 1530070, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("可是南哈特，你怎么突然变得这么积极？莫非你也……", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=37421793", -1);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=37421793"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#我！我只不过是想快点结束这种傻瓜一样的行径罢了。你别想多了，知道了吧？", 37, 1530070, false, true);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else if (status === V++) {
                              cm.npc_setForceFlip("oid=37421793", 0);
                              cm.forceCompleteQuest(32809);
                              cm.dispose();
                              cm.warp(330000500, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;