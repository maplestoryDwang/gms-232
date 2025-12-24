package net.swordie.ms.client.character.skills.temp;

import net.swordie.ms.util.Util;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;

/**
 * Created on 1/2/2018.
 */
public enum CharacterTemporaryStat implements Comparator<CharacterTemporaryStat> {
    IndiePAD(0),
    IndieMAD(1),
    IndieDEF(2),
    IndieMHP(3),
    IndieMHPR(4),
    IndieMMP(5),
    IndieMMPR(6),
    IndieACC(7),

    IndieEVA(8),
    IndieJump(9),
    IndieSpeed(10),
    IndieAllStat(11),
    IndieAllStatR(12),
    IndieDodgeCriticalTime(13),
    IndieEXP(14),
    IndieBooster(15),

    IndieFixedDamageR(16),
    PyramidStunBuff(17), // Osiris' Eye: Stuns monsters for 1 second. Includes Pharaoh Yetis and Pharaoh Mummies at a 30% chance. Costs 500 points.
    PyramidFrozenBuff(18), // Horus' Eye: Slows down all monsters for 15 seconds. Includes Pharaoh Yetis and Pharaoh Mummies at a 30% chance. Costs 700 points.
    PyramidFireBuff(19), // Isis' Eye: Does Damage over time to all monsters for 15 seconds every second. Costs 500 points.
    PyramidBonusDamageBuff(20), // Anubis' Eye: Increases 40 attack for 15 seconds. Costs 500 points.
    IndieRelaxEXP(21),
    IndieSTR(22),
    IndieDEX(23),

    IndieINT(24),
    IndieLUK(25),
    IndieDamR(26),
    IndieScriptBuff(27),
    IndieMDF(28),
    IndieAsrR(29),
    IndieTerR(30),
    IndieCr(31),

    IndiePDDR(32),
    IndieCrDmg(33),
    IndieBDR(34),
    IndieStatR(35),
    IndieStance(36),
    IndieIgnoreMobpdpR(37),
    IndieEmpty(38),
    IndiePADR(39),

    IndieMADR(40),
    IndieEVAR(41),
    IndieDrainHP(42),
    IndiePMdR(43), // Final damage
    IndieForceJump(44), // Max Jump (?)
    IndieForceSpeed(45), // Max Speed (?)
    IndieQrPointTerm(46),

    IndieSummon(47), // Seems to be used by GMS for almost all their summons
    IndieCooltimeReduce(48),
    IndieNotDamaged(49), // Given by Soul Eclipse DW 3rd V & Omega Blaster (Attack mode)  |  Invincibility
    IndieKeyDownTime(50), // DemonicBlast | Twin Blades of Time
    IndieDamReduceR(51),
    IndieCrystalCharge(52),
    IndieNegativeEVAR(53),
    IndieHitDamage(54),
    IndieNoKnockBack(55),
    IndieGrandCross(56), // err38
    IndieHitDamageInclHPR(57), // Indie Hit Damage, including HP% hits
    IndieArcaneForce(58),
    IndieAuthentic(59),
    IndiePowerGuard(60), // Used in Rage (Hero)
    IndieDropPer(61),
    IndieMesoAmountRate(62),
    IndieFloating(63),
    IndieRocketBooster(64),
    IndieInvincibleBelief(65), // used in Warrior Explorer Link Skill
    IndieUnk212_63(66),
    IndieInfiniteMDF(67), // infiniteMDF  |  Used in Time Holding (Zero)
    // Somewhere there be 4 new ones
    IndieProtectiveShield(68), // used in Guardian Embrace
    IndieUNK218_2(69),
    IndieNBDR(70), // Normal Mob Dmg
    IndieUNK218_4(71),
    IndieUNK3(72),
    IndiePartyExp(73),
    IndieUNK5(74),
    IndiePartyDrop(75),
    IndieUnk63(76),
    IndieStatCount(77),
    PAD(78),
    DEF(79),
    MAD(80),
    ACC(81),
    EVA(82),
    Craft(83),

    Speed(84),
    Jump(85),
    MagicGuard(86),
    DarkSight(87),
    Booster(88),
    PowerGuard(89),
    MaxHP(90),
    MaxMP(91),

    Invincible(92),
    SoulArrow(93),
    Stun(94),
    Poison(95),
    Seal(96),
    Darkness(97),
    ComboCounter(98),
    WorldReaver(99),
    HammerOfTheRighteous(100),
    BigHammerOfTheRighteous(101),
    WeaponCharge(102),

    HolySymbol(103),
    MesoUp(104),
    ShadowPartner(105),
    PickPocket(106),
    MesoGuard(107),

    Thaw(108),
    Weakness(109),
    Curse(110),
    Slow(111),
    Morph(112),
    Regen(113),
    BasicStatUp(114), // Maple warrior cts
    Stance(115), // given with ShadowStitch

    SharpEyes(116),
    ManaReflection(117),
    Attract(118),
    NoBulletConsume(119),
    Infinity(120),
    AdvancedBless(121),
    IllusionStep(122),
    Blind(123),

    Concentration(124),
    BanMap(125),
    MaxLevelBuff(126),
    MesoUpByItem(127),
    Ghost(128),
    Barrier(129),

    UnionWealth(130),
    RuneOfGreed(131),
    ReverseInput(132),
    ItemUpByItem(133),
    RespectPImmune(134),
    RespectMImmune(135),
    DefenseAtt(136),
    DefenseState(137),
    DojangBerserk(138),
    DojangInvincible(139),

    DojangShield(140),
    SoulMasterFinal(141),
    WindBreakerFinal(142),
    ElementalReset(143),
    HideAttack(144),
    EventRate(145),
    ComboAbilityBuff(146),
    ComboDrain(147),

    ComboBarrier(148),
    BodyPressure(149), // nOpt = slv
    RepeatEffect(150),
    ExpBuffRate(151),
    StopPortion(152),
    StopMotion(153),
    Fear(154),
    HiddenPieceOn(155),

    MagicShield(156),
    MagicResistance(157),
    SoulStone(158),
    Flying(159),
    Frozen(160),
    AssistCharge(161),
    Enrage(162),
    DrawBack(163),

    NotDamaged(164),
    FinalCut(165),
    HowlingAttackDamage(166),
    BeastFormDamageUp(167),
    Dance(168),
    EMHP(169),
    EMMP(170),
    EPAD(171),

    EMAD(172),
    EPDD(173),
    Guard(174),
    Cyclone(175),
    RadiantOrb(176),

    // 1 2 of these are removed, idk which
    Conversion(177),
    Revive(178), //Invis frame after revive
    //    Sneak(170),
    Mechanic(179),
    BeastFormMaxHP(180),
    Dice(181),

    BlessingArmor(182),
    DamR(183),
    TeleportMasteryOn(184),
    CombatOrders(185),
    Beholder(186),
    DispelItemOption(187),
    Inflation(188), //  |  80001757 | 80001869
    OnixDivineProtection(189),

