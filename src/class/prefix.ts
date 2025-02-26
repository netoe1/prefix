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

  public getStatusWithFullDate(statuslog: string): string {
    if (!this.inited) {
      throw new Error("[prefix-err]: The object isn't created.");
    }

    if (!this.programName || this.programName.trim().length === 0) {
      throw new Error("[prefix-err]: Invalid string for ProgramName!");
    }

    const formattedStatusLog = statuslog.trim().toLowerCase();

    const today = new Date();
    let hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    const ampm = hours < 12 ? "AM" : "PM";

    hours = hours % 12;
    hours = hours ? hours : 12; 
    const detailedDate = `${today.getFullYear()}-${(today.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")} ${hours
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")} ${ampm}`;

    return `[${this.programName}-${formattedStatusLog}][${detailedDate}]:`;
  }
}
