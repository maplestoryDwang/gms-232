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
      cm.allowSpecialAtion(0, 1, ["swim01"]);
      cm.npc_ChangeController(3003156, "oid=48119", 4050, 157, 63, 4000, 4100, 1, false, false);
      cm.gainSkillBuff(80002204);
      cm.setInGameDirectionMode(true, false, true);
      cm.sendNormalTalk_Bottom("啊！这，这是……！\r\n#b飞……飞鱼？！#k是你救了我吗？", 57, 0, false, true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("卡奥说#b有人帮了我#k，原来是你啊？", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("好的！让我们顺着这股急流，飞到……不，游到#r黑魔法师#k那里去吧！", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("嗯？飞鱼，怎么突然停下来了？", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("没时间了，必须马上到#b神秘河#k的尽头去！你是不是肚子饿了？", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.userSetFieldFloating(450002200, 0, 10, 20);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.userSetFieldFloating(450002200, 0, 0, 0);
                            cm.sendNormalTalk_Bottom("噢…噢？？！", 57, 0, false, true);
                          } else if (status === V++) {
                            cm.dispose();
                            cm.warp(450002201, 0);
                            cm.setInGameDirectionMode(false, true, false);
                            cm.dispelBuff(80002204);
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