    Web(190),
    UserBomb(191), // Mob Skill 171 (UserBomb)
    Bless(192),
    DisOrder(193),
    Thread(194),
    Team(195),
    Explosion(196),
    BuffLimit(197),

    STR(198),
    INT(199),
    DEX(200),
    LUK(201),
    DispelItemOptionByField(202),
    DarkTornado(203),
    PVPDamage(204),
    PvPScoreBonus(205), // Stopped incrementing by 1

    PvPInvincible(206),
    PvPRaceEffect(207),
    WeaknessMdamage(208),
    Frozen2(209),
    PVPDamageSkill(210),
    AmplifyDamage(211),
    Shock(212),
    InfinityForce(213),

    IncMaxHP(214),
    IncMaxMP(215),
    HolyMagicShell(216),
    KeyDownTimeIgnore(217),
    ArcaneAim(218),
    MasterMagicOn(219),
    AsrR(220),
    TerR(221),

    DamAbsorbShield(222),
    DevilishPower(223),
    Roulette(224),
    SpiritLink(225),
    AsrRByItem(226),
    Event(227),
    CriticalBuff(228),
    DropRate(229),

    PlusExpRate(230),
    ItemInvincible(231),
    Awake(232),
    ItemCritical(233),
    Event2(234),
    DDR(235),
    VampiricTouch(236),
    IncCriticalDam(237),

    IncTerR(238),
    IncAsrR(239),
    DeathMark(240),
    UsefulAdvancedBless(241),
    Lapidification(242),
    VenomSnake(243),
    CarnivalAttack(244),
    CarnivalDefence(245),

    CarnivalExp(246),
    SlowAttack(247),
    PyramidEffect(248),
    KillingPoint(249),
    HollowPointBullet(250),
    KeyDownMoving(251),
    IgnoreTargetDEF(252),
    ReviveOnce(253),

    Invisible(254),
    EnrageCr(255),
    EnrageCrDamMin(256),
    Judgement(257),
    DojangLuckyBonus(258),
    PainMark(259),
    Magnet(260),
    MagnetArea(261),

    GuidedArrow(262),
    SpiritFlow(263),
    LucentBrand(264),
    ExtraSkillCTS(265),
    Unk199_256(266),
    TideOfBattle(267),
    GrandGuardian(268),
    Unk227_269(269),
    Unk227_270(270),
    UnionLuck(271),
    VampDeath(272),
    BlessingArmorIncPAD(273),
    KeyDownAreaMoving(274),
    Larkness(275),
    StackBuff(276),
    BlessOfDarkness(277),

    AntiMagicShell(278),
    AntiMagicShellEx(278),

    LifeTidal(279),
    HitCriDamR(280),
    SmashStack(281),
    PartyBarrier(282),
    ReshuffleSwitch(283),
    SpecialAction(284),
    VampDeathSummon(285),

    StopForceAtomInfo(286),
    SoulGazeCriDamR(287),
    SoulRageCount(288),
    PowerTransferGauge(289),
    AffinitySlug(290),
    Trinity(291),
    IncMaxDamage(292),
    BossShield(293),

    MobZoneState(294),
    GiveMeHeal(295),
    TouchMe(296),
    Contagion(297),
    ComboUnlimited(298),
    SoulExalt(299),
    IgnorePCounter(300),
    IgnoreAllCounter(301),

    IgnorePImmune(302),
    IgnoreAllImmune(303),
    FinalJudgement(304),
    FireAura(305),
    VengeanceOfAngel(306),
    HeavensDoor(307),

    Preparation(308),
    BullsEye(309),
    IncEffectHPPotion(310),
    IncEffectMPPotion(311),
    BleedingToxin(312),
    IgnoreMobDamR(313),
    Asura(314),
    OmegaBlaster(315),
    FlipTheCoin(316),

    UnityOfPower(317),
    Stimulate(318),
    ReturnTeleport(319),
    DropRIncrease(320),
    IgnoreMobpdpR(321),
    BdR(322),
    CapDebuff(323),

    Exceed(324),
    DiabolikRecovery(325),
    FinalAttackProp(326),
    ExceedOverload(327),
    OverloadCount(328),
    BuckShot(329),
    FireBomb(330),
    HalfstatByDebuff(331),

    SurplusSupply(332),
    SetBaseDamage(333),
    EVAR(334),
    NewFlying(335),
    AmaranthGenerator(336),
    OnCapsule(337),
    CygnusElementSkill(338),
    StrikerHyperElectric(339),

    EventPointAbsorb(340),
    EventAssemble(341),
    StormBringer(342),
    ACCR(343),
    DEXR(344),
    Albatross(345),
    Translucence(346),
    PoseType(347),

    LightOfSpirit(348),
    ElementSoul(349),
    GlimmeringTime(350),
    TrueSight(351),
    SoulExplosion(352),
    SoulMP(353),
    FullSoulMP(354),
    SoulSkillDamageUp(355),

    ElementalCharge(356),
    Restoration(357),
    CrossOverChain(358),
    ChargeBuff(359),
    Reincarnation(360),
    Unk227_361(361),
    ChillingStep(362),
    DotBasedBuff(363),

    BlessEnsenble(364),
    ComboCostInc(365),
    ExtremeArchery(366),
    NaviFlying(367),
    QuiverCatridge(368),
    AdvancedQuiver(369),
    UserControlMob(370),
    ImmuneBarrier(371),

    ArmorPiercing(372),
    CriticalGrowing(373),
    RelicEmblem(374),
    QuickDraw(375),
    BowMasterConcentration(376),
    TimeFastABuff(377),
    TimeFastBBuff(378),

    GatherDropR(379),
    AimBox2D(380),
    PerfectShot(381),
    StatusResistance(382),
    IncMonsterBattleCaptureRate(383),
    DotHealHPPerSecond(384),
    DotHealMPPerSecond(385),
    SpiritGuard(386),
    PreReviveOnce(387),

    SetBaseDamageByBuff(388),
    LimitMP(389),
    ReflectDamR(390),
    ComboTempest(391),
    MHPCutR(392),
    MMPCutR(393),
    SelfWeakness(394),
    ElementDarkness(395),

    FlareTrick(396),
    Ember(397),
    Dominion(398),
    SiphonVitality(399),
    DarknessAscension(400),
    BossWaitingLinesBuff(401),
    DamageReduce(402),
    ShadowServant(403),

    ShadowIllusion(404),
    KnockBack(405),
    AddAttackCount(406),
    ComplusionSlant(407),
    JaguarSummoned(408),
    JaguarCount(409),

    SSFShootingAttack(410),
    DevilCry(411),
    ShieldAttack(412),
    DarkLighting(413),
    AttackCountX(414),
    BMageDeath(415),
    BombTime(416),

