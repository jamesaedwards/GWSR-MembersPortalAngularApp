export interface IStartRenewalResponseDTO {
    renewalSecurityCode: number;
    currentTarrifDescription: string;
    currentTarrifId: number;
    renewalDate: Date;
    baseRenewalRate: number;
    additonalAmounts: IAdditonalAmount[];
    totalRenewal: number;
    holders: IHolders;
    contactEmailAddress: string;
    autoRenewOn: boolean;
    autoRenewalStatusDescription: string;
    holderName: string
}
export interface IAdditonalAmount {
    description: string;
    amount: number;
    isGiftAidable: boolean;
}

export interface IHolders {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
}