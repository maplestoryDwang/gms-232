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
      cm.npc_ChangeController(1530070, "oid=21206468", 950, 19, 3, 900, 1000, 1, true, false);
      cm.npc_SetSpecialAction("oid=21206468", "summon", 0, 0);
      cm.npc_ChangeController(1530080, "oid=21206469", 1050, 19, 3, 1000, 1100, 1, true, false);
      cm.npc_SetSpecialAction("oid=21206469", "summon", 0, 0);
      cm.npc_ChangeController(1530110, "oid=21206470", 569, 19, 2, 519, 619, 0, true, false);
      cm.npc_SetSpecialAction("oid=21206470", "summon", 0, 0);
      cm.npc_ChangeController(1530120, "oid=21206471", 480, 19, 1, 430, 530, 0, true, false);
      cm.npc_SetSpecialAction("oid=21206471", 'summon', 0, 0);
      cm.npc_ChangeController(1530100, "oid=21206472", 390, 19, 1, 340, 440, 0, true, false);
      cm.npc_SetSpecialAction("oid=21206472", "summon", 0, 0);
      cm.npc_ChangeController(1530090, "oid=21206473", 858, 19, 3, 808, 908, 1, true, false);
      cm.npc_SetSpecialAction("oid=21206473", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=21206468"], [0, 0, 0, 1, 0, 1, 0, 0]);
        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=21206472"], [0, 0, 0, 1, 0, 1, 0, 0]);
        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=21206469"], [0, 0, 0, 1, 0, 1, 0, 0]);
        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=21206473"], [0, 0, 0, 1, 0, 1, 0, 0]);
        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=21206470"], [0, 0, 0, 1, 0, 1, 0, 0]);
        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=21206471"], [0, 0, 0, 1, 0, 1, 0, 0]);
        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 0, 0, 1, 0, 1, 1, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(2500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2500);
          cm.effect_NormalSpeechBalloon("不行！", 0, 0, 0, 3000, 1530100, cm.getPlayer().getId());
          cm.effect_NormalSpeechBalloon("不行！", 0, 0, 0, 3000, 1530080, cm.getPlayer().getId());
          cm.effect_NormalSpeechBalloon('不行！', 0, 0, 0, 3000, 1530090, cm.getPlayer().getId());
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("怎么会！希纳斯看男人的眼光也是很高的……", 37, 1530110, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#可是希纳斯，实在是太单纯了，不论什么都会一股脑儿地相信的。", 37, 1530120, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("一定要阻止这样的事情发生才行。奥兹和伊莉娜，你们两个去搜索一下学校内部。胡克、米哈尔还有伊卡尔特到校外去……", 37, 1530070, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("还有#h0#，你乘坐巴士到市区外搜索一下吧。\r\n\r\n #b（前往巴士车站，并找找可疑的地方吧）#k", 37, 1530070, true, true);
                } else if (status === V++) {
                  cm.forceStartQuest(32752, '');
                  cm.dispose();
                  cm.warp(330001100, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;