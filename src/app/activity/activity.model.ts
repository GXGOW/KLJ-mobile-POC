export class Activity {
    private _name: string;
    private _description: string;
    private _organisedBy: [string];
    private _date: Date;
    private _location: string;
    private _attendees: [string];

    constructor(name: string, description: string) {
        this._name = name;
        this._description = description;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }
}
