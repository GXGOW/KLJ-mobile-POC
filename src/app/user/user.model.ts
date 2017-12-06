export class User {
    private _username: string;
    private _firstname: string;
    private _lastname: string;
    private _role: string;
    private _address: string;
    private _phoneNumber: string;
    private _birthday: Date;

    static fromJSON(json): User {
        const user = new User(json.username, json.firstname, json.lastname, json.role, json.address, json.phoneNumber, json.birthday);
        return user;
    }

    constructor(username: string, firstname: string, lastname: string, role: string, address: string, phoneNumber: string, birthday: Date) {
        this._username = username;
        this._firstname = firstname;
        this._lastname = lastname;
        this._role = role;
        this._address = address;
        this._phoneNumber = phoneNumber;
        this._birthday = birthday;
    }

    get username(): string {
        return this._username;
    }

    get firstname(): string {
        return this._firstname;
    }

    get lastname(): string {
        return this._lastname;
    }

    get role(): string {
        return this._role;
    }

    get address(): string {
        return this._address;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    get birthday(): string {
        return new Date(this._birthday).toLocaleDateString('nl-BE');
    }

}
