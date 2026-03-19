var status = -1;
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage29");
  if (V === 'start') {
    cm.dispose();
    return;
  }
  if (cm.getNumberFromQuestInfo(42001, "noHelp") == 1) {
    startMap(em);
    return;
  }
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === O++) {
        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 800, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === O++) {
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 29 F\r\n\r\n#fs22#怎么会！你看一下因风沙而雾蒙蒙的天空！美丽的晚霞都毁了！\r\n\r\n好像是红色沙漠矮人卡所做的！如果你能让天空恢复原状就好了……\r\n\r\n你问应该要怎么做？来，现在就让我来说明。", 1);
        } else {
          if (status === O++) {
            cm.inGameDirectionEvent_PushMoveInfo(0, 500, -1000, -500);
          } else {
            if (status === O++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === O++) {
                cm.inGameDirectionEvent_Monologue("#fs32#STEP 1\r\n\r\n#fs22#这边到处都可看见红色沙漠矮人卡吧？\r\n\r\n教训沙漠矮人卡的话可以抢来砂粉。\r\n\r\n每次得到10个沙粉的时候，左边的树上会产生沙结晶。", 1);
              } else {
                if (status === O++) {
                  cm.inGameDirectionEvent_PushMoveInfo(0, 500, 1000, -500);
                } else {
                  if (status === O++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === O++) {
                      cm.inGameDirectionEvent_Monologue("#fs32#STEP 2\r\n\r\n#fs22#捡取几个沙结晶后往右边移动。\r\n\r\n右边也有树对吧？在这边让7个以下的沙结晶掉落在树下。\r\n\r\n掉下正确个数的话沙结晶会消失，天空的沙尘就会开始消失，可以观赏到金黄色的美丽晚霞了。\r\n\r\n那么，开始吧！祝你好运！", 1);
                    } else {
                      if (status === O++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
                      } else {
                        if (status === O++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else if (status === O++) {
                          cm.curNodeEventEnd(true);
                          cm.setInGameDirectionMode(false, true);
                          cm.setStandAloneMode(false);
                          cm.getMap().getReactorById(9260003).forceHitReactor(cm.getPlayer(), cm.rand(1, 7));
                          startMap(em);
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
function startMap(f) {
  cm.dispose();
  cm.updateHeaderUI(1, 2, f.getTimeLeft(), 0, f.getTimeLeft(), 42011);
  f.setProperty("stage29", "start");
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;