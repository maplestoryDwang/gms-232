var status = -1;
function action(f, E, e) {
  if (f === 0) {
    status--;
  } else {
    status++;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true);
      cm.npc_ChangeController(2159356, 1500, 50, 1);
      cm.npc_SetSpecialAction(2159356, 'summon');
      cm.npc_ChangeController(2159360, 1350, 50, 0);
      cm.npc_SetSpecialAction(2159360, "summon");
      cm.npc_ChangeController(2159361, 1300, 50, 0);
      cm.npc_SetSpecialAction(2159361, "summon");
      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/normalEffect/demonSlayer/chatBalloon0"], [1000, 0, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction(2159356, 'attack');
        cm.fieldEffect_PlayFieldSound("LuminousTuto/Use2");
        cm.inGameDirectionEvent_AskAnswerTime(450);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction8.img/effect/tuto/BalloonMsg0/5"], [0, 0, -120]);
          cm.npc_SetSpecialAction(2159360, "hit");
          cm.npc_SetSpecialAction(2159361, "hit");
          cm.inGameDirectionEvent_头顶图片(["Skill/2112.img/skill/21120005/hit/0", "oid=2159360"], [0, -5, -50, 1, 0, 1, 0, 0]);
          cm.inGameDirectionEvent_头顶图片(["Skill/2112.img/skill/21120005/hit/0", "oid=2159361"], [0, -5, -50, 1, 0, 1, 0, 0]);
          cm.fieldEffect_PlayFieldSound("LuminousTuto/Hit2");
          cm.inGameDirectionEvent_AskAnswerTime(270);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Skill/2112.img/skill/21120005/hit/0", "oid=2159360"], [0, -5, -50, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_头顶图片(["Skill/2112.img/skill/21120005/hit/0", "oid=2159361"], [0, -5, -50, 1, 0, 1, 0, 0]);
            cm.fieldEffect_PlayFieldSound("LuminousTuto/Hit2");
            cm.inGameDirectionEvent_AskAnswerTime(900);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("LuminousTuto/Use3");
              cm.npc_SetSpecialAction(2159360, "die");
              cm.npc_SetSpecialAction(2159361, 'die');
              cm.inGameDirectionEvent_头顶图片(["Skill/2112.img/skill/21120005/hit/0", "oid=2159360"], [0, -5, -50, 1, 0, 1, 0, 0]);
              cm.inGameDirectionEvent_头顶图片(["Skill/2112.img/skill/21120005/hit/0", "oid=2159361"], [0, -5, -50, 1, 0, 1, 0, 0]);
              cm.fieldEffect_PlayFieldSound("LuminousTuto/Hit3");
              cm.inGameDirectionEvent_AskAnswerTime(2200);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(2);
                cm.npc_LeaveField(2159360);
                cm.npc_LeaveField(2159361);
                cm.sendNextNoESC("他们也不是省油的灯，来的挺快啊。果然是光之守护者。", 2159356);
              } else {
                if (status === V++) {
                  cm.sendNextSNoESC("你怎么会一个人在这？弗里德和双弩精灵呢？怎么还受伤了？");
                } else {
                  if (status === V++) {
                    cm.sendNextPrevNoESC("他们先出发了。也许已经和黑魔法师交手了。我有点事，所以迟了。", 2159356);
                  } else {
                    if (status === V++) {
                      cm.sendNextPrevSNoESC("战神，一起走吧？");
                    } else {
                      if (status === V++) {
                        cm.sendNextPrevNoESC("你是在担心我吗？人真好。不过我没事。这点小伤算不了什么。你还是快跟上去吧。就算弗里德和双弩精灵合作默契，也无法抵挡黑魔法师。", 2159356);
                      } else {
                        if (status === V++) {
                          cm.sendNextPrevSNoESC("…知道了。你也别太勉强自己。");
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_MoveAction(2);
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction8.img/effect/tuto/BalloonMsg0/7"], [5000, 0, -100]);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction8.img/effect/tuto/BalloonMsg0/6", "oid=2159356"], [3000, 0, -100, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else if (status === V++) {
                              cm.npc_LeaveField(2159356);
                              cm.setInGameDirectionMode(false, true);
                              cm.warp(927020060, 0);
                              cm.dispose();
                            } else {
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
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;