    NoDebuff(417),
    BattlePvPMikeShield(418),
    BattlePvPMikeBugle(419),
    XenonAegisSystem(420),
    AngelicBursterSoulSeeker(421),
    HiddenPossession(422),
    NightWalkerBat(423),
    NightLordMark(424),

    WizardIgnite(425),
    FireBarrier(426),
    ChangeFoxMan(427),
    DivineEcho(428),
    DemonFrenzy(429),
    ShadowSpear(430),
    MastemasMark(431),
    RiftOfDamnation(432),

    QuiverBarrage(433),
    SwordsOfConsciousness(434),
    PrimalGrenade(435),
    Unk200_430(436),
    Unk200_431(437),
    BattlePvPLangEProtection(438),
    BattlePvPLeeMalNyunScaleUp(439),
    BattlePvPRevive(440),
    BattlePvPHelenaMark(441),
    BattlePvPHelenaWindSpirit(442),
    PinkbeanAttackBuff(443),
    PinkbeanRelax(444),
    PinkbeanRollingGrade(445),

    PinkbeanYoYoStack(446),
    RandAreaAttack(447),
    Unk200_442(448),
    NextAttackEnhance(449),
    //    AranBeyonderDamAbsorb(447), // between NextAttackEnhance and RoyalGuardState: 1 removed
    AranCombotempastOption(450),
    NautilusFinalAttack(451),
    ViperTimeLeap(452),
    RoyalGuardState(453),

    RoyalGuardPrepare(454),
    MichaelSoulLink(455),
    MichaelStanceLink(456),
    TriflingWhimOnOff(457),
    AddRangeOnOff(458),
    KinesisPsychicPoint(459),
    KinesisPsychicOver(460),
    KinesisPsychicShield(461),

    KinesisIncMastery(462),
    KinesisPsychicEnergeShield(463),
    BladeStance(464),
    DebuffActiveSkillHPCon(465),
    DebuffIncHP(466),
    BowMasterMortalBlow(467),
    AngelicBursterSoulResonance(468),
    Fever(469),

    IgnisRore(470),
    //    RpSiksin(459), somewhere between 436 and 459 one is removed
    TeleportMasteryRange(471),
    FixCoolTime(472),
    IncMobRateDummy(473),
    AdrenalinBoost(474),
    AranSmashSwing(475),
    AranDrain(476),

    AranBoostEndHunt(477),
    HiddenHyperLinkMaximization(478),
    RWCylinder(479),
    RWCombination(480),
    Unk188_460(481),
    RWMagnumBlow(482),
    RWBarrier(483),
    RWBarrierHeal(484),

    RWMaximizeCannon(485),
    RWOverHeat(486),
    UsingScouter(487),
    RWMovingEvar(488),
    Stigma(489),
    MahasFury(490),
    HeavensDoorCooltime(491),
    SkillCooltime(492),

    SealedRuneCooltime(493),
    PinPointSalvo(494),
    MeltDown(495),
    SparkleBurstStage(496),
    LightningCascade(497),
    BulletParty(498),
    LoadedDice(499),

    Benediction(500),
    Unk221_497(501),
    VoidStrike(502),
    Unk212_504(503),

    WeaponAura(504),
    ManaOverload(505),
    RhoAias(506),
    PsychicTornado(507),

    SpreadThrow(508),
    WindEnergy(509),
    StackOverTimeSkill(510),
    ShadowAssault(511),
    Unk188_492(512),
    Unk188_494(513),
    Unk216_516(514),
    BlitzShield(515),

    SplitShot(516),
    FreudBlessing(517),
    OverloadMode(518),
    SpotLight(519),
    SylvidiaFlight(520),
    MuscleMemory(521),
    WingsOfGlory(522),
    TrickBladeMobStat(523),
    Overdrive(524),
    EtherealForm(525),
    LastResort(526),
    ViciousShot(527),
    CurseOfCreation(528),
    CurseOfDestruction(529),
    BlackMageDebuff(530),
    ImpenetrableSkin(531),

    PapulatusTimeLock(532),
    Unk199_521(533),
    Unk199_521Ex(533),
    Resonance(534),
    FlashCrystalBattery(535),
    Unk199_524(536),
    CrystalBattery(537),
    Deus(538),
    CrystalChargeMax(539),
    BattlePvPRyudeSword(540),
    BattlePvPAliciaBless(541),
    Unk199_530(542),
    Unk200_557(543),
    SpecterEnergy(544),
    SpecterState(545),
    BasicCast(546),
    ScarletCast(547),
    GustCast(548),
    AbyssalCast(549),
    ImpendingDeath(550),
    BattleFrenzy(551),
    ChargeSpellAmplifier(552),
    InfinitySpell(553),
    ConversionOverdrive(554),
    Solus(555),
    AbyssalRecall(556),
    Unk199_544(557),
    WillPoison(558),
    Unk199_546(559),
    BigBangAttackCharge(560),
    HolyMagicShellCooltime(561),
    TridentStrike(562),
    ComboInstinct(563),
    GaleBarrier(564),
    InfernoSphere(565),
    SwordOfLight(566),
    PhantomMark(567),
    PhantomMarkMobStat(568),
    Unk200_568(569),
    Unk200_569(570),
    Unk200_570(571),
    KeyDownCTS(572),
    Unk200_572(573),
    Unk200_573(574),
    PMdReduce(575),
    ForbidOpPotion(576),
    ForbidEquipChange(577),
    TanadianRuin(578),
    AeonianRise(579),
    Unk202_579(580),
    BattlePvPLangEClaw(581),
    BattlePvPMikeProtection(582),
    ProtectiveShield(583),
    DemonicBlast(584),
    AncientGuidance(585),
    BattlePvPWonkyAttack(586),
    BattlePvPWonkyHeal(587),
    BattlePvPWonkyProtection(588),
    Unk205_590(589),
    Unk205_591(590),
    Unk205_592(591),
    BlessingVSkill(592),
    Unk205_593(593),
    Unk218_590(594),
    Unk208_594(595),
    Unk208_595(596),
    Unk208_596(597),
    Unk208_597(598),
    Unk228_634(599),
    Unk228_635(600),
    Unk228_636(601),
    TreasureHunt(602), // *
    AT_Attributes(603),
    AT_Energy(604),
    AT_Clone(605),
    AT_HyperClone(606),
    AT_ButterflyDream(607),
    AT_MasterElixir(608),
    AT_GodsComing(609),
    EmpiricalKnowledge(610),
    Unk209_609(611),
    AncientProtectionShield(612),
    Unk209_611(613),
    AT_DreamShangriLa(614),
    DracoSurgeBypassCounter(615),
    LW_Ether(616),
    LW_Creation(617),
    LW_Dike(618),
    LW_Wonder(619),
    LW_Restore(620),
    LW_Nobility(621),
    LW_Resonance(622),
    RuneOfPurification(623),
    Unk214_624(624),
    DuskDarkness(625),

