var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (cm.isQuestActive(23676)) {
    action23676(f, E, e);
  } else {
    cm.dispose();
  }
}
function action23676(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(2159395, "oid=1256196", 163, 214, 40, 113, 213, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1256196", "summon", 0, 0);
      cm.npc_ChangeController(2159394, "oid=1256197", 321, 221, 51, 271, 371, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1256197", "summon", 0, 0);
      cm.sendNormalTalk("……#p2154009#到底在想什么？要我们跟奥尔卡保密……感觉很可疑！", 1, 2159394, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("我们又不是#p2154009#肚子里的蛔虫。照他说的做不就行了。", 1, 2159395, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#p2154009#？", 3, 2159395, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1", "oid=1256196"], [900, 0, -120, 1, 0, 1, 0, 0, 0]);
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1", "oid=1256197"], [900, 0, -120, 1, 0, 1, 0, 0, 0]);
            cm.npc_SetForceMove("oid=1256196", -1, 3, 100);
            cm.inGameDirectionEvent_AskAnswerTime(450);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_SetHideEffect(0);
              cm.sendNormalTalk("你们再说一遍刚才的话。", 3, 2159395, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("你是，干什么的！", 1, 2159394, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("你是什么人？！", 1, 2159395, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("喂！你到底是谁！该不会是知道我是黑色之翼的天才人偶术士#b#p2159394##k，所以才来找我的吧？", 1, 2159394, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#p2159394#？你们是黑色之翼的干部吧？", 3, 2159394, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("哎呀！", 1, 2159394, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("弗朗西斯那个笨蛋……想知道我们是谁吗？一会儿你就不想知道了！", 1, 2159395, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("喂，喂，#p2159395#，别动不动就打架～", 1, 2159394, true, true);
                          } else if (status === V++) {
                            cm.npc_LeaveField("oid=1256196");
                            cm.npc_LeaveField("oid=1256197");
                            cm.playerMessage(-1, '倒人偶师和巨人。');
                            cm.dispose();
                            cm.warp(910600303, 0, false);
                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}
function randomNum(f, E) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * f + 1, 10);
    case 2:
      return parseInt(Math.random() * (E - f + 1) + f, 10);
    default:
      return 0;
  }
}