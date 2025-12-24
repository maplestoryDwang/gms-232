package net.swordie.ms.client.character.commerce.voyage;

import net.swordie.ms.client.character.commerce.voyage.voyagefield.VoyageFieldType;

/**
 * Created on 23/05/2021.
 *
 * @author Asura
 */
public class VoyageFieldInfo {
    public VoyageFieldType type;
    public int cost, basicIncome, bonusIncome;
    public int duration, shortenedDuration;
    public int voyageId, voyageCompletedAmount;
    public int mobKills;
    public int hordeTimerSec;
    public boolean hideHordeTimer;


    public VoyageFieldInfo(VoyageFieldType type) {
        this.type = type;
    }
}