    // Party Auras
    HastyAura(626),
    DrainingAura(627),
    BlueAura(628),
    DarkAura(629),
    WeakeningAura(630),
    AuraScythe(631),
    IceAura(632),
    ParashockGuard(633),
    DivineForce(634),
    DivineSpeed(635),
    IncarnationAura(636),

    WrathOfGods(637), // *
    Revenant(638),
    RevenantDamage(639),
    SilhouetteMirage(640),
    BlizzardTempest(641),
    PhotonRay(642),
    AbyssalLightning(643),
    LightningSpearMultistrike(644),
    RoyalKnights(645),
    SalamanderMischief(646),
    LawOfGravity(647),
    RepeatingCrossbowCartridge(648),
    CrystalGate(649),
    ThrowBlasting(650),
    SageThreePathsApparition(651),
    DarknessAura(652),
    MuscleMemoryFinale(653),
    LiberationOrbPassive(654),

    LiberationOrb(655),
    EgoWeaponAlpha(656),
    RelicUnbound(657),
    MoraleBoost(658),
    AfterImageShock(659),
    Malice(660),
    Possession(661),
    DeathBlessing(662),
    ThanatosDescent(663),
    RemainIncense(664),
    GripOfAgony(665),
    DragonFang(666),
    SerenDebuff1(667), // *
    SerenDebuff2(668),
    SerenDebuff3(669),
    PriorPreparation(670),
    Unk223_666(671),
    Unk223_667(672),
    Unk223_668(673),
    Unk223_669(674),
    Unk223_670(675),
    Unk227_674(676),
    Unk227_675(677),
    Unk227_676(678),
    Unk227_677(679),
    Unk227_678(680),
    Unk227_679(681),
    Unk228_682(682),
    Unk227_680(683), // *
    DragonVeinReading(684),
    MountainSeeds(685),
    PeerlessMountain(686),
    AbsorptionWater(687), // Absorbing Water
    AbsorptionWind(688), // Absorbing Wind
    AbsorptionSun(689), // Absorbing Sun
    UnconstrainedDragonVein(690), // DragonVein
    Unk228_691(691),
    Unk228_692(692),
    NatureFriend(693),
    DragonVeinTrace(694),
    Unk228_695(695),
    Unk228_696(696),
    Unk223_671(697), // *
    Unk223_672(698),
    Unk223_673(699),

    WillowDodge(700),
    Unk176_471(701),
    HayatoStance(702),
    HayatoStanceBonus(703),
    EyeForEye(704),
    HayatoPAD(705),
    Unk218_662(706),
    Unk218_663(707),
    HayatoHPR(708),
    HayatoMPR(709),
    HayatoBooster(710),
    Unk176_476(711),
    Unk176_477(712),
    Jinsoku(713),

    HayatoCr(714),
    HakuBlessing(715),
    HayatoBoss(716),
    BattoujutsuAdvance(717),
    Unk176_483(718),
    Unk176_484(719),
    BlackHeartedCurse(720),

    BeastMode(721),
    TeamRoar(722),
    Unk176_488(723),
    Unk176_489(724),
    Unk176_490(725),
    Unk176_491(726),
    Unk176_492(727),
    Unk176_493(728),
    WaterSplashEventMarking(729),

    WaterSplashEventMarking2(730),
    WaterSplashEventCombo(731),
    WaterSplashEventWaterDripping(732),
    Unk188_539(733),
    YukiMusumeShoukan(734),
    IaijutsuBlade(735),
    Unk199_594(736),
    Unk199_595(737),
    Unk199_596(738),
    Unk199_597(739),
    BroAttack(740),
    LiberatedSpiritCircle(741),
    Unk205_639(742),
    ShikigamiDoppelganger(743),
    Unk208_648(744),
    CritterCrossing(745),
    Unk218_703(746),
    Unk218_704(747),
    Unk221_709(748),
    Unk218_705(749),
    YakshaGreatLord(750),
    YakshaGreatOniLord(751),
    Unk218_708(752),
    Unk218_709(753),
    Unk227_739(754),

    // Twostate
    EnergyCharged(755),
    DashSpeed(756),
    DashJump(757),
    RideVehicle(758),
    PartyBooster(759),
    GuidedBullet(760),
    Undead(761),
    RideVehicleExpire(762),
    RelicGauge(763),
    Grave(764),

    None(-1),

    ;

    private final int bitPos;
    private final int val;
    private final int pos;

    public static final int length = 33; // 132
    private static final Logger log = LogManager.getRootLogger();


