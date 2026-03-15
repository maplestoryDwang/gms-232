var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1500026, "oid=6876267", -322, 228, 14, -372, -272, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=6876267", 'summon', 0, 0);
      cm.npc_ChangeController(1500031, "oid=6876268", 40, 228, 11, -10, 90, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=6876268", 'summon', 0, 0);
      cm.npc_ChangeController(1500032, "oid=6876269", 180, 228, 6, 130, 230, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=6876269", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.sendNextNoESC("太可怕了……呜呜，呜呜。我们只是想排练演出罢了……", 1500016);
      } else {
        if (status === V++) {
          cm.sendNextNoESC("别担心，乌尼，会没事的……会有人来救我们的。", 1500018);
        } else {
          if (status === V++) {
            cm.sendNextNoESC("呵呵呵，竟敢侵犯我地鼠王的领地，你们这些妖精，个头不大，可胆子倒挺大啊。", 1500026);
          } else {
            if (status === V++) {
              cm.sendNextNoESC("请放了我们吧。我们不会再踏入这里半步。", 1500018);
            } else {
              if (status === V++) {
                cm.sendNextNoESC("那怎么行。现在，这里马上就要成为我的王国了！并且，你们会成为我的新娘。", 1500026);
              } else {
                if (status === V++) {
                  cm.sendNextNoESC("什么，是谁！竟敢！", 1500016);
                } else {
                  if (status === V++) {
                    cm.sendNextNoESC("不能继续在这黑暗的地底待下去了。我把曼德拉草释放到外面的世界也只不过是个开始。这就是地下世界的宣战！不管哪个妖精都阻止不了我，嘿嘿！", 1500026);
                  } else {
                    if (status === V++) {
                      cm.sendNextNoESC('呜，谁来帮帮我！……', 1500018);
                    } else if (status === V++) {
                      cm.warp(101073100, 0);
                      cm.curNodeEventEnd(true);
                      cm.inGameDirectionEvent_SetHideEffect(0);
                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                      cm.setInGameDirectionMode(false, true, false);
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