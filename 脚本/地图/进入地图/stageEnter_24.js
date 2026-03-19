var status = -1;
var BGM = [["阿里安特", "Bgm14/Ariant"], ["明珠港", "Bgm02/AboveTheTreetops"], ["射手村", "Bgm00/FloralLife"], ["勇士部落", "Bgm00/Nightmare"], ["废弃都市", "Bgm01/BadGuys"], ["魔法密林", "Bgm02/WhenTheMorningComes"], ["林中之城", "Bgm00/SleepyWood"], ["埃欧雷", "Bgm25/WindAndFlower"], ["天空之城", "Bgm04/Shinin'Harbor"], ['冰封雪域', "Bgm03/SnowyVillage"], ['水下世界', "Bgm11/Aquarium"], ['玩具城', "Bgm06/FantasticThinking"], ["神木村", "Bgm13/Leafre"], ['圣地', "Bgm18/QueensGarden"], ["埃德尔斯坦", "Bgm22/EdelsteinCity"], ["玛加提亚", "Bgm12/Dispute"], ['武陵', "Bgm15/MureungHill"], ['里恩', "Bgm19/RienVillage"], ["尖耳狐狸村", "Bgm36/foxvillage"], ["万神殿", "Bgm27/Pantheon"], ['童话村', "Bgm11/DownTown"]];
function action(f, E, e) {
  status++;
  var V = em.getProperty("stage24");
  if (V === 'start' || V === "clear") {
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
          cm.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 24 F\r\n\r\n#fs22#这是起源之塔的管理者桃乐丝所制作的关卡。\r\n\r\n连我的话都不想听是干嘛，非要在这么冷的地方设置这种关卡，真是很低俗的兴趣！\r\n\r\n要通过这地方的方法是仔细听背景音乐，要猜中是在冒险岛哪个村庄里听过的音乐才行。\r\n\r\n因为只会播放一次，要仔细听。", 30000);
        } else if (status === O++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
          cm.curNodeEventEnd(true);
          cm.setInGameDirectionMode(false, true);
          cm.setStandAloneMode(false);
          startMap(em);
        } else {
          cm.dispose();
        }
      }
    }
  }
}
function startMap(f) {
  cm.dispose();
  cm.updateHeaderUI(1, 2, f.getTimeLeft(), 0, f.getTimeLeft(), 42011);
  f.setProperty("stage24", "start");
  cm.getMap().getWeatherEffectNotice("现在，你要认真倾听音乐，然后回答问题并通过这里。", 147, 60000, 1);
  var E = f.getNumberProperty("stage24_bgm_1");
  cm.fieldEffect_PlayBGM(BGM[E][1]);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;