    public static final List<CharacterTemporaryStat> ORDER = Arrays.asList(
            STR, INT, DEX, LUK, PAD, DEF, MAD, ACC, EVA, EVAR,
            Craft, Speed, Jump, EMHP, EMMP, EPAD, EMAD, EPDD, MagicGuard, DarkSight,
            Booster, PowerGuard, Guard, MaxHP, MaxMP, Invincible, SoulArrow, Stun, Shock, Poison,
            Seal, Darkness, ComboCounter, WorldReaver, HammerOfTheRighteous, BigHammerOfTheRighteous, WeaponCharge, ElementalCharge, HolySymbol, MesoUp,
            ShadowPartner, PickPocket, MesoGuard, Thaw, Weakness, WeaknessMdamage, Curse, Slow, Bless, BuffLimit,
            Team, DisOrder, Thread, Morph, UnionWealth, Regen, BasicStatUp, Stance, SharpEyes, ManaReflection,
            Attract, Magnet, MagnetArea, GuidedArrow, SpiritFlow, LucentBrand, ExtraSkillCTS, Unk199_256, TideOfBattle, NoBulletConsume,
            StackBuff, Trinity, Infinity, AdvancedBless, IllusionStep, Blind, Concentration, BanMap, MaxLevelBuff, RuneOfGreed,
            DojangShield, ReverseInput, MesoUpByItem, Ghost, Barrier, ItemUpByItem, RespectPImmune, RespectMImmune, DefenseAtt, DefenseState,
            DojangBerserk, DojangInvincible, SoulMasterFinal, WindBreakerFinal, ElementalReset, HideAttack, EventRate, ComboAbilityBuff, ComboDrain, ComboBarrier,
            PartyBarrier, BodyPressure, RepeatEffect, ExpBuffRate, StopPortion, StopMotion, Fear, MagicShield, MagicResistance, SoulStone,
            Flying, NewFlying, NaviFlying, Frozen, Frozen2, Web, Enrage, NotDamaged, FinalCut, HowlingAttackDamage,
            BeastFormDamageUp, Dance, OnCapsule, Conversion, Revive, Mechanic, DrawBack, BeastFormMaxHP, Dice, BlessingArmor,
            BlessingArmorIncPAD, DamR, TeleportMasteryOn, CombatOrders, Beholder, DispelItemOption, DispelItemOptionByField, Inflation, OnixDivineProtection, UserBomb,
            Explosion, DarkTornado, IncMaxHP, IncMaxMP, PVPDamage, PVPDamageSkill, PvPScoreBonus, PvPInvincible, PvPRaceEffect, HolyMagicShell,
            InfinityForce, AmplifyDamage, KeyDownTimeIgnore, MasterMagicOn, AsrR, AsrRByItem, TerR, DamAbsorbShield, Roulette, Event,
            SpiritLink, CriticalBuff, DropRate, PlusExpRate, ItemInvincible, ItemCritical, Event2, DDR, VampiricTouch, IncCriticalDam,
            IncTerR, IncAsrR, DeathMark, PainMark, UsefulAdvancedBless, Lapidification, VampDeath, VampDeathSummon, VenomSnake, CarnivalAttack,
            CarnivalDefence, CarnivalExp, SlowAttack, PyramidEffect, HollowPointBullet, KeyDownMoving, KeyDownAreaMoving, CygnusElementSkill, IgnoreTargetDEF, Invisible,
            ReviveOnce, AntiMagicShell, EnrageCr, EnrageCrDamMin, BlessOfDarkness, LifeTidal, Judgement, DojangLuckyBonus, HitCriDamR, Larkness,
            SmashStack, ReshuffleSwitch, SpecialAction, ArcaneAim, StopForceAtomInfo, SoulGazeCriDamR, SoulRageCount, PowerTransferGauge, AffinitySlug, SoulExalt,
            HiddenPieceOn, BossShield, MobZoneState, GiveMeHeal, TouchMe, Contagion, ComboUnlimited, IgnorePCounter, IgnoreAllCounter, IgnorePImmune,
            IgnoreAllImmune, FinalJudgement, FireAura, VengeanceOfAngel, HeavensDoor, Preparation, BullsEye, IncEffectHPPotion, IncEffectMPPotion, SoulMP,
            FullSoulMP, SoulSkillDamageUp, BleedingToxin, IgnoreMobDamR, Asura, OmegaBlaster, FlipTheCoin, UnityOfPower, Stimulate, ReturnTeleport,
            CapDebuff, DropRIncrease, IgnoreMobpdpR, BdR, Exceed, DiabolikRecovery, FinalAttackProp, ExceedOverload, DevilishPower, OverloadCount,
            BuckShot, FireBomb, HalfstatByDebuff, SurplusSupply, SetBaseDamage, AmaranthGenerator, StrikerHyperElectric, EventPointAbsorb, EventAssemble, StormBringer,
            ACCR, DEXR, Albatross, Translucence, PoseType, LightOfSpirit, ElementSoul, GlimmeringTime, Restoration, ComboCostInc,
            ChargeBuff, TrueSight, CrossOverChain, ChillingStep, Reincarnation, Unk227_361, DotBasedBuff, BlessEnsenble, ExtremeArchery, QuiverCatridge, AdvancedQuiver,
            UserControlMob, ImmuneBarrier, ArmorPiercing, CriticalGrowing, RelicEmblem, QuickDraw, BowMasterConcentration, TimeFastABuff, TimeFastBBuff, GatherDropR,
            AimBox2D, PerfectShot, StatusResistance, IncMonsterBattleCaptureRate, DotHealHPPerSecond, DotHealMPPerSecond, SpiritGuard, PreReviveOnce, SetBaseDamageByBuff, LimitMP,
            ReflectDamR, ComboTempest, MHPCutR, MMPCutR, SelfWeakness, ElementDarkness, FlareTrick, Ember, Dominion, SiphonVitality,
            DarknessAscension, BossWaitingLinesBuff, DamageReduce, ShadowServant, ShadowIllusion, AddAttackCount, ComplusionSlant, JaguarSummoned, JaguarCount, SSFShootingAttack,
            DevilCry, ShieldAttack, DarkLighting, AttackCountX, BMageDeath, BombTime, NoDebuff, XenonAegisSystem, AngelicBursterSoulSeeker, HiddenPossession,
            NightWalkerBat, NightLordMark, WizardIgnite, DemonFrenzy, ShadowSpear, BattlePvPLangEProtection, BattlePvPLeeMalNyunScaleUp, BattlePvPRevive, BattlePvPHelenaMark, BattlePvPHelenaWindSpirit,
            PinkbeanAttackBuff, RandAreaAttack, Unk200_442, BattlePvPMikeShield, BattlePvPMikeBugle, PinkbeanRelax, PinkbeanYoYoStack, WindEnergy, NextAttackEnhance, AranCombotempastOption,
            NautilusFinalAttack, ViperTimeLeap, RoyalGuardState, RoyalGuardPrepare, MichaelSoulLink, MichaelStanceLink, TriflingWhimOnOff, AddRangeOnOff, KinesisPsychicPoint, KinesisPsychicOver,
            KinesisPsychicShield, KinesisIncMastery, KinesisPsychicEnergeShield, BladeStance, DebuffActiveSkillHPCon, DebuffIncHP, BowMasterMortalBlow, AngelicBursterSoulResonance, Fever, IgnisRore,
            TeleportMasteryRange, FireBarrier, ChangeFoxMan, FixCoolTime, IncMobRateDummy, AdrenalinBoost, AranSmashSwing, AranDrain, AranBoostEndHunt, HiddenHyperLinkMaximization,
            RWCylinder, RWCombination, Unk188_460, RWMagnumBlow, RWBarrier, RWBarrierHeal, RWMaximizeCannon, RWOverHeat, RWMovingEvar, Stigma,
            MahasFury, HeavensDoorCooltime, SkillCooltime, SealedRuneCooltime, PinPointSalvo, MeltDown, SparkleBurstStage, LightningCascade, BulletParty, LoadedDice,
            Benediction, Unk221_497, VoidStrike, Unk212_504, DivineEcho, WeaponAura, ManaOverload, RhoAias, PsychicTornado, SpreadThrow,
            StackOverTimeSkill, ShadowAssault, Unk188_492, Unk188_494, BlitzShield, SplitShot, FreudBlessing, OverloadMode, MastemasMark, WingsOfGlory,
            RiftOfDamnation, SylvidiaFlight, SpotLight, Cyclone, MuscleMemory, TrickBladeMobStat, Overdrive, EtherealForm, LastResort, ViciousShot,
            CurseOfCreation, CurseOfDestruction, BlackMageDebuff, ImpenetrableSkin, RadiantOrb, PapulatusTimeLock, Unk199_521, Resonance, FlashCrystalBattery, Unk199_524,
            CrystalBattery, Deus, CrystalChargeMax, BattlePvPRyudeSword, BattlePvPAliciaBless, Unk199_530, Unk200_557, SpecterEnergy, SpecterState, BasicCast,
            ScarletCast, GustCast, AbyssalCast, ImpendingDeath, BattleFrenzy, ChargeSpellAmplifier, InfinitySpell, ConversionOverdrive, Solus, AbyssalRecall,
            Unk199_544, WillPoison, Unk199_546, HolyMagicShellCooltime, TridentStrike, ComboInstinct, GaleBarrier, GrandGuardian, QuiverBarrage, InfernoSphere,
            SwordsOfConsciousness, SwordOfLight, PhantomMark, PhantomMarkMobStat, PrimalGrenade, Unk200_430, Unk200_568, Unk200_569, UnionLuck, Unk200_431,
            Unk200_570, KeyDownCTS, Unk200_572, Unk200_573, PMdReduce, ForbidOpPotion, ForbidEquipChange, TanadianRuin, AeonianRise, Unk202_579,
            BattlePvPLangEClaw, BattlePvPMikeProtection, ProtectiveShield, DemonicBlast, AncientGuidance, BattlePvPWonkyAttack, BattlePvPWonkyHeal, BattlePvPWonkyProtection, Unk205_590, Unk205_591,
            Unk205_592, BlessingVSkill, Unk205_593, Unk218_590, Unk208_594, Unk208_595, Unk208_596, Unk208_597, Unk228_634, Unk228_635, Unk228_636, TreasureHunt, AT_Attributes,
            AT_Energy, AT_Clone, AT_HyperClone, AT_ButterflyDream, AT_MasterElixir, AT_GodsComing, EmpiricalKnowledge, Unk209_609, AncientProtectionShield, Unk209_611,
            AT_DreamShangriLa, DracoSurgeBypassCounter, LW_Ether, LW_Creation, LW_Dike, LW_Wonder, LW_Restore, LW_Nobility, LW_Resonance, RuneOfPurification,
            Unk214_624, DuskDarkness, HastyAura, DrainingAura, BlueAura, DarkAura, WeakeningAura, AuraScythe, IceAura,
            ParashockGuard, DivineForce, DivineSpeed, IncarnationAura, BlizzardTempest, PhotonRay, WrathOfGods, Revenant, RevenantDamage, SilhouetteMirage, AbyssalLightning,
            LightningSpearMultistrike, RoyalKnights, SalamanderMischief, LawOfGravity, RepeatingCrossbowCartridge, CrystalGate, ThrowBlasting, SageThreePathsApparition, DarknessAura, MuscleMemoryFinale,
            LiberationOrbPassive, LiberationOrb, EgoWeaponAlpha, RelicUnbound, MoraleBoost, AfterImageShock, Malice, Possession, DeathBlessing,
            ThanatosDescent, RemainIncense, GripOfAgony, DragonFang, SerenDebuff1, SerenDebuff2, SerenDebuff3, PriorPreparation, Unk223_666, Unk223_667,
            Unk223_668, Unk223_669, Unk223_670, Unk227_674, Unk227_675, Unk227_676, Unk227_677, Unk227_678, Unk227_679, Unk228_682, Unk227_269, Unk227_270, Unk227_680,
            DragonVeinReading, MountainSeeds, PeerlessMountain, AbsorptionWater, AbsorptionWind, AbsorptionSun, UnconstrainedDragonVein, Unk228_691, Unk228_692, NatureFriend, DragonVeinTrace, Unk228_695, Unk228_696,
            IncMaxDamage, Unk223_671, Unk223_672, WillowDodge, Unk176_471, IndieUNK3, HayatoStance,
            HayatoBooster, HayatoStanceBonus, HayatoPAD, Unk218_662, Unk218_663, HayatoHPR, HayatoMPR, Jinsoku, HayatoCr, HakuBlessing,
            HayatoBoss, BattoujutsuAdvance, Unk176_483, Unk176_484, BlackHeartedCurse, EyeForEye, BeastMode, TeamRoar, Unk176_488, Unk176_489,
            Unk176_493, WaterSplashEventMarking, WaterSplashEventMarking2, WaterSplashEventCombo, WaterSplashEventWaterDripping, Unk188_539, YukiMusumeShoukan, IaijutsuBlade, Unk199_595, Unk199_596,
            Unk199_597, BroAttack, LiberatedSpiritCircle, ShikigamiDoppelganger, Unk208_648, CritterCrossing, Unk216_516, Unk218_703, Unk218_704, Unk221_709,
            Unk218_705, YakshaGreatLord, YakshaGreatOniLord, Unk218_709, Unk227_739
    );


