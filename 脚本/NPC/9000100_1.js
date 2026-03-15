var status = 0;
var music = Array(Array('Bgm40/BattleOnTheDeck', 310070160), Array('Bgm40/BlackHeavenTheme', 350040191), Array('Bgm40/BlackHeavenTheme_parade', 350020023), Array('Bgm40/HeroComes', 350042050), Array('Bgm40/JunkYard', 310070002), Array('Bgm40/RabbitsDream', 350013100), Array('Bgm40/SecretMission', 310070481), Array('Bgm40/SecretMissionBase', 310070486), Array('Bgm40/TheDollMaster', 350024200), Array('Bgm41.img/BigMachine_mission', 350062100), Array('Bgm41/BigMachine', 310070001), Array('Bgm41/BigMachine_mission', 350053200), Array('Bgm41/HeavenAgain', 350063100), Array('Bgm41/PromiseOfHeaven', 350063202), Array('Bgm41/PromiseOfHeaven_vocaless', 310070155), Array('Bgm42/TheBeast', 993000000), Array('Bgm42/TheBeast2', 330000600), Array('Bgm43/Skyscraper', 331000000), Array('Bgm43/TresureGameMulti', 911002000), Array('Bgm43/TresureGameSingle', 911001000), Array('Bgm43/monsterWorld', 911000000), Array('Bgm44/Desperately', 993000500), Array('Bgm44/Hieijan_KR', 910811001), Array('Bgm44/Hieijan_nohime_KR', 910811000), Array('Bgm44/InsideHonnouji_KR', 910810006), Array('Bgm44/Kecon_KR', 910810001), Array('Bgm44/MomijiNoSakamichi_KR', 910810100), Array('Bgm44/Momijigaoka_KR', 910810000), Array('Bgm44/SheSellsALuckyThing', 970072100), Array('Bgm44/TheKingOfDestruction', 993000701), Array('Bgm44/TheSilentWar', 970072000), Array('Bgm44/WildFury', 350111250), Array('Bgm45/Demian', 350160000), Array('Bgm45/Showtime!', 350111500), Array('Bgm45/Travelers', 350144300), Array('Bgm46/BrokenDream', 450004250), Array('Bgm46/ClockTowerofNightmare', 450003500), Array('Bgm46/LachelntheIllusionCity', 450003000), Array('Bgm46/WierldForestIntheGirlsdream', 450004150), Array('Bgm47/ArcanaBoss', 450005500), Array('Bgm47/Asylum', 402000500), Array('Bgm47/AsylumPiano', 940202008), Array('Bgm47/CrystalAcademia', 402000520), Array('Bgm47/DancesWithAliens', 221030500), Array('Bgm47/DeathOfAsylum', 940202100), Array('Bgm47/DeathOfAsylumChoir', 940202032), Array('Bgm47/HuntingGround', 402000110), Array('Bgm47/MrHazard', 402000320), Array('Bgm47/SavageTerminal', 402000000), Array('Bgm47/TheTuneOfAzureLight', 450005000), Array('Bgm47/TheTuneOfAzureLight2', 921172400), Array('Bgm48.img/Title', 993028000), Array('Bgm48/BlackDungeon', 450006200), Array('Bgm48/Doomsday_FULL', 402000640), Array('Bgm48/EveningPrimrose', 307000210), Array('Bgm48/Memory', 993110779), Array('Bgm48/MemoryOfKritias', 450006100), Array('Bgm48/Outpost', 450009000), Array('Bgm48/OverTheClouds', 410000120), Array('Bgm48/OverTheClouds_RhythmicVer', 940204260), Array('Bgm48/SwampOfMemoryMoras', 450006000), Array('Bgm48/Title', 993050200), Array('Bgm48/VerdelDungeon', 402000630), Array('Bgm48/VerdelField', 402000621), Array('Bgm48/VerdelTown', 402000600), Array('Bgm48/WayBackHome', 306090110), Array('Bgm49/BloodCage', 450007510), Array('Bgm49/ConteminatedSea', 450007100), Array('Bgm49/DepthOfPain', 450010100), Array('Bgm49/Diffraction', 450008100), Array('Bgm49/EternalSwamp', 450011220), Array('Bgm49/FerociousBattlefield', 450009400), Array('Bgm49/FerociousBattlefield_RiserEdit', 993058900), Array('Bgm49/HeartofSuffering', 450011320), Array('Bgm49/MirrorCage', 450008200), Array('Bgm49/SecretLabyrinth', 450011120), Array('Bgm49/SoupOfLife', 450007000), Array('Bgm49/StrangeFog', 450009201), Array('Bgm49/TempleInTheMirror', 450007200), Array('Bgm49/WarCloud', 450009100), Array('Bgm49/WaveofEmptiness', 450009301), Array('Bgm50/BlackFury', 993059000), Array('Bgm50/LostSpace', 450013700), Array('Bgm50/SubterminalPoint', 450012200), Array('Bgm50/TearsOfTheWorld', 450012000), Array('Bgm50/TempleOfDarkness', 450013100), Array('Bgm50/TheWorld’sEnd', 450012300), Array('Bgm50/ThroneOfDarkness', 450013300), Array('Bgm50/WorldHorizon', 450013500), Array('Bgm51.img/Pathfinder', 100051044), Array('Bgm51.img/ThePartemRuins', 910090305), Array('Bgm51.img/TheVillageOfKarupa', 910090314), Array('Bgm51/LosGurugers', 402000450), Array('Bgm51/LuensHouse', 101082000), Array('Bgm51/MapleSquadS1', 180010004), Array('Bgm51/Pathfinder', 993110769), Array('Bgm51/SecretElodin', 101080900), Array('Bgm51/ThePartemRuins', 100051040), Array('Bgm51/TheVillageOfKarupa', 100051000), Array('Bgm51/battleHorizonTheme', 993090000), Array('Bgm52/Borderless', 993135000), Array('Bgm53/BattleOfCernium', 993122900), Array('Bgm53/CheongUn', 410000200), Array('Bgm53/CreepyTemple', 410000240), Array('Bgm53/GraveyardOfSword', 410000760), Array('Bgm53/HolyWar', 993111700), Array('Bgm53/RedMoon', 410000770), Array('Bgm53/RidingOnTheClouds', 993160118), Array('Bgm53/RisingSun', 993151027), Array('Bgm53/SanctuaryOfMitra', 410000680), Array('Bgm53/SeaWave', 410000510), Array('Bgm53/SeonYuSan', 993160000), Array('Bgm53/TheHolyLand', 993111600), Array('BgmBT/BeastTamerColloseum', 866010400), Array('BgmBT/BeastTamerKoboltCave', 866000100), Array('BgmBT/BeastTamerWoodTown', 743070000), Array('BgmBT/FightingPinkBeenHawk', 866131000), Array('BgmBT/RemembranceBear', 866127000), Array('BgmBT/commercIng', 865000100), Array('BgmBT/commerzBeach', 865010000), Array('BgmBT/commerzCanal', 865000000), Array('BgmBT/commerzForest', 865020071), Array("BgmBT/rock'nBattleTiger", 866110000), Array('BgmBT/velludBossBattle', 863010240), Array('BgmBT/velludfieldBattle', 863000900), Array('BgmCN/ShanghaiField', 701102000), Array('BgmCN/Yuyuan', 701210131), Array('BgmCN/newNanjinglu', 701101000), Array('BgmCN/newWaitan', 701103000), Array('BgmCN/newYuyuan', 701100000), Array('BgmCN/shaolinBoss', 701220610), Array('BgmCN/shaolin_daxiongbaodian', 701220000), Array('BgmCN/shaolin_mishi', 701220600), Array('BgmCN/shaolin_shan', 701210100), Array('BgmCN/shaolin_songshan', 701210000), Array('BgmEvent.img/halloweenMainHall', 871000027), Array('BgmEvent/FunnyRabbit', 109030001), Array('BgmEvent/FunnyRabbitFaster', 109030003), Array('BgmEvent/GalaxyisDangerous', 993011200), Array('BgmEvent/LittleMaplePlanet', 933015000), Array('BgmEvent/RabbitInvasion', 922260100), Array('BgmEvent/WelcomeToThe15thStreet', 993050000), Array('BgmEvent/captureTheFlag', 932200001), Array('BgmEvent/coordiKing', 867112050), Array('BgmEvent/halloweenMainHall', 229000000), Array('BgmEvent/halloweenParty', 922900000), Array('BgmEvent/halloweenracing', 229010100), Array('BgmEvent/mapleGalaxy', 993010000), Array('BgmEvent/mapleGalaxy2', 993014200), Array('BgmEvent/weddingDance', 910194251), Array('BgmEvent2/Mashup', 993050600), Array('BgmEvent2/Newtro_ChuChu', 993030000), Array('BgmEvent2/Newtro_Disco', 993110100), Array('BgmEvent2/Newtro_FlorinaBeach', 993104300), Array('BgmEvent2/Newtro_Kingdom', 993110000), Array('BgmEvent2/Newtro_Login', 993110200), Array('BgmEvent2/Newtro_Ludibrium', 922290000), Array('BgmEvent2/Newtro_Orbis', 993107600), Array('BgmEvent2/WaterGunGame', 993019000), Array('BgmEvent2/adventureIsland', 993080000), Array('BgmEvent2/battleHorizon', 993170000), Array('BgmEvent2/clubHalloween', 993034000), Array('BgmEvent2/glory_Base', 993111301), Array('BgmEvent2/goblinMarket', 993123100), Array('BgmEvent2/kiteBgm', 910047100), Array('BgmEvent2/miniGameStation', 330007210), Array('BgmEvent2/rhythmBgm2', 867112000), Array('BgmEvent2/tenthBoard', 910026400), Array('BgmFT/FantasticThemePark', 222110110), Array('BgmFT/FantasticThemePark2017', 222100000), Array('BgmGL/Bigfoot', 610010010), Array('BgmGL/Blackgate', 610050000), Array('BgmGL/Courtyard', 610030000), Array('BgmGL/CrimsonwoodKeep', 610020000), Array('BgmGL/CrimsonwoodKeepInterior', 610030010), Array('BgmGL/GrandmastersGauntlet', 610030600), Array('BgmGL/HauntedHouse', 229000311), Array('BgmGL/MBlockbusterC', 610063090), Array('BgmGL/MBlockbusterE1', 610061290), Array('BgmGL/MBlockbusterE2', 610064510), Array('BgmGL/MBlockbusterJ', 610061350), Array('BgmGL/MadHouse', 620105500), Array('BgmGL/MadHouseEnding', 620108900), Array('BgmGL/NLC_boss', 610040400), Array('BgmGL/NLC_field', 600010300), Array('BgmGL/NLC_kidnap', 610040000), Array('BgmGL/NLC_town', 703000000), Array('BgmGL/NLChunt', 600010000), Array('BgmGL/NLCtown', 600000000), Array('BgmGL/NLCupbeat', 600020000), Array('BgmGL/PartyQuestGL', 610030300), Array('BgmGL/PhantomForest', 610010000), Array('BgmGL/amoria', 620110001), Array('BgmGL2D/china', 706042017), Array('BgmJp/Bathroom', 809000101), Array('BgmJp/BattleField', 800021060), Array('BgmJp/BizarreForest', 800010100), Array('BgmJp/CastleOutSide', 800040000), Array('BgmJp/Feeling', 800000100), Array('BgmJp/Yume', 800021119), Array('BgmJp2/Akiabara', 802000200), Array('BgmJp2/Kamuna', 802000100), Array('BgmJp2/Odaiba', 802000211), Array('BgmJp2/Office', 802000500), Array('BgmJp2/Park', 802000300), Array('BgmJp2/Rockbongi1', 802000700), Array('BgmJp2/Rockbongi2', 802000711), Array('BgmJp2/Tokyosky', 802000600), Array('BgmJp3/Hieijan', 811000000), Array('BgmJp3/Hieijan_nohime', 811000020), Array('BgmJp3/InsideHonnouji', 807050100), Array('BgmJp3/Kecon', 620110003), Array('BgmJp3/MomijiNoSakamichi', 807010000), Array('BgmJp3/Momijigaoka', 783000000), Array('BgmJp3/SengokuBoss', 807050503), Array('BgmJp4_Zipang/BizarreForest', 800000300), Array('BgmJp4_Zipang/Feeling', 800000200), Array('BgmJp4_Zipang/Kamuna', 802000000), Array('BgmJp4_Zipang/LegendOfZipang', 800010000), Array('BgmJp4_Zipang/LegendOfZipang_Sad', 800021107), Array('BgmJp4_Zipang/LegendOfZipang_Silence', 800000000), Array('BgmJp4_Zipang/LivingAgain', 800025007), Array("BgmJp4_Zipang/Tengou'sTrial", 800021115), Array('BgmJp4_Zipang/YokaiBoso', 800021000), Array('BgmJp4_Zipang/ZipangHero', 800023002), Array('BgmPL/DiceMaster', 867121000), Array('BgmPL/Eluna', 867118700), Array('BgmPL/ElunaExpress', 867118100), Array('BgmPL/GodOfBrain', 867122100), Array('BgmPL/GunMan', 867122400), Array('BgmPL/HiddenCatch', 867131400), Array('BgmPL/LandofContemplation_Day', 867113400), Array('BgmPL/LandofInnocence_Day', 867113500), Array('BgmPL/LandofRiches_Day', 867113100), Array('BgmPL/LandofWarriors_Day', 867113200), Array('BgmPL/MD_AcornDetective_AR', 867111044), Array('BgmPL/MD_AcornDetective_MR', 867111027), Array('BgmPL/MD_InvadeOperation', 867110000), Array('BgmPL/RetroWorldBoss', 867135100), Array('BgmPL/RetroWorldDungeon', 867131030), Array('BgmPL/RetroWorldMiniGame', 867131300), Array('BgmPL/RetroWorldTown', 867131000), Array('BgmPL/SongOfTheNati', 867118300), Array('BgmPL/UnexploredEluna', 867118800), Array('BgmPL/WeAreThePioneers', 867118200), Array('BgmPL/WinterCastle', 867123001), Array('BgmPL/WinterCastle_DownHill', 867123400));
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
        V += '\r\n#b#L' + (music.length + 1) + '#上一页#l #L' + (music.length + 2) + '#下一页#l#k\r\n';
        for (var w = 0; w < music.length; w++) {
          V += '\r\n#L' + w + '#' + music[w][0] + '   #b#m' + music[w][1] + '# 第' + (w + 248) + '首 #l#k';
        }
        V += '\r\n#b#L' + (music.length + 1) + '#上一页#l #L' + (music.length + 2) + '#下一页#l#k\r\n';
        cm.askMenu(V);
      } else {
        if (status == 1) {
          if (U == music.length + 1) {
            cm.dispose();
            cm.openNpc(9000100);
            return;
          }
          if (U == music.length + 2) {
            cm.dispose();
            cm.openNpc(9000100, 2);
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