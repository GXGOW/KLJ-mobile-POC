export class Activity {
    private _id: string;
    private _title: string;
    private _description: string;
    private _organisedBy: [string];
    private _date: Date;
    private _location: string;
    private _attendees: [string];

    static fromJSON(json): Activity {
        const act = new Activity(json.title, json.description);
        act._id = json._id;
        return act;
    }

    constructor(title: string, description: string) {
        this._title = title;
        this._description = description;
    }

    get id(): string {
        return this._id;
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

    toJSON() {
        return {
            _id: this._id,
            title: this._title,
            description: this._description
        };
    }
}