    private static final List<CharacterTemporaryStat> REMOTE_ORDER = Arrays.asList(
            Speed, ComboCounter, WorldReaver, HammerOfTheRighteous, WeaponCharge, ElementalCharge, Stun, Shock, Darkness, Seal, Weakness,
            WeaknessMdamage, Curse, Slow, PvPRaceEffect, Bless, Team, DisOrder, Thread, Poison, Poison,
            ShadowPartner, DarkSight, SoulArrow, Morph, UnionWealth, Attract, Magnet, MagnetArea, NoBulletConsume, BanMap,
            RuneOfGreed, DojangShield, ReverseInput, RespectPImmune, RespectMImmune, DefenseAtt, DefenseState, DojangBerserk, DojangInvincible, RepeatEffect,
            Unk176_483, StopPortion, StopMotion, Fear, MagicShield, Flying, Frozen, Frozen2, Web, DrawBack,
            FinalCut, OnCapsule, OnCapsule, Revive, BeastFormDamageUp, Mechanic, BlessingArmor, BlessingArmorIncPAD, Inflation, Explosion,
            DarkTornado, AmplifyDamage, HideAttack, HolyMagicShell, DevilishPower, SpiritLink, Event, DDR, DeathMark, PainMark,
            Lapidification, VampDeath, VampDeathSummon, VenomSnake, PyramidEffect, KillingPoint, PinkbeanRollingGrade, IgnoreTargetDEF, Invisible, Judgement,
            KeyDownAreaMoving, StackBuff, BlessOfDarkness, Larkness, ReshuffleSwitch, SpecialAction, StopForceAtomInfo, SoulGazeCriDamR, PowerTransferGauge, BlitzShield,
            AffinitySlug, SoulExalt, HiddenPieceOn, SmashStack, MobZoneState, GiveMeHeal, TouchMe, Contagion, Contagion, ComboUnlimited,

            IgnorePCounter, IgnoreAllCounter, IgnorePImmune, IgnoreAllImmune, FinalJudgement, FireAura, VengeanceOfAngel, HeavensDoor, DamAbsorbShield, AntiMagicShell,
            NotDamaged, BleedingToxin, WindBreakerFinal, IgnoreMobDamR, Asura, OmegaBlaster, OmegaBlaster, UnityOfPower, Stimulate, ReturnTeleport,
            CapDebuff, OverloadCount, FireBomb, SurplusSupply, NewFlying, NaviFlying, AmaranthGenerator, CygnusElementSkill, StrikerHyperElectric, EventPointAbsorb,
            EventAssemble, Albatross, Translucence, PoseType, LightOfSpirit, ElementSoul, GlimmeringTime, Reincarnation, Beholder, QuiverCatridge,
            ArmorPiercing, UserControlMob, ImmuneBarrier, ImmuneBarrier, FullSoulMP, AntiMagicShellEx, Dance, SpiritGuard, MastemasMark, ComboTempest,
            HalfstatByDebuff, ComplusionSlant, JaguarSummoned, BombTime, MeltDown, SparkleBurstStage, LightningCascade, BulletParty, LoadedDice, Benediction,
            DarkLighting, AttackCountX, FireBarrier, KeyDownMoving, MichaelSoulLink, KinesisPsychicEnergeShield, BladeStance, BladeStance, Fever, AdrenalinBoost,
            RWBarrier, Unk188_460, RWMagnumBlow, GuidedArrow, SpiritFlow, LucentBrand, ExtraSkillCTS, Unk199_256, Stigma, DivineEcho,
            RhoAias, PsychicTornado, MahasFury, ManaOverload, PerfectShot, SylvidiaFlight, SpotLight, OverloadMode, FreudBlessing, BigHammerOfTheRighteous,
            Overdrive, EtherealForm, LastResort, ViciousShot, CurseOfCreation, CurseOfDestruction, BlackMageDebuff, ImpenetrableSkin, WingsOfGlory, PapulatusTimeLock,

            PapulatusTimeLock, Unk199_521, Resonance, FlashCrystalBattery, SpecterState, ImpendingDeath, WillPoison, Unk199_521, SwordOfLight, GrandGuardian,
            ProtectiveShield, DemonicBlast, BattlePvPWonkyHeal, BattlePvPWonkyProtection, Unk205_590, Unk205_591, Unk205_592, BlessingVSkill, Unk205_593, Unk208_595,
            Unk228_636, AT_HyperClone, TanadianRuin, AeonianRise, AncientProtectionShield, Unk209_611, LW_Nobility, RuneOfPurification, Unk214_624, DuskDarkness,
            HastyAura, DrainingAura, BlueAura, DarkAura, WeakeningAura, AuraScythe, IceAura, ParashockGuard, DivineForce, DivineSpeed,
            IncarnationAura, BlizzardTempest, PhotonRay, DarknessAura, SilhouetteMirage, LiberationOrb, ThanatosDescent, Unk227_675, Unk227_677, AbsorptionWater,
            AbsorptionWind, AbsorptionSun, Unk223_671, BeastMode, TeamRoar, HayatoStance, HayatoStance, HayatoBooster, HayatoStanceBonus, Unk218_663,
            HayatoHPR, HayatoMPR, HayatoCr, HayatoBoss, Stance, BattoujutsuAdvance, Unk176_484, BlackHeartedCurse, EyeForEye, Unk176_489,
            Unk176_493, WaterSplashEventMarking, WaterSplashEventMarking2, WaterSplashEventWaterDripping, Unk188_539, YukiMusumeShoukan, Unk176_471, Unk176_471, SplitShot, Unk216_516,
            Unk218_703, Unk218_704, Unk218_705, Unk218_709
            );

