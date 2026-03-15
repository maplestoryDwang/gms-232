var status = 0;
var music = Array(Array('Ambience.img/thunder2', 993028020), Array('Bgm00.img/Silence', 330002625), Array('Bgm00/DragonDream', 100030301), Array('Bgm00/FloralLife', 30000), Array('Bgm00/GoPicnic', 0), Array('Bgm00/Nightmare', 102000000), Array('Bgm00/RestNPeace', 100010000), Array('Bgm00/Silence', 4000000), Array('Bgm00/SleepyWood', 105000000), Array('Bgm01/AncientMove', 105010300), Array('Bgm01/BadGuys', 103000000), Array('Bgm01/CavaBien', 100020200), Array('Bgm01/HighlandStar', 102010100), Array('Bgm01/MoonlightShadow', 101010000), Array('Bgm02/AboveTheTreetops', 104000000), Array('Bgm02/EvilEyes', 105030000), Array('Bgm02/JungleBook', 103030000), Array('Bgm02/MissingYou', 101030101), Array('Bgm02/WhenTheMorningComes', 101000000), Array('Bgm03/Beachway', 109080000), Array('Bgm03/BlueSky', 100010100), Array('Bgm03/SnowyVillage', 109060000), Array('Bgm03/Subway', 103020000), Array('Bgm04/ArabPirate', 610061320), Array('Bgm04/PlayWithMe', 193000000), Array("Bgm04/Shinin'Harbor", 200000000), Array('Bgm04/UponTheSky', 200090000), Array('Bgm04/WarmRegard', 196000000), Array('Bgm04/WhiteChristmas', 209000000), Array('Bgm05.img/HellGate', 993028060), Array('Bgm05/AbandonedMine', 211041500), Array('Bgm05/HellGate', 211042000), Array('Bgm05/MineQuest', 280010000), Array('Bgm05/WolfWood', 196010000), Array('Bgm06/ComeWithMe', 200080100), Array('Bgm06/FantasticThinking', 197000000), Array('Bgm06/FlyingInABlueDream', 200090100), Array('Bgm06/WelcomeToTheHell', 280030000), Array('Bgm07/Fantasia', 706042000), Array('Bgm07/FunnyTimeMaker', 221020000), Array('Bgm07/HighEnough', 221020800), Array('Bgm07/WaltzForWork', 220020000), Array('Bgm07/WhereverYouAre', 220040000), Array('Bgm08.img/ForTheGlory', 993028050), Array('Bgm08/FindingForest', 749080114), Array('Bgm08/ForTheGlory', 221000200), Array('Bgm08/LetsHuntAliens', 221030000), Array('Bgm08/LetsMarch', 221000000), Array('Bgm08/PlotOfPixie', 920010800), Array('Bgm09/DarkShadow', 867123900), Array('Bgm09/FairyTale', 220060000), Array('Bgm09/FairyTalediffvers', 220060200), Array('Bgm09/TheyMenacingYou', 922010900), Array('Bgm09/TimeAttack', 330000690), Array('Bgm10/BizarreTales', 220060400), Array('Bgm10/Eregos', 910192200), Array('Bgm10/TheWayGrotesque', 220070400), Array('Bgm10/Timeless', 220070000), Array('Bgm10/TimelessB', 220070200), Array('Bgm11/Aquarium', 230000000), Array('Bgm11/BlueWorld', 200082300), Array('Bgm11/DarkMountain', 224000011), Array('Bgm11/DownTown', 224000000), Array('Bgm11/ShiningSea', 230030000), Array('Bgm12/AcientRemain', 102040000), Array('Bgm12/AquaCave', 230040001), Array('Bgm12/DeepSee', 230040000), Array('Bgm12/Dispute', 261000000), Array('Bgm12/RuinCastle', 102040301), Array('Bgm12/WaterWay', 990000600), Array('Bgm13.img/AcientForest', 993028030), Array('Bgm13/AcientForest', 240020000), Array('Bgm13/CokeTown', 109080010), Array('Bgm13/FightSand', 933041000), Array('Bgm13/Leafre', 200090500), Array("Bgm13/Minar'sDream", 240010000), Array('Bgm13/TowerOfGoddess', 101072001), Array('Bgm14/Ariant', 260000000), Array('Bgm14/CaveOfHontale', 240050000), Array('Bgm14/DragonLoad', 240030000), Array('Bgm14/DragonNest', 200090520), Array('Bgm14/DragonRider', 240080400), Array('Bgm14/HonTale', 105100300), Array('Bgm14/HotDesert', 200090400), Array('Bgm15/CocoIsland', 3000000), Array('Bgm15/DeepCave', 300010420), Array('Bgm15/ElinCave', 300010410), Array('Bgm15/ElinForest', 300000000), Array('Bgm15/MureungForest', 250010000), Array('Bgm15/MureungHill', 200090300), Array('Bgm15/Nautilus', 120000000), Array('Bgm15/Pirate', 251010401), Array('Bgm15/PoisonForest', 300010300), Array('Bgm15/QueensHideout', 300030310), Array('Bgm15/SunsetDesert', 260020200), Array('Bgm15/WhiteHerb', 251000000), Array('Bgm15/inNautilus', 120000100), Array('Bgm16/Duskofgod', 270040000), Array('Bgm16/FightingPinkBeen', 270050100), Array('Bgm16/Forgetfulness', 270030000), Array('Bgm16/InWartime', 262000200), Array('Bgm16/RedWitch', 262030300), Array('Bgm16/Remembrance', 270010000), Array('Bgm16/Repentance', 270020000), Array('Bgm16/RustyThrone', 262000000), Array('Bgm16/TimeTemple', 270000000), Array('Bgm17/EvolvingWorld', 957010000), Array('Bgm17/GoldBeach', 120040000), Array('Bgm17/MureungSchool1', 925020001), Array('Bgm17/MureungSchool2', 993050300), Array('Bgm17/MureungSchool4', 925040001), Array('Bgm17/secretFlower', 103050000), Array('Bgm18/BlackWing', 141050300), Array('Bgm18/DrillHall', 130030103), Array('Bgm18/Injustice', 303050000), Array('Bgm18/QueensGarden', 130000000), Array('Bgm18/RaindropFlower', 130010000), Array('Bgm18/WolfAndSheep', 109090000), Array('Bgm19/BambooGym', 914010000), Array('Bgm19/CrystalCave', 140030000), Array('Bgm19/DancingWitnTheMoon', 150000001), Array('Bgm19/FlytotheMoon', 150000000), Array('Bgm19/MushCatle', 960020103), Array('Bgm19/RienVillage', 140000000), Array('Bgm19/SnowDrop', 140010210), Array('Bgm20/GhostShip', 923020010), Array('Bgm20/NetsPiramid', 322041000), Array('Bgm21/2215year', 954000000), Array('Bgm21/2230year', 861000001), Array('Bgm21/2503year', 954000200), Array('Bgm21/KerningSquare', 103041160), Array('Bgm21/KerningSquareField', 103041165), Array('Bgm21/KerningSquareSubway', 703100011), Array('Bgm21/LoversIntheAfternoon', 103041000), Array('Bgm21/TeraForest', 910193000), Array('Bgm22.img/DespairOnDevil', 350033001), Array('Bgm22/DecisiveBattle', 200090530), Array('Bgm22/DespairOnDevil', 350020010), Array('Bgm22/EdelsteinCity', 200090600), Array('Bgm22/GelimerLab', 304000000), Array('Bgm22/LowGradeOre', 304050000), Array('Bgm22/NationalPark', 310020000), Array('Bgm22/PowerStation', 304020300), Array('Bgm22/UndergroundPlace', 310010000), Array('Bgm23/BlizzardCastle', 211060000), Array('Bgm23/CrimsonTower', 211060201), Array('Bgm23/LionHeart', 211070100), Array('Bgm24/KreaseAgit', 920012600), Array('Bgm24/KreaseColosseum', 920012200), Array('Bgm24/KreaseField', 920012000), Array('Bgm24/battleBGMTypeA', 960020100), Array('Bgm24/battleBGMTypeB', 960010101), Array('Bgm24/battleBGMTypeC', 960020101), Array('Bgm24/battleBGMTypeD', 960010102), Array('Bgm24/battleChipi', 960000000), Array('Bgm24/battleEntrance', 866500000), Array('Bgm24/monsterPark', 932200000), Array('Bgm25.img/CrackOfDimension', 910195005), Array('Bgm25.img/WindAndFlower', 993028070), Array('Bgm25/AltarOfAkayrum', 272020200), Array('Bgm25/CrackOfDimension', 272020000), Array('Bgm25/CygnusGarden', 180010003), Array('Bgm25/FlowerInBlue', 272000310), Array('Bgm25/SoundOfElf', 910150100), Array('Bgm25/WindAndFlower', 101050000), Array('Bgm25/destructionPerion', 273010000), Array('Bgm25/destructionPerionShelter', 273000000), Array('Bgm25/destructionTown', 271010000), Array('Bgm25/knightsStronghold', 271030000), Array('Bgm25/profession', 910001000), Array('Bgm25/timeGate', 271000000), Array('Bgm26/BurningWoods', 910141030), Array('Bgm26/DarkMage', 302090410), Array('Bgm26/DarkWoods', 910142060), Array('Bgm26/FinalFight', 927020000), Array('Bgm26/Flood', 1130000), Array('Bgm26/PeacefulWoods', 101000100), Array('Bgm26/Serenity', 101000200), Array('Bgm26/SpeakInTheVoid', 302020600), Array('Bgm27/AngelsRoom', 400000002), Array('Bgm27/BaseOfBetrayers', 400010500), Array('Bgm27/BorderArea', 400050000), Array('Bgm27/GreatTemple', 400000001), Array('Bgm27/NovaSanctum', 400010000), Array('Bgm27/Pantheon', 400000000), Array('Bgm27/PantheonField', 400010100), Array('Bgm27/StepOfKaiser', 940001010), Array('Bgm27/TrappedKaiser', 940001110), Array('Bgm28/citadelofTyrant', 401050000), Array('Bgm28/funkyBlackmarket', 401040000), Array('Bgm28/helisiumField', 401030600), Array('Bgm28/helisiumMysticforest', 401010000), Array('Bgm28/helisiumWarcry', 401070000), Array('Bgm28/retake', 401000000), Array('Bgm28/thefinalWar', 330007200), Array('Bgm28/trinityForce', 401051200), Array('Bgm29/AbyssCave', 105200400), Array('Bgm29/JoyfulTeaParty', 105200200), Array('Bgm29/QueenPalace', 105200300), Array('Bgm29/TimeChaos', 105200100), Array('Bgm29/YggdrasilPrayer', 105200000), Array('Bgm30/fromUnderToUpper', 931050940), Array('Bgm30/inAllVerity', 230050000), Array('Bgm30/pulseResonance', 931060010), Array('Bgm30/thePhoto', 931050910), Array('Bgm30/underside', 931050920), Array('Bgm31/fadedCitadel', 301000000), Array('Bgm31/specialtyStore', 693000820), Array('Bgm32/TheColossalHeart', 240093000), Array('Bgm32/TheLivingMountain', 224000060), Array('Bgm32/TheRaiders', 240090000), Array('Bgm32/TheRush', 970060300), Array('Bgm33/AriantInMirror', 302010500), Array('Bgm33/BeBornZero', 320000000), Array('Bgm33/DisputeInMirror', 326000000), Array('Bgm33/EdelsteinCityInMirror', 325000000), Array('Bgm33/FantasticThinkingInMirror', 327000000), Array('Bgm33/FloralLifeInMirror', 323000000), Array('Bgm33/LeafreInMirror', 321100000), Array('Bgm33/MureungHillInMirror', 303030000), Array('Bgm33/NastyLiar', 307000000), Array('Bgm33/RedRoom', 327090440), Array('Bgm33/ShadowKnight', 307000240), Array('Bgm33/ShadowTemple', 321000500), Array('Bgm33/TimeTempleInMirror', 328000000), Array('Bgm34/AgainstTheDark', 927020200), Array('Bgm34/DimensionLibrary', 302000000), Array('Bgm34/GlacierAdventure', 141000000), Array('Bgm34/GoFight!ShowYourEnergy!', 1130011), Array('Bgm34/MapleLeaf', 10000), Array('Bgm34/MoleKingRises', 101073300), Array('Bgm34/Sailing', 141060000), Array('Bgm34/TheAurora', 302030000), Array('Bgm34/TheFairyAcademy', 101072000), Array('Bgm34/TheFairyForest', 101070000), Array('Bgm34/TheStormyForest', 302050000), Array('Bgm34/WoundedLeaf', 110000), Array('Bgm35/Hekaton', 450006400), Array('Bgm35/InRuinInVain', 241000000), Array('Bgm35/StopInEnds', 241010100), Array('Bgm35/StopInHundreds', 241000100), Array('Bgm35/TragicForest', 241000200), Array('Bgm35/TragicRestart', 241010200), Array('Bgm36.img/decision', 910195008), Array('Bgm36/HappyTimeLong', 910194100), Array('Bgm36/RoyalGuard', 350011500), Array('Bgm36/foxvillage', 410000000));
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
        V += '\r\n#b#L' + (music.length + 1) + '#下一页#l#k';
        for (var w = 0; w < music.length; w++) {
          V += '\r\n#L' + w + '#' + music[w][0] + '   #b#m' + music[w][1] + '# 第' + (w + 1) + '首 #l#k';
        }
        V += '\r\n#b#L' + (music.length + 1) + '#下一页#l#k';
        cm.askMenu(V);
      } else {
        if (status == 1) {
          if (U > music.length) {
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