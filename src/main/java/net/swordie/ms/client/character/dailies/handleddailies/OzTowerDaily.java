package net.swordie.ms.client.character.dailies.handleddailies;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.dailies.DailiesManager;
import net.swordie.ms.client.character.dailies.DailyType;
import net.swordie.ms.client.character.dailies.IDaily;
import net.swordie.ms.constants.QuestConstants;

/**
 * Created on 06/07/2021.
 *
 * @author Asura
 */
public class OzTowerDaily implements IDaily {

    private static final DailyType dailyType = DailyType.OzTower;

    @Override
    public void reset(Char chr, DailiesManager dailiesManager) {
        var q = chr.getQuestManager().getOrCreateQuestById(QuestConstants.TOWER_OF_OZ_DAILY_CLEARS);
        q.setProperty("tf", 0);

        // Update the Last time updated
        dailiesManager.update(dailyType, chr);
    }
}
