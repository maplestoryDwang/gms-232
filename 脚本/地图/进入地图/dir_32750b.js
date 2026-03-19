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
      cm.npc_ChangeController(1530520, "oid=21186197", -20, 280, 34, -70, 30, 1, true, false);
      cm.npc_SetSpecialAction("oid=21186197", "summon", 0, 0);
      cm.fieldEffect_PlayBGM("Bgm02.img/EvilEyes", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("希纳斯……这个厉害的丫头。原本再过一段时间学校就会被拆除，这块地皮也会全部成为我的囊中之物……！", 37, 1530520, false, true);
        cm.effect_Voice("Voice2.img/Friends/CH1_00/23", 100);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("这个丫头明明就是个狡猾的狐狸，表面上还装作一无所知的样子！真是个狠角色！可恶的死丫头！", 37, 1530520, true, true);
          cm.effect_Voice("Voice2.img/Friends/CH1_00/24", 100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("让我们走着瞧吧。有朝一日我成了你婆婆的话……一定会狠狠折磨你，让你整天痛哭流涕的。而且神兽集团也会自然而然地落入我的掌心的！噢哈哈哈哈哈！", 37, 1530520, true, true);
            cm.effect_Voice("Voice2.img/Friends/CH1_00/25", 100);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=21186197", -1, 400, 120);
              cm.inGameDirectionEvent_AskAnswerTime(4000);
            } else {
              if (status === V++) {
                cm.npc_ChangeController(1530070, "oid=21189854", -53, 280, 34, -103, -3, 1, true, false);
                cm.npc_SetSpecialAction("oid=21189854", "summon", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField("oid=21186197");
                  cm.npc_LeaveField("oid=21186197");
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=21189854"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("就是这样的. 董事长虽然在希纳斯小姐面前装得很善良, 可事实上却一直在对这所学校虎视眈眈, 并寻找可乘之机呢. ", 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue("当然了, 希纳斯小姐还不知道这个事实. 因为她就是那么阳光, 从不愿意怀疑别人. 不过现在是时候让她知道这一切了. ", 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("我们大家一起去办公室, 把这个事实告诉希纳斯小姐吧. ", 1);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else if (status === V++) {
                          cm.forceCompleteQuest(32750);
                          cm.gainItem(4030040, -1);
                          cm.dispose();
                          cm.warp(330001100, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;