export class Activity {
    private _title: string;
    private _description: string;
    private _organisedBy: [string];
    private _date: Date;
    private _location: string;
    private _attendees: [string];

    constructor(title: string, description: string) {
        this._title = title;
        this._description = description;
    }

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }
}
