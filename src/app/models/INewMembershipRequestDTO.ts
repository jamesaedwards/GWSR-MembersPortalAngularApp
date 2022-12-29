import { IBasicPersonDetails } from "./IBasicPersonDetails";
import { ICreateMembershipDTO } from "./ICreateMembershipDTO";
import { IPostAddress } from "./IPostAddress";

export interface INewMembershipRequestDTO{
    person: IBasicPersonDetails;
    address: IPostAddress;
    membership: ICreateMembershipDTO
}