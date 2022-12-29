import { IBasicPersonDetails } from "./IBasicPersonDetails";

export interface ICreateMembershipDTO{
    personId: string;
    membershipTarrifId: number;
    giftAidDeclaration: boolean;
    additionalDonation: number;
    selectedPaymentMethod: number;
    repeatDonationOnRenewal: boolean;
  jointHolders: IBasicPersonDetails[];
  cornishman: number;
}
