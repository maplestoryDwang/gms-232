var status = 0;
var music = Array(Array('BgmPL2/Abrup', 867200101), Array('BgmPL2/Aburp', 867202201), Array('BgmPL2/Appearance', 867201802), Array('BgmPL2/Attack', 867200310), Array('BgmPL2/FallenThings', 867136130), Array('BgmPL2/Julietta', 867201991), Array('BgmPL2/Labor', 867202300), Array('BgmPL2/SleepingForest', 867201200), Array('BgmPL2/TheWaytoHope', 867200550), Array('BgmPL2/TheWaytoHope_MR', 867200961), Array('BgmPL2/TheWaytoHope_gloomy', 867200500), Array('BgmPL2/TheWaytoHope_gloomy_MR', 867200851), Array('BgmPL2/Turbulence', 867200200), Array('BgmPL2/WalkTogether', 867201300), Array('BgmTH/ThaiTown', 500000000), Array('BgmTH/goldTempleDungeonTH', 252020000), Array('BgmTH/goldTempleFieldTH', 252010000), Array('BgmTH/goldTempleTownTH', 252000000), Array('BgmTW/ChivalrousFighter', 743000000), Array('BgmTW/FishingSystem', 749050500), Array('BgmTW/GachaponHousing', 749050400), Array('BgmTW/MapleHighSchoolCN', 744000000), Array('BgmTW/MapleHighSchoolTW', 744000005), Array('BgmTW/arisanField', 867115100), Array('BgmWz2/AbyssExpedition', 867147000), Array('BgmWz2/AmazingAbyss', 867147026), Array('BgmWz2/CoronaFestival', 867139000), Array('BgmWz2/CoronaFestival3', 867139100), Array('BgmWz2/DarkAbyss', 867147010), Array('BgmWz2/myHome_room', 871100000), Array('BgmWz2/myHome_village', 871000000), Array('Bgm_pachinko/Pachinko_Interior_Ambience', 809030000), Array('FerociousBattlefield_RiserEdit', 993066800), Array('PL_Beautyroid/Beautyroid3_HiddenHallway', 867142009), Array('PL_Beautyroid/Beautyroid3_MoreHumanThanHuman', 867142017), Array('PL_Beautyroid/Beautyroid3_ScionsLair', 867142010), Array('PL_Beautyroid/Beautyroid_Factory', 867116000), Array('PL_Beautyroid/Beautyroid_Forrest', 867115950), Array('PL_Beautyroid/Beautyroid_Lab', 867116150), Array('PL_Beautyroid/Beautyroid_Lobby', 867115900), Array('PL_Beautyroid/Lab', 867117150), Array('PL_Beautyroid/PeacefulDays', 867117550), Array('bgmEvent.img/dolphin_night', 871000003), Array('bgmEvent/FunnyRabbitFaster', 910023503));
function start() {
  status = -1;
  action(1, 0, 0);
}
var selectionLog = [];
function action(f, W, U) {
  if (f == -1)
    cm.dispose();
  else {
    f == 1 ? status++ : status--;
    selectionLog[status] = U;
    if (status == -1)
      cm.dispose();
    else {
      if (status == 0) {
        var V = '想听点音乐放松一下吗?\r\n#n#d那么快选择您想点播的音乐吧。\r\n#k';
        V += '\r\n#b#L' + (music.length + 1) + '#上一页#l#k\r\n';
        for (var w = 0; w < music.length; w++) {
          V += '\r\n#L' + w + '#' + music[w][0] + '   #b#m' + music[w][1] + '# 第' + (w + 495) + '首 #l#k';
        }
        V += '\r\n#b#L' + (music.length + 1) + '#上一页#l#k\r\n';
        cm.askMenu(V);
      } else {
        if (status == 1) {
          if (U == music.length + 1) {
            cm.dispose();
            cm.openNpc(9000100, 1);
            return;
          }
          var m = music[selectionLog[status]];
          var V = '点播音乐 ' + music[selectionLog[status]][0] + '   #b#m' + music[selectionLog[status]][1] + ' \r\n#k';
          V += '\r\n#b#L1#个人点播(10万金币)#l#k\r\n';
          V += '\r\n#b#L0#全频道点播(1000万金币)#l#k\r\n';
          cm.askMenu(V);
        } else if (status == 2) {
          switch (selectionLog[status]) {
          case 0:
            if (cm.getMeso() > 10000000) {
              cm.gainMeso(-10000000);
              cm.getChannelServer().getPlayers().getAllCharacters().forEach(function (N) {
                N.getAPI().fieldEffect_PlayBGM(music[selectionLog[status - 1]][0]);
                N.getAPI().addPopupSay(9062211, 3000, '[音乐点播台] \r\n玩家' + cm.getPlayer().getName() + ' 花费1000W金币 \r\n点播歌曲为：\r\n#m' + music[selectionLog[status - 1]][1] + '#');
              });
              cm.worldMessage('[音乐点播] 玩家' + cm.getPlayer().getName() + ' 点播 [' + music[selectionLog[status - 1]][0] + ']歌曲！');
            } else {
              cm.sendOk('每次点播歌曲需要1000W金币,你没有足够的金币。');
            }
            break;
          case 1:
            if (cm.getMeso() > 100000) {
              cm.gainMeso(-100000);
              cm.fieldEffect_PlayBGM(music[selectionLog[status - 1]][0]);
              cm.worldMessage('[音乐点播] 玩家' + cm.getPlayer().getName() + ' 点播了' + music[selectionLog[status - 1]][0] + '歌曲！');
              cm.sendOk('点播成功,祝您游戏愉快。');
            } else {
              cm.sendOk('每次点播歌曲需要10万金币,你没有足够的金币。');
            }
            break;
          }
          cm.dispose();
        }
      }
    }
  }
}