    CharacterTemporaryStat(int bitPos) {
        this.bitPos = bitPos;
        this.val = 1 << (31 - bitPos % 32);
        this.pos = bitPos / 32;
    }

    public static CharacterTemporaryStat getByBitPos(int bitPos) {
        return Arrays.stream(values()).filter(v -> v.getBitPos() == bitPos).findAny().orElse(null);
    }

    public boolean isEncodeInt() {
        switch (this) {
            case CarnivalDefence:
            case SpiritLink:
            case DojangLuckyBonus:
            case SoulGazeCriDamR:
            case PowerTransferGauge:
            case ReturnTeleport:
            case ShadowPartner:
            case IncMaxDamage:
            case Unk176_493:
            case SetBaseDamage:
            case QuiverCatridge:
            case ImmuneBarrier:
            case NaviFlying:
            case Dance:
            case SetBaseDamageByBuff:
            case DotHealHPPerSecond:
            case Magnet:
            case MagnetArea:
            case BlitzShield:
            case CrystalChargeMax:
            case BattlePvPRyudeSword:
            case OmegaBlaster:
            case RWBarrier:
            case IndieKeyDownTime:
            case DivineEcho:
            case EnergyCharged:
            case DashSpeed:
            case DashJump:
            case RideVehicle:
            case PartyBooster:
            case GuidedBullet:
            case Undead:
            case RideVehicleExpire:
            case AranSmashSwing:
            case VampDeath:
            case ProtectiveShield:
                return true;
            default:
                return false;
        }
    }

    public static boolean containsAllEncode4CTS(Set<CharacterTemporaryStat> ctsList) {
        return ctsList.contains(RideVehicleExpire) || ctsList.contains(RideVehicle) || ctsList.contains(RWBarrier) || ctsList.contains(SoulGazeCriDamR);
    }

    public boolean isIndie() {
        return ordinal() < IndieStatCount.ordinal();
    }

    public boolean isNotRemovedOnDeath() {
        switch (this) {
            case RWCylinder:
            case SurplusSupply:
            case SealedRuneCooltime:
            case HeavensDoorCooltime:
            case HolyMagicShellCooltime:
            case SkillCooltime:
                return true;
        }

        return false;
    }

    public boolean isProtectiveShield() {
        switch (this) {
            case BlitzShield:
            case ProtectiveShield:
            case IndieProtectiveShield:
                return true;
        }

        return false;
    }

    public boolean isMovingEffectingStat() {
        switch (this) {
            case Speed:
            case Jump:
            case Stun:
            case Weakness:
            case Slow:
            case Morph:
            case Ghost:
            case BasicStatUp:
            case Attract:
            case DashSpeed:
            case DashJump:
            case Flying:
            case Frozen:
            case Frozen2:
            case Lapidification:
            case IndieSpeed:
            case IndieJump:
            case KeyDownMoving:
            case Mechanic:
            case Magnet:
            case MagnetArea:
            case VampDeath:
            case VampDeathSummon:
            case GiveMeHeal:
            case DarkTornado:
            case NewFlying:
            case NaviFlying:
            case UserControlMob:
            case Dance:
            case SelfWeakness:
            case ShadowSpear:
            case BattlePvPLeeMalNyunScaleUp:
            case TouchMe:
            case IndieForceSpeed:
            case IndieForceJump:
            case RideVehicle:
            case RideVehicleExpire:
            case EtherealForm:
            case MeltDown:
            case BattlePvPWonkyAttack:
            case BattlePvPWonkyHeal:
            case EnergyCharged:
                return true;
            default:
                return false;
        }
    }

    public int getVal() {
        return val;
    }

    public int getPos() {
        return pos;
    }

    public int getOrder() {
        return ORDER.indexOf(this);
    }

    public int getRemoteOrder() {
        return REMOTE_ORDER.indexOf(this);
    }

