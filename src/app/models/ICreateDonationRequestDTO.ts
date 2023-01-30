import { IPostAddress } from "./IPostAddress";

export interface ICreateDonationRequestDTO{
    firstName: string;
    lastName: string;
    email: string;
    address: IPostAddress | undefined;
    isExistingMember: boolean;
    selectedPaymentMethod: number;
    donationAmount: number;
    canGiftAid: boolean | undefined;
    appealId: number;
    matchedPersonGuid: string | undefined;
}