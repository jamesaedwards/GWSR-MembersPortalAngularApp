export interface IAppealDTO{
    id: number;
    name: string;
    summary: string;
    detailsHTML: string;
    startDate: Date;
    endDate: Date;
    target: number;
    currentTargetReachPercent: number;
    imagePath: string;
}