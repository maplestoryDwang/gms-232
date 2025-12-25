package net.swordie.orm.migration;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.swordie.ms.util.FileTime;

/**
 * Created on 02/06/2021.
 *
 * @author Asura
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MigrationVersion {
    private int version;
    private String scriptName;
    private FileTime executedAt;
}
