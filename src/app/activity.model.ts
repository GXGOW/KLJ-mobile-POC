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

    constructor(title: string, description: string, date?: Date, time?: string, organisedBy?: [string], location?: string) {
        this._title = title;
        this._description = description;
        this._date = date;
        if (this._date) {
            const temptime = time.split(':');
            this._date.setHours(parseInt(temptime[0], 10), parseInt(temptime[1], 10));
        }
        this._organisedBy = organisedBy;
        this._location = location;
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

    get date(): Date {
        return this._date;
    }

    set date(date: Date) {
        this._date = date;
    }

    toJSON() {
        return {
            _id: this._id,
            title: this._title,
            description: this._description
        };
    }
}