    public boolean isRemoteEncode4() {
        switch (this) {
            case NoBulletConsume:
            case RespectPImmune:
            case RespectMImmune:
            case DefenseAtt:
            case DefenseState:
            case MagicShield:
            case PyramidEffect:
            case OmegaBlaster:
            case ImmuneBarrier:
            case FullSoulMP:
            case Dance:
            case SpiritGuard:
            case MastemasMark:
            case KinesisPsychicEnergeShield:
            case AdrenalinBoost:
            case RWBarrier:
            case Unk188_460:
            case RWMagnumBlow:
            case DivineEcho:
            case RhoAias:
            case PsychicTornado:
            case MahasFury:
            case ManaOverload:
            case Unk199_521:
            case Unk176_493:
            case WaterSplashEventMarking:
            case WaterSplashEventMarking2:
            case Unk188_539:
            case YukiMusumeShoukan:
            case Unk176_471:
                return true;
            default:
                return false;
        }
    }

    public boolean isRemoteEncode1() {
        switch (this) {
            case Speed:
            case ComboCounter:
            case WorldReaver:
            case Shock:
            case Team:
            case OnCapsule:
            case KillingPoint:
            case PinkbeanRollingGrade:
            case ReturnTeleport:
            case FireBomb:
            case SurplusSupply:
                return true;
            default:
                return false;
        }
    }

    public boolean isNotEncodeReason() {
        switch (this) {
            case Speed:
            case ComboCounter:
            case WorldReaver:
            case ElementalCharge:
            case Shock:
            case Team:
            case UnionWealth:
            case NoBulletConsume:
            case RespectPImmune:
            case RespectMImmune:
            case DefenseAtt:
            case DefenseState:
            case MagicShield:
            case OnCapsule:
            case PyramidEffect:
            case KillingPoint:
            case PinkbeanRollingGrade:
            case StackBuff:
            case SurplusSupply:
            case ImmuneBarrier:
            case AdrenalinBoost:
            case RWBarrier:
            case Unk188_460:
            case RWMagnumBlow:
            case PsychicTornado:
            case MahasFury:
            case ManaOverload:
            case WaterSplashEventMarking:
            case WaterSplashEventMarking2:
            case Unk188_539:
            case YukiMusumeShoukan:
            case Unk176_471:
                return true;
            default:
                return false;
        }
    }

    public boolean isNotEncodeAnything() {
        switch (this) {
            case DarkSight:
            case SoulArrow:
            case DojangInvincible:
            case Flying:
            case Revive:
            case BeastFormDamageUp:
            case BlessingArmor:
            case BlessingArmorIncPAD:
            case HolyMagicShell:
            case VengeanceOfAngel:
            case UserControlMob:
            case SwordOfLight:
            case Unk205_591:

            case FullSoulMP: // uses r -> x instead of n -> r
            case None:
                return true;
            default:
                return isSeperatedDuplicate();
        }
    }

    @Override
    public int compare(CharacterTemporaryStat o1, CharacterTemporaryStat o2) {
        if (o1.getPos() < o2.getPos()) {
            return -1;
        } else if (o1.getPos() > o2.getPos()) {
            return 1;
        }
        // hacky way to circumvent java not having unsigned ints
        int o1Val = o1.getVal();
        if (o1Val == 0x8000_0000) {
            o1Val = Integer.MAX_VALUE;
        }
        int o2Val = o2.getVal();
        if (o2Val == 0x8000_0000) {
            o2Val = Integer.MAX_VALUE;
        }

        if (o1Val > o2Val) {
            // bigger value = earlier in the int => smaller
            return -1;
        } else if (o1Val < o2Val) {
            return 1;
        }
        return 0;
    }

    public int getBitPos() {
        return bitPos;
    }


    public static void main(String[] args) {
//        getBitPosByString("00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 80 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00 10 40 21 00 01 00 87 93 03 00 87 00 00 00 00 00 00 00 00 00 00 00"
//        );
        changeCts();
    }

    private static void getBitPosByString(String str) {
        byte[] bArr = Util.getByteArrayByString(str);
        int[] iArr = new int[bArr.length / 4];
        for (int i = 0; i < bArr.length; i += 4) {
            if (i + 3 >= bArr.length) {
                break;
            }
            iArr[i / 4] |= bArr[i];
            iArr[i / 4] |= bArr[i + 1] << 8;
            iArr[i / 4] |= bArr[i + 2] << 16;
            iArr[i / 4] |= bArr[i + 3] << 24;
        }
        for (int i = 0; i < iArr.length; i++) {
            int mask = iArr[i];
            for (CharacterTemporaryStat cts : CharacterTemporaryStat.values()) {
                if (cts.getPos() == i && (cts.getVal() & mask) != 0) {
                    log.warn(String.format("Contains stat %s", cts.toString()));
                }
            }
        }
    }

    public boolean requiresDuplicate() {
        return this == AntiMagicShell || this == Unk199_521;
    }

    public boolean isSeperatedDuplicate() {
        switch (this) {
            case AntiMagicShellEx:
            case Unk199_521Ex:
                return true;
        }
        return false;
    }

    public CharacterTemporaryStat getDuplicateCts() {
        switch (this) {
            case AntiMagicShell:
                return AntiMagicShellEx;
            case Unk199_521:
                return Unk199_521Ex;
        }
        return null;
    }

    public CharacterTemporaryStat getOriginalFromDuplicate() {
        switch (this) {
            case AntiMagicShellEx:
                return AntiMagicShell;
            case Unk199_521Ex:
                return Unk199_521;
        }
        return null;
    }


    private static void changeCts() {
        File file = new File("D:\\Swordie\\Swordie\\src\\main\\java\\net\\swordie\\ms\\client\\character\\skills\\temp\\CharacterTemporaryStat.java");
        int change = 3;
        CharacterTemporaryStat checkOp = null;
        try (Scanner s = new Scanner(file)) {
            while (s.hasNextLine()) {
                String line = s.nextLine();
                if (line.contains(",") && line.contains("(")) {
                    String[] split = line.split("[()]");
                    String name = split[0];
                    if (!Util.isNumber(split[1])) {
                        System.out.println(line);
                        continue;
                    }
                    int val = Integer.parseInt(split[1]);
                    CharacterTemporaryStat ih = Arrays.stream(CharacterTemporaryStat.values()).filter(o -> o.toString().equals(name.trim())).findFirst().orElse(null);
                    if (ih != null) {
                        CharacterTemporaryStat start = TreasureHunt;
                        if (ih.ordinal() >= start.ordinal() && ih.ordinal() < WrathOfGods.ordinal()) {
                            if (line.contains("*")) {
                                checkOp = ih;
                            }
                            val += change;
                            System.out.println(String.format("%s(%d), %s", name, val, start == ih ? "// *" : ""));
                        } else {
                            System.out.println(line);
                        }
                    } else {
                        System.out.println(line);
                    }
                } else {
                    System.out.println(line);
                }
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        if (checkOp != null) {
            System.err.println(String.format("Current op (%s) contains a * (= updated). Be sure to check for overlap.", checkOp));
        }
    }
}
