package net.swordie.ms.enums;

import net.swordie.ms.constants.QuestConstants;

public enum DailyEntry {
    MonsterPark(1, 10, "monsterparkentries"),
    EvoLab(1, 3, "evolabentries"),
    Dojo(1, 3, "dojoentries"),
    PQ(7, 30, "pqentries"),
    WhipTheWhelps(1, 1, "whipthewhelpsquest"),
    DefeatGoldenWyvern(1, 1, "defeatgoldenwyvernquest"),
    PowerCrystal(7, QuestConstants.POWER_CRYSTAL_WEEKLY_COUNT, "powercrystal"),
    VanishingJourney(7,QuestConstants.VANISHING_JOURNEY_WEEKLY_AMOUNT, "vanishingjourneyentries"),
    ChuChu(7, QuestConstants.CHU_CHU_WEEKLY_AMOUNT, "chuchuentries"),
    Lachelein(7, QuestConstants.LACHELEIN_WEEKLY_AMOUNT, "lacheleinentries"),
    Arcana(7, QuestConstants.ARCANA_WEEKLY_AMOUNT, "arcanaentries"),
    Morass(7, QuestConstants.MORASS_WEEKLY_AMOUNT, "morassentries"),
    Esfera(7, QuestConstants.ESFERA_WEEKLY_AMOUNT, "esferaentries"),
    Cernium(7, QuestConstants.CERNIUM_WEEKLY_AMOUNT, "cerniumentries"),
    HotelArcus(7, QuestConstants.HOTEL_ARCUS_WEEKLY_AMOUNT, "hotelarcusentries")
    ;

    private final int daysPerReset;
    private final int entriesPerReset;
    private final String daoString;

    DailyEntry(int daysPerReset, int entriesPerReset, String daoString){
        this.daysPerReset = daysPerReset;
        this.entriesPerReset = entriesPerReset;
        this.daoString = daoString;
    }

    public int getEntriesPerReset() {
        return entriesPerReset;
    }

    public int getDaysPerReset() {
        return daysPerReset;
    }

    public String getDaoString() {
        return daoString;
    }
}
