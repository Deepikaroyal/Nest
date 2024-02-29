export declare class CreateUserSettingDto {
    receiveNotifications?: boolean;
    receiveEmails?: boolean;
    receiveSMS?: boolean;
}
export declare class CreateUserDto {
    username: string;
    displayName?: string;
    settings?: CreateUserSettingDto;
}
