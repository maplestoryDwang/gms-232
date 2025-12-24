package net.swordie.orm.migration;

import net.swordie.ms.util.FileTime;

/**
 * Created on 02/06/2021.
 *
 * @author Asura
 */
public class MigrationVersion {
    private int version;
    private String scriptName;
    private FileTime executedAt;

    public MigrationVersion() {
    }

    public MigrationVersion(int version, String scriptName, FileTime executedAt) {
        this.version = version;
        this.scriptName = scriptName;
        this.executedAt = executedAt;
    }

    public int getVersion() {
        return version;
    }

    public void setVersion(int version) {
        this.version = version;
    }

    public String getScriptName() {
        return scriptName;
    }

    public void setScriptName(String scriptName) {
        this.scriptName = scriptName;
    }

    public FileTime getExecutedAt() {
        return executedAt;
    }

    public void setExecutedAt(FileTime executedAt) {
        this.executedAt = executedAt;
    }
}
