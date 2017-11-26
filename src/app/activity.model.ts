export class Activity {
    private _id: string;
    private _title: string;
    private _description: string;
    private _organisedBy: [string];
    private _date: Date;
    private _location: string;
    private _attendees: [string];

    static fromJSON(json): Activity {
        const act = new Activity(json.title, json.description, json.date);
        act._id = json._id;
        return act;
    }

    constructor(title: string, description: string, date?: Date, organisedBy?: [string], location?: string) {
        this._title = title;
        this._description = description;
        this._date = date;
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

    get dateShort(): string {
        const tempdate = new Date(this._date);
        if (tempdate) {
            const day = tempdate.getDate();
            const month = tempdate.toLocaleString('nl-BE', { month: 'long' }).substr(0, 3);
            return day + ' ' + month;
        } else { return ''; };
    }

    set date(date: Date) {
        this._date = date;
    }

    get organisedBy(): [string] {
        return this._organisedBy;
    }

    set organisedBy(organisedBy) {
        this._organisedBy = organisedBy;
    }

    get location(): string {
        return this._location;
    }

    set location(location: string) {
        this._location = location;
    }

    toJSON() {
        return {
            _id: this._id,
            title: this._title,
            description: this._description
        };
    }
}
