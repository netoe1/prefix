import { IPrefix } from "../types/prefix";

export class Prefix implements IPrefix {
  private programName: string;
  private inited: boolean;

  constructor(programName: string) {
    this.inited = true;
    this.programName = programName.trim();
  }

  public setProgramName(programName: string): void {
    this.programName = programName.trim();
  }

  public getStatus(statuslog: string): string {
    if (!this.inited) {
      throw new Error("[prefix-err]: The object isn't created.");
    }

    if (!this.programName || this.programName.trim().length === 0) {
      throw new Error("[prefix-err]: Invalid string for ProgramName!");
    }

    const formattedStatusLog = statuslog.trim().toLowerCase();

    return `[${this.programName}-${formattedStatusLog}]: `;
  }
}
