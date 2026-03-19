var status = -1;
function action(f, E, e) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/BossLucid/Lucid5"], [0, 89, 36, 1, 1, 1, 1, 0]);
        cm.sendNormalTalk_Bottom("#face6#天啊，这可如何是好？梦境好像毁灭了~！", 37, 3003250, false, true);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/phase2", 200);
          cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/BossLucid/Lucid2"], [0, 89, 36, 1, 10, 1, 1, 0]);
          cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/BossLucid/Lucid3"], [0, -140, 100, 1, 11, 1, 1, 0]);
          cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/BossLucid/Lucid4"], [0, 89, 36, 1, 1, 1, 1, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1600);
          } else if (status === V++) {
            cm.dispose();
            if (cm.getMapId() < 450004000) {
              cm.warp(cm.getMapId() + 40, 0, true);
            } else {
              cm.warp(cm.getMapId() + 50, 0, true);
            }
            cm.setInGameDirectionMode(false, true, false);
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