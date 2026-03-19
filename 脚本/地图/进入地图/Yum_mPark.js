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
      if (cm.getMapId() == 993176900) {
        cm.updateInfoQuest(37730, "clear=0");
        cm.getTopMsgFont("必须消灭区域内的怪物一定数量以上。", 3, 20, 4, 0, 0);
        cm.npc_ChangeController(3004732, "oid=1859903", 340, 100, 1, 290, 390, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1859903", 'summon', 0, 0);
        cm.addPopupSay(3004732, 2500, "#face0#对了，忘了自我介绍了。我叫#b卡斯特#k。", '', 0);
        cm.addPopupSay(0, 2500, "#face0#我叫#h0#。", '', 0);
        cm.addPopupSay(3004732, 2500, "#face0#哦……动作相当犀利嘛。了不起。", '', 0);
        cm.fieldEffect_ScreenMsg("Gstar/start");
      } else {
        if (cm.getMapId() == 993176910) {
          cm.getTopMsgFont("必须消灭区域内的怪物一定数量以上。", 3, 20, 4, 0, 0);
          cm.npc_ChangeController(3004732, "oid=1861065", -212, 100, 1, -262, -162, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=1861065", "summon", 0, 0);
          cm.npc_ChangeController(3004733, "oid=1861066", 196, 100, 1, 146, 246, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=1861066", "summon", 0, 0);
          cm.addPopupSay(3004733, 2500, "#face0#汪汪！汪汪汪！", '', 0);
          cm.addPopupSay(0, 2500, "#face0#芒泰尔怎么看上去挺高兴……", '', 0);
          cm.addPopupSay(3004732, 2500, "#face0#也许是以为皮亚蜂们想和它玩吧。", '', 0);
          cm.addPopupSay(3004733, 2500, "#face0#汪！", '', 0);
          cm.fieldEffect_ScreenMsg("Gstar/start");
        } else {
          if (cm.getMapId() == 993176930) {
            cm.getTopMsgFont("必须消灭掉区域内的所有怪物，才能移动至下一关。", 3, 20, 4, 0, 0);
            cm.addPopupSay(0, 2500, "#face0#感觉和之前完全不同。", '', 0);
            cm.addPopupSay(0, 2500, "#face0#这里的怪物比之前更具攻击性，似乎只知道攻击……", '', 0);
            cm.addPopupSay(0, 2500, "#face0#空气也又潮又闷……感觉很不舒服……", '', 0);
            cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
            cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
          } else {
            if (cm.getMapId() == 993176940) {
              cm.getTopMsgFont("必须消灭掉区域内的所有怪物，才能移动至下一关。", 3, 20, 4, 0, 0);
              cm.addPopupSay(0, 2500, "#face0#卡斯特是往这边走了吗？", '', 0);
              cm.addPopupSay(3004733, 2500, "#face0#汪汪汪！汪，汪汪汪！", '', 0);
              cm.addPopupSay(0, 2500, "#face0#好的，好的，看来我猜对了。", '', 0);
              cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
              cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/2");
            } else if (cm.getMapId() == 993176950) {
              cm.getTopMsgFont("必须消灭掉区域内的所有怪物，才能移动至下一关。", 3, 20, 4, 0, 0);
              cm.addPopupSay(3004733, 2500, "#face0#汪汪！汪汪汪！", '', 0);
              cm.addPopupSay(0, 2500, "#face0#你是说快到了吗？", '', 0);
              cm.addPopupSay(3004733, 2500, "#face0#汪……", '', 0);
              cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
            }
          }
        }
      }
      cm.dispose();
    }
  }
}