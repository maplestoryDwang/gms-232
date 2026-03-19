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
      cm.npc_ChangeController(3001940, "oid=434184", 287, 5, 19, 237, 337, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.setAmbience("Ambience.img/fountain", 100, 60);
        cm.sendNormalTalk_Bottom("#face3#这脏兮兮的通道，真的与那座宅邸相连吗？", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#布？", 36, 3001960, true, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#信号音显示我们在渐渐靠近，是这里没错。啊，我看见通道了！", 36, 3001952, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(前方有个墙上长满青苔的地方，似乎很滑的样子。\r\n仿佛一踩上去，就会径直滑落下去……)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/foot3", 100);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayBGM("Bgm53/WhereTheSecretLies", 0, 0);
                  cm.forceCompleteQuest(39613);
                  cm.gainExp(1695);
                  cm.gainExp(274);
                  cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h1;11=h1;20=h0;03=h0;12=h1;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;15=h1;60=h0;06=h0;61=h1;07=h0;09=h0;19=h0;37=f;47=h0");
                  cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h1;11=h1;20=h0;03=h0;12=h1;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;15=h1;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
                  cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h1;11=h1;20=h0;03=h0;12=h1;04=h0;13=h0;40=h1;05=h0;14=h0;23=h0;41=h0;15=h1;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
                  cm.updateInfoQuest(39601, "50=h0;51=h0;52=h0;53=h0;j=1;54=h0;55=h0;56=h1;57=h0;58=h0;59=h0;q=1");
                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                      } else if (status === V++) {
                        cm.warp(410000330, 0, false);
                        cm.setStandAloneMode(false);
                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                        cm.setInGameDirectionMode(false, true, false);
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