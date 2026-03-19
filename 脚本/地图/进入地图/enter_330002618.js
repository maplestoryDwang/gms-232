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
      cm.fieldEffect_PlayBGM("Bgm38.img/SchoolLife", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 320, 142);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect2.img/spinoff2/3/0", 0, 1500, 0, 0, 0, 4, 1);
        cm.inGameDirectionEvent_AskAnswerTime(2500);
      } else {
        if (status === V++) {
          cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect2.img/spinoff2/3/1", 0, 1500, 0, 0, 0, 4, 1);
          cm.inGameDirectionEvent_AskAnswerTime(2500);
        } else {
          if (status === V++) {
            cm.fieldEffect_ProcessOnOffLayer('2', "Map/Effect2.img/spinoff2/3/2", 0, 1500, 0, 0, 0, 4, 1);
            cm.inGameDirectionEvent_AskAnswerTime(2500);
          } else {
            if (status === V++) {
              cm.fieldEffect_ProcessOnOffLayer('3', "Map/Effect2.img/spinoff2/3/3", 0, 1500, 0, 0, 0, 4, 1);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 2000, 0, 0, 0, 0, 0);
                cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 2000, 0, 0, 0, 0, 0);
                cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 2000, 0, 0, 0, 0, 0);
                cm.fieldEffect_ProcessOnOffLayer('3', '', 2, 2000, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(2500);
              } else {
                if (status === V++) {
                  cm.npc_ChangeController(1530612, "oid=40200361", 420, 150, 11, 370, 470, 1, false, false);
                  cm.npc_SetSpecialAction("oid=40200361", 'summon', 0, 0);
                  cm.npc_ChangeController(1530613, "oid=40200362", 520, -10, 11, 470, 570, 1, false, false);
                  cm.npc_SetSpecialAction("oid=40200362", 'summon', 0, 0);
                  cm.npc_ChangeController(1530614, "oid=40200363", 620, -9, 12, 570, 670, 1, false, false);
                  cm.npc_SetSpecialAction("oid=40200363", "summon", 0, 0);
                  cm.npc_ChangeController(1530611, "oid=40200364", 440, 70, 6, 390, 490, 0, false, false);
                  cm.npc_SetSpecialAction("oid=40200364", "summon", 0, 0);
                  cm.npc_ChangeController(1530600, "oid=40200365", 180, -9, 10, 130, 230, 0, true, false);
                  cm.npc_SetSpecialAction("oid=40200365", 'summon', 0, 0);
                  cm.npc_ChangeController(1530616, "oid=40200366", 100, -9, 10, 50, 150, 0, true, false);
                  cm.npc_SetSpecialAction("oid=40200366", "summon", 0, 0);
                  cm.npc_ChangeController(1530619, "oid=40200367", 20, -9, 10, -30, 70, 0, true, false);
                  cm.npc_SetSpecialAction("oid=40200367", 'summon', 0, 0);
                  cm.inGameDirectionEvent_PushScaleInfo(10, 1500, 10, 320, 150);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("布吉，怎么样？", 37, 1530120, false, true);
                        cm.effect_Voice("Voice2.img/Friends/CH6_07/1", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("啊……太棒了。这真是我的歌吗？", 37, 1530600, true, true);
                          cm.effect_Voice("Voice2.img/Friends/CH6_07/2", 100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("呃……呃呃", 37, 1530619, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=40200361"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=40200362"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=40200363"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=40200364"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=40200365"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=40200366"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 100, 150);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=40200361", -1);
                                      cm.npc_setForceFlip("oid=40200362", -1);
                                      cm.npc_setForceFlip("oid=40200363", -1);
                                      cm.npc_setForceFlip("oid=40200364", -1);
                                      cm.npc_setForceFlip("oid=40200365", -1);
                                      cm.npc_setForceFlip("oid=40200366", -1);
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/heal"], [4000, 0, 0, 1, 0, 175, 0, 0]);
                                      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 5000, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl0", "Map/Effect2.img/blackHeavenCinematic/feather11", 0, 1000, -162, 322, 5, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl0", '', 1, 1288, 497, -850, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer('randomppl1', "Map/Effect2.img/blackHeavenCinematic/feather10", 0, 1000, -261, 335, 5, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl1", '', 1, 1869, 503, -850, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl2", "Map/Effect2.img/blackHeavenCinematic/feather11", 0, 1000, -175, 308, 5, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl2", '', 1, 1324, 627, -850, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl3", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -284, 348, 5, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl3", '', 1, 1551, 606, -850, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl4", "Map/Effect2.img/blackHeavenCinematic/feather9", 0, 1000, -245, 336, 5, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer('randomppl4', '', 1, 1216, 648, -850, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer('randomppl5', "Map/Effect2.img/blackHeavenCinematic/feather12", 0, 1000, -308, 332, 5, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl5", '', 1, 625, 79, -850, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl6", "Map/Effect2.img/blackHeavenCinematic/feather11", 0, 1000, -222, 308, 5, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer('randomppl6', '', 1, 563, 265, -850, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl7", "Map/Effect2.img/blackHeavenCinematic/feather9", 0, 1000, -322, 359, 5, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl7", '', 1, 1213, 135, -850, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl8", "Map/Effect2.img/blackHeavenCinematic/feather10", 0, 1000, -283, 355, 5, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl8", '', 1, 671, 352, -850, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl9", "Map/Effect2.img/blackHeavenCinematic/feather10", 0, 1000, -271, 330, 5, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer('randomppl9', '', 1, 1744, 588, -850, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl10", "Map/Effect2.img/blackHeavenCinematic/feather9", 0, 1000, -315, 366, 5, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl10", '', 1, 1166, 817, -850, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl11", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -188, 328, 5, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl11", '', 1, 1867, 1, -850, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl12", "Map/Effect2.img/blackHeavenCinematic/feather10", 0, 1000, -324, 293, 5, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl12", '', 1, 829, 875, -850, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl13", "Map/Effect2.img/blackHeavenCinematic/feather9", 0, 1000, -228, 309, 5, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl13", '', 1, 1300, 77, -850, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl14", "Map/Effect2.img/blackHeavenCinematic/feather10", 0, 1000, -173, 316, 5, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl14", '', 1, 979, 884, -850, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl15", "Map/Effect2.img/blackHeavenCinematic/feather8", 0, 1000, -233, 300, 5, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl15", '', 1, 1827, 178, -850, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl16", "Map/Effect2.img/blackHeavenCinematic/feather12", 0, 1000, -170, 351, 5, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl16", '', 1, 788, 79, -850, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl17", "Map/Effect2.img/blackHeavenCinematic/feather10", 0, 1000, -305, 383, 5, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl17", '', 1, 996, 252, -850, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl18", "Map/Effect2.img/blackHeavenCinematic/feather9", 0, 1000, -283, 364, 5, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl18", '', 1, 1029, 759, -850, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl19", "Map/Effect2.img/blackHeavenCinematic/feather11", 0, 1000, -305, 363, 5, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl19", '', 1, 1371, 412, -850, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl20", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -343, 287, 5, 4, 1);
                                        cm.fieldEffect_ProcessOnOffLayer("randomppl20", '', 1, 625, 608, -850, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/lightup", 100);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps0", "Map/Effect2.img/blackHeavenCinematic/feather2", 0, 1000, -344, 323, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps0", '', 1, 1491, -364, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps1", "Map/Effect2.img/blackHeavenCinematic/feather1", 0, 1000, -268, 362, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps1", '', 1, 3106, 294, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps2", "Map/Effect2.img/blackHeavenCinematic/feather3", 0, 1000, -125, 336, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer('randompps2', '', 1, 3579, 708, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps3", "Map/Effect2.img/blackHeavenCinematic/feather3", 0, 1000, -242, 336, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps3", '', 1, 2947, -344, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer('randompps4', "Map/Effect2.img/blackHeavenCinematic/feather5", 0, 1000, -292, 370, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps4", '', 1, 1454, -397, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps5", "Map/Effect2.img/blackHeavenCinematic/feather1", 0, 1000, -45, 317, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps5", '', 1, 3038, 634, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps6", "Map/Effect2.img/blackHeavenCinematic/feather6", 0, 1000, -73, 355, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer('randompps6', '', 1, 3429, 298, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer('randompps7', "Map/Effect2.img/blackHeavenCinematic/feather1", 0, 1000, -187, 323, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps7", '', 1, 2210, -393, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps8", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -134, 282, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer('randompps8', '', 1, 1208, -131, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer('randompps9', "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -365, 333, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps9", '', 1, 3763, 289, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps10", "Map/Effect2.img/blackHeavenCinematic/feather6", 0, 1000, -303, 282, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps10", '', 1, 2615, -477, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps11", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -194, 324, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps11", '', 1, 3932, 465, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps12", "Map/Effect2.img/blackHeavenCinematic/feather6", 0, 1000, -183, 370, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps12", '', 1, 2211, 798, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps13", "Map/Effect2.img/blackHeavenCinematic/feather1", 0, 1000, -3, 295, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps13", '', 1, 3723, -330, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps14", "Map/Effect2.img/blackHeavenCinematic/feather2", 0, 1000, -11, 366, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps14", '', 1, 1768, -88, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps15", "Map/Effect2.img/blackHeavenCinematic/feather4", 0, 1000, -257, 308, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps15", '', 1, 2490, 102, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps16", "Map/Effect2.img/blackHeavenCinematic/feather5", 0, 1000, -35, 321, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps16", '', 1, 2082, 426, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps17", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -392, 288, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps17", '', 1, 1514, 427, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps18", "Map/Effect2.img/blackHeavenCinematic/feather4", 0, 1000, -350, 310, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps18", '', 1, 2793, 117, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps19", "Map/Effect2.img/blackHeavenCinematic/feather4", 0, 1000, -98, 315, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps19", '', 1, 837, -404, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps20", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -112, 364, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps20", '', 1, 2825, 309, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps21", "Map/Effect2.img/blackHeavenCinematic/feather1", 0, 1000, -114, 309, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps21", '', 1, 3265, -22, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps22", "Map/Effect2.img/blackHeavenCinematic/feather5", 0, 1000, -165, 286, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps22", '', 1, 3815, -322, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps23", "Map/Effect2.img/blackHeavenCinematic/feather5", 0, 1000, -389, 344, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps23", '', 1, 2993, 461, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps24", "Map/Effect2.img/blackHeavenCinematic/feather6", 0, 1000, -258, 364, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps24", '', 1, 2301, 489, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps25", "Map/Effect2.img/blackHeavenCinematic/feather5", 0, 1000, -357, 344, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps25", '', 1, 2045, -84, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps26", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -219, 288, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps26", '', 1, 3571, 10, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps27", "Map/Effect2.img/blackHeavenCinematic/feather2", 0, 1000, -1, 357, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps27", '', 1, 3769, -383, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps28", "Map/Effect2.img/blackHeavenCinematic/feather3", 0, 1000, -148, 348, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps28", '', 1, 2843, 443, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps29", "Map/Effect2.img/blackHeavenCinematic/feather4", 0, 1000, -145, 375, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps29", '', 1, 2983, 191, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps30", "Map/Effect2.img/blackHeavenCinematic/feather6", 0, 1000, -390, 376, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps30", '', 1, 1799, 596, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps31", "Map/Effect2.img/blackHeavenCinematic/feather2", 0, 1000, -293, 324, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps31", '', 1, 753, 693, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps32", "Map/Effect2.img/blackHeavenCinematic/feather1", 0, 1000, -184, 312, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps32", '', 1, 3272, 661, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps33", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -85, 302, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps33", '', 1, 1142, -76, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps34", "Map/Effect2.img/blackHeavenCinematic/feather4", 0, 1000, -312, 366, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps34", '', 1, 1647, -438, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps35", "Map/Effect2.img/blackHeavenCinematic/feather4", 0, 1000, -5, 336, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps35", '', 1, 3999, 166, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps36", "Map/Effect2.img/blackHeavenCinematic/feather6", 0, 1000, -44, 286, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps36", '', 1, 1721, 50, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps37", "Map/Effect2.img/blackHeavenCinematic/feather1", 0, 1000, -26, 326, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps37", '', 1, 2187, -94, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps38", "Map/Effect2.img/blackHeavenCinematic/feather6", 0, 1000, -196, 374, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps38", '', 1, 1240, 556, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps39", "Map/Effect2.img/blackHeavenCinematic/feather2", 0, 1000, -297, 372, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps39", '', 1, 3462, 55, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps40", "Map/Effect2.img/blackHeavenCinematic/feather2", 0, 1000, -381, 293, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps40", '', 1, 1366, 342, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps41", "Map/Effect2.img/blackHeavenCinematic/feather2", 0, 1000, -170, 352, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps41", '', 1, 1768, 7, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps42", "Map/Effect2.img/blackHeavenCinematic/feather5", 0, 1000, -303, 344, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps42", '', 1, 3877, 723, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps43", "Map/Effect2.img/blackHeavenCinematic/feather3", 0, 1000, -297, 350, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps43", '', 1, 2500, 670, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps44", "Map/Effect2.img/blackHeavenCinematic/feather5", 0, 1000, -102, 321, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps44", '', 1, 959, 178, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps45", "Map/Effect2.img/blackHeavenCinematic/feather6", 0, 1000, -19, 298, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps45", '', 1, 2514, 400, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps46", "Map/Effect2.img/blackHeavenCinematic/feather6", 0, 1000, -164, 286, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps46", '', 1, 1151, -446, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps47", "Map/Effect2.img/blackHeavenCinematic/feather5", 0, 1000, -141, 313, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps47", '', 1, 1490, -177, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps48", "Map/Effect2.img/blackHeavenCinematic/feather1", 0, 1000, -25, 335, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps48", '', 1, 3422, 302, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps49", "Map/Effect2.img/blackHeavenCinematic/feather2", 0, 1000, -267, 332, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps49", '', 1, 1496, 430, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps50", "Map/Effect2.img/blackHeavenCinematic/feather1", 0, 1000, -8, 366, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps50", '', 1, 2292, 479, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps51", "Map/Effect2.img/blackHeavenCinematic/feather2", 0, 1000, -315, 371, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps51", '', 1, 1053, 478, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps52", "Map/Effect2.img/blackHeavenCinematic/feather3", 0, 1000, -154, 352, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps52", '', 1, 1729, 157, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps53", "Map/Effect2.img/blackHeavenCinematic/feather5", 0, 1000, -227, 378, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps53", '', 1, 1675, 311, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps54", "Map/Effect2.img/blackHeavenCinematic/feather4", 0, 1000, -127, 341, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps54", '', 1, 1298, 212, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps55", "Map/Effect2.img/blackHeavenCinematic/feather3", 0, 1000, -136, 367, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps55", '', 1, 2921, -38, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps56", "Map/Effect2.img/blackHeavenCinematic/feather4", 0, 1000, -271, 281, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps56", '', 1, 3252, 291, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps57", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -299, 287, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps57", '', 1, 3421, 484, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps58", "Map/Effect2.img/blackHeavenCinematic/feather2", 0, 1000, -249, 336, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps58", '', 1, 1124, 113, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps59", "Map/Effect2.img/blackHeavenCinematic/feather4", 0, 1000, -195, 374, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps59", '', 1, 1493, 30, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps60", "Map/Effect2.img/blackHeavenCinematic/feather5", 0, 1000, -44, 376, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps60", '', 1, 1516, 6, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps61", "Map/Effect2.img/blackHeavenCinematic/feather6", 0, 1000, -313, 281, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps61", '', 1, 1812, -223, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps62", "Map/Effect2.img/blackHeavenCinematic/feather2", 0, 1000, -120, 327, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps62", '', 1, 3583, 528, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps63", "Map/Effect2.img/blackHeavenCinematic/feather2", 0, 1000, -134, 359, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps63", '', 1, 3001, 567, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps64", "Map/Effect2.img/blackHeavenCinematic/feather4", 0, 1000, -46, 320, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps64", '', 1, 672, 134, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps65", "Map/Effect2.img/blackHeavenCinematic/feather5", 0, 1000, -278, 358, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps65", '', 1, 2945, 321, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps66", "Map/Effect2.img/blackHeavenCinematic/feather5", 0, 1000, -242, 367, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps66", '', 1, 738, 172, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps67", "Map/Effect2.img/blackHeavenCinematic/feather1", 0, 1000, -370, 289, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps67", '', 1, 1978, 682, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps68", "Map/Effect2.img/blackHeavenCinematic/feather3", 0, 1000, -15, 384, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps68", '', 1, 1501, 315, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps69", "Map/Effect2.img/blackHeavenCinematic/feather4", 0, 1000, -23, 330, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps69", '', 1, 1289, 64, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps70", "Map/Effect2.img/blackHeavenCinematic/feather6", 0, 1000, -322, 359, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps70", '', 1, 2952, 483, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps71", "Map/Effect2.img/blackHeavenCinematic/feather4", 0, 1000, -26, 336, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps71", '', 1, 1399, 93, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps72", "Map/Effect2.img/blackHeavenCinematic/feather5", 0, 1000, -55, 383, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps72", '', 1, 2815, 244, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps73", "Map/Effect2.img/blackHeavenCinematic/feather4", 0, 1000, -358, 379, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps73", '', 1, 1455, -11, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps74", "Map/Effect2.img/blackHeavenCinematic/feather2", 0, 1000, -116, 301, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps74", '', 1, 2911, -429, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps75", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -132, 344, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps75", '', 1, 993, -187, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps76", "Map/Effect2.img/blackHeavenCinematic/feather6", 0, 1000, -17, 334, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps76", '', 1, 2053, 469, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps77", "Map/Effect2.img/blackHeavenCinematic/feather3", 0, 1000, -329, 315, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps77", '', 1, 3649, 66, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps78", "Map/Effect2.img/blackHeavenCinematic/feather3", 0, 1000, -56, 325, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps78", '', 1, 2111, 322, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps79", "Map/Effect2.img/blackHeavenCinematic/feather1", 0, 1000, -302, 370, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps79", '', 1, 607, 453, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps80", "Map/Effect2.img/blackHeavenCinematic/feather4", 0, 1000, -285, 282, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps80", '', 1, 3938, 793, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps81", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -18, 367, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps81", '', 1, 769, -483, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps82", "Map/Effect2.img/blackHeavenCinematic/feather2", 0, 1000, -203, 320, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps82", '', 1, 1049, 336, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps83", "Map/Effect2.img/blackHeavenCinematic/feather4", 0, 1000, -3, 323, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps83", '', 1, 1621, 183, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps84", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -12, 338, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps84", '', 1, 2038, 285, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps85", "Map/Effect2.img/blackHeavenCinematic/feather4", 0, 1000, -259, 290, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps85", '', 1, 1731, -355, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps86", "Map/Effect2.img/blackHeavenCinematic/feather4", 0, 1000, -7, 303, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps86", '', 1, 2777, 732, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps87", "Map/Effect2.img/blackHeavenCinematic/feather1", 0, 1000, -154, 289, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps87", '', 1, 3109, 74, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps88", "Map/Effect2.img/blackHeavenCinematic/feather5", 0, 1000, -170, 352, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps88", '', 1, 3834, 521, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps89", "Map/Effect2.img/blackHeavenCinematic/feather4", 0, 1000, -223, 335, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps89", '', 1, 3796, 139, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps90", "Map/Effect2.img/blackHeavenCinematic/feather6", 0, 1000, -188, 362, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps90", '', 1, 3240, 465, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps91", "Map/Effect2.img/blackHeavenCinematic/feather1", 0, 1000, -385, 384, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps91", '', 1, 1038, 144, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps92", "Map/Effect2.img/blackHeavenCinematic/feather3", 0, 1000, -149, 359, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps92", '', 1, 3406, 125, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps93", "Map/Effect2.img/blackHeavenCinematic/feather3", 0, 1000, -36, 313, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps93", '', 1, 3424, 416, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps94", "Map/Effect2.img/blackHeavenCinematic/feather6", 0, 1000, -23, 286, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps94", '', 1, 1650, 124, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps95", "Map/Effect2.img/blackHeavenCinematic/feather6", 0, 1000, -351, 317, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps95", '', 1, 3599, -7, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps96", "Map/Effect2.img/blackHeavenCinematic/feather6", 0, 1000, -175, 291, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps96", '', 1, 1900, -415, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps97", "Map/Effect2.img/blackHeavenCinematic/feather4", 0, 1000, -116, 292, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps97", '', 1, 3141, 123, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps98", "Map/Effect2.img/blackHeavenCinematic/feather3", 0, 1000, -85, 340, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps98", '', 1, 504, 212, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps99", "Map/Effect2.img/blackHeavenCinematic/feather4", 0, 1000, -31, 381, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps99", '', 1, 1329, 740, -900, 0, 0, 0);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps100", "Map/Effect2.img/blackHeavenCinematic/feather5", 0, 1000, -178, 301, 4, 4, 1);
                                          cm.fieldEffect_ProcessOnOffLayer("randompps100", '', 1, 1594, -256, -900, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll0", "Map/Effect2.img/blackHeavenCinematic/feather11", 0, 1000, -221, 384, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll0", '', 1, 1556, 298, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll1", "Map/Effect2.img/blackHeavenCinematic/feather10", 0, 1000, -87, 305, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll1", '', 1, 1770, 567, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll2", "Map/Effect2.img/blackHeavenCinematic/feather9", 0, 1000, -186, 301, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll2", '', 1, 1568, 104, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll3", "Map/Effect2.img/blackHeavenCinematic/feather8", 0, 1000, -349, 288, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll3", '', 1, 1065, 309, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll4", "Map/Effect2.img/blackHeavenCinematic/feather11", 0, 1000, -237, 347, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll4", '', 1, 808, 630, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll5", "Map/Effect2.img/blackHeavenCinematic/feather6", 0, 1000, 11, 381, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll5", '', 1, 1168, 441, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll6", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -90, 330, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll6", '', 1, 1542, 46, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll7", "Map/Effect2.img/blackHeavenCinematic/feather9", 0, 1000, 24, 290, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll7", '', 1, 1705, 101, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll8", "Map/Effect2.img/blackHeavenCinematic/feather11", 0, 1000, -344, 300, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll8", '', 1, 938, 434, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll9", "Map/Effect2.img/blackHeavenCinematic/feather11", 0, 1000, -229, 283, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll9", '', 1, 1373, 588, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll10", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -275, 285, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll10", '', 1, 1181, 163, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll11", "Map/Effect2.img/blackHeavenCinematic/feather11", 0, 1000, -3, 309, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll11", '', 1, 1904, 694, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll12", "Map/Effect2.img/blackHeavenCinematic/feather6", 0, 1000, -49, 334, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll12", '', 1, 746, 232, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll13", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -334, 306, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll13", '', 1, 1446, 155, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll14", "Map/Effect2.img/blackHeavenCinematic/feather11", 0, 1000, -197, 335, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll14", '', 1, 555, 70, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll15", "Map/Effect2.img/blackHeavenCinematic/feather11", 0, 1000, -231, 320, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll15", '', 1, 1962, 183, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll16", "Map/Effect2.img/blackHeavenCinematic/feather11", 0, 1000, 31, 351, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll16", '', 1, 1483, 294, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll17", "Map/Effect2.img/blackHeavenCinematic/feather8", 0, 1000, -261, 370, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll17", '', 1, 1526, 577, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll18", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -36, 323, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll18", '', 1, 1460, 206, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll19", "Map/Effect2.img/blackHeavenCinematic/feather11", 0, 1000, -240, 313, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll19", '', 1, 1946, 6, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll20", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -275, 321, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll20", '', 1, 520, 354, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll21", "Map/Effect2.img/blackHeavenCinematic/feather8", 0, 1000, -55, 376, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll21", '', 1, 1921, 514, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll22", "Map/Effect2.img/blackHeavenCinematic/feather8", 0, 1000, -49, 306, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll22", '', 1, 814, 336, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll23", "Map/Effect2.img/blackHeavenCinematic/feather9", 0, 1000, -286, 353, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll23", '', 1, 521, 653, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll24", "Map/Effect2.img/blackHeavenCinematic/feather10", 0, 1000, -302, 352, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll24", '', 1, 1251, 586, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll25", "Map/Effect2.img/blackHeavenCinematic/feather11", 0, 1000, -69, 297, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll25", '', 1, 1755, 421, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll26", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -20, 377, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll26", '', 1, 539, 502, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll27", "Map/Effect2.img/blackHeavenCinematic/feather9", 0, 1000, -235, 375, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll27", '', 1, 1404, 253, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll28", "Map/Effect2.img/blackHeavenCinematic/feather8", 0, 1000, -161, 376, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll28", '', 1, 1289, 201, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll29", "Map/Effect2.img/blackHeavenCinematic/feather9", 0, 1000, -35, 312, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll29", '', 1, 708, 104, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll30", "Map/Effect2.img/blackHeavenCinematic/feather10", 0, 1000, -68, 325, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll30", '', 1, 1657, 400, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll31", "Map/Effect2.img/blackHeavenCinematic/feather9", 0, 1000, -107, 370, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll31", '', 1, 1988, 594, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll32", "Map/Effect2.img/blackHeavenCinematic/feather11", 0, 1000, -170, 290, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll32", '', 1, 764, 270, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll33", "Map/Effect2.img/blackHeavenCinematic/feather11", 0, 1000, -124, 317, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll33", '', 1, 1763, 29, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll34", "Map/Effect2.img/blackHeavenCinematic/feather6", 0, 1000, -193, 290, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll34", '', 1, 1065, 53, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll35", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -170, 339, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll35", '', 1, 1462, 237, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll36", "Map/Effect2.img/blackHeavenCinematic/feather11", 0, 1000, -334, 360, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll36", '', 1, 1501, 413, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll37", "Map/Effect2.img/blackHeavenCinematic/feather10", 0, 1000, -192, 382, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll37", '', 1, 1073, 494, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll38", "Map/Effect2.img/blackHeavenCinematic/feather11", 0, 1000, 36, 345, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll38", '', 1, 1412, 23, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll39", "Map/Effect2.img/blackHeavenCinematic/feather8", 0, 1000, -340, 367, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll39", '', 1, 1167, 571, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll40", "Map/Effect2.img/blackHeavenCinematic/feather8", 0, 1000, -247, 329, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll40", '', 1, 1999, 464, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll41", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -67, 353, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll41", '', 1, 978, 344, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll42", "Map/Effect2.img/blackHeavenCinematic/feather9", 0, 1000, 33, 344, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll42", '', 1, 793, 451, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll43", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -257, 344, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll43", '', 1, 752, 220, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll44", "Map/Effect2.img/blackHeavenCinematic/feather11", 0, 1000, -15, 337, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll44", '', 1, 1943, 665, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll45", "Map/Effect2.img/blackHeavenCinematic/feather10", 0, 1000, -335, 356, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll45", '', 1, 1122, 540, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll46", "Map/Effect2.img/blackHeavenCinematic/feather6", 0, 1000, -207, 359, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll46", '', 1, 1796, 591, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll47", "Map/Effect2.img/blackHeavenCinematic/feather8", 0, 1000, -101, 379, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll47", '', 1, 914, 546, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll48", "Map/Effect2.img/blackHeavenCinematic/feather10", 0, 1000, -183, 334, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll48", '', 1, 1735, 485, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll49", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -165, 377, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll49", '', 1, 1848, 43, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll50", "Map/Effect2.img/blackHeavenCinematic/feather6", 0, 1000, -289, 322, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll50", '', 1, 1887, 152, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll51", "Map/Effect2.img/blackHeavenCinematic/feather10", 0, 1000, 7, 368, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll51", '', 1, 531, 557, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll52", "Map/Effect2.img/blackHeavenCinematic/feather6", 0, 1000, -44, 347, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll52", '', 1, 1513, 380, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll53", "Map/Effect2.img/blackHeavenCinematic/feather11", 0, 1000, 12, 333, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll53", '', 1, 1021, 4, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll54", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -326, 339, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll54", '', 1, 1840, 9, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll55", "Map/Effect2.img/blackHeavenCinematic/feather9", 0, 1000, -169, 377, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll55", '', 1, 1143, 532, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll56", "Map/Effect2.img/blackHeavenCinematic/feather11", 0, 1000, -208, 334, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll56", '', 1, 1396, 315, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll57", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -214, 303, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll57", '', 1, 939, 304, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll58", "Map/Effect2.img/blackHeavenCinematic/feather7", 0, 1000, -163, 339, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll58", '', 1, 906, 118, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll59", "Map/Effect2.img/blackHeavenCinematic/feather9", 0, 1000, -234, 366, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll59", '', 1, 1639, 429, -850, 0, 0, 0);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll60", "Map/Effect2.img/blackHeavenCinematic/feather11", 0, 1000, -307, 291, 5, 4, 1);
                                            cm.fieldEffect_ProcessOnOffLayer("randomppll60", '', 1, 1072, 342, -850, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss0", "Map/Effect2.img/blackHeavenCinematic/feather1", 0, 1000, -128, 319, 4, 4, 1);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss0", '', 1, 2393, 1060, -900, 0, 0, 0);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss1", "Map/Effect2.img/blackHeavenCinematic/feather3", 0, 1000, -167, 329, 4, 4, 1);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss1", '', 1, 2232, 1233, -900, 0, 0, 0);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss2", "Map/Effect2.img/blackHeavenCinematic/feather3", 0, 1000, -299, 319, 4, 4, 1);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss2", '', 1, 2878, 907, -900, 0, 0, 0);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss3", "Map/Effect2.img/blackHeavenCinematic/feather3", 0, 1000, -238, 330, 4, 4, 1);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss3", '', 1, 3391, 581, -900, 0, 0, 0);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss4", "Map/Effect2.img/blackHeavenCinematic/feather2", 0, 1000, -274, 301, 4, 4, 1);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss4", '', 1, 551, 1087, -900, 0, 0, 0);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss5", "Map/Effect2.img/blackHeavenCinematic/feather2", 0, 1000, -352, 349, 4, 4, 1);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss5", '', 1, 1797, 950, -900, 0, 0, 0);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss6", "Map/Effect2.img/blackHeavenCinematic/feather4", 0, 1000, -367, 311, 4, 4, 1);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss6", '', 1, 3446, 381, -900, 0, 0, 0);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss7", "Map/Effect2.img/blackHeavenCinematic/feather6", 0, 1000, -158, 316, 4, 4, 1);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss7", '', 1, 1683, 1100, -900, 0, 0, 0);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss8", "Map/Effect2.img/blackHeavenCinematic/feather3", 0, 1000, -138, 355, 4, 4, 1);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss8", '', 1, 2446, 950, -900, 0, 0, 0);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss9", "Map/Effect2.img/blackHeavenCinematic/feather5", 0, 1000, -164, 351, 4, 4, 1);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss9", '', 1, 2846, 824, -900, 0, 0, 0);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss10", "Map/Effect2.img/blackHeavenCinematic/feather1", 0, 1000, -38, 347, 4, 4, 1);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss10", '', 1, 845, 1223, -900, 0, 0, 0);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss11", "Map/Effect2.img/blackHeavenCinematic/feather4", 0, 1000, -160, 370, 4, 4, 1);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss11", '', 1, 3149, 983, -900, 0, 0, 0);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss12", "Map/Effect2.img/blackHeavenCinematic/feather1", 0, 1000, -130, 351, 4, 4, 1);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss12", '', 1, 2679, 567, -900, 0, 0, 0);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss13", "Map/Effect2.img/blackHeavenCinematic/feather4", 0, 1000, -256, 287, 4, 4, 1);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss13", '', 1, 3114, 359, -900, 0, 0, 0);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss14", "Map/Effect2.img/blackHeavenCinematic/feather5", 0, 1000, -356, 289, 4, 4, 1);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss14", '', 1, 1529, 633, -900, 0, 0, 0);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss15", "Map/Effect2.img/blackHeavenCinematic/feather2", 0, 1000, -378, 366, 4, 4, 1);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss15", '', 1, 3158, 391, -900, 0, 0, 0);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss16", "Map/Effect2.img/blackHeavenCinematic/feather2", 0, 1000, -334, 316, 4, 4, 1);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss16", '', 1, 3709, 668, -900, 0, 0, 0);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss17", "Map/Effect2.img/blackHeavenCinematic/feather6", 0, 1000, -263, 372, 4, 4, 1);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss17", '', 1, 3915, 708, -900, 0, 0, 0);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss18", "Map/Effect2.img/blackHeavenCinematic/feather1", 0, 1000, -367, 380, 4, 4, 1);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss18", '', 1, 2998, 821, -900, 0, 0, 0);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss19", "Map/Effect2.img/blackHeavenCinematic/feather6", 0, 1000, -234, 286, 4, 4, 1);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss19", '', 1, 747, 790, -900, 0, 0, 0);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss20", "Map/Effect2.img/blackHeavenCinematic/feather3", 0, 1000, -235, 337, 4, 4, 1);
                                              cm.fieldEffect_ProcessOnOffLayer("randomppss20", '', 1, 3579, 592, -900, 0, 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_ProcessOnOffLayer("randompps0", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps1", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer('randompps2', '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer('randompps3', '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps4", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer('randompps5', '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps6", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps7", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps8", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps9", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps10", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps11", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps12", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps13", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps14", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps15", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps16", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps17", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps18", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps19", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps20", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps21", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps22", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps23", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps24", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps25", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps26", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps27", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps28", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps29", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps30", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps31", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps32", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps33", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps34", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps35", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps36", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps37", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps38", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps39", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps40", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps41", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps42", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps43", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps44", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps45", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps46", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps47", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps48", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps49", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps50", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps51", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps52", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps53", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps54", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps55", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps56", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps57", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps58", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps59", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps60", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps61", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps62", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps63", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps64", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps65", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps66", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps67", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps68", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps69", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps70", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps71", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps72", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps73", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps74", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps75", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps76", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps77", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps78", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps79", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps80", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps81", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps82", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps83", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps84", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps85", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps86", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps87", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps88", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps89", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps90", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps91", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps92", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps93", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps94", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps95", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps96", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps97", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps98", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps99", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randompps100", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer('randomppl0', '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppl1", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppl2", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppl3", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppl4", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppl5", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppl6", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppl7", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppl8", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer('randomppl9', '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppl10", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppl11", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppl12", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppl13", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppl14", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppl15", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppl16", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppl17", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppl18", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppl19", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppl20", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll0", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll1", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll2", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll3", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll4", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll5", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll6", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll7", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll8", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll9", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll10", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll11", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll12", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll13", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll14", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll15", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll16", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll17", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll18", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll19", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll20", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll21", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll22", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll23", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll24", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll25", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll26", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll27", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll28", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll29", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll30", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll31", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll32", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll33", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll34", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll35", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll36", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll37", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll38", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll39", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll40", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll41", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll42", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll43", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll44", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll45", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll46", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll47", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll48", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll49", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll50", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll51", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll52", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll53", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll54", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll55", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll56", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll57", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll58", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll59", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppll60", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppss0", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppss1", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppss2", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppss3", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppss4", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppss5", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppss6", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppss7", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppss8", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppss9", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppss10", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppss11", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppss12", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppss13", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppss14", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppss15", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppss16", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppss17", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppss18", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppss19", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("randomppss20", '', 2, 1000, 0, 0, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/pang", "oid=40200367"], [0, 0, -10, 1, 0, 1, 0, 0]);
                                                  cm.fieldEffect_PlayFieldSound("Kite/Crown", 100);
                                                  cm.npc_LeaveField("oid=40200367");
                                                  cm.npc_LeaveField("oid=40200367");
                                                  cm.npc_ChangeController(1530617, "oid=40208840", 20, -9, 10, -30, 70, 0, true, false);
                                                  cm.npc_SetSpecialAction("oid=40208840", 'summon', 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 4000, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer('randomt0', "Map/Effect2.img/blackHeavenCinematic/twinkle2", 0, 3000, 290, 5, 3, 1, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("randomt0", '', 1, 29533, 7, 800, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("randomt1", "Map/Effect2.img/blackHeavenCinematic/twinkle5", 0, 3000, -556, 80, 3, 1, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("randomt1", '', 1, 25449, 20, 800, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("randomt2", "Map/Effect2.img/blackHeavenCinematic/twinkle2", 0, 3000, 703, 179, 3, 1, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("randomt2", '', 1, 20996, 50, 800, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer('randomt3', "Map/Effect2.img/blackHeavenCinematic/twinkle6", 0, 3000, 286, 188, 3, 1, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("randomt3", '', 1, 24927, -93, 800, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("randomt4", "Map/Effect2.img/blackHeavenCinematic/twinkle5", 0, 3000, -525, 53, 3, 1, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("randomt4", '', 1, 24137, 83, 800, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("randomt5", "Map/Effect2.img/blackHeavenCinematic/twinkle6", 0, 3000, -600, 153, 3, 1, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("randomt5", '', 1, 28722, -26, 800, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("randomt6", "Map/Effect2.img/blackHeavenCinematic/twinkle2", 0, 3000, -239, 104, 3, 1, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("randomt6", '', 1, 31748, 109, 800, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("randomt7", "Map/Effect2.img/blackHeavenCinematic/twinkle2", 0, 3000, 133, 42, 3, 1, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("randomt7", '', 1, 23078, 116, 800, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("randomt8", "Map/Effect2.img/blackHeavenCinematic/twinkle3", 0, 3000, 676, 49, 3, 1, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer('randomt8', '', 1, 26899, 123, 800, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer('randomt9', "Map/Effect2.img/blackHeavenCinematic/twinkle1", 0, 3000, 185, 217, 3, 1, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("randomt9", '', 1, 22124, -156, 800, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("randomt10", "Map/Effect2.img/blackHeavenCinematic/twinkle5", 0, 3000, 42, 156, 3, 1, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer('randomt10', '', 1, 27508, 181, 800, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("randomt0", '', 2, 1000, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("randomt1", '', 2, 1000, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("randomt2", '', 2, 1000, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("randomt3", '', 2, 1000, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer('randomt4', '', 2, 1000, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("randomt5", '', 2, 1000, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer('randomt6', '', 2, 1000, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("randomt7", '', 2, 1000, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer('randomt8', '', 2, 1000, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("randomt9", '', 2, 1000, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("randomt10", '', 2, 1000, 0, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("天啊？我刚才都干了什么啊？", 37, 1530060, false, true);
                                                      cm.effect_Voice("Voice2.img/Friends/CH6_07/3", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("啦啦啦，成功！！！", 37, 1530100, true, true);
                                                        cm.effect_Voice("Voice2.img/Friends/CH6_07/4", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("呀~希纳斯~", 37, 1530110, true, true);
                                                          cm.effect_Voice("Voice2.img/Friends/CH6_07/5", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom('终于！', 37, 1530120, true, true);
                                                            cm.effect_Voice("Voice2.img/Friends/CH6_07/6", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_ChangeController(1530620, "oid=40210589", -300, -9, 9, -350, -250, 0, true, false);
                                                              cm.npc_SetSpecialAction("oid=40210589", 'summon', 0, 0);
                                                              cm.npc_SetForceMove("oid=40210589", 1, 150, 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("劈咿嘶。", 37, 1530620, false, true);
                                                                cm.effect_Voice("Voice2.img/Friends/CH6_07/8", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_PushScaleInfo(700, 1500, 700, 320, 150);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=40200361"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=40200362"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=40200363"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=40200364"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=40200365"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=40200366"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=40200367"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("啊啊……", 37, 1530120, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom('能不能再来一次？', 37, 1530110, true, true);
                                                                            cm.effect_Voice("Voice2.img/Friends/CH6_07/10", 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("呃，大家现在都累了……", 37, 1530120, true, true);
                                                                              cm.effect_Voice("Voice2.img/Friends/CH6_07/11", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("暂时就这么休息下也不错啊。", 37, 1530090, true, true);
                                                                                cm.effect_Voice("Voice2.img/Friends/CH6_07/12", 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("呵呵呵呵，伊卡尔特太棒了！", 37, 1530100, true, true);
                                                                                  cm.effect_Voice("Voice2.img/Friends/CH6_07/13", 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("是啊是啊~我们在演出前照张照片吧！", 37, 1530110, true, true);
                                                                                    cm.effect_Voice("Voice2.img/Friends/CH6_07/14", 100);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("同意~", 37, 1530100, true, true);
                                                                                      cm.effect_Voice("Voice2.img/Friends/CH6_07/15", 100);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("我来照吧。", 57, 0, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("那大家一起！", 37, 1530110, false, true);
                                                                                            cm.effect_Voice("Voice2.img/Friends/CH6_07/16", 100);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_PlayFieldSound("Sound/Voice2.img/Friends/CH6_07/17", 100);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/Voice2.img/Friends/CH6_07/18", 100);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Voice2.img/Friends/CH6_07/19", 100);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/Voice2.img/Friends/CH6_07/22", 100);
                                                                                                      cm.sendNormalTalk_Bottom("劈咿嘶！！", 37, 1530620, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_ProcessOnOffLayer('5', "Map/Effect2.img/spinoff2/4", 0, 1500, 0, 0, 0, 4, 1);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                            cm.effect_Voice("UI.img/CameraShutter", 100);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_ProcessOnOffLayer('5', '', 2, 2000, 0, 0, 0, 0, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                            } else if (status === V++) {
                                                                                                              cm.forceStartQuest(33533, '');
                                                                                                              cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                                                                              cm.forceCompleteQuest(33517);
                                                                                                              cm.gainItem(4034348, -10);
                                                                                                              cm.dispose();
                                                                                                              cm.warp(330000000, 0);
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