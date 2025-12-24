package net.swordie.ms.client.dailies;

import net.swordie.ms.enums.DailyEntry;

public class AccountDailyEntries {
    private long id;

    //Default -1 so we know when to initialize them
    private int monsterParkEntries = -1;
    private int evoLabEntries = -1;
    private int dojoEntries = -1;
    private int pqEntries = -1;
    private int whipTheWhelpsQuest = -1;
    private int defeatGoldenWyvernQuest = -1;
    private int powerCrystalCount = -1;
    private int vanishingJourneyCount = -1;
    private int chuchuCount = -1;
    private int lacheleinCount = -1;
    private int arcanaCount = -1;
    private int morassCount = -1;
    private int esferaCount = -1;
    private int cerniumCount = -1;
    private int hotelArcusCount = -1;

    public AccountDailyEntries(){}

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getRemainingEntries(DailyEntry dailyEntry){
        switch (dailyEntry) {
            case MonsterPark :
                return monsterParkEntries;
            case EvoLab:
                return evoLabEntries;
            case Dojo:
                return dojoEntries;
            case PQ:
                return pqEntries;
            case WhipTheWhelps:
                return whipTheWhelpsQuest;
            case DefeatGoldenWyvern:
                return defeatGoldenWyvernQuest;
            case PowerCrystal:
                return powerCrystalCount;
            case VanishingJourney:
                return vanishingJourneyCount;
            case ChuChu:
                return chuchuCount;
            case Lachelein:
                return lacheleinCount;
            case Arcana:
                return arcanaCount;
            case Morass:
                return morassCount;
            case Esfera:
                return esferaCount;
            case Cernium:
                return cerniumCount;
            case HotelArcus:
                return hotelArcusCount;
        }
        return 0;
    }

    public void setRemainingEntries(DailyEntry dailyEntry, int remainingEntries) {
        switch (dailyEntry) {
            case MonsterPark :
                monsterParkEntries = remainingEntries;
                break;
            case EvoLab:
                evoLabEntries = remainingEntries;
                break;
            case Dojo:
                dojoEntries = remainingEntries;
                break;
            case PQ:
                pqEntries = remainingEntries;
                break;
            case WhipTheWhelps:
                whipTheWhelpsQuest = remainingEntries;
                break;
            case DefeatGoldenWyvern:
                defeatGoldenWyvernQuest = remainingEntries;
                break;
            case PowerCrystal:
                powerCrystalCount = remainingEntries;
                break;
            case VanishingJourney:
                vanishingJourneyCount = remainingEntries;
                break;
            case ChuChu:
                chuchuCount = remainingEntries;
                break;
            case Lachelein:
                lacheleinCount = remainingEntries;
                break;
            case Arcana:
                arcanaCount = remainingEntries;
                break;
            case Morass:
                morassCount = remainingEntries;
                break;
            case Esfera:
                esferaCount = remainingEntries;
                break;
            case Cernium:
                cerniumCount = remainingEntries;
                break;
            case HotelArcus:
                hotelArcusCount = remainingEntries;
                break;
        }
    }
}
