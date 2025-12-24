package net.swordie.ms;

import net.swordie.ms.util.Util;
import org.junit.Assert;
import org.junit.Test;

import java.time.OffsetDateTime;

/**
 * Created on 08/06/2021.
 *
 * @author Asura
 */
public class UtilTest {

    public void setup() {

    }

    @Test
    public void getSecondsTill_1Day_difference() {
        OffsetDateTime now = OffsetDateTime.now();
        var zoneOffset = now.getOffset();

        OffsetDateTime nextDay = now.plusDays(1);
        OffsetDateTime startToday = OffsetDateTime.of(now.getYear(), now.getMonthValue(), now.getDayOfMonth(), 0, 0, 0, 0, zoneOffset);
        OffsetDateTime startNextDay = OffsetDateTime.of(nextDay.getYear(), nextDay.getMonthValue(), nextDay.getDayOfMonth(), 0, 0, 0, 0, zoneOffset);

        Assert.assertEquals(24 * 60 * 60, Util.getSecondsTill(startToday, startNextDay));
    }

    @Test
    public void getSecondsTill_2Hours_difference() {
        OffsetDateTime from = OffsetDateTime.now();
        OffsetDateTime to = from.plusHours(2);

        Assert.assertEquals(2 * 60 * 60, Util.getSecondsTill(from, to));
    }

    @Test
    public void getSecondsTill_3Days_2Hours_36Minutes_difference() {
        OffsetDateTime from = OffsetDateTime.now();
        OffsetDateTime to = from.plusDays(3).plusHours(2).plusMinutes(36);

                                         // 3 Days           2 Hrs         36 Min
        Assert.assertEquals((3 * 24 * 60 * 60) + (2 * 60 * 60) + (36 * 60), Util.getSecondsTill(from, to));
    